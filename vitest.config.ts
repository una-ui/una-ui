import { configDefaults, defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    // Claude Code keeps other sessions' worktrees under `.claude/worktrees`,
    // inside the repo, so vitest's default glob found every test file in them
    // and ran each against a `tsconfig` whose `.nuxt/` extends target had
    // never been generated there
    exclude: [...configDefaults.exclude, '**/.claude/**'],
  },
})
