import React from "react";
import styles from "../styles";

function Layout({
  children,
  packageName,
  description,
  icon,
  color,
}: LayoutTypes): JSX.Element {
  const metaDescription = description || `The ${packageName} package`;
  return (
    <>
      <title>{packageName}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content={metaDescription} />
      <link
        href={`data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">${icon}</text></svg>`}
        rel="icon"
      />
      <style>{styles(color)}</style>
      {children}
    </>
  );
}

export interface LayoutTypes {
  children: React.ReactNode;
  packageName: string;
  description?: string;
  icon?: string;
  color: string;
}

export default Layout;
