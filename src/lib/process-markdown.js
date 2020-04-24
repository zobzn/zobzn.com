const matter = require("gray-matter");
const unified = require("unified");
const remarkParse = require("remark-parse");
const remark2rehype = require("remark-rehype");
const rehypeRaw = require("rehype-raw");
const rehypePrism = require("@mapbox/rehype-prism");
const rehypeStringify = require("rehype-stringify");

module.exports = function (rawContent) {
  const { data: meta, content: markdown } = matter(rawContent);

  const html = unified()
    .use(remarkParse)
    .use(remark2rehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypePrism)
    .use(rehypeStringify)
    .processSync(markdown).contents;

  return { meta, markdown, html };
};
