import React from "react";
import unified from "unified";
import remarkParse from "remark-parse";
import remarkGithubFlavoured from "remark-gfm";
import remark2rehype from "remark-rehype";
import rehypeRaw from "rehype-raw";
import rehypeReact from "rehype-react";
import rehypePrism from "@mapbox/rehype-prism";
import Link from "./link";

const processor = unified()
  .use(remarkParse)
  .use(remarkGithubFlavoured)
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
