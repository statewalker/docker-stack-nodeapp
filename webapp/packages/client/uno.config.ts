// uno.config.ts
import presetUno from "@unocss/preset-uno";

import {
  defineConfig,
  presetIcons,
  presetTypography,
  presetWebFonts,
} from "unocss";

export default defineConfig({
  presets: [
    presetUno(),
    presetTypography(),
    presetWebFonts({
      provider: "google",
      fonts: {
        sans: "Inter",
        mono: ["Fira Code", "Fira Mono:400,700"],
      },
    }),
    presetIcons({
      scale: 1.2,
      cdn: "https://esm.sh/",
    }),
  ],

  theme: {
    darkMode: "class",
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    colors: {
      // "primary": {
      //   "50": "#fff1f2",
      //   "100": "#ffe4e6",
      //   "200": "#fecdd3",
      //   "300": "#fda4af",
      //   "400": "#fb7185",
      //   "500": "#f43f5e",
      //   "600": "#e11d48",
      //   "700": "#be123c",
      //   "800": "#9f1239",
      //   "900": "#881337",
      // },
      "primary": {
        "0": "#fcfcfc",
        "50": "#f8fafc",
        "100": "#f1f5f9",
        "200": "#e2e8f0",
        "300": "#cbd5e1",
        "400": "#94a3b8",
        "500": "#64748b",
        "600": "#475569",
        "700": "#334155",
        "800": "#1e293b",
        "900": "#0f172a",
      },
    },
  },
});
