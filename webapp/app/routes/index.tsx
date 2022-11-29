import { useTranslation } from "react-i18next";

export const meta = () => {
  return { title: "Totot" };
};

// This tells remix to load the "home" namespace
export let handle = {
  i18n: "home",
};

export default function Index() {
  const links = [
    {
      href: "https://remix.run/tutorials/blog",
      text: "15m Quickstart Blog Tutorial",
    },
    {
      href: "https://remix.run/tutorials/jokes",
      text: "Deep Dive Jokes App Tutorial",
    },
    {
      href: "https://remix.run/docs",
      text: "Remix Docs",
    },
    {
      href: "https://github.com/unocss/unocss",
      text: "UnoCSS Repository",
    },
    {
      href: "https://uno.antfu.me/",
      text: "UnoCSS Docs",
    },
  ];

  let { t } = useTranslation("home");

  return (
    <main className="py-16 px-4 max-w-screen-md mx-auto w-full">
      <h1 className="text-4xl font-bold  mb-6">
        {t("title")}
      </h1>
      <p>Welcome to Remix + UnoCSS 💿</p>

      <ul className="list-disc grid gap-2 px-4.5">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="text-blue-500 underline"
              target="_blank"
              rel="noreferrer"
            >
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
