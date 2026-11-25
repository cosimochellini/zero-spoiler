#!/bin/bash
# Claude Code SessionStart hook: puts the Node that .nvmrc names first on PATH
# for the session's Bash commands, through $CLAUDE_ENV_FILE. An agent shell
# that never loads nvm otherwise runs whatever Node comes first.
#
# Does nothing when there is no .nvmrc, the running Node already matches it,
# nvm is not installed or that version is not (no `nvm install`, no network).
# Always exits 0, so it never fails the session.

dir="${CLAUDE_PROJECT_DIR:-$PWD}"
[ -n "$CLAUDE_ENV_FILE" ] && [ -f "$dir/.nvmrc" ] || exit 0

want="$(tr -d '[:space:]' <"$dir/.nvmrc")"
[ "$(node --version 2>/dev/null)" = "v${want#v}" ] && exit 0

nvm_sh="${NVM_DIR:-$HOME/.nvm}/nvm.sh"
[ -s "$nvm_sh" ] || exit 0
# shellcheck source=/dev/null
. "$nvm_sh" --no-use >/dev/null 2>&1 || exit 0
cd "$dir" && nvm use --silent >/dev/null 2>&1 && [ -n "$NVM_BIN" ] || exit 0

# $PATH stays literal: Claude Code runs this line before each command.
printf 'export PATH=%q:"$PATH"\n' "$NVM_BIN" >>"$CLAUDE_ENV_FILE"
exit 0
