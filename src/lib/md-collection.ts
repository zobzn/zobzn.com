import fs from "fs";
import path from "path";
import util from "util";
import globCallback from "glob";
import processMarkdown from "./process-markdown";

const readFile = util.promisify(fs.readFile);
// const readDir = util.promisify(fs.readdir);
const glob = util.promisify(globCallback);

export async function readMdCollection(basedir) {
  const root = process.cwd(); // instead of __dirname

  const filenames = (
    await glob("*.md", {
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
      const rawContent = await readFile(
        path.resolve(root, basedir + "/" + job.filename),
        { encoding: "UTF-8" }
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
