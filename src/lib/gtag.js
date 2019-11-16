export const GA_TRACKING_ID = "UA-47099248-1";

function gtag() {
  console.log(window, window.dataLayer, arguments);
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(arguments);
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export function pageview(url) {
  if (process.env.NODE_ENV !== "production") {
    console.log("pageview", url);
  }

  gtag("config", GA_TRACKING_ID, {
    page_path: url
  });
}
