const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

const items = fs
  .readdirSync(path.resolve(__dirname, "../data/posts"))
  .filter((k) => !!k.match(/\.md$/))
  .map((k) => k.split(/[./]/)[0])
  .map((slug) => {
    const rawContent = fs.readFileSync(
      path.resolve(__dirname, "../data/posts/" + slug + ".md"),
      "UTF-8"
    );

    const { data: meta } = matter(rawContent);

    return {
      slug,
      title: meta.title || null,
      date: meta.date || null,
    };
  })
  .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));

const indexContent = `module.exports = ${JSON.stringify(items, null, 2)};`;

fs.writeFileSync(
  path.resolve(__dirname, "../data/index.js"),
  "\n" + indexContent + "\n"
);
