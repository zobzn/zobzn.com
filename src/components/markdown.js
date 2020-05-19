import Link from "./link";

const React = require("react");
const unified = require("unified");
const remarkParse = require("remark-parse");
const remark2rehype = require("remark-rehype");
const rehypeRaw = require("rehype-raw");
const rehypeReact = require("rehype-react");
const rehypePrism = require("@mapbox/rehype-prism");

const processor = unified()
  .use(remarkParse)
  .use(remark2rehype, { allowDangerousHtml: true })
  .use(rehypeRaw)
  .use(rehypePrism)
  .use(rehypeReact, {
    createElement: React.createElement,
    Fragment: React.Fragment,
    components: {
      a: Link,
      p: function P(props) {
        return <p {...props} />;
      },
      pre: function Pre(props) {
        return <pre {...props} />;
      },
      code: function Code(props) {
        return <code {...props} />;
      },
      span: function Span(props) {
        return <span {...props} />;
      },
      input: function Input(props) {
        const newProps = { ...props };

        if (newProps.type === "checkbox" && "checked" in newProps) {
          newProps.defaultChecked = newProps.checked;
          delete newProps.checked;
        }

        return <input {...newProps} />;
      },
    },
  });

export function Markdown({ markdown }) {
  return <>{processor.processSync(markdown).result}</>;
}
