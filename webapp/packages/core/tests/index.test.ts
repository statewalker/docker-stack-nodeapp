import { expect, test } from "vitest";
import { hello } from "../src";

test("adds 1 + 2 to equal 3", () => {
  expect(hello()).toBe("Hello WORLD!");
});
