// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  // Note: <Document>'s getInitialProps function is not called during client-side transitions, nor when a page is automatically statically optimized.
  static async getInitialProps(ctx) {
    // Note: Make sure to check if ctx.req / ctx.res are defined in getInitialProps.
    // These variables will be undefined when a page is being statically exported for next export or automatic static optimization.
    const initialProps = await Document.getInitialProps(ctx);

    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
