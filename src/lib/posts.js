const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");
const util = require("util");

const readFile = util.promisify(fs.readFile);
const readDir = util.promisify(fs.readdir);

export async function getPostInfo(slug) {
  const root = process.cwd(); // instead of __dirname
  const rawContent = await readFile(
    path.resolve(root, "content/posts/" + slug + ".md"),
    "UTF-8"
  );

  const { data: meta } = matter(rawContent);

  return {
    slug,
    title: meta.title || null,
    date: meta.date || null,
  };
}

export async function getPostsInfo() {
  const root = process.cwd();
  const slugs = (await readDir(path.resolve(root, "content/posts")))
    .filter((k) => !!k.match(/\.md$/))
    .map((k) => k.split(/[./]/)[0]);

  const promises = slugs.map((slug) => getPostInfo(slug));

  const items = (await Promise.all(promises)).sort((a, b) =>
    a.date < b.date ? 1 : a.date > b.date ? -1 : 0
  );

  return items;
}
