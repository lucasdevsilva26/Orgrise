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
          className={` flex flex-col items-center w-full py-10 relative `}
        >
          <h1 className={` text-4xl font-bold `}>Como começar?</h1>
          <p></p>

          <span className=" flex place-items-center gap-2 absolute text-yellow-500 font-bold left-1/25 animate-bounce">
            <i className="fas fa-hand-point-left text-yellow-500 text-2xl"></i>Clique aqui
            para a abrir o menu!
          </span>
        </section>
      </Body>
      <Footer colors={Global.colors}></Footer>
    </>
  );
}
export default Landing;
