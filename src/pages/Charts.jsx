import Body from "../components/Body";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MyPieChart from "../components/charts/MyPieChart";

import { Global } from "../main";

function Charts() {
  const data = [
    { name: "a", value: 100 },
    { name: "b", value: 50 },
    { name: "d", value: 25 },
  ];

  return (
    <>
      <Header colors={Global.colors}></Header>
      <Body colors={Global.colors}>
        <section className={` flex flex-col items-center gap-10 w-full p-10 `}>
          <h1
            className={
              Global.colors.title +
              ` flex justify-center w-full font-bold text-4xl border-t-2 ${Global.colors.border} `
            }
          >
            Estoque
          </h1>

          <section className={` flex flex-row gap-100`}>
            <div>
              <h2 className={Global.colors.title + ` font-bold text-2xl `}>
                Produtos
              </h2>
              <MyPieChart data={data}></MyPieChart>
            </div>

            <div>
              <h2 className={Global.colors.title + ` font-bold text-2xl `}>
                Tipos de Produtos
              </h2>
              <MyPieChart data={data}></MyPieChart>
            </div>
          </section>

          <h1
            className={
              Global.colors.title +
              ` flex justify-center w-full font-bold text-4xl border-t-2 ${Global.colors.border} `
            }
          >
            Vendas
          </h1>

          <section className={` flex flex-row gap-10`}>
            <div>
              <h2 className={Global.colors.title + ` font-bold text-2xl `}>
                Produtos
              </h2>
              <MyPieChart data={data}></MyPieChart>
            </div>

            <div>
              <h2 className={Global.colors.title + ` font-bold text-2xl `}>
                Tipos de Produtos
              </h2>
              <MyPieChart data={data}></MyPieChart>
            </div>

            <div>
              <h2 className={Global.colors.title + ` font-bold text-2xl `}>
                Locais Vendidos
              </h2>
              <MyPieChart data={data}></MyPieChart>
            </div>
          </section>

          <h1
            className={
              Global.colors.title +
              ` flex justify-center w-full font-bold text-4xl border-t-2 ${Global.colors.border} `
            }
          >
            Clientes
          </h1>
          <section className={` flex flex-row gap-10`}>
            <div>
              <h2 className={Global.colors.title + ` font-bold text-2xl `}>
                Produtos
              </h2>
              <MyPieChart data={data}></MyPieChart>
            </div>

            <div>
              <h2 className={Global.colors.title + ` font-bold text-2xl `}>
                Tipos de Produtos
              </h2>
              <MyPieChart data={data}></MyPieChart>
            </div>

            <div>
              <h2 className={Global.colors.title + ` font-bold text-2xl `}>
                Locais Vendidos
              </h2>
              <MyPieChart data={data}></MyPieChart>
            </div>
          </section>
        </section>
      </Body>
      <Footer colors={Global.colors}></Footer>
    </>
  );
}
export default Charts;
