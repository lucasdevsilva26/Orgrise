import Header from "../components/Header";
import Footer from "../components/Footer";
import "./home.css";
import SideMenus from "../components/SideMenus";
import { useState } from "react";

function Home() {
  const [sideMenuState, changeSideMenuState] = useState(false);

  return (
    <>
      <Header
        sideMenuState={sideMenuState}
        changeSideMenuState={changeSideMenuState}
      ></Header>

      <main id="home">
        <SideMenus sideMenuState={sideMenuState}></SideMenus>

        <span></span>
        <div>
          <h1>Gestão inteligente de estoque para empresas modernas</h1>
          <p>
            O Orgrise é a plataforma de gestão de estoque desenvolvida para
            simplificar operações, automatizar processos e dar total controle
            sobre produtos, movimentações e inventário em tempo real.
          </p>
        </div>

        <span></span>
        <div>
          <h1>Controle tudo</h1>
          <p>
            O Orgrise oferece um sistema moderno e intuitivo para empresas que
            precisam acompanhar produtos, entradas, saídas e inventários com
            eficiência.
          </p>
          <ul>
            <li>Controle de produtos</li>
            <li>Gestão de entradas e saídas</li>
            <li>Inventário em tempo real</li>
            <li>Histórico de movimentações</li>
            <li>Organização inteligente de estoque</li>
          </ul>
        </div>

        <hr />

        <span></span>
        <div>
          <h1>Acesse de qualquer lugar</h1>
          <p>
            Gerencie seu estoque em desktop, tablet ou celular. O Orgrise
            acompanha sua operação onde sua empresa estiver. Acompanhe
            movimentações em tempo real, visualize relatórios atualizados e
            tenha informações importantes sempre disponíveis para tomada de
            decisões.
          </p>
        </div>

        <span></span>
        <div>
          <h1>Cresça com mais organização</h1>
          <p>
            Mais do que armazenar produtos, o Orgrise ajuda sua empresa a
            reduzir perdas, evitar erros e otimizar processos. Com uma visão
            clara do estoque, você consegue planejar melhor compras, controlar
            disponibilidade e melhorar a eficiência operacional.
          </p>
        </div>

        <span></span>
        <div>
          <h1>Dados que ajudam sua empresa a evoluir</h1>
          <p>
            Visualize métricas importantes do estoque, acompanhe produtos com
            maior movimentação e tenha relatórios que auxiliam no crescimento
            sustentável do negócio. O Orgrise transforma dados em decisões mais
            inteligentes.
          </p>
        </div>

        <span></span>
        <div>
          <h1>Qualquer empresa pode usar o Orgrise</h1>
          <p>
            Seja uma pequena loja, distribuidora ou operação em crescimento, o
            Orgrise foi criado para simplificar a gestão de estoque e tornar
            processos mais rápidos, organizados e eficientes. Do primeiro
            produto cadastrado até operações maiores, você mantém o controle
            completo do inventário.
          </p>
        </div>

        <span></span>
        <div>
          <h1>Organização e produtividade desde o primeiro dia</h1>
          <p>
            Cadastre produtos rapidamente, acompanhe movimentações em tempo real
            e organize seu estoque sem depender de planilhas complicadas. O
            Orgrise combina simplicidade, velocidade e controle para facilitar a
            rotina da sua empresa.
          </p>
        </div>
      </main>

      <Footer></Footer>
    </>
  );
}
export default Home;
