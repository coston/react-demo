import { ReactNode } from "react";

const InlineCode = ({ children }: { children: ReactNode }) => {
  return (
    <code
      style={{
        backgroundColor: "rgba(255,255,255,0.4)",
        padding: ".1rem",
        borderRadius: ".3rem",
      }}
    >
      {children}
    </code>
  );
};

export default InlineCode;
