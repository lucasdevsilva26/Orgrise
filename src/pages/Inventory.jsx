import { useState } from "react";
import Body from "../components/Body";
import Footer from "../components/Footer";
import Header from "../components/Header";

import { Global } from "../main";
import ToolBar from "../components/ToolBar";
import FindBar from "../components/FindBar";
import ItemsList from "../components/ItemsList";
import IconsList from "../components/IconsList";

function Inventory() {
  const presets = {
    toolButton: ` flex items-center gap-2 font-bold cursor-pointer `,
    scaleChange: ` duration-350 hover:scale-95 cursor-pointer`,
    input: ` ${Global.colors.frontground1} p-2 text-3xl rounded-xl `,
    label: ` ${Global.colors.title} text-2xl font-bold `,
    bgButton: `cursor-pointer w-max px-4 h-max py-1.5 bg-linear-to-r ${Global.colors.buttonBg} rounded-4xl text-white`,
  };

  const [mode, setMode] = useState("");
  const colorMode =
    mode === "create"
      ? " border-none! "
      : mode === "remove"
        ? " border-red-500 "
        : mode === "edit"
          ? " border-yellow-500 "
          : " border-none! ";

  const [items, setItems] = useState([]);
  const [itemsMenu, setItemsMenu] = useState(false);

  const [icon, setIcon] = useState("image ");
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [amount, setAmount] = useState(0);

  const iconsList = [
    { icon: "bowl-food", category: "food" },
    { icon: "bacon", category: "food" },
    { icon: "bowl-rice", category: "food" },
    { icon: "burger", category: "food" },
    { icon: "carrot", category: "food" },
    { icon: "chese", category: "food" },
    { icon: "cookie-bite", category: "food" },
    { icon: "drumstick-bite", category: "food" },
    { icon: "egg", category: "food" },
    { icon: "hotdog", category: "food" },
    { icon: "jar", category: "food" },
    { icon: "jar-wheat", category: "food" },
    { icon: "pepper-hot", category: "food" },
    { icon: "pizza-slice", category: "food" },
    { icon: "plate-wheat", category: "food" },
    { icon: "bone", category: "food" },
    { icon: "bottle-droplet", category: "food" },
    { icon: "bottle-water", category: "food" },
    { icon: "bread-slice", category: "food" },
    { icon: "cake-candles", category: "food" },
    { icon: "candy-cane", category: "food" },
    { icon: "champagne-glasses", category: "food" },
    { icon: "cookie", category: "food" },
    { icon: "cubes-stacked", category: "food" },
    { icon: "fish", category: "food" },
    { icon: "fish-fins", category: "food" },
    { icon: "flask", category: "food" },
    { icon: "glass-water", category: "food" },
    { icon: "glass-water-droplet", category: "food" },
    { icon: "ice-cream", category: "food" },
    { icon: "lemon", category: "food" },
    { icon: "martini-glass", category: "food" },
    { icon: "mug-hot", category: "food" },
    { icon: "sedling", category: "food" },
    { icon: "shrimp", category: "food" },
    { icon: "stroopwafel", category: "food" },
    { icon: "wheat-awn", category: "food" },
    { icon: "whiskey-glass", category: "food" },
    { icon: "wine-bottle", category: "food" },
    { icon: "wine-glass", category: "food" },
    { icon: "apple-whole", category: "food" },
    { icon: "leaf", category: "food" },
    { icon: "capsules", category: "food" },
    { icon: "chart-pie", category: "food" },
    { icon: "cloud", category: "food" },
    { icon: "clover", category: "food" },
    { icon: "coins", category: "food" },
    { icon: "bowling-ball", category: "food" },
    { icon: "boxes-packing", category: "food" },
    { icon: "disease", category: "food" },
    { icon: "dice", category: "food" },
    { icon: "droplet", category: "food" },
    { icon: "flask-vial", category: "food" },
    { icon: "hockey-puck", category: "food" },
    { icon: "jug-detergent", category: "food" },
    { icon: "map-pin", category: "food" },
    { icon: "mortar-pestle", category: "food" },
    { icon: "oil-can", category: "food" },
    { icon: "pills", category: "food" },
    { icon: "plant-wilt", category: "food" },
    { icon: "poop", category: "food" },
    { icon: "spa", category: "food" },
    { icon: "tablets", category: "food" },
    { icon: "vials", category: "food" },
  ];

  function createItem() {
    setItems([
      ...items,
      {
        id: crypto.randomUUID(),
        icon: icon,
        Name: name,
        Price: price,
        Amount: amount,
      },
    ]);
  }

  return (
    <>
      <Header colors={Global.colors}></Header>
      <Body colors={Global.colors} direction={` flex-col `}>
        <section className={` flex flex-col h-max `}>
          <ToolBar presets={presets} setMode={setMode} ></ToolBar>
          <FindBar presets={presets}></FindBar>

          <ItemsList items={items} mode={mode} colorMode={colorMode} setItems={setItems}></ItemsList>

          <IconsList presets={presets} itemsMenu={itemsMenu} iconsList={iconsList} setIcon={setIcon}></IconsList>

          <section
            className={` flex flex-col fixed w-100 top-1/2 left-1/2 -translate-1/2 rounded-xl p-6 ${Global.colors.frontground0} ${mode ? "flex" : "hidden"} border-3 ${Global.colors.border} `}
          >
            <button
              className={
                ` absolute top-0 right-0 w-10 h-10 translate-x-1/2 -translate-y-1/2 ${Global.colors.frontground1} border-2 ${Global.colors.border} rounded-4xl text-2xl ` +
                presets.scaleChange
              }
              onClick={() => setMode(!mode)}
            >
              <i className={` fas fa-xmark `}></i>
            </button>

            <div className={` flex flex-col items-center gap-2 `}>
              <div
                className={` flex items-center justify-center w-1/2 aspect-square ${Global.colors.frontground1} rounded-full border-3 ${Global.colors.border} `}
                onClick={() => {
                  setItemsMenu(!itemsMenu);
                }}
              >
                <i className={` fas fa-${icon} text-8xl `}></i>
              </div>

              <div className={` flex flex-col `}>
                <label htmlFor="" className={presets.label}>
                  Nome
                </label>
                <input
                  type="text"
                  className={presets.input}
                  onChange={(input) => setName(input.target.value)}
                />
              </div>

              <div className={` flex flex-col `}>
                <label htmlFor="" className={presets.label}>
                  Preço
                </label>
                <input
                  type="number"
                  className={presets.input}
                  onChange={(input) => setPrice(input.target.value)}
                />
              </div>

              <div className={` flex flex-col `}>
                <label htmlFor="" className={presets.label}>
                  Quantidade
                </label>
                <input
                  type="number"
                  className={presets.input}
                  onChange={(input) => setAmount(input.target.value)}
                />
              </div>

              <button
                className={
                  presets.scaleChange +
                  ` my-4 p-2 font-bold w-9/10! h-12! text-3xl ` +
                  presets.bgButton
                }
                onClick={() => createItem()}
              >
                Criar
              </button>
            </div>
          </section>

        </section>
      </Body>
      <Footer colors={Global.colors}></Footer>
    </>
  );
}
export default Inventory;
