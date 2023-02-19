import React from "react";
import Demo from "../src";

function HomePage() {
  const color = "#CBC3E3";
  const content = `
## Features
 A component to quickly push out a demo application

  ## Install

  Install with npm:
 ~~~sh
  npm i react-pkg-demo
 ~~~


  ## Properties

  | Property    | Type          | Requirement | Description                               |
  | ----------- | ------------- | ----------- | ----------------------------------------- |
  | packageName | string        | required    | Name of package being demonstrated        |
  | color       | string        | required    | Theme color                               |
  | code        | string        | required    | Live code                                 |
  | icon        | string        | optional    | Decorative icon                           |
  | scope       | [components] | optional    | Any component in the demo code            |
  | prompt      | string        | required    | Text in demo to prompt the user to try it |

  ## Contributing
  This is mostly a personal project, but feel free to contribute and make it better!
  `;

  return (
    <Demo
      color={color}
      packageName={"react-pkg-demo"}
      icon={"⬇️"}
      markdown={content}
      prompt={"Edit the code below and try it out!"}
      code={
        "() => <button onClick={() => alert('It works!')}>test button</button>"
      }
    />
  );
}

export default HomePage;
