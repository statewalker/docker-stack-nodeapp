import { expect, test } from "vitest";
import defineProperties from "../src/defineProperties";

test("should re-define plain object properties", async () => {
  const obj = defineProperties({
    firstName: "John",
    lastName: "Smith",
  }, ["firstName", "lastName"]);

  const results: string[] = [];
  obj.$$(({ firstName, lastName }) => {
    results.push(`Hello ${firstName} ${lastName}!`);
  });
  expect(results).toEqual(["Hello John Smith!"]);

  obj.firstName = "Jean";
  expect(results).toEqual([
    "Hello John Smith!",
    "Hello Jean Smith!",
  ]);

  obj.lastName = "Dupon";
  expect(results).toEqual([
    "Hello John Smith!",
    "Hello Jean Smith!",
    "Hello Jean Dupon!",
  ]);
});

test("should be able to update multiple fields at once", async () => {
  const obj = defineProperties({
    firstName: "John",
    lastName: "Smith",
  }, ["firstName", "lastName"]);

  const results: string[] = [];
  obj.$$(({ firstName, lastName }) => {
    results.push(`Hello ${firstName} ${lastName}!`);
  });
  expect(results).toEqual(["Hello John Smith!"]);

  obj.$$update((o) => {
    o.firstName = "Jean";
    o.lastName = "Dupon";
  });
  expect(results).toEqual([
    "Hello John Smith!",
    "Hello Jean Dupon!",
  ]);
});

class Person {
  firstName: string;

  lastName: string;

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  sayHello(): string {
    return `Hello ${this.fullName}!`;
  }

  constructor(
    { firstName, lastName }: { firstName: string; lastName: string },
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    defineProperties(this, ["firstName", "lastName"]);
  }

  autorun<T extends this>(action: (person: T) => void) {
    const run: (action: (person: T) => void) => void = (this as any).$$;
    run(action);
  }
  update<T extends this>(action: (person: T) => void) {
    const run: (action: (person: T) => void) => void = (this as any).$$update;
    run(action);
  }
}

test("should be able to re-define class fields", async () => {
  const person = new Person({
    firstName: "John",
    lastName: "Smith",
  });

  let greetings: string[] = [];

  expect(greetings).toEqual([]);

  person.autorun((p) => {
    greetings.push(p.sayHello());
  });
  expect(greetings).toEqual(["Hello John Smith!"]);

  person.firstName = "Jean";
  expect(greetings).toEqual([
    "Hello John Smith!",
    "Hello Jean Smith!",
  ]);

  person.lastName = "Dupon";
  expect(greetings).toEqual([
    "Hello John Smith!",
    "Hello Jean Smith!",
    "Hello Jean Dupon!",
  ]);
});

test("'$$update' method should allow to group modifications", async () => {
  const person = new Person({
    firstName: "John",
    lastName: "Smith",
  });

  let greetings: string[] = [];

  expect(greetings).toEqual([]);

  person.autorun((p) => {
    greetings.push(p.sayHello());
  });
  expect(greetings).toEqual(["Hello John Smith!"]);

  person.update(() => {
    person.firstName = "Jean";
    person.lastName = "Dupon";
  });
  expect(greetings).toEqual([
    "Hello John Smith!",
    "Hello Jean Dupon!",
  ]);
});
