import processMarkdown from "./process-markdown";

export default async function (rawContent) {
  const callback = this.async();

  let meta, html;

  try {
    const res = processMarkdown(rawContent);

    meta = res.meta;
    html = res.html;
  } catch (err) {
    return callback(err);
  }

  const code = `module.exports = {
  meta: ${JSON.stringify(meta)},
  html: ${JSON.stringify(html)},
};
`;

  return callback(null, code);
}
