import { defineConfig } from "@twind/core";
import presetAutoprefix from "@twind/preset-autoprefix";
import presetTypography from "@twind/preset-typography";
import presetTailwind from "@twind/preset-tailwind";
// import { setup } from "@twind/tailwind"
import install from "@twind/with-remix";

export default function setupTwind() {
  const config = defineConfig({
    presets: [
      presetAutoprefix(),
      presetTypography(/* options */),
      presetTailwind(), /* options */
    ],
    /* config */
  });
  console.log('>>>>>>>>>>>>>>>>>>>>>FUCK', config);
  install(config);
}
