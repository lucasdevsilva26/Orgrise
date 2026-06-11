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

  const [page, setPage] = useState(1);

  const inventoryDatas = {
    Price: inventory.slice(0, 10).map((item) => item.Price),
    Amount: inventory.slice(0, 10).map((item) => item.Amount),
  };

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
              className={` flex flex-col place-items-center gap-10 w-max h-max my-5 `}
            >
              <div className={` w-max h-max relative `}>
                <MyPieChart
                  data={inventory.slice(0, 10)}
                  size={[750, 750]}
                  valueToShow={valueToShow}
                  colors={colors}
                ></MyPieChart>

                <div
                  className={` flex flex-col place-items-center absolute left-1/2 top-1/2 -translate-1/2 font-bold text-2xl `}
                >
                  <h1
                    className={
                      ` mb-5 text-4xl font-bold ` + Global.colors.title
                    }
                  >
                    {valueToShow === "Price"
                      ? "PREÇO"
                      : valueToShow === "Amount"
                        ? "QUANTIDADE"
                        : valueToShow}
                  </h1>

                  <h2>Items Cadastrados:</h2>
                  <h3>{inventory.length}</h3>

                  <h4>{`${page} / ${Math.round(inventory.length / 10)} páginas`}</h4>
                </div>
              </div>

              <div className={`flex gap-4`}>
                <button
                  className={presets.button}
                  onClick={() => {
                    setPage((page - 1) % Math.round(inventory.length / 10));
                  }}
                >
                  Voltar
                </button>

                <button
                  className={presets.button}
                  onClick={() => {
                    setPage((page + 1) % Math.round(inventory.length / 10));
                  }}
                >
                  Avançar
                </button>
              </div>
            </div>
          </section>

          <section
            className={
              ` flex flex-wrap items-center justify-center gap-5 w-full h-max px-10 py-4 ` +
              Global.colors.frontground1
            }
          >
            {inventory.slice(10 * page - 10, 10 * page).map((item, index) => {
              return (
                <span
                  key={index}
                  className={` flex place-items-center gap-2 font-bold text-2xl `}
                  style={{ color: colors[index] }}
                >
                  <i className={`fas fa-` + item.icon}></i>
                  {valueToShow === "Amount"
                    ? `${item.Name} | ${inventoryDatas[valueToShow][index]}`
                    : valueToShow === "Price"
                      ? `${item.Name} | ${inventoryDatas[valueToShow][index].toLocaleString("pt-br", { style: "currency", currency: "BRL" })}`
                      : ""}
                </span>
              );
            })}
          </section>
        </section>
      </Body>
      <Footer colors={Global.colors}></Footer>
    </>
  );
}
export default Charts;
