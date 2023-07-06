import formatToString from "../formatToString";

describe("formatToString", () => {
  it("should return string if number is passed", () => {
    const result = formatToString(10);

    expect(result).toBe("10");
    expect(typeof result).toBe("string");
  });

  it("should return string if string is passed", () => {
    const result = formatToString("some text");

    expect(result).toBe("some text");
    expect(typeof result).toBe("string");
  });
});
