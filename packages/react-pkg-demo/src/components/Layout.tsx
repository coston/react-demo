import React from "react";
import styles from "../styles";

function Layout({
  children,
  packageName,
  icon,
  color,
}: LayoutTypes): JSX.Element {
  return (
    <>
      <title>{packageName}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <link
        href={`data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">${icon}</text></svg>`}
        rel="icon"
      />
      <style
        dangerouslySetInnerHTML={{
          __html: styles(color),
        }}
      />
      <h1>{icon ? `${icon} ${packageName}` : packageName}</h1>
      <section>
        {["npm version", "npm"].map((text, index) => (
          <a
            href={`https://www.npmjs.com/package/${packageName}`}
            key={text}
            style={{ borderBottom: "none", marginRight: "5px" }}
            target="_blank"
            rel="noopener"
            aria-label={`Link to ${text} of ${packageName} on npm`}
          >
            <img
              alt={text}
              src={`https://img.shields.io/npm/${index === 0 ? "v" : "dm"}/${packageName}.svg`}
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
