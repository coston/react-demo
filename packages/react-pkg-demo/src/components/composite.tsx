import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { LiveSectionTypes } from "./live";
import Live from "./live";
import type { LayoutTypes } from "./layout";
import Layout from "./layout";

export function Composite({
  color,
  packageName,
  code,
  markdown,
  icon,
  scope,
  prompt,
}: LiveSectionTypes &
  Omit<LayoutTypes, "children"> & { markdown?: string }): JSX.Element {
  return (
    <Layout color={color} icon={icon} packageName={packageName}>
      {code ? (
        <Live code={code} color={color} prompt={prompt} scope={scope} />
      ) : null}
      {markdown ? (
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
      ) : null}
    </Layout>
  );
}
