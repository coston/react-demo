import { pickTextColorBasedOnBgColorSimple } from "./utils";

const styles = (themeColor: string): string => {
  const themeContrastingBWTextColor =
    pickTextColorBasedOnBgColorSimple(themeColor);

  // todo: make all styles dynamic based on the theme color
  return `
    :root {
      --theme-color: ${themeColor};
      --text-color: ${themeContrastingBWTextColor};
      --code-color: #fff;
      --code-bg-color: #000;
      --panel-frame-color: #000;
      --th-color: #fff;
      --heading-font-size: 2.5rem;
      --line-height: 140%;
      --link-color: black;
      --opaque-bg-strong: rgba(255, 255, 255, 0.7);
      --opaque-bg-medium: rgba(255, 255, 255, 0.4);
      --opaque-bg-light: rgba(255, 255, 255, 0.2);
      --lite-border-radius: 0.2rem;
      --panel-border-radius: 0.3rem;

    }

    html {
      font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      min-height: 100%;
      background: var(--theme-color);
      margin: auto;
      max-width: 900px;
      padding: 1em;
      color: var(--text-color);
    }

    a {
      color: var(--text-color);
    }

    a:hover {
      background: var(--opaque-bg-strong);
    }

    h1 {
      font-size: var(--heading-font-size);
    }

    h2 {
      border-bottom: 3px solid var(--panel-frame-color);
    }

    code {
      font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, Courier, monospace;
      background: var(--code-bg-color);
      color: var(--code-color);
      word-wrap: break-word;
    }

    ul li, ol li {
      line-height: var(--line-height);
    }

    table {
      border-collapse: collapse;
      background: var(--opaque-bg-medium);
    }

    th, td {
      border: 1px solid var(--panel-frame-color);
      padding: 0.75rem;
      text-align: left;
    }

    th {
      font-weight: bold;
      white-space: nowrap;
      background: var(--panel-frame-color);
      color: var(--th-color);
    }

    tr:first-of-type th:not(:last-child) {
      border-right-color: transparent;
    }

    tr:first-child th:first-child,
    tr:not(:first-child):not(:last-child) th {
      border-bottom-color: transparent !important;
    }

    .code-copy-button {
      position: absolute;
      top: 10px;
      right: 10px;
      background: var(--opaque-bg-light);
      border: none;
      color: var(--code-color);
      padding: 5px 10px;
      border-radius: 5px;
      cursor: pointer;
      transition: background 0.3s;
    }

    .inline-code {
      background-color: var(--code-bg-color);
      border-radius: var(--lite-border-radius);
     }

    .live-preview-container {
      flex: 1;
      font-size: 0.88rem;
      background-color: var(--opaque-bg-medium);
      padding: 2em 1em;
      border-top-left-radius: var(--lite-border-radius);
      border-top-right-radius: var(--lite-border-radius);
      border-bottom: 2px solid var(--theme-color);
    }

    .live-editor-container {
      flex: 1;
      font-size: 0.88rem;
      background-color: black;
      padding: 1em;
      border-top: 2px solid var(--theme-color);
      border-bottom-left-radius: var(--lite-border-radius);
      border-bottom-right-radius: var(--lite-border-radius);
    }

    .live-container {
      display: flex;
      flex-direction: column;
      border: 1px solid black;
      border-radius: var(--panel-border-radius);
    }

    .live-editor {
      background: black;
      whiteSpace: pre;
      overflow: scroll;
    }
`;
};

export default styles;
