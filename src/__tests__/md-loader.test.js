import mdLoader from "../lib/md-loader";

const load = (markdown) => {
  let res = null;
  let err = null;
  let spy = {
    async: () => (error, result) => {
      err = error;
      res = result;

      return true;
    },
  };

  const ret = mdLoader.call(spy, markdown);

  return { ret, res, err };
};

it("can be imported", async () => {
  expect(mdLoader).toBeInstanceOf(Function);
});

it("works", () => {
  const { ret, res, err } = load("# header");

  expect(ret).toBeTruthy();
  expect(err).toBeNull();
  expect(res).toBe(
    `module.exports = {
  meta: {},
  html: "<h1>header</h1>",
};
`
  );
});

it("handles date string in frontmatter without timezone", () => {
  const { ret, res, err } = load(`---
date: "2020-05-11 23:11:14"
---

# header
`);

  expect(ret).toBeTruthy();
  expect(err).toBeNull();
  expect(res).toBe(
    `module.exports = {
  meta: {"date":"2020-05-11T23:11:14.000Z"},
  html: "<h1>header</h1>",
};
`
  );
});

it("handles date string in frontmatter with timezone", () => {
  const { ret, res, err } = load(`---
date: "2020-05-12 02:11:14 +0300"
---

# header
`);

  expect(ret).toBeTruthy();
  expect(err).toBeNull();
  expect(res).toBe(
    `module.exports = {
  meta: {"date":"2020-05-11T23:11:14.000Z"},
  html: "<h1>header</h1>",
};
`
  );
});

it("handles date object in frontmatter without timezone", () => {
  const { ret, res, err } = load(`---
date: 2020-05-11 23:11:14
---

# header
`);

  expect(ret).toBeTruthy();
  expect(err).toBeNull();
  expect(res).toBe(
    `module.exports = {
  meta: {"date":"2020-05-11T23:11:14.000Z"},
  html: "<h1>header</h1>",
};
`
  );
});

it("handles date object in frontmatter with timezone", () => {
  const { ret, res, err } = load(`---
date: 2020-05-12 02:11:14 +0300
---

# header
`);

  expect(ret).toBeTruthy();
  expect(err).toBeNull();
  expect(res).toBe(
    `module.exports = {
  meta: {"date":"2020-05-11T23:11:14.000Z"},
  html: "<h1>header</h1>",
};
`
  );
});

it("handles error", () => {
  const { ret, res, err } = load("```blabla\nblabla\n```");

  expect(ret).toBeTruthy();
  expect(res).toBeUndefined();
  expect(err).toBeInstanceOf(Error);
  expect(err.message).toBe("Unknown language: `blabla` is not registered");
});
