import Link from "@/components/ui/Link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 | Nicolas Alan",
  description:
    "Ah! Esta página não existe",
};

const Custom404 = (): JSX.Element => (
  <div className="flex flex-col gap-2">
    <h1>404 - Página não encontrada</h1>
    <p className="text-secondary">
        Ah! Esta página não existe, talvez você tenha clicado em um link antigo ou
        com erros ortográficos. Por favor, tente novamente …
    </p>
    <div className="h-2" />
    <Link href="/" underline>
      Voltar para home
    </Link>
  </div>
);

export default Custom404;
