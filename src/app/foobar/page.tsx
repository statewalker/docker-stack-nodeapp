// import Link from 'next/link';
import { loadData } from "src/lib/api"

export default async function FooBar() {
  const data = await loadData();
  return (
    <div className="space-y-6">
      <div className="space-y-8">
       Foo And Bar!
      </div>
    </div>
  );
}
