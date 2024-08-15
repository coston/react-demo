import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Live, { LiveSectionTypes } from "./Live";
import Layout, { LayoutTypes } from "./Layout";
import { monoDarkSyntaxTheme } from "../themes/dark";
import CodeBlock from "./CodeBlock";

export function Composite({
  color,
  packageName,
  markdown,
  icon,
  scope,
}: LiveSectionTypes &
  Omit<LayoutTypes, "children"> & { markdown?: string }): JSX.Element {
  return (
    <Layout color={color} icon={icon} packageName={packageName}>
      {markdown ? (
        <ReactMarkdown
          components={{
            pre: "div", // Override pre element
            code: ({ node, inline, className, children, ...props }: any) => {
              const match = /language-(\w+)/.exec(className || "");
              const language = match ? match[1] : "";
              const value = String(children).replace(/\n$/, "");

              if (language === "jsx") {
                return <Live code={value} color={color} scope={scope} />;
              } else {
                return (
                  <CodeBlock
                    style={monoDarkSyntaxTheme("#ffffff")}
                    language={language}
                    value={value}
                    {...props}
                  ></CodeBlock>
                );
              }
            },
          }}
          remarkPlugins={[remarkGfm]}
        >
          {markdown}
        </ReactMarkdown>
      ) : null}
    </Layout>
  );
}
