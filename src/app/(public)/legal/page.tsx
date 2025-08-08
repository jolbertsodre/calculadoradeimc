import Link from "next/link";

export default function LegalPage() {
  return (
    <main className="flex flex-col min-h-screen flex-grow self-center max-w-264 w-full pl-2 pr-14">
      <section>
        <h1 className="font-bold text-4xl">Políticas de Privacidade</h1>
        <hr className="mt-10 w-full border-0 h-[1px] bg-[length:5px_1px] bg-gradient-to-r from-transparent to-transparent via-blue-main/50" />
      </section>

      <section className="mt-10">
        <div>
          <h2 className="font-bold text-2xl">Considerações Gerais</h2>
          <p className="mt-4 text-lg text-justify">
            Ao utilizar esta aplicação, o usuário concorda com os termos
            descritos nesta política. A aplicação foi projetada com foco em
            garantir a segurança e privacidade das informações inseridas, além
            de não realizar o armazenamento persistente de dados. Nenhuma
            informação pessoal será coletada ou armazenada de maneira
            permanente. O consentimento do usuário é obtido no momento da
            utilização da aplicação, sendo necessário para que as operações
            possam ser realizadas. Recomendamos que você não insira dados
            sensíveis ou informações pessoais em qualquer momento dentro da
            plataforma.
          </p>
        </div>

        <div className="mt-8">
          <h2 className="font-bold text-2xl">Consentimento</h2>
          <p className="mt-4 text-lg text-justify">
            Ao acessar e consumir a aplicação você concorda que temos que obter
            e manter, momentâneamente, os seus dados dentro da aplicação para a
            realização dos cálculos. Por favor, não insira nenhum dado sensível
            ou inadequado!
          </p>
        </div>

        <div className="mt-8">
          <h2 className="font-bold text-2xl">Uso das Informações</h2>
          <p className="mt-4 text-lg text-justify">
            Suas informações serão utilizadas somente para fins de cálculo,
            durante o momento que realizarmos a fórmula do IMC, após isso seus
            dados serão devidamente descartados.
          </p>
        </div>

        <div className="mt-8">
          <h2 className="font-bold text-2xl">Cookies</h2>
          <p className="mt-4 text-lg text-justify">
            Essa aplicação não utiliza de nenhum tipo de{" "}
            <Link
              className="underline text-blue-sec"
              target="_blank"
              href="https://pt.wikipedia.org/wiki/Cookie_(inform%C3%A1tica)"
            >
              Cookie
            </Link>{" "}
            ou{" "}
            <Link
              className="underline text-blue-sec"
              target="_blank"
              href="https://en.wikipedia.org/wiki/Web_storage"
            >
              Local Storage
            </Link>{" "}
            e não mantém nenhum dado do usuário salvo em cache ou na sessão.
          </p>
        </div>

        <div className="mt-8">
          <h2 className="font-bold text-2xl">Armazenamento de Dados</h2>
          <p className="mt-4 text-lg text-justify">
            Nenhuma informação inserida dentro da aplicação será mantida de
            forma persistente! Todos os dados serão utilizados e, logo após,
            devidamente descartados. A aplicação não utiliza nenhuma forma de
            manutenção ou armazenamento de dados persistentes (por exemplo:
            Banco de Dados, Armazenamento Local - Local Storage e/ou Nuvem),
            contudo, por motivos de segurança, não insira nenhum dado sensível
            em nenhum formulário dessa e de nenhuma aplicação que não tenha 100%
            (cem porcento) de confiança.
          </p>
        </div>
      </section>
    </main>
  );
}
