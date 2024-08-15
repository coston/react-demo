import fs from "fs";
import path from "path";

export const readFile = (filePath: string): string => {
  const absolutePath = path.resolve(process.cwd(), filePath);
  return fs.readFileSync(absolutePath, "utf8");
};
