import { pickTextColorBasedOnBgColorSimple } from "./utils";

const styles = (color: string): string => {
  const bgInverseTextColor = pickTextColorBasedOnBgColorSimple(color);

  return `
    :root {
      --bg-color: ${color};
      --code-color: ${bgInverseTextColor};
      --heading-font-size: 2.5em;
      --line-height: 140%;
      --link-color: black;
      --link-hover-bg: rgba(255, 255, 255, 0.7);
      --padding: 0.75rem;
      --panel-bg: rgba(255, 255, 255, 0.4);
      --panel-border-radius: 0.3rem;
      --cope-visual-fix-border-radius: 0.2rem;
      --panel-frame-color: #000;
      --text-color: ${bgInverseTextColor};
      --th-color: #fff;
    }

    html {
      font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      min-height: 100%;
      background: var(--bg-color);
      margin: auto;
      max-width: 900px;
      padding: 1em;
      color: var(--text-color);
    }

    a {
      color: var(--link-color);
    }

    a:hover {
      background: var(--link-hover-bg);
    }

    h1 {
      font-size: var(--heading-font-size);
    }

    h2 {
      border-bottom: 3px solid var(--panel-frame-color);
    }

    code {
      font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, Courier, monospace;
      background: var(--panel-bg);
      color: var(--code-color);
      word-wrap: break-word;
    }

    ul li, ol li {
      line-height: var(--line-height);
    }

    table {
      border-collapse: collapse;
      background: var(--panel-bg);
    }

    th, td {
      border: 1px solid var(--panel-frame-color);
      padding: var(--padding);
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
      background: rgba(255, 255, 255, 0.2);
      border: none;
      color: #fff;
      padding: 5px 10px;
      border-radius: 5px;
      cursor: pointer;
      transition: background 0.3s;
    }

    .inline-code {
      background-color: var(--panel-bg);
      border-radius: var(--panel-border-radius);
      padding: var(--panel-border-radius);
    }

    .live-preview-container {
      flex: 1;
      font-size: 0.88rem;
      background-color: var(--panel-bg);
      padding: 2em 1em;
      border-top-left-radius: var(--cope-visual-fix-border-radius);
      border-top-right-radius: var(--cope-visual-fix-border-radius);
      border-bottom: 2px solid var(--bg-color);
    }

    .live-editor-container {
      flex: 1;
      font-size: 0.88rem;
      background-color: black;
      padding: 1em;
      border-top: 2px solid var(--bg-color);
      border-bottom-left-radius: var(--cope-visual-fix-border-radius);
      border-bottom-right-radius: var(--cope-visual-fix-border-radius);
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
