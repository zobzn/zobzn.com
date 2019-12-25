import mdLoader from "../lib/md-loader";

it("can be imported", async () => {
  expect(mdLoader).toBeInstanceOf(Function);
});
