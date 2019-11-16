// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

import Document, { Html, Head, Main, NextScript } from "next/document";
import { GA_TRACKING_ID } from "../lib/gtag";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    const isWithAnalytics =
      process.env.NODE_ENV === "production" && !!GA_TRACKING_ID;

    return (
      <Html lang="ru">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          {isWithAnalytics && (
            <>
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
              ></script>
              <script
                dangerouslySetInnerHTML={{
                  __html: [
                    `window.dataLayer = window.dataLayer || [];`,
                    `function gtag(){window.dataLayer.push(arguments)}`,
                    `gtag("js", new Date());`
                    // `gtag("config", "${GA_TRACKING_ID}");`
                  ].join("")
                }}
              ></script>
            </>
          )}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
