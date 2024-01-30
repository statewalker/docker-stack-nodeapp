import { describe, expect, it } from "./deps";
import { BaseClass } from "../src/BaseClass";
import { UpdatesTracker } from "../src/UpdatesTracker";

class MyTestClass extends BaseClass {
  value: string = "Hello";
  constructor(options = {}) {
    super(options);
    this._defineProperties("value");
  }
}
describe("UpdatesTracker", () => {
  it("UpdatesTracker should track modifications of basic types", async () => {
    const o = new MyTestClass();
    const tracker = new UpdatesTracker<string>({
      data: o.value,
      dump: () => o.value,
      restore: (v: string) => (o.value = v),
    });

    expect(tracker.modified).toBe(false);
    expect(tracker.submittedData).toBe("Hello");
    expect(tracker.data).toBe("Hello");

    o.value = "Hello World";
    expect(tracker.modified).toBe(true);
    expect(tracker.submittedData).toBe("Hello");
    expect(tracker.data).toBe("Hello World");

    tracker.restore();

    expect(tracker.modified).toBe(false);
    expect(tracker.submittedData).toBe("Hello");
    expect(tracker.data).toBe("Hello");

    o.value = "Hello Wonderful World";
    expect(tracker.modified).toBe(true);
    expect(tracker.submittedData).toBe("Hello");
    expect(tracker.data).toBe("Hello Wonderful World");

    tracker.submit();

    expect(tracker.modified).toBe(false);
    expect(tracker.submittedData).toBe("Hello Wonderful World");
    expect(tracker.data).toBe("Hello Wonderful World");
  });
});
