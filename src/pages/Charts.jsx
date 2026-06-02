import Body from "../components/Body";
import Footer from "../components/Footer";
import Header from "../components/Header";

import { Global } from "../main";

function Charts() {
  return (
    <>
      <Header colors={Global.colors}></Header>
      <Body colors={Global.colors}>
        <section className={` flex flex-col items-center gap-10 w-full p-10 `}>
          <h1 className={Global.colors.title + ` flex justify-center w-full font-bold text-4xl border-t-2 ${Global.colors.border} `}>
            Estoque
          </h1>
          <h2 className={Global.colors.title + ` font-bold text-2xl `}>
            Produtos
          </h2>
          <h2 className={Global.colors.title + ` font-bold text-2xl `}>
            Tipos de Produtos
          </h2>

          <h1 className={Global.colors.title + ` flex justify-center w-full font-bold text-4xl border-t-2 ${Global.colors.border} `}>
            Vendas
          </h1>
          <h2 className={Global.colors.title + ` font-bold text-2xl `}>
            Produtos
          </h2>
          <h2 className={Global.colors.title + ` font-bold text-2xl `}>
            Tipos de Produtos
          </h2>
          <h2 className={Global.colors.title + ` font-bold text-2xl `}>
            Locais Vendidos
          </h2>

          <h1 className={Global.colors.title + ` flex justify-center w-full font-bold text-4xl border-t-2 ${Global.colors.border} `}>
            Clientes
          </h1>
          <h2 className={Global.colors.title + ` font-bold text-2xl `}>
            Produtos
          </h2>
          <h2 className={Global.colors.title + ` font-bold text-2xl `}>
            Tipos de Produtos
          </h2>
          <h2 className={Global.colors.title + ` font-bold text-2xl `}>
            Locais Vendidos
          </h2>
        </section>
      </Body>
      <Footer colors={Global.colors}></Footer>
    </>
  );
}
export default Charts;
