import { useState } from "react";
import Body from "../components/Body";
import Footer from "../components/Footer";
import Header from "../components/header/Header";

import { Global } from "../main";
import ToolBar from "../components/inventory/ToolBar";
import FindBar from "../components/inventory/FindBar";
import ItemsList from "../components/inventory/ItemsList";
import IconsList from "../components/inventory/IconsList";

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

  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("userData")) || [],
  );

  const [items, setItems] = useState(
    userData.find((data) => data.email === localStorage.getItem("logged"))
      ?.storage || [],
  );
  const [iconsMenu, setIconsMenu] = useState(false);

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
    { icon: "cheese", category: "food" },
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
    { icon: "seedling", category: "food" },
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

    { icon: "bicycle", category: "vehicle" },
    { icon: "bus", category: "vehicle" },
    { icon: "bus-side", category: "vehicle" },
    { icon: "bus-simple", category: "vehicle" },
    { icon: "car", category: "vehicle" },
    { icon: "car-battery", category: "vehicle" },
    { icon: "car-burst", category: "vehicle" },
    { icon: "car-on", category: "vehicle" },
    { icon: "car-rear", category: "vehicle" },
    { icon: "car-side", category: "vehicle" },
    { icon: "car-tunnel", category: "vehicle" },
    { icon: "caravan", category: "vehicle" },
    { icon: "charging-station", category: "vehicle" },
    { icon: "ferry", category: "vehicle" },
    { icon: "helicopter", category: "vehicle" },
    { icon: "motorcycle", category: "vehicle" },
    { icon: "road-spikes", category: "vehicle" },
    { icon: "snowplow", category: "vehicle" },
    { icon: "square-parking", category: "vehicle" },
    { icon: "tachograph-digital", category: "vehicle" },
    { icon: "taxi", category: "vehicle" },
    { icon: "tractor", category: "vehicle" },
    { icon: "trailer", category: "vehicle" },
    { icon: "train-subway", category: "vehicle" },
    { icon: "train-tram", category: "vehicle" },
    { icon: "truck", category: "vehicle" },
    { icon: "truck-field-un", category: "vehicle" },
    { icon: "truck-front", category: "vehicle" },
    { icon: "truck-medical", category: "vehicle" },
    { icon: "truck-monster", category: "vehicle" },
    { icon: "truck-moving", category: "vehicle" },
    { icon: "truck-pickup", category: "vehicle" },
    { icon: "truck-plane", category: "vehicle" },
    { icon: "truck-ramp-box", category: "vehicle" },
    { icon: "van-shuttle", category: "vehicle" },

    { icon: "toolbox", category: "tool" },
    { icon: "screwdriver-wrench", category: "tool" },
    { icon: "bezier-curve", category: "tool" },
    { icon: "brush", category: "tool" },
    { icon: "calculator", category: "tool" },
    { icon: "eye-dropper", category: "tool" },
    { icon: "fill", category: "tool" },
    { icon: "fire", category: "tool" },
    { icon: "gear", category: "tool" },
    { icon: "gears", category: "tool" },
    { icon: "grip", category: "tool" },
    { icon: "hammer", category: "tool" },
    { icon: "magnet", category: "tool" },
    { icon: "magnifying-glass", category: "tool" },
    { icon: "microscope", category: "tool" },
    { icon: "paint-roller", category: "tool" },
    { icon: "paintbrush", category: "tool" },
    { icon: "ruler", category: "tool" },
    { icon: "ruler-horizontal", category: "tool" },
    { icon: "ruler-vertical", category: "tool" },
    { icon: "scissors", category: "tool" },
    { icon: "screwdriver", category: "tool" },
    { icon: "trowel", category: "tool" },
    { icon: "trowel-bricks", category: "tool" },
    { icon: "wrench", category: "tool" },
    { icon: "toilet", category: "tool" },
    { icon: "toilet-paper", category: "tool" },
    { icon: "toilet-paper-slash", category: "tool" },
    { icon: "toilet-portable", category: "tool" },
    { icon: "tooth", category: "tool" },
    { icon: "cable-car", category: "tool" },
    { icon: "cart-flatbed", category: "tool" },
    { icon: "cart-flatbed-suitcase", category: "tool" },
    { icon: "cart-shopping", category: "tool" },
    { icon: "dolly", category: "tool" },
    { icon: "restroom", category: "tool" },
    { icon: "suitcase-rolling", category: "tool" },
    { icon: "teeth", category: "tool" },
    { icon: "teeth-open", category: "tool" },
    { icon: "futbol", category: "tool" },
    { icon: "water-ladder", category: "tool" },
    { icon: "chair", category: "tool" },
    { icon: "fan", category: "tool" },
    { icon: "person-swimming", category: "tool" },
    { icon: "socks", category: "tool" },
    { icon: "temperature-arrow-down", category: "tool" },
    { icon: "temperature-low", category: "tool" },
    { icon: "school", category: "tool" },
    { icon: "school-flag", category: "tool" },
    { icon: "school-lock", category: "tool" },
  ];

  function createItem() {
    setMode("");
    const newItems = [
      ...items,
      {
        id: crypto.randomUUID(),
        icon: icon,
        Name: name,
        Price: Number(price),
        Amount: Number(amount),
      },
    ];

    setItems(newItems);

    const newUserData = structuredClone(userData);

    newUserData.find(
      (data) => data.email === localStorage.getItem("logged"),
    ).storage = newItems;

    setUserData(newUserData);
    localStorage.setItem("userData", JSON.stringify(newUserData));
  }

  return (
    <>
      <Header colors={Global.colors}></Header>
      <Body direction={` flex-col `}>
        <section className={` flex flex-col h-max `}>
          <ToolBar
            presets={presets}
            mode={mode}
            setMode={setMode}
            setIconsMenu={setIconsMenu}
          ></ToolBar>
          <FindBar presets={presets}></FindBar>

          <ItemsList
            items={items}
            mode={mode}
            colorMode={colorMode}
            setItems={setItems}
          ></ItemsList>

          <IconsList
            presets={presets}
            iconsMenu={iconsMenu}
            iconsList={iconsList}
            setIcon={setIcon}
            setIconsMenu={() => setIconsMenu(false)}
            setMode={setMode}
          ></IconsList>

          <section
            className={` flex flex-col fixed w-100 top-1/2 left-1/2 -translate-1/2 rounded-xl p-6 ${Global.colors.frontground0} ${mode == "create" ? "flex" : "hidden"} border-3 ${Global.colors.border} ${iconsMenu ? "hidden" : ""} `}
          >
            <button
              className={
                ` absolute top-0 right-0 w-10 h-10 translate-x-1/2 -translate-y-1/2 ${Global.colors.frontground1} border-2 ${Global.colors.border} rounded-4xl text-2xl ` +
                presets.scaleChange
              }
              onClick={() => {
                setMode("");
                setIconsMenu(false);
              }}
            >
              <i className={` fas fa-xmark `}></i>
            </button>

            <div className={` flex flex-col items-center gap-2 `}>
              <div
                className={` flex flex-col items-center justify-center w-8/10 aspect-square `}
              >
                <div
                  className={
                    ` flex items-center justify-center w-4/5 aspect-square ${Global.colors.frontground1} rounded-full border-3 ${Global.colors.border} ` +
                    presets.scaleChange
                  }
                  onClick={() => {
                    setIconsMenu(!iconsMenu);
                  }}
                >
                  <i className={` fas fa-${icon} text-8xl `}></i>
                </div>
                <span
                  className={` font-bold text-2xl ` + presets.scaleChange}
                  onClick={() => {
                    setIconsMenu(!iconsMenu);
                  }}
                >
                  Selecione a Imagem
                </span>
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
