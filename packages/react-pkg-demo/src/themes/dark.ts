import { PrismTheme } from "prism-react-renderer";

export const darkSyntaxTheme = {
  'code[class*="language-"]': {
    color: "var(--code-color)",
    background: "var(--code-bg-color)",
    lineHeight: "1.5",
    direction: "ltr",
    textAlign: "left",
    whiteSpace: "pre",
    wordSpacing: "normal",
    wordBreak: "normal",
    tabSize: "4",
    hyphens: "none",
  },
  'pre[class*="language-"]': {
    color: "var(--code-color)",
    background: "var(--code-bg-color)",
    lineHeight: "1.5",
    direction: "ltr",
    textAlign: "left",
    whiteSpace: "pre",
    wordSpacing: "normal",
    wordBreak: "normal",
    tabSize: "4",
    hyphens: "none",
    padding: "1em",
    margin: "0.5em 0",
    overflow: "auto",
    borderRadius: "0.3em",
  },
  comment: { color: "#546e7a" },
  prolog: { color: "#546e7a" },
  doctype: { color: "#546e7a" },
  cdata: { color: "#546e7a" },
  punctuation: { color: "#546e7a" },
  property: { color: "#c3e88d" },
  tag: { color: "#ff5370" },
  boolean: { color: "#f78c6c" },
  number: { color: "#f78c6c" },
  constant: { color: "#f78c6c" },
  symbol: { color: "#f78c6c" },
  selector: { color: "#c792ea" },
  "attr-name": { color: "#ffcb6b" },
  string: { color: "#c3e88d" },
  char: { color: "#82aaff" },
  builtin: { color: "#82aaff" },
  operator: { color: "#ff5370" },
  entity: { color: "#ff5370", cursor: "help" },
  url: { color: "#c792ea" },
  "attr-value": { color: "#c3e88d" },
  keyword: { color: "#c792ea" },
  regex: { color: "#f78c6c" },
  important: { color: "#c792ea", fontWeight: "bold" },
  variable: { color: "#f07178" },
  inserted: { color: "#c3e88d" },
  deleted: { color: "#ff5370" },
  italic: { fontStyle: "italic" },
  bold: { fontWeight: "bold" },
  namespace: { opacity: 0.7 },
};

export const monoDarkPrismTheme: PrismTheme = {
  plain: {
    color: "var(--code-color)", // theme color for text
    backgroundColor: "var(--code-bg-color)",
  },
  styles: [
    {
      types: [
        "prolog",
        "doctype",
        "cdata",
        "string",
        "boolean",
        "number",
        "symbol",
        "regex",
        "char",
        "variable",
      ],
      style: {
        color: "var(--theme-color)", // theme color for text and comments
      },
    },
    {
      types: ["punctuation", "attr-value", "inserted", "comment"],
      style: {
        color: "#969696", // grey for brackets and similar elements
      },
    },
    {
      types: [
        "tag",
        "operator",
        "deleted",
        "entity",
        "selector",
        "keyword",
        "important",
        "url",
        "attr-name",
        "builtin",
        "property",
        "constant",
      ],
      style: {
        color: "var(--code-color)", // white for tags
      },
    },
    {
      types: ["italic"],
      style: {
        fontStyle: "italic",
      },
    },
    {
      types: ["bold"],
      style: {
        fontWeight: "bold",
      },
    },
    {
      types: ["namespace"],
      style: {
        opacity: 0.7,
      },
    },
  ],
};

export const monoDarkSyntaxTheme = {
  'code[class*="language-"]': {
    color: "var(--code-color)", // theme color for text
    background: "var(--code-bg-color)",
    lineHeight: "1.5",
    direction: "ltr",
    textAlign: "left",
    whiteSpace: "pre",
    wordSpacing: "normal",
    wordBreak: "normal",
    tabSize: "4",
    hyphens: "none",
  },
  'pre[class*="language-"]': {
    color: "var(--code-color)", // theme color for text
    background: "var(--code-bg-color)",
    lineHeight: "1.5",
    direction: "ltr",
    textAlign: "left",
    whiteSpace: "pre",
    wordSpacing: "normal",
    wordBreak: "normal",
    tabSize: "4",
    hyphens: "none",
    padding: "1em",
    margin: "0.5em 0",
    overflow: "auto",
    borderRadius: "0.3em",
  },
  comment: { color: "#808080" }, // theme color for comments
  prolog: { color: "var(--code-color)" }, // theme color for comments
  doctype: { color: "var(--code-color)" }, // theme color for comments
  cdata: { color: "var(--code-color)" }, // theme color for comments
  punctuation: { color: "#808080" }, // grey for brackets and similar elements
  property: { color: "#808080" }, // grey for brackets and similar elements
  tag: { color: "var(--code-color)" }, // white for tags
  boolean: { color: "var(--code-color)" }, // theme color for text
  number: { color: "var(--code-color)" }, // theme color for text
  constant: { color: "var(--code-color)" }, // theme color for text
  symbol: { color: "var(--code-color)" }, // theme color for text
  selector: { color: "var(--code-color)" }, // white for tags
  "attr-name": { color: "var(--code-color)" }, // white for tags
  string: { color: "var(--code-color)" }, // theme color for text
  char: { color: "var(--code-color)" }, // theme color for text
  builtin: { color: "var(--code-color)" }, // white for tags
  operator: { color: "var(--code-color)" }, // white for tags
  entity: { color: "var(--code-color)", cursor: "help" }, // white for tags
  url: { color: "var(--code-color)" }, // white for tags
  "attr-value": { color: "#808080" }, // grey for brackets and similar elements
  keyword: { color: "var(--code-color)" }, // white for tags
  regex: { color: "var(--code-color)" }, // theme color for text
  important: { color: "var(--code-color)", fontWeight: "bold" }, // white for tags
  variable: { color: "var(--code-color)" }, // theme color for text
  inserted: { color: "var(--code-color)" }, // theme color for text
  deleted: { color: "var(--code-color)" }, // white for tags
  italic: { fontStyle: "italic" },
  bold: { fontWeight: "bold" },
  namespace: { opacity: 0.7 },
};
