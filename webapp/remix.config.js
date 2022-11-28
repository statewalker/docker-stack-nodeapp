/* eslint-env node */
// // ONLY REQUIRED WITHIN THE TWIND MONOREPO
try {
  require("jiti/register");
} catch {
  // IGNORE
}

/**
 * @type {import("@remix-run/dev/config").AppConfig}
 */
module.exports = {
  appDirectory: "app",
  assetsBuildDirectory: "public/build",
  publicPath: "/build/",
  serverBuildDirectory: "build",
  devServerPort: 8002,
  ignoredRouteFiles: [".*"],
  serverDependenciesToBundle: [
    "twind",
    "@twind/core",
    "@twind/preset-typography",
    "@twind/preset-autoprefix",
    "@twind/preset-tailwind",
    // "@twind/with-remix",

    // "twind",
    // "@twind/with-remix",
    // "@twind/core",
    // "@twind/preset-autoprefix",
    // "@twind/preset-tailwind",
  ],
};
