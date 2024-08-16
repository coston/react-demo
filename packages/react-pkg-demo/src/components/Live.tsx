import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import { monoDarkPrismTheme } from "../themes/dark";

export interface LiveSectionTypes {
  code: string;
  scope?: Record<string, unknown> | undefined;
}

function LiveSection({ code, scope }: LiveSectionTypes): JSX.Element {
  return (
    <LiveProvider code={code} scope={scope} theme={monoDarkPrismTheme}>
      <div className="live-container">
        <div className="live-preview-container">
          <LivePreview />
          <LiveError />
        </div>
        <div className="live-editor-container">
          <pre>
            <LiveEditor className="live-editor" />
          </pre>
        </div>
      </div>
    </LiveProvider>
  );
}

export default LiveSection;
