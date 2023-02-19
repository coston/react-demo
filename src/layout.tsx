import React from "react";
import styles from "./styles";
import { Helmet } from "react-helmet";

const Layout = ({ children, packageName, icon, color }: LayoutTypes) => {
  const titleHeader = icon ? icon + " " + packageName : packageName;
  return (
    <div>
      <Helmet>
        <title>{packageName}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href={`data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">${icon}</text></svg>`}
        />
      </Helmet>
      <style
        dangerouslySetInnerHTML={{
          __html: styles(color),
        }}
      />
      <div>
        <h1>{titleHeader}</h1>
        <p>
          <a
            style={{ borderBottom: "none", marginRight: "5px" }}
            target="_blank"
            href={`https://www.npmjs.com/package/${packageName}`}
          >
            <img
              src={`https://badge.fury.io/js/${packageName}.svg`}
              alt="npm version"
            />
          </a>
          <a
            style={{ borderBottom: "none", marginRight: "5px" }}
            target="_blank"
            href={`https://www.npmjs.com/package/${packageName}`}
          >
            <img
              src={`https://img.shields.io/npm/dm/${packageName}.svg`}
              alt="npm"
            />
          </a>
        </p>
        {children}
      </div>
    </div>
  );
};

export type LayoutTypes = {
  children: any;
  packageName: string;
  icon?: string;
  color: string;
};

export default Layout;
