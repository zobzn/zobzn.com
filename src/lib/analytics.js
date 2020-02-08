import { Analytics } from "analytics";
import googleAnalytics from "@analytics/google-analytics";

const GA_TRACKING_ID = "UA-47099248-1";

const analytics = Analytics({
  app: "zobzn.com",
  plugins: [
    googleAnalytics({
      trackingId: GA_TRACKING_ID
    })
  ]
});

export function pageview(url = null) {
  const finalUrl = url || window.location.href;

  /* istanbul ignore next */
  if (process.browser) {
    analytics.page({ url: finalUrl, title: "ы" }).catch(() => {});
  }

  return finalUrl;
}
