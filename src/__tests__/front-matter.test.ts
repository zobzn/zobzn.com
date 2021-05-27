import { doFrontMatter, doGrayMatter } from "../lib/front-matter";

test("front-matter works", () => {
  const { meta, markdown } = doFrontMatter(`---
date: "2020-05-11 23:11:14"
---

# header`);

  expect(meta).toEqual({ date: "2020-05-11 23:11:14" });
  expect(markdown).toEqual("# header");
});

test("gray-matter works", () => {
  const { meta, markdown } = doGrayMatter(`---
date: "2020-05-11 23:11:14"
---

# header`);

  expect(meta).toEqual({ date: "2020-05-11 23:11:14" });
  expect(markdown).toEqual("# header");
});
