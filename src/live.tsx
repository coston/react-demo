import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";

const LiveSection = ({ code, scope, color, prompt }: LiveSectionTypes) => {
  const theme /*: PrismTheme */ = {
    plain: {
      color: color,
    },
    styles: [
      {
        types: ["comment", "prolog", "doctype", "cdata", "punctuation"],
        style: {
          color: "#6c6783",
        },
      },
      {
        types: ["tag", "operator"],
        style: {
          color: "#fff",
        },
      },
    ],
  };

  return (
    <LiveProvider code={code} scope={scope}>
      <div
        style={{
          height: "auto",
          minWidth: "100%",
          marginBottom: "2em",
        }}
      >
        <div>
          <h2>Live Demo</h2>
          {prompt && <p>{prompt}</p>}
          <LivePreview />
        </div>
      </div>
      <h2>Code Usage</h2>
      <div style={{ border: "5px dashed black" }}>
        <LiveEditor
          theme={theme}
          style={{
            background: "black",
            overflow: "scroll",
          }}
        />
        <LiveError />
      </div>
    </LiveProvider>
  );
};

export type LiveSectionTypes = {
  code: string;
  scope?:
    | {
        [key: string]: any;
      }
    | undefined;
  color: string;
  prompt?: string;
};

export default LiveSection;
