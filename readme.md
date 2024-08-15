# ⬇️ react-pkg-demo

[![npm version](https://img.shields.io/npm/v/react-pkg-demo.svg)](https://www.npmjs.com/package/react-pkg-demo)
[![npm downloads](https://img.shields.io/npm/dm/react-pkg-demo.svg)](https://www.npmjs.com/package/react-pkg-demo)

## Features

A component for quickly throwing together a react package demo

## Install

Install with npm:

```sh
npm i react-pkg-demo -D
```

## Usage

```jsx
() => {
  const markdown = `
  ## Description
  Wow, it's a live code demo!
  ## Usage
  ~~~jsx
  () => <Button onClick={() => alert('It works!')}>test button</Button>
  ~~~
  `;
  return (
    <Demo
      color={"#CBC3E3"}
      packageName={"react-pkg-demo"}
      icon={"⬇️"}
      scope={{ Button, Demo }}
      markdown={markdown}
    />
  );
};
```

## Properties

| Property    | Type   | Requirement | Description                                     |
| ----------- | ------ | ----------- | ----------------------------------------------- |
| packageName | string | required    | Name of package being demonstrated              |
| color       | string | required    | Theme color                                     |
| scope       | Object | optional    | Any component in the demo code                  |
| icon        | string | optional    | Decorative icon                                 |
| markdown    | string | optional    | Markdown content (e.g. copied from your readme) |

## Contributing

Feel free to contribute to the project and make it better!
