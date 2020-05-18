const frontMatter = require("front-matter");
const grayMatter = require("gray-matter");
// const yaml = require("js-yaml");

const doFrontMatter = (rawContent) => {
  const { attributes: meta, body: markdown } = frontMatter(rawContent);

  return { meta, markdown: markdown.trim() };
};

const doGrayMatter = (rawContent) => {
  const { data: meta, content: markdown } = grayMatter(rawContent, {
    // engines: {
    //   // do not parse date in frontmatter
    //   yaml: (s) => yaml.safeLoad(s, { schema: yaml.JSON_SCHEMA }),
    // },
  });

  return { meta, markdown: markdown.trim() };
};

module.exports = { doFrontMatter, doGrayMatter };
