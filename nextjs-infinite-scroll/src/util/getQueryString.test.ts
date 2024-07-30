import getQueryString from "./getQueryString";

describe("getQueryString", () => {
  it("should parse single query parameter", () => {
    const url = "http://example.com?name=John";
    const result = getQueryString(url);
    expect(result).toEqual({ name: "John" });
  });

  it("should parse multiple query parameters", () => {
    const url = "http://example.com?name=John&age=30";
    const result = getQueryString(url);
    expect(result).toEqual({ name: "John", age: "30" });
  });

  it("should handle empty query parameters", () => {
    const url = "http://example.com";
    const result = getQueryString(url);
    expect(result).toEqual({});
  });

  it("should handle query parameters with special characters", () => {
    const url = "http://example.com?name=John%20Doe&city=New%20York";
    const result = getQueryString(url);
    expect(result).toEqual({ name: "John Doe", city: "New York" });
  });

  it("should override duplicate query parameters with the last value", () => {
    const url = "http://example.com?name=John&name=Jane";
    const result = getQueryString(url);
    expect(result).toEqual({ name: "Jane" });
  });
});
