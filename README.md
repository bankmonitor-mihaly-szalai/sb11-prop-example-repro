# Server docgen drops per-prop `@example` tags

Minimal reproduction for Storybook 11.0.0-beta.3 (`@storybook/react-vite`, default server-side docgen).

`src/Stack.tsx` documents two props with `@example` tags. With server-side docgen they are missing from the
components manifest and from `storybook tools docs show` (and the MCP `docs-show` tool, which uses the same output).

```bash
npm install
npx storybook tools docs show --id stack --no-attach
```

Expected (what builder docgen with `react-docgen-typescript` returns):

```
  /**
    Space between children, from the spacing scale.
@example "4"
@example { initial: "2", md: "4" }
  */
  gap?: string | Record<string, string> = 0;
```

Actual:

```
  /** Space between children, from the spacing scale. */
  gap?: string | Record<string, string> | undefined = "0";
```
