import React from "react";
import Live, { LiveSectionTypes } from "./live";
import Layout, { LayoutTypes } from "./layout";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export function Composite({
  color,
  packageName,
  code,
  markdown,
  icon,
  scope,
  prompt,
}: LiveSectionTypes & Omit<LayoutTypes, "children"> & { markdown?: string }) {
  return (
    <Layout packageName={packageName} icon={icon} color={color}>
      <Live code={code} scope={scope} color={color} prompt={prompt} />
      {markdown && (
        <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
      )}
    </Layout>
  );
}
