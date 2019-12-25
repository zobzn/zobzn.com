import { pageview } from "../lib/gtag";

it("works", () => {
  expect(window.dataLayer).toBeUndefined();
  pageview("http://example.com/");
  expect(window.dataLayer).toBeInstanceOf(Array);
  expect(window.dataLayer).toHaveLength(1);
  expect([...window.dataLayer[0]]).toEqual([
    "config",
    "UA-47099248-1",
    { page_path: "http://example.com/" }
  ]);
});
