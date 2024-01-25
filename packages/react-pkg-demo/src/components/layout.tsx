import React from "react";
import { Helmet } from "react-helmet";
import styles from "../styles";

function Layout({
  children,
  packageName,
  icon,
  color,
}: LayoutTypes): JSX.Element {
  const titleHeader = icon ? `${icon} ${packageName}` : packageName;
  return (
    <>
      <Helmet>
        <title>{packageName}</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link
          href={`data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">${icon}</text></svg>`}
          rel="icon"
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
            href={`https://www.npmjs.com/package/${packageName}`}
            rel="noopener"
            style={{ borderBottom: "none", marginRight: "5px" }}
            target="_blank"
          >
            <img
              alt="npm version"
              src={`https://badge.fury.io/js/${packageName}.svg`}
            />
          </a>
          <a
            href={`https://www.npmjs.com/package/${packageName}`}
            rel="noopener"
            style={{ borderBottom: "none", marginRight: "5px" }}
            target="_blank"
          >
            <img
              alt="npm"
              src={`https://img.shields.io/npm/dm/${packageName}.svg`}
            />
          </a>
        </p>
        {children}
      </div>
    </>
  );
}

export interface LayoutTypes {
  children: React.ReactNode;
  packageName: string;
  icon?: string;
  color: string;
}

export default Layout;
