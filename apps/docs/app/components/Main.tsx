"use client";

import React from "react";
import Demo from "react-pkg-demo";

function Button({ ...rest }) {
  return <button style={{ background: "white" }} {...rest} />;
}

function HomePage({ content }: { content: string }) {
  const color = "#999999";

  return (
    <Demo
      color={color}
      packageName={"react-pkg-demo"}
      icon={"⬇️"}
      scope={{ Button, Demo }}
      markdown={content}
    />
  );
}

export default HomePage;
