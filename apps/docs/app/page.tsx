"use client";

import React from "react";
import Demo from "react-pkg-demo";

function Button({ ...rest }) {
  return <button style={{ background: "white" }} {...rest} />;
}

function HomePage() {
  const color = "#CBC3E3";

  const content = `
## Features
 A component to quickly push out a demo application

  ## Install

  Install with npm:
 ~~~sh
  npm i react-pkg-demo -D
 ~~~


  ## Properties

  | Property    | Type         | Requirement | Description                                     |
  | ----------- | ------------ | ----------- | ----------------------------------------------- |
  | packageName | string       | required    | Name of package being demonstrated              |
  | color       | string       | required    | Theme color                                     |
  | code        | string       | required    | Live code                                       |
  | scope       | {components} | optional    | Any component in the demo code                  |
  | icon        | string       | optional    | Decorative icon                                 |
  | prompt      | string       | optional    | Text in demo to prompt the user to try it       |
  | content     | string       | optional    | Markdown content (e.g. copied from your readme) |

  ## Contributing
  This is project that supports other packages developed by [Coston](https://github.com/coston). Feel free to contribute and make it better!
  `;

  return (
    <Demo
      color={color}
      packageName={"react-pkg-demo"}
      icon={"⬇️"}
      scope={{ Button }}
      markdown={content}
      prompt={"Edit the code below and try it out!"}
      code={`() => <Button onClick={() => alert('It works!')}>test button</Button>`}
    />
  );
}

export default HomePage;
