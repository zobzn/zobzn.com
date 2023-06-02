import fs from "fs/promises";
import path from "path";
import { glob } from "glob";
import processMarkdown from "./process-markdown";

export async function readMdCollection(basedir) {
  const root = process.cwd(); // instead of __dirname

  const filenames = (
    await glob.glob("*.md", {
      cwd: path.resolve(root, basedir),
    })
  )
    .filter((k) => !!k.match(/\.md$/))
    .filter((k) => k.split(/[./]/)[0]);

  const jobs = filenames.reduce(
    (acc, filename) =>
      acc.concat([
        {
          slug: filename
            .replace(/^\d{4}-\d{2}-\d{2}-/, "")
            .replace(/\.md$/, ""),
          filename,
        },
      ]),
    []
  );

  const items = await Promise.all(
    jobs.map(async (job) => {
      const rawContent = await fs.readFile(
        path.resolve(root, basedir + "/" + job.filename),
        { encoding: "utf-8" }
      );

      const { meta, markdown, html } = processMarkdown(rawContent);

      const result = {
        ...job,
        ...meta,
        markdown,
        html,
      };

      return result;
    })
  );

  return items;
}
