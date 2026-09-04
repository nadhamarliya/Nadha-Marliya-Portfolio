import { Global, css } from '@emotion/react';
import { theme } from './theme';

export const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          min-width: 320px;

          font-family:
            Inter,
            system-ui,
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            sans-serif;

          background: ${theme.colors.background};
          color: ${theme.colors.text};

          -webkit-font-smoothing: antialiased;
        }

        h1,
        h2,
        h3,
        p {
          margin-top: 0;
        }

        h1,
        h2,
        h3 {
          color: ${theme.colors.text};
        }

        p {
          color: ${theme.colors.textMuted};
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        button,
        input,
        textarea {
          font: inherit;
        }

        ::selection {
          background: ${theme.colors.accent};
          color: white;
        }
      `}
    />
  );
};