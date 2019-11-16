export const GA_TRACKING_ID = "UA-47099248-1";

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export function pageview(url) {
  if (process.env.NODE_ENV !== "production") {
    console.log("pageview", url);
  }

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push([
    "config",
    GA_TRACKING_ID,
    {
      page_path: url
    }
  ]);
}
