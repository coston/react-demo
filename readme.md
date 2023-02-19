# react-pkg-demo

## Features

A component for quickly throwing together a react package demo

## Install

Install with npm:

```sh
 npm i react-pkg-demo
```

## Properties

color: string;
packageName: string;
code: string;
markdown: string;
icon: string;
scope: any;
prompt: string;

| Property    | Type         | Requirement | Description                                     |
| ----------- | ------------ | ----------- | ----------------------------------------------- |
| packageName | string       | required    | Name of package being demonstrated              |
| color       | string       | required    | Theme color                                     |
| code        | string       | required    | Live code                                       |
| scope       | [components] | optional    | Any component in the demo code                  |
| icon        | string       | optional    | Decorative icon                                 |
| prompt      | string       | optional    | Text in demo to prompt the user to try it       |
| content     | string       | optional    | Markdown content (e.g. copied from your readme) |

## Contributing

This is mostly a personal project, but feel free to contribute and make it better!
