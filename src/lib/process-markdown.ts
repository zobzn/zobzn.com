import unified from "unified";
import remarkParse from "remark-parse";
import remark2rehype from "remark-rehype";
import rehypeRaw from "rehype-raw";
import rehypePrism from "@mapbox/rehype-prism";
import rehypeStringify from "rehype-stringify";
import { zonedTimeToUtc, toDate } from "date-fns-tz";
import { doFrontMatter, doGrayMatter } from "./front-matter";

const normalizeMeta = (meta) => {
  if (meta.date) {
    // @ts-ignore
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

const markdown2html = (() => {
  const processor = unified()
    .use(remarkParse)
    .use(remark2rehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypePrism)
    .use(rehypeStringify);

  return (markdown) => {
    return processor.processSync(markdown).contents;
  };
})();

export default function (rawContent) {
  const { meta, markdown } = preprocessFrontmatterInMarkdown(rawContent);
  const html = markdown2html(markdown);

  return { meta, markdown, html };
}
