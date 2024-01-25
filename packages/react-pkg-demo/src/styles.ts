function pickTextColorBasedOnBgColorSimple(
  bgColor: string,
  lightColor = "#fff",
  darkColor = "#000"
): string {
  const color = bgColor.startsWith("#") ? bgColor.substring(1, 7) : bgColor;
  const r = parseInt(color.substring(0, 2), 16); // hexToR
  const g = parseInt(color.substring(2, 4), 16); // hexToG
  const b = parseInt(color.substring(4, 6), 16); // hexToB
  return r * 0.299 + g * 0.587 + b * 0.114 > 186 ? darkColor : lightColor;
}

const styles = (color: string): string => {
  const bgInverseTextColor = pickTextColorBasedOnBgColorSimple(color);

  return `
html {
  font-family:
  -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
  min-height: 100%;
  background: ${color};
  margin: auto;
  max-width: 900px;
  padding: 1em;
  color: ${bgInverseTextColor}

}
a {
  color: black;
}
a:hover {
      background:rgba(255,255,255,0.7);
  }
h1 {
  font-size: 2.5em;
}
h2 {
  border-bottom: 3px solid #000;
}
code {
  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,Courier,monospace;
  background:rgba(255,255,255,0.4);
  color: black;
  word-wrap: break-word;
}
ul li, ol li {
line-height:140%;
}
table {
  border-collapse: collapse;
  background:rgba(255,255,255,0.4);
}

th,
td {
  border: 1px solid #000;
  padding: 0.75rem;
  text-align: left;
}

th {
  font-weight: bold;
  white-space: nowrap;
  background: #000;
  color: #fff;
}

tr:first-of-type th:not(:last-child) {
  border-right-color: transparent;
}

tr:first-child th:first-child,
tr:not(:first-child):not(:last-child) th {
  border-bottom-color: transparent !important;
}
`;
};

export default styles;
