export type Item = {
  name: string;
  slug: string;
};

export async function loadData(): Promise<Item[]> {
  return [{
    name: "Hello",
    slug: "hello"
  }, {
    name: "World",
    slug: "world"
  }]
}