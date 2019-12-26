import { pageview } from "../lib/gtag";

describe("gtag", () => {
  const OLD_ENV = process.env;
  let spyOnLog;

  beforeEach(() => {
    jest.resetModules(); // this is important - it clears the cache
    spyOnLog = jest.spyOn(console, "log").mockImplementation();
    process.env = { ...OLD_ENV };
    delete process.env.NODE_ENV;
    delete window.dataLayer;
  });

  afterEach(() => {
    delete window.dataLayer;
    process.env = { ...OLD_ENV };
    spyOnLog.mockRestore();
  });

  it("should work in prod env", () => {
    process.env.NODE_ENV = "production";

    expect(window.dataLayer).toBeUndefined();
    pageview("http://example.com/");
    expect(spyOnLog).toHaveBeenCalledTimes(0);
    expect(window.dataLayer).toBeInstanceOf(Array);
    expect(window.dataLayer).toHaveLength(1);
    expect([...window.dataLayer[0]]).toEqual([
      "config",
      "UA-47099248-1",
      { page_path: "http://example.com/" }
    ]);
  });

  it("should works in dev env", () => {
    process.env.NODE_ENV = "dev";

    expect(window.dataLayer).toBeUndefined();
    pageview("http://example.com/");
    expect(spyOnLog).toHaveBeenCalledTimes(1);
    expect(spyOnLog).toHaveBeenCalledWith("pageview", "http://example.com/");
    expect(window.dataLayer).toBeInstanceOf(Array);
    expect(window.dataLayer).toHaveLength(1);
    expect([...window.dataLayer[0]]).toEqual([
      "config",
      "UA-47099248-1",
      { page_path: "http://example.com/" }
    ]);
  });
});
