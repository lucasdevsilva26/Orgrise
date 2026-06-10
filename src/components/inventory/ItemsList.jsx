import { useState } from "react";
import { Global } from "../../main";

function ItemsList({ items, mode, colorMode, setItems }) {
  const presets = {
    dataContainer: ` w-9/10 px-2 rounded-2xl ${Global.colors.frontground1} overflow-hidden line-clamp-2 break-words `,
  };

  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("userData")) || [],
  );

  function removeItem(items, item) {
    const newItems = items.filter((toDeleteItem) => toDeleteItem.id !== item.id);
    console.log(newItems)
    setItems(newItems);

    const newUserData = structuredClone(userData);

    newUserData.find(
      (data) => data.email === localStorage.getItem("logged"),
    ).storage = newItems;

    setUserData(newUserData);
    localStorage.setItem("userData", JSON.stringify(newUserData));
  }

  return (
    <section
      className={` flex flex-wrap justify-evenly w-full h-max p2 `}
    >
      {items.map((item) => {
        return (
          <article
            key={item.id}
            className={` flex items-center justify-center gap-2 m-3 w-100 h-50 border-2 ${colorMode} rounded-xl ${Global.colors.frontground0} elementPop `}
            onClick={() => {
              if (mode === "remove") {
                removeItem(items, item);
              }
            }}
          >
            <div
              className={` flex items-center justify-center w-1/2 ml-1 h-9/10 ${Global.colors.frontground1} rounded-2xl `}
            >
              <i className={` fas fa-${item.icon} text-6xl `}></i>
            </div>

            <section
              className={` flex flex-col items-center justify-evenly gap-2 w-1/2 h-full py-1 font-bold text-2xl `}
            >
              <div className={presets.dataContainer + ` h-12 `}>
                {item.Name}
              </div>

              <div className={presets.dataContainer}>
                {Number(item.Price).toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </div>

              <div className={presets.dataContainer}>{item.Amount}</div>
            </section>
          </article>
        );
      })}
    </section>
  );
}
export default ItemsList;
