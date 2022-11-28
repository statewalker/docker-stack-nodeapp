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
    <main>
      <h1>
       {t("title")}
      </h1>
    </main>
  )
}
