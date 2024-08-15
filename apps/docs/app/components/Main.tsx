"use client";

import React from "react";
import Demo from "react-pkg-demo";

function Button({ ...rest }) {
  return <button style={{ background: "white" }} {...rest} />;
}

function HomePage({ content }: { content: string }) {
  const color = "#CBC3E3";

  return (
    <Demo
      color={color}
      packageName={"react-pkg-demo"}
      icon={"⬇️"}
      scope={{ Button, Demo }}
      markdown={content}
      code={`() => <Button onClick={() => alert('It works!')}>test button</Button>`}
    />
  );
}

export default HomePage;
