import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Live, { LiveSectionTypes } from "./Live";
import Layout, { LayoutTypes } from "./Layout";
import { monoDarkSyntaxTheme } from "../themes/dark";
import CodeBlock from "./CodeBlock";
import InlineCode from "./InlineCode";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";

export function Composite({
  color,
  packageName,
  markdown,
  icon,
  scope,
}: Omit<LiveSectionTypes, "code"> &
  Omit<LayoutTypes, "children"> & { markdown?: string }): JSX.Element {
  return (
    <Layout color={color} icon={icon} packageName={packageName}>
      {markdown ? (
        <ReactMarkdown
          components={{
            img: (props) => {
              // Check if the alt contains "md-only" it won't be rendered
              if (props.alt?.includes("md-only")) {
                return null;
              }
              return (
                <img
                  {...props}
                  style={{
                    maxWidth: "100%",
                  }}
                />
              );
            },
            pre: "div", // Override pre element to prevent ReactMarkdown from wrapping code blocks in pre tags
            code: ({ node, inline, className, children, ...props }: any) => {
              const match = /language-(\w+)/.exec(className || "");
              const language = match ? match[1] : "";
              const code = String(children).replace(/\n$/, "");

              if (node.position.start.line === node.position.end.line) {
                return InlineCode({ children });
              } else if (language === "jsx") {
                return <Live code={code} scope={scope} />;
              } else {
                return (
                  <CodeBlock
                    style={monoDarkSyntaxTheme}
                    language={language}
                    value={code}
                    {...props}
                  ></CodeBlock>
                );
              }
            },
          }}
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeSlug, rehypeAutolinkHeadings]}
        >
          {markdown}
        </ReactMarkdown>
      ) : null}
    </Layout>
  );
}
