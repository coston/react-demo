import { CSSProperties } from "react";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import { monoDarkPrismTheme } from "../themes/dark";

export interface LiveSectionTypes {
  code: string;
  scope?: Record<string, unknown> | undefined;
  color: string;
}

const containerStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  border: "1px solid black",
  borderRadius: ".3rem",
};

const previewStyle = (color: string) => ({
  flex: 1,
  fontSize: ".88rem",
  backgroundColor: "rgba(255,255,255,0.4)",
  padding: "2em 1em",
  borderTopLeftRadius: ".2rem",
  borderTopRightRadius: ".2rem",
  borderBottom: `2px solid ${color}`,
});

const editorStyle = (color: string) => ({
  flex: 1,
  fontSize: ".88rem",
  backgroundColor: "black",
  padding: "1em",
  borderTop: `2px solid ${color}`,
  borderBottomLeftRadius: ".2rem",
  borderBottomRightRadius: ".2rem",
});

const liveEditorStyle = {
  background: "black",
  whiteSpace: "pre",
  overflow: "scroll",
};

function LiveSection({ code, scope, color }: LiveSectionTypes): JSX.Element {
  return (
    <LiveProvider code={code} scope={scope} theme={monoDarkPrismTheme(color)}>
      <div style={containerStyle}>
        <div style={previewStyle(color)}>
          <LivePreview />
          <LiveError />
        </div>
        <div style={editorStyle(color)}>
          <pre>
            <LiveEditor style={liveEditorStyle} />
          </pre>
        </div>
      </div>
    </LiveProvider>
  );
}

export default LiveSection;
