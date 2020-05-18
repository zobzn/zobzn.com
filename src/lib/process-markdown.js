const unified = require("unified");
const remarkParse = require("remark-parse");
const remark2rehype = require("remark-rehype");
const rehypeRaw = require("rehype-raw");
const rehypePrism = require("@mapbox/rehype-prism");
const rehypeStringify = require("rehype-stringify");
const { zonedTimeToUtc, toDate } = require("date-fns-tz");
const { doFrontMatter, doGrayMatter } = require("./front-matter");

const normalizeMeta = (meta) => {
  if (meta.date) {
    meta.date = zonedTimeToUtc(toDate(meta.date, { timeZone: "UTC" }));
  }

  return meta;
};

const preprocessFrontmatterInMarkdown = (
  rawContent,
  frontmatterEngine = "frontmatter"
) => {
  // /* istanbul ignore next */
  const { meta, markdown } =
    frontmatterEngine == "frontmatter"
      ? doFrontMatter(rawContent)
      : doGrayMatter(rawContent);

  return { meta: normalizeMeta(meta), markdown };
};

const markdown2html = (markdown) => {
  return unified()
    .use(remarkParse)
    .use(remark2rehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypePrism)
    .use(rehypeStringify)
    .processSync(markdown).contents;
};

module.exports = function (rawContent) {
  const { meta, markdown } = preprocessFrontmatterInMarkdown(rawContent);
  const html = markdown2html(markdown);

  return { meta, markdown, html };
};
