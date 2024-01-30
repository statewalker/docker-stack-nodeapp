import { Header } from "@repo/ui/header";
import "./style.css";
import typescriptLogo from "./typescript.svg";
import { Counter } from "@repo/ui/counter";
import { setupCounter } from "@repo/ui/setup-counter";
import { BaseClass } from "@repo/core";

class MyClass extends BaseClass {
  value: string = "Hello";
  constructor(options = {}) {
    super(options);
    this._defineProperties("value");
  }
}

const instance = new MyClass();
instance.autorun((o) => {
  console.log(">>>", o.value);
});

(async () => {
  for (let i = 0; i < 1000; i++) {
    instance.value = "Hello " + i;
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }
})();

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
<div>
  <a href="https://vitejs.dev" target="_blank">
    <img src="/vite.svg" class="logo" alt="Vite logo" />
  </a>
  <a href="https://www.typescriptlang.org/" target="_blank">
    <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
  </a>
  ${Header({ title: "Web" })}
  <div data-name="message"></div>
  <div class="card">
    ${Counter()}
  </div>
</div>
`;
setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);

const messageView = document.querySelector("[data-name='message']");
function updateView(message: string) {
  messageView!.innerHTML = message;
}
instance.autorun(() => {
  updateView(instance.value);
});
