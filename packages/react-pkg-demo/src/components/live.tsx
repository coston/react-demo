import React from "react";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";

function LiveSection({
  code,
  scope,
  color,
  prompt,
}: LiveSectionTypes): JSX.Element {
  const theme /*: PrismTheme */ = {
    plain: {
      color,
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
          {prompt ? <p>{prompt}</p> : null}
          <LivePreview />
        </div>
      </div>
      <h2>Live Code Example</h2>
      <div style={{ border: "5px dashed black" }}>
        <LiveEditor
          style={{
            background: "black",
            fontFamily: "monospace",
            whiteSpace: "pre",
            overflow: "scroll",
          }}
          theme={theme}
        />
        <LiveError />
      </div>
    </LiveProvider>
  );
}

export interface LiveSectionTypes {
  code: string;
  scope?: Record<string, unknown> | undefined;
  color: string;
  prompt?: string;
}

export default LiveSection;
