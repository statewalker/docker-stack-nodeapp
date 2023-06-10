import { effect, Signal } from "@preact/signals-core";
import React from "react";

export default function useValues<T>(compute = () => {}): T {
  const f: () => T = typeof compute === "function"
    ? compute as () => T
    : () => (compute as Signal<T>).value;
  const [value, setValue] = React.useState<T>(f);
  React.useEffect(() => effect(() => setValue(f())), []);
  return value;
}
