import Header from "../components/header/Header";
import Body from "../components/Body";
import Footer from "../components/Footer";

import banner0 from "../assets/images/banner0.svg";
import banner1 from "../assets/images/banner1.svg";
import banner2 from "../assets/images/banner2.svg";
import banner3 from "../assets/images/banner3.svg";
import banner4 from "../assets/images/banner4.svg";
import banner5 from "../assets/images/banner5.svg";
import banner6 from "../assets/images/banner6.svg";

import { Global } from "../main";

function Home() {
  const presets = {
    primaryDivs: "flex flex-col items-center gap-1 md:items-start md:flex-row",
    images:
      "h-full self-center xs:max-w-xs sm:max-w-md md:max-w-md lg:max-w-2xl md:w-1/2",

    secondDivs: "flex flex-col gap-1 md:w-1/2 h-full",
    title: ` font-bold text-2xl md:text-3xl lg:text-4xl ${Global.colors.title} `,
    parag: "pl-3 text-1xl md:text-2xl lg:text-3xl",
  };
  return (
    <>
      <Header colors={Global.colors}></Header>
      <Body colors={Global.colors} direction={"flex-col"}>
        <section
          className={`flex flex-col items-center gap-25 w-full px-10 my-40 text-justify wrap-break-word `}
        >
          <div className={presets.primaryDivs}>
            <img src={banner0} alt="#" className={presets.images} />

            <div className={presets.secondDivs}>
              <h1 className={presets.title}>
                Gestão inteligente de estoque para empresas modernas
              </h1>

              <p className={presets.parag}>
                O Orgrise é a plataforma de gestão de estoque desenvolvida para
                simplificar operações, automatizar processos e dar total
                controle sobre produtos, movimentações e inventário em tempo
                real.
              </p>
            </div>
          </div>

          <div className={presets.primaryDivs}>
            <img src={banner1} alt="#" className={presets.images} />

            <div className={presets.secondDivs}>
              <h1 className={presets.title}>Controle tudo</h1>

              <p className={presets.parag}>
                O Orgrise oferece um sistema moderno e intuitivo para empresas
                que precisam acompanhar produtos, entradas, saídas e inventários
                com eficiência.
              </p>

              <ul className={`list-disc pl-12`}>
                <li>Controle de produtos</li>
                <li>Gestão de entradas e saídas</li>
                <li>Inventário em tempo real</li>
                <li>Histórico de movimentações</li>
                <li>Organização inteligente de estoque</li>
              </ul>
            </div>
          </div>

          <div className={presets.primaryDivs}>
            <img src={banner2} alt="#" className={presets.images} />

            <div className={presets.secondDivs}>
              <h1 className={presets.title}>Acesse de qualquer lugar</h1>

              <p className={presets.parag}>
                Gerencie seu estoque em desktop, tablet ou celular. O Orgrise
                acompanha sua operação onde sua empresa estiver. Acompanhe
                movimentações em tempo real, visualize relatórios atualizados e
                tenha informações importantes sempre disponíveis para tomada de
                decisões.
              </p>
            </div>
          </div>

          <div className={presets.primaryDivs}>
            <img src={banner3} alt="#" className={presets.images} />

            <div className={presets.secondDivs}>
              <h1 className={presets.title}>Cresça com mais organização</h1>

              <p className={presets.parag}>
                Mais do que armazenar produtos, o Orgrise ajuda sua empresa a
                reduzir perdas, evitar erros e otimizar processos. Com uma visão
                clara do estoque, você consegue planejar melhor compras,
                controlar disponibilidade e melhorar a eficiência operacional.
              </p>
            </div>
          </div>

          <div className={presets.primaryDivs}>
            <img src={banner4} alt="#" className={presets.images} />

            <div className={presets.secondDivs}>
              <h1 className={presets.title}>
                Dados que ajudam sua empresa a evoluir
              </h1>

              <p className={presets.parag}>
                Visualize métricas importantes do estoque, acompanhe produtos
                com maior movimentação e tenha relatórios que auxiliam no
                crescimento sustentável do negócio. O Orgrise transforma dados
                em decisões mais inteligentes.
              </p>
            </div>
          </div>

          <div className={presets.primaryDivs}>
            <img src={banner5} alt="#" className={presets.images} />

            <div className={presets.secondDivs}>
              <h1 className={presets.title}>
                Qualquer empresa pode usar o Orgrise
              </h1>

              <p className={presets.parag}>
                Seja uma pequena loja, distribuidora ou operação em crescimento,
                o Orgrise foi criado para simplificar a gestão de estoque e
                tornar processos mais rápidos, organizados e eficientes. Do
                primeiro produto cadastrado até operações maiores, você mantém o
                controle completo do inventário.
              </p>
            </div>
          </div>

          <div className={presets.primaryDivs}>
            <img src={banner6} alt="#" className={presets.images} />

            <div className={presets.secondDivs}>
              <h1 className={presets.title}>
                Organização e produtividade desde o primeiro dia
              </h1>

              <p className={presets.parag}>
                Cadastre produtos rapidamente, acompanhe movimentações em tempo
                real e organize seu estoque sem depender de planilhas
                complicadas. O Orgrise combina simplicidade, velocidade e
                controle para facilitar a rotina da sua empresa.
              </p>
            </div>
          </div>
        </section>
      </Body>
      <Footer colors={Global.colors}></Footer>
    </>
  );
}
export default Home;
