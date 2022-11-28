import { useTranslation } from "react-i18next";


export const meta = () => {
  return { title: "Totot" };
};

// This tells remix to load the "home" namespace
export let handle = {
  i18n: "home",
};

export default function Index() {
  let { t } = useTranslation("home");
  return (
    <main className="h-screen bg-purple-400 flex items-center justify-center">
      <h1 className="font-bold /* you can even use inline comments */ text-(center 5xl white sm:gray-800 md:pink-700)">
       {t("title")}
      </h1>
    </main>
  )
}
