const matter = require("gray-matter");
const unified = require("unified");
const remarkParse = require("remark-parse");
const remark2rehype = require("remark-rehype");
const rehypeRaw = require("rehype-raw");
const rehypePrism = require("@mapbox/rehype-prism");
const rehypeStringify = require("rehype-stringify");

module.exports = async function(rawContent) {
  const callback = this.async();
  const { data: meta, content } = matter(rawContent);

  let html;

  try {
    html = unified()
      .use(remarkParse)
      .use(remark2rehype, { allowDangerousHTML: true })
      .use(rehypeRaw)
      .use(rehypePrism)
      .use(rehypeStringify)
      .processSync(content).contents;
  } catch (err) {
    return callback(err);
  }

  const code = `module.exports = {
  meta: ${JSON.stringify(meta)},
  html: ${JSON.stringify(html)},
};
`;

  return callback(null, code);
};
