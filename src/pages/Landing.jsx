import Body from "../components/Body";
import Footer from "../components/Footer";
import Header from "../components/header/Header";

import { Global } from "../main";

function Landing() {
  const presets = {};

  return (
    <>
      <Header colors={Global.colors}></Header>
      <Body colors={Global.colors} direction={"flex-row"}>
        <section
          className={` flex flex-col items-center gap-10 w-full py-10 relative `}
        >
          <h1 className={` text-4xl font-bold ${Global.colors.title} `}>
            Como começar?
          </h1>

          <div
            className={`flex flex-col place-items-center w-full py-10 ${Global.colors.frontground1}`}
          >
            <div className="flex flex-col place-items-center gap-10 max-w-1/2 ">
              <h2 className={`text-5xl font-bold ${Global.colors.title} `}>
                Como usar o menu lateral:
              </h2>

              <p className={`text-2xl text-justify `}>
                {" "}
                O menu localizado à esquerda reúne todas as principais
                ferramentas do sistema. Basta clicar em uma opção para acessar
                sua funcionalidade.
              </p>
            </div>
          </div>

          <section>
            <div className={`flex flex-col place-items-center gap-4 w-3/10 p-5 rounded-2xl ${Global.colors.frontground0} border-2 ${Global.colors.border} flip3D swordGlow movimentAnim`}>
              <i className={`fas fa-brain text-5xl ${Global.colors.title}`}></i>
              <h1 className={`text-3xl font-bold ${Global.colors.title}`}>Início</h1>
              <p className="text-xl text-justify">Estoque Cadastre, edite e acompanhe todos os produtos disponíveis em seu estoque.</p>
            </div>
          </section>

          <span className=" flex place-items-center gap-2 absolute text-yellow-500 font-bold left-1/25 animate-bounce">
            <i className="fas fa-hand-point-left text-yellow-500 text-2xl"></i>
            Clique aqui para a abrir o menu!
          </span>
        </section>
      </Body>
      <Footer colors={Global.colors}></Footer>
    </>
  );
}
export default Landing;
