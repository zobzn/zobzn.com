// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

import Document, { Head, Html, Main, NextScript } from "next/document";
import React from "react";

const fontLinks = ((hrefs) => {
  const makeStyleLink = (h) => {
    return `<link rel="stylesheet" href="${h}" media="print" onload="this.onload=null;this.media='all'" />`;
  };

  return {
    __html: `</script>${hrefs.map(makeStyleLink).join("")}<script>`,
  };
})(["https://fonts.googleapis.com/css2?family=Fira+Sans&display=swap"]);

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="ru">
        <Head>
          <script dangerouslySetInnerHTML={fontLinks} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
