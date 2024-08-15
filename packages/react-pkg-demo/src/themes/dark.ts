import { PrismTheme } from "prism-react-renderer";

export const darkSyntaxTheme = {
  'code[class*="language-"]': {
    color: "#ffffff",
    background: "#000",
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
    color: "#ffffff",
    background: "#000",
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

export const monoDarkPrismTheme = (color: string): PrismTheme => ({
  plain: {
    color: color, // theme color for text
    backgroundColor: "#000000",
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
        "constant",
        "symbol",
        "regex",
        "char",
        "variable",
      ],
      style: {
        color: color, // theme color for text and comments
      },
    },
    {
      types: ["punctuation", "property", "attr-value", "inserted", "comment"],
      style: {
        color: "#6c6783", // grey for brackets and similar elements
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
      ],
      style: {
        color: "#ffffff", // white for tags
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
});
export const monoDarkSyntaxTheme = (color: string) => ({
  'code[class*="language-"]': {
    color: color, // theme color for text
    background: "#000000",
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
    color: color, // theme color for text
    background: "#000000",
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
  comment: { color: color }, // theme color for comments
  prolog: { color: color }, // theme color for comments
  doctype: { color: color }, // theme color for comments
  cdata: { color: color }, // theme color for comments
  punctuation: { color: "#808080" }, // grey for brackets and similar elements
  property: { color: "#808080" }, // grey for brackets and similar elements
  tag: { color: "#ffffff" }, // white for tags
  boolean: { color: color }, // theme color for text
  number: { color: color }, // theme color for text
  constant: { color: color }, // theme color for text
  symbol: { color: color }, // theme color for text
  selector: { color: "#ffffff" }, // white for tags
  "attr-name": { color: "#ffffff" }, // white for tags
  string: { color: color }, // theme color for text
  char: { color: color }, // theme color for text
  builtin: { color: "#ffffff" }, // white for tags
  operator: { color: "#ffffff" }, // white for tags
  entity: { color: "#ffffff", cursor: "help" }, // white for tags
  url: { color: "#ffffff" }, // white for tags
  "attr-value": { color: "#808080" }, // grey for brackets and similar elements
  keyword: { color: "#ffffff" }, // white for tags
  regex: { color: color }, // theme color for text
  important: { color: "#ffffff", fontWeight: "bold" }, // white for tags
  variable: { color: color }, // theme color for text
  inserted: { color: color }, // theme color for text
  deleted: { color: "#ffffff" }, // white for tags
  italic: { fontStyle: "italic" },
  bold: { fontWeight: "bold" },
  namespace: { opacity: 0.7 },
});
