const matter = require("gray-matter");
const unified = require("unified");
const parse = require("remark-parse");
const remark2react = require("remark-react");
const remark2html = require("remark-html");

module.exports = async function(rawContent) {
  const callback = this.async();
  const { data: meta, content } = matter(rawContent);

  let html;

  try {
    html = unified()
      .use(parse)
      // .use(remark2react)
      .use(remark2html)
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
