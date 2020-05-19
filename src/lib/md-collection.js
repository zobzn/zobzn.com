const fs = require("fs");
const path = require("path");
const util = require("util");

export async function readMdCollection(basedir) {
  const processMarkdown = require("./process-markdown");
  const readFile = util.promisify(fs.readFile);
  // const readDir = util.promisify(fs.readdir);
  const glob = util.promisify(require("glob"));

  const root = process.cwd(); // instead of __dirname

  const filenames = (
    await glob("*.md", {
      cwd: path.resolve(root, basedir),
    })
  )
    .filter((k) => !!k.match(/\.md$/))
    .filter((k) => k.split(/[./]/)[0]);

  let jobs = filenames.reduce(
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
        "UTF-8"
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
