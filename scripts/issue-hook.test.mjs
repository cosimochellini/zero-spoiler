// @vitest-environment node
import { mkdtempSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import path from 'node:path'
import { afterAll, describe, expect, it } from 'vitest'

import { check, problems } from './issue-hook.mjs'

const FULL = ['type:bug', 'area:ui', 'status:ready', 'priority:p2', 'size:s']
const LABELS = `--label ${FULL.join(',')}`
const BLOCKED = `--label ${FULL.with(2, 'status:blocked').join(',')}`
const NO_LABELS = [
  'no type: label',
  'no area: label',
  'no status: label',
  'no priority: label',
  'no size: label',
]
const UNBLOCKS =
  'status:blocked needs an "Unblocks at: ch. N" or "Unblocks at: #N" line in the body'

const dir = mkdtempSync(path.join(tmpdir(), 'issue-hook-'))
writeFileSync(path.join(dir, 'body.md'), 'Waits.\n\nUnblocks at: #1\n')
writeFileSync(path.join(dir, 'plain.md'), 'Waits.\n')
afterAll(() => rmSync(dir, { recursive: true }))

/**
 * A loop whose body file the hook cannot expand.
 * @param {string} labels The label flag.
 * @returns {string} The command.
 */
const loop = (labels) =>
  `for f in a b; do gh issue create -F ${dir}/$f.md ${labels}; done`

describe('the gh issue create hook', () => {
  it('checks only commands that run gh issue create', () => {
    expect(check('gh issue create -t x', '/')).toStrictEqual(NO_LABELS)
    expect(check('cd wt && gh issue create -t x', '/')).toStrictEqual(NO_LABELS)
    expect(check('rtk gh issue create -t x', '/')).toStrictEqual(NO_LABELS)
    expect(check('/opt/homebrew/bin/gh issue create -t x', '/')).toStrictEqual(
      NO_LABELS,
    )
    expect(check('grep -rn "gh issue create" .agents', '/')).toStrictEqual([])
    expect(check('git commit -m "x; gh issue create"', '/')).toStrictEqual([])
    expect(check('echo hi # x; gh issue create', '/')).toStrictEqual([])
    expect(check('echo $(date) gh issue create', '/')).toStrictEqual([])
    expect(check('gh issue create --help', '/')).toStrictEqual([])
    expect(check('gh issue list -l type:bug', '/')).toStrictEqual([])
  })

  it('skips a heredoc body that mentions the command', () => {
    expect(
      check(
        `cat > body.md <<'EOF'\nRun this:\ngh issue create -t x\nEOF\nwc -l body.md`,
        dir,
      ),
    ).toStrictEqual([])
  })

  it('reads repeated, comma-separated and quoted labels', () => {
    expect(
      check(
        `gh issue create -t x -l type:bug,area:ui --label "status:ready" --label='priority:p2' -l size:s`,
        '/',
      ),
    ).toStrictEqual([])
  })

  it('reads the labels of each create alone', () => {
    expect(
      check('gh issue list -l type:bug && gh issue create -l area:ui', '/'),
    ).toStrictEqual(problems(['area:ui'], ''))
    expect(
      check(`gh issue create ${LABELS}; gh issue create ${LABELS}`, '/'),
    ).toStrictEqual([])
    expect(check(`gh issue create ${LABELS};echo done`, '/')).toStrictEqual([])
  })

  it('reads a create wrapped in a command substitution in a loop', () => {
    expect(
      check(
        `for t in a b; do n=$(gh issue create -t "$t" ${LABELS},scope:game-of-thrones); echo "$n"; done`,
        '/',
      ),
    ).toStrictEqual([])
  })

  it('finds a relative body file after a cd or in the hook cwd', () => {
    const { base } = path.parse(dir)
    expect(
      check(`cd ${dir} && gh issue create -F body.md ${BLOCKED}`, '/'),
    ).toStrictEqual([])
    expect(
      check(
        `cd ${base}; gh issue create --body-file body.md ${BLOCKED}`,
        tmpdir(),
      ),
    ).toStrictEqual([])
    expect(check(`gh issue create -F plain.md ${BLOCKED}`, dir)).toStrictEqual([
      UNBLOCKS,
    ])
  })

  it('names a body file it cannot find', () => {
    expect(check(`gh issue create -F gone.md ${BLOCKED}`, dir)).toStrictEqual([
      `body file not found: ${path.join(dir, 'gone.md')}`,
    ])
  })

  it('refuses a directory or an empty path as a body file', () => {
    expect(check(`gh issue create -F ${dir} ${LABELS}`, '/')).toStrictEqual([
      `body file not found: ${dir}`,
    ])
    expect(check(`gh issue create -F "" ${LABELS}`, dir)).toStrictEqual([
      `body file not found: ${dir}`,
    ])
  })

  it('expands a variable assigned earlier in the call', () => {
    expect(
      check(`D=${dir}; gh issue create -F $D/gone.md ${LABELS}`, '/'),
    ).toStrictEqual([`body file not found: ${path.join(dir, 'gone.md')}`])
    expect(
      check(`D=${dir} && gh issue create -F "\${D}/body.md" ${BLOCKED}`, '/'),
    ).toStrictEqual([])
    expect(
      check(`cd ${dir} && gh issue create -F "$PWD/body.md" ${BLOCKED}`, '/'),
    ).toStrictEqual([])
    expect(
      check(`D=~/issue-hook-gone; gh issue create -F $D/b.md ${LABELS}`, '/'),
    ).toStrictEqual([
      `body file not found: ${process.env.HOME}/issue-hook-gone/b.md`,
    ])
  })

  it('reads a body file the same call writes from the call', () => {
    const write = `S=${dir}; cat > $S/new.md <<'EOF'\nWaits.\nUnblocks at: #1\nEOF\n`
    expect(
      check(`${write}gh issue create -F $S/new.md ${BLOCKED}`, '/'),
    ).toStrictEqual([])
    expect(
      check(
        `${write.replace('Unblocks', 'Opens')}gh issue create -F $S/new.md ${BLOCKED}`,
        '/',
      ),
    ).toStrictEqual([UNBLOCKS])
    expect(
      check(
        `cat > plain.md <<'EOF'\nUnblocks at: #1\nEOF\ngh issue create -F plain.md ${BLOCKED}`,
        dir,
      ),
    ).toStrictEqual([])
  })

  it('lets a body path or a label it cannot expand through', () => {
    expect(check(loop(LABELS), '/')).toStrictEqual([])
    expect(check(loop(BLOCKED), '/')).toStrictEqual([UNBLOCKS])
    expect(
      check(
        `for t in type:bug type:docs; do gh issue create --label "$t,area:ui,status:ready,priority:p2,size:s"; done`,
        '/',
      ),
    ).toStrictEqual([])
  })

  it('follows cd the way the shell does', () => {
    const body = `gh issue create -F body.md ${BLOCKED}`
    expect(check(`(cd /) && ${body}`, dir)).toStrictEqual([])
    expect(check(`x=$(cd / && pwd); ${body}`, dir)).toStrictEqual([])
    expect(check(`if true; then cd ${dir}; fi; ${body}`, '/')).toStrictEqual([])
    expect(check(`{ cd ${dir}; }; ${body}`, '/')).toStrictEqual([])
    expect(check(`cd -P ${dir} && ${body}`, '/')).toStrictEqual([])
    expect(check(`cd -- ${dir} && ${body}`, '/')).toStrictEqual([])
  })

  it('treats the directory as unknown after cd -, pushd or popd', () => {
    const gone = `gh issue create -F gone.md ${LABELS}`
    expect(check(`pushd /tmp && ${gone}`, dir)).toStrictEqual([])
    expect(check(`popd && ${gone}`, dir)).toStrictEqual([])
    expect(check(`cd - && ${gone}`, dir)).toStrictEqual([])
  })

  it('reads arithmetic, odd heredocs and ANSI-C quotes as the shell does', () => {
    expect(check('echo $((1 << 2))\ngh issue create\n2', '/')).toStrictEqual(
      NO_LABELS,
    )
    expect(check('cat <<$X\ngh issue create\n', '/')).toStrictEqual([])
    expect(check('cat <<\ngh issue create\n', '/')).toStrictEqual([])
    expect(
      check(String.raw`echo $'it\'s; gh issue create'`, '/'),
    ).toStrictEqual([])
    expect(check('gh issue \\\n  create', '/')).toStrictEqual(NO_LABELS)
  })

  it('ends on unterminated input', () => {
    for (const command of [
      '',
      'gh issue create "status:ready',
      "gh issue create 'x",
      'gh issue create $(echo',
      'gh issue create `echo',
      'gh issue create ${X',
      'cat <<EOF\ngh issue create',
    ]) {
      expect(check(command, '/')).toBeInstanceOf(Array)
    }
  })

  it('accepts one label per group', () => {
    expect(problems(FULL, '')).toStrictEqual([])
  })

  it('accepts a scope label on top of the five groups', () => {
    expect(problems([...FULL, 'scope:one-piece'], '')).toStrictEqual([])
  })

  it('names missing, doubled and unknown labels', () => {
    expect(
      problems(['type:bug', 'type:docs', 'area:nowhere', 'size:s'], ''),
    ).toStrictEqual([
      'unknown label "area:nowhere"',
      'more than one type: label',
      'no status: label',
      'no priority: label',
    ])
  })

  it('lets an epic go without a size', () => {
    expect(
      problems(['type:epic', 'area:art', 'status:ready', 'priority:p2'], ''),
    ).toStrictEqual([])
  })

  it('asks a blocked issue for its Unblocks at line', () => {
    const blocked = FULL.with(2, 'status:blocked')
    expect(problems(blocked, 'Waits.')).toHaveLength(1)
    expect(problems(blocked, 'Waits.\nUnblocks at: ch. 1178\n')).toStrictEqual(
      [],
    )
  })
})
