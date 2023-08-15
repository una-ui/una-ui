export default [
  {
    getCSS: () => `
        html {
          font-size: var(--font-size, 16px);
          background-color: var(--c-background);
          color: var(--c-foreground);
        }

        html.dark {
          color-scheme: dark;
        }

        ::-moz-selection {
          background: var(--c-bg-selection);
        }

        ::selection {
          background: var(--c-bg-selection);
        }

        *:focus-visible {
          outline: 2px solid rgb(var(--c-primary)); /* 2 */
          border-radius: 0.25rem; /* 1 */
          outline-offset: 0.10rem; /* 1 */
        }

        * {
          -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        }
        `,
  },
]
