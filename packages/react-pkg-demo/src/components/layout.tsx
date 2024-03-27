import React from "react";
import { Helmet } from "react-helmet";
import styles from "../styles";

const NPM_BASE_URL = "https://www.npmjs.com/package";
const SHIELDS_BASE_URL = "https://img.shields.io/npm";

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
      <h1>{titleHeader}</h1>
      <section>
        {["npm version", "npm"].map((text, index) => (
          <a
            href={`${NPM_BASE_URL}/${packageName}`}
            key={text}
            rel="noopener"
            style={{ borderBottom: "none", marginRight: "5px" }}
            target="_blank"
            aria-label={`Link to ${text} of ${packageName} on npm`}
          >
            <img
              alt={text}
              src={`${SHIELDS_BASE_URL}/${index === 0 ? "v" : "dm"}/${packageName}.svg`}
            />
          </a>
        ))}
      </section>
      {children}
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
