import { pageview } from "../lib/analytics";

describe("gtag", () => {
  const OLD_ENV = process.env;
  const OLD_BROWSER = process.browser;
  let spyOnLog;

  beforeEach(() => {
    jest.resetModules(); // this is important - it clears the cache
    spyOnLog = jest.spyOn(console, "log").mockImplementation();
    process.env = { ...OLD_ENV };
    process.browser = OLD_BROWSER;
    delete process.env.NODE_ENV;
  });

  afterEach(() => {
    process.env = { ...OLD_ENV };
    process.browser = OLD_BROWSER;
    spyOnLog.mockRestore();
  });

  it("should work without url argument", () => {
    const result = pageview();
    expect(result).toBe("http://localhost/");
  });

  it("should work with url argument", () => {
    const url = "https://example.com/";
    const result = pageview(url);
    expect(result).toBe(url);
  });
});
