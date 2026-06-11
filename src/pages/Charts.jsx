import Body from "../components/Body";
import Footer from "../components/Footer";
import Header from "../components/header/Header";
import MyPieChart from "../components/charts/MyPieChart";

import { Global } from "../main";
import { useState } from "react";

function Charts() {
  const userData = JSON.parse(localStorage.getItem("userData")) || [];
  const inventory =
    userData.find((data) => data.email === localStorage.getItem("logged"))
      ?.storage || [];

  const [valueToShow, setValueToShow] = useState("Price");
  const presets = {
    button:
      ` w-35 h-10 rounded-xl border-2 cursor-pointer font-bold text-xl ` +
      Global.colors.frontground0 +
      Global.colors.border,
  };

  const colors = [
    "#00BAA6",
    "#FF8A3D",
    "#FFCF33",
    "#8B5CF6",
    "#EF4444",
    "#3B82F6",
    "#10B981",
    "#EC4899",
    "#F97316",
    "#06B6D4",
  ];

  return (
    <>
      <Header colors={Global.colors}></Header>
      <Body colors={Global.colors}>
        <section className={` flex flex-col items-center w-full `}>
          <section className={`flex flex-col items-center w-full p-10`}>
            <div className={` flex gap-5 `}>
              <button
                className={presets.button}
                onClick={() => setValueToShow("Amount")}
              >
                Quantidade
              </button>
              <button
                className={presets.button}
                onClick={() => setValueToShow("Price")}
              >
                Preço
              </button>
            </div>

            <div
              className={` flex flex-col place-items-center w-max h-max my-10 relative `}
            >
              <h1 className={` mb-5 text-2xl font-bold ` + Global.colors.title}>
                {valueToShow === "Price"
                  ? "PREÇO"
                  : valueToShow === "Amount"
                    ? "QUANTIDADE"
                    : valueToShow}
              </h1>

              <div
                className={` flex flex-col place-items-center mt-5 absolute left-1/2 top-1/2 -translate-1/2 font-bold text-2xl `}
              >
                <h1>{inventory.length}</h1>
                <h2>Produtos Cadastrados</h2>
              </div>

              <MyPieChart
                data={inventory}
                size={[500, 500]}
                valueToShow={valueToShow}
                colors={colors}
              ></MyPieChart>
            </div>
          </section>

          <section
            className={` flex flex-wrap items-center justify-center gap-5 w-full h-max px-10 py-4 ` + Global.colors.frontground0}
          >
            <span
              className={` flex place-items-center gap-2 font-bold `}
              style={{ color: colors[0] }}
            >
              <i className={`fas fa-` + inventory[0].icon}></i>
              {inventory[0].Name}
            </span>

            <span
              className={` flex place-items-center gap-2 font-bold `}
              style={{ color: colors[1] }}
            >
              <i className={`fas fa-` + inventory[1].icon}></i>
              {inventory[1].Name}
            </span>
          </section>
        </section>
      </Body>
      <Footer colors={Global.colors}></Footer>
    </>
  );
}
export default Charts;
