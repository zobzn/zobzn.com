import mdLoader from "../lib/md-loader";

it("can be imported", async () => {
  expect(mdLoader).toBeInstanceOf(Function);
});

it("works", () => {
  let res = null;
  let err = null;
  let spy = {
    async: () => (error, result) => {
      err = error;
      res = result;

      return true;
    }
  };

  const ret = mdLoader.call(spy, "# header");

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

it("handles error", () => {
  let res = null;
  let err = null;
  let spy = {
    async: () => (error, result) => {
      err = error;
      res = result;

      return true;
    }
  };

  const ret = mdLoader.call(spy, "```blabla\nblabla\n```");

  expect(ret).toBeTruthy();
  expect(res).toBeUndefined();
  expect(err).toBeInstanceOf(Error);
  expect(err.message).toBe("Unknown language: `blabla` is not registered");
});
