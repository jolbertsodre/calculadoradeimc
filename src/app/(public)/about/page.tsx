import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="flex-grow self-center max-w-264 w-full pl-2 pr-14">
      <section>
        <h1 className="font-bold text-4xl">Sobre o IMC</h1>
        <hr className="mt-10 w-full border-0 h-[1px] bg-[length:5px_1px] bg-gradient-to-r from-transparent to-transparent via-blue-main/50" />
      </section>

      <section className="mt-10">
        <div>
          <h2 className="font-bold text-2xl">O que é?</h2>

          <p className="mt-4 text-base text-justify">
            A <strong>Calculadora de IMC</strong> tem como objetivo garantir
            que, de forma simples e prática, através de uma aplicação web, seja
            possível realizar o cálculo e descobrir seu IMC. O{" "}
            <Link
              target="_blank"
              href="https://pt.wikipedia.org/wiki/%C3%8Dndice_de_massa_corporal"
              className="underline text-blue-sec"
            >
              IMC
            </Link>{" "}
            (Índice de Massa Corporal) é uma medida internacional que predita a{" "}
            <Link
              target="_blank"
              href="https://pt.wikipedia.org/wiki/Obesidade"
              className="underline text-blue-sec"
            >
              obesidade
            </Link>{" "}
            &mdash; creditado pela{" "}
            <Link
              target="_blank"
              href="https://pt.wikipedia.org/wiki/Organiza%C3%A7%C3%A3o_Mundial_da_Sa%C3%BAde"
              className="underline text-blue-sec"
            >
              OMS (Organização Mundial da Saúde)
            </Link>{" "}
            &mdash; através de um cálculo fácil do nível gordura do corpo de uma
            pessoa.
          </p>
        </div>

        <div className="mt-10">
          <h2 className="font-bold text-2xl">Como calcular?</h2>

          <section>
            <p className="mt-4 text-base text-justify">
              O IMC é calculado através de um cálculo simples, com o peso (em
              quilogramas) divido pela altura (em metros) ao quadrado.
            </p>
            <Image
              src="/imc-formula.svg"
              alt="Imagem da fórmula do cálculo do IMC"
              width={0}
              height={0}
              className="mt-5 w-38"
            />
          </section>

          <section className="mt-8">
            <p className="mt-4 text-base text-justify">
              O cálculo do IMC resulta em um valor em kg/m², que, ao ser
              comparado a padrões definidos previamentes pela OMS, determina seu
              quadro, podendo ser desde Magreza Severa até Obesidade Grau III.
              Segue abaixo um exemplo de um indivíduo com 85 kg de massa e 1,90
              m de altura.
            </p>
            <Image
              src="/imc-example.svg"
              alt="Imagem de exemplo do resultado do cálculo do IMC"
              width={0}
              height={0}
              className="mt-5 w-96"
            />
          </section>
        </div>

        <div className="mt-10">
          <h2 className="font-bold text-2xl">Tabela de Índices</h2>

          <p className="mt-4 text-base text-justify">
            Como veremos abaixo na tabela, seguindo o nosso exemplo anterior, o
            indivíduo de 85 kg e 1,90 m de altura estaria no seu peso ideal
            &mdash; entre <strong>18,49 e 24,99</strong> &mdash;, com uma
            ligeira folga. Segue abaixo a tabela com os índices das respectivas
            faixas de IMC, para indivíduos entre <strong>18 e 60 anos</strong>.
          </p>

          <table className="mt-8 table-auto w-full text-left border-separate border-spacing-0">
            <thead>
              <tr className="bg-blue-main text-white-main">
                <th>Resultado (IMC em kg/m²)</th>
                <th>Classificação</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>
                  Abaixo de <strong>17</strong>
                </td>
                <td>Muito abaixo do peso ideal (Magreza Severa)</td>
              </tr>

              <tr>
                <td>
                  Entre <strong>17 e 18,49</strong>
                </td>
                <td>Abaixo do peso ideal (Magreza)</td>
              </tr>

              <tr>
                <td>
                  Entre <strong>18,50 e 24,99</strong>
                </td>
                <td>Peso ideal</td>
              </tr>

              <tr>
                <td>
                  Entre <strong>25 e 29,99</strong>
                </td>
                <td>Acima do peso (Sobrepeso)</td>
              </tr>

              <tr>
                <td>
                  Entre <strong>30 e 34,99</strong>
                </td>
                <td>Obesidade Grau I</td>
              </tr>

              <tr>
                <td>
                  Entre <strong>35 e 39,99</strong>
                </td>
                <td>Obesidade Grau II</td>
              </tr>

              <tr>
                <td>
                  Acima de <strong>40</strong>
                </td>
                <td>Obesidade Grau III (Obesidade Mórbida)</td>
              </tr>
            </tbody>
          </table>

          <p className="mt-8 text-base text-justify">
            Para indivíduos com idade <strong>menor que 18</strong> ou{" "}
            <strong>maior que 60</strong> a forma de cálculo é ligeiramente
            diferente. Para os idosos os valores das faixas de IMC ficam um
            pouco mais abrangentes, já para as crianças e adolescentes &mdash;{" "}
            <strong>entre 2 e 20 anos</strong> &mdash; utiliza-se um sistema de{" "}
            <Link
              target="_blank"
              href="https://pt.wikipedia.org/wiki/Percentil"
              className="underline text-blue-sec"
            >
              percentil
            </Link>
            , que, ao ser comparada à uma média previamente estabelecida, define
            a classificação desse jovem.
          </p>
        </div>
      </section>

      <section className="mt-10">
        <div>
          <h2 className="font-bold text-2xl">
            IMC para Idosos (Acima de 60 anos)
          </h2>

          <p className="mt-4 text-base text-justify">
            O IMC para idosos não segue um consenso de padrão bem estabelecido
            internacionalmente, contudo, o{" "}
            <Link
              target="_blank"
              href="https://www.gov.br/saude/pt-br"
              className="underline text-blue-sec"
            >
              Ministério da Saúde no Brasil
            </Link>{" "}
            adota e segue o padrão de{" "}
            <Link
              target="_blank"
              href="https://pubmed.ncbi.nlm.nih.gov/8197257/"
              className="underline text-blue-sec"
            >
              Lipschitz
            </Link>
            , que mantém valores ligeiramente diferentes para as faixas de IMC.
            Segue abaixo uma tabela de índices para o IMC dos idosos.
          </p>

          <table className="mt-8 table-auto w-full text-left border-separate border-spacing-0">
            <thead>
              <tr className="bg-blue-main text-white-main">
                <th>Resultado (IMC em kg/m²)</th>
                <th>Classificação</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>
                  Abaixo de <strong>22</strong>
                </td>
                <td>Baixo Peso</td>
              </tr>

              <tr>
                <td>
                  Entre <strong>22 e 27</strong>
                </td>
                <td>Peso ideal</td>
              </tr>

              <tr>
                <td>
                  Acima de <strong>27</strong>
                </td>
                <td>Sobrepeso</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-10">
          <section>
            <h2 className="font-bold text-2xl">
              IMC para crianças e adolescentes (Entre 2 e 20 anos)
            </h2>

            <div className="mt-4">
              <p className="text-base text-justify">
                O IMC para crianças segue o mesmo problema que o dos idosos, uma
                vez que, no caso das crianças, são indivíduos ainda em
                desenvolvimento que, naturalmente, começam a vida com mais
                gordura corporal sem contar com as mudanças no fator altura e
                peso constantes e muitas vezes repentinas e diferenças
                estruturais na composição corporal entre meninos e meninas. Por
                isso houve a iniciativa da criação de um IMC exclusivo para as
                crianças. O IMC para crianças leva em consideração a idade, o
                peso e a altura, comparando-os com outras crianças do mesmo
                gênero e faixa etária.
              </p>
              <p className="mt-2 text-base text-justify">
                Profissionais de saúde usam gráficos de crescimento para
                acompanhar o desenvolvimento de crianças e jovens de 2 a 20
                anos. O IMC por idade indica o percentil da criança, que mostra
                como seu IMC se compara com o de outras da mesma idade e gênero.
                Por exemplo, um menino no <strong>percentil 86</strong> tem um
                IMC <strong>maior que 86%</strong> dos meninos da mesma idade, o
                que indicaria <strong>sobrepeso</strong>. Por fim, a análise
                contínua do IMC ao longo do tempo é mais relevante que um único
                valor, dado que as crianças atravessam fases de crescimento
                acelerado, o que pode influenciar temporariamente os resultados.
                Segue abaixo uma tabela com o percentil das crianças e
                adolescentes <strong>entre 2 e 20 anos</strong> e suas
                determinadas faixas.
              </p>
            </div>

            <table className="mt-8 table-auto w-full text-left border-separate border-spacing-0">
              <thead>
                <tr className="bg-blue-main text-white-main">
                  <th>Resultado (Percentil)</th>
                  <th>Classificação</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>
                    Menor que <strong>5</strong>
                  </td>
                  <td>Baixo Peso</td>
                </tr>

                <tr>
                  <td>
                    Entre <strong>5 e 84,99</strong>
                  </td>
                  <td>Peso ideal</td>
                </tr>

                <tr>
                  <td>
                    Maior ou igual a <strong>85</strong>
                  </td>
                  <td>Sobrepeso</td>
                </tr>
              </tbody>
            </table>
          </section>
        </div>

        <div className="mt-10">
          <h2 className="font-bold text-2xl">Limitações do IMC</h2>

          <p className="mt-4 text-base text-justify">
            O IMC é um cálculo simples e prático, contudo, infelizmente não é
            perfeito e nem 100% (cem porcento) replicável em todos os casos. O
            IMC tem algumas limitações que podem gerar alguns problemas caso não
            sejam ressaltadas. O primeiro e, possivelmente, mais claro é o da
            distinção entre massa magra e gorda o que, no caso de um atleta, por
            exemplo, pode indicar como um IMC alto mas não necessariamente
            indica um quadro de obesidade, uma vez que esse atleta teria uma
            alta quantidade de massa magra.
          </p>

          <p className="mt-4 text-base text-justify">
            Um segundo, mas não menos importante ponto, é que ele também não
            leva em conta a distribuição da gordura corporal, o que pode
            subestimar riscos para a saúde, como doenças cardiovasculares, para
            além disso, também não reflete o risco de doenças como diabetes e
            hipertensão, e seus valores de referência podem não ser universais
            para todas as etnias ou culturas. Portanto, o IMC deve ser visto
            como uma ferramenta inicial e complementado com outras avaliações de
            saúde. Sempre que possível, procure um médico especializado.
          </p>
        </div>

        <div className="mt-12">
          <h3 className="font-bold text-xl">Referências</h3>

          <ol className="mt-4 pl-4">
            <li>
              <Link
                target="_blank"
                href="https://pt.wikipedia.org/wiki/%C3%8Dndice_de_massa_corporal#cite_ref-CapoPress_1-0"
                className="underline text-blue-sec"
              >
                Índice de massa corporal
              </Link>
              <span className="text-xs italic"> - pt.wikipedia.org</span>
            </li>

            <li className="mt-2">
              <Link
                target="_blank"
                href="https://www.who.int/data/gho/data/themes/topics/topic-details/GHO/body-mass-index"
                className="underline text-blue-sec"
              >
                Índice de Massa Corporal (OMS)
              </Link>
              <span className="text-xs italic"> - who.int</span>
            </li>

            <li className="mt-2">
              <Link
                target="_blank"
                href="https://www.who.int/tools/growth-reference-data-for-5to19-years/indicators/bmi-for-age"
                className="underline text-blue-sec"
              >
                Percentil para o IMC das crianças (5 a 19 anos (OMS))
              </Link>
              <span className="text-xs italic"> - who.int</span>
            </li>

            <li className="mt-2">
              <Link
                target="_blank"
                href="https://www.cdc.gov/growthcharts/cdc-growth-charts.htm"
                className="underline text-blue-sec"
              >
                Percentil para o IMC das crianças (2 a 20 anos (CDC))
              </Link>
              <span className="text-xs italic"> - cdc.gov</span>
            </li>

            <li className="mt-2">
              <span>
                IMC para idosos (Padrão de Lipschitz) - LIPSCHITZ, D.A.
                Screening for Nutritional Status in the Elderly. Primary Care,
                [S. l.], v. 21, n. 1, p. 55-67, mar.1994. (Indexed for MEDLINE).
                Disponível em: {"<"}
                <Link
                  target="_blank"
                  href="http://www.ncbi.nlm.nih.gov/pubmed/8197257"
                  className="text-blue-sec"
                >{`http://www.ncbi.nlm.nih.gov/pubmed/8197257`}</Link>
                {">"}.
              </span>
            </li>
          </ol>
        </div>
      </section>
    </div>
  );
}
