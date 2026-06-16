import { use, useState } from "react";
import Body from "../components/Body";
import Footer from "../components/Footer";
import Header from "../components/header/Header";
import ItemsList from "../components/inventory/ItemsList";
import { Global } from "../main";
import FindBar from "../components/inventory/FindBar";

function Finance() {
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("userData")) || [],
  );

  const [items, setItems] = useState(
    userData.find((data) => data.email === localStorage.getItem("logged"))
      ?.storage || [],
  );

  const [mode, setMode] = useState("");
  const colorMode =
    mode === "create"
      ? " border-none! "
      : mode === "remove"
        ? " border-red-500 "
        : mode === "edit"
          ? " border-yellow-500 "
          : " border-none! ";
  const [searchText, setSearchText] = useState("");

  const presets = {
    toolButton: ` flex items-center gap-2 font-bold cursor-pointer `,
    scaleChange: ` duration-350 hover:scale-95 cursor-pointer`,
    input: ` ${Global.colors.frontground1} p-2 text-3xl rounded-xl w-full `,
    label: ` ${Global.colors.title} text-2xl font-bold cursor-pointer w-full `,
    bgButton: `cursor-pointer w-max px-4 h-max py-1.5 bg-linear-to-r ${Global.colors.buttonBg} rounded-4xl text-white`,
  };

  const [money, setMoney] = useState(0);
  const [editMode, setEditMode] = useState("buy");
  const [modyfier, setModyfier] = useState(1);

  return (
    <>
      <Header></Header>
      <Body direction={` flex-col `}>
        <section className={` flex flex-col items-center py-6`}>
          <h1 className={` text-3xl font-bold ` + Global.colors.title}>
            Financeiro
          </h1>

          <span
            className={` flex place-items-center p-4 text-green-600 text-2xl font-bold `}
          >
            Saldo Total:{" "}
            {money.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </span>

          <div className="flex place-items-center gap-2">
            <button
              className={
                ` font-bold w-25! ${editMode === "buy" ? "border-2" : ""} ` +
                presets.bgButton
              }
              onClick={() => setEditMode("buy")}
            >
              Comprar
            </button>
            <button
              className={
                ` font-bold w-25! ${editMode === "sell" ? "border-2" : ""} ` +
                presets.bgButton
              }
              onClick={() => setEditMode("sell")}
            >
              Vender
            </button>
          </div>

          <input
            type="number"
            value={modyfier}
            min={1}
            className={
              ` w-25 mt-5 rounded-full text-2xl text-center ` +
              Global.colors.frontground0
            }
            onChange={(e) => {
              setModyfier(e.target.value)
            }}
          />

          <FindBar presets={presets} setSearchText={setSearchText}></FindBar>
          <ItemsList
            items={items}
            setItems={setItems}
            mode={mode}
            colorMode={colorMode}
            searchText={searchText}
            money={money}
            setMoney={setMoney}
            editMode={editMode}
            modyfier={modyfier}
          ></ItemsList>
        </section>
      </Body>
      <Footer></Footer>
    </>
  );
}
export default Finance;
