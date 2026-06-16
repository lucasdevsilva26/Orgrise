import { useState } from "react";
import { Global } from "../../main";
import { useLocation } from "react-router";

function ItemsList({
  items,
  mode,
  colorMode,
  setItems,
  searchText,
  money,
  setMoney,
  editMode,
  modyfier
}) {
  const presets = {
    dataContainer: ` w-9/10 px-2 rounded-2xl ${Global.colors.frontground1} overflow-hidden line-clamp-2 break-words `,
  };

  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("userData")) || [],
  );

  const location = useLocation();

  function removeItem(items, item) {
    const newItems = items.filter(
      (toDeleteItem) => toDeleteItem.id !== item.id,
    );
    setItems(newItems);

    let newUserData = structuredClone(userData);

    let alerts = newUserData.find(
      (data) => data.email === localStorage.getItem("logged"),
    ).alerts;

    newUserData.find(
      (data) => data.email === localStorage.getItem("logged"),
    ).alerts = [
      ...alerts,
      {
        area: "Estoque",
        effect: "Remoção",
        date: new Date().toLocaleDateString("pt-BR"),
        hour: new Date().toLocaleTimeString("pt-BR", {
          hour: "2-digit",
          minute: "2-digit",
        }),
        description: `Item [${item.Name}] removido do estoque`,
      },
    ];

    newUserData.find(
      (data) => data.email === localStorage.getItem("logged"),
    ).storage = newItems;

    setUserData(newUserData);
    localStorage.setItem("userData", JSON.stringify(newUserData));
  }

  return (
    <section className={` flex flex-wrap justify-evenly w-full h-max my-2 `}>
      <h1>{items.length} Items Cadastrados</h1>
      {items
        .filter((item) =>
          item.Name.toLowerCase().includes(searchText.toLowerCase()),
        )
        .map((item) => {
          return (
            <article
              key={item.id}
              className={` flex items-center justify-center gap-2 m-2 p-4 w-100 h-60 border-2 ${colorMode} rounded-xl ${Global.colors.frontground0} elementPop `}
              onClick={() => {
                if (mode === "remove") {
                  removeItem(items, item);
                }

                if (
                  location.pathname === "/finance" &&
                  editMode === "sell" &&
                  item.Amount - Number(modyfier) >= 0
                ) {
                  const newItems = items.map((i) =>
                    i.id === item.id ? { ...i, Amount: i.Amount - Number(modyfier) } : i,
                  );
                  setItems(newItems);
                  setMoney(money + item.Price);
                } else if (
                  location.pathname === "/finance" &&
                  editMode === "buy" &&
                  money - item.Price * Number(modyfier) >= 0
                ) {
                  const newItems = items.map((i) =>
                    i.id === item.id ? { ...i, Amount: i.Amount + Number(modyfier) } : i,
                  );
                  setItems(newItems);
                  setMoney(money - item.Price * Number(modyfier));
                }
              }}
            >
              <div
                className={` flex items-center justify-center w-2/4 ml-1 h-full ${Global.colors.frontground1} rounded-2xl`}
              >
                <i
                  className={` fas fa-${item.icon} text-7xl `}
                  style={{ color: item.color }}
                ></i>
              </div>

              <section
                className={` flex flex-col items-center justify-evenly gap-2 w-full h-full py-1 font-bold text-2xl `}
              >
                <div
                  className={
                    presets.dataContainer + Global.colors.title + ` flex-2 `
                  }
                >
                  {item.Name}
                </div>

                <div className={presets.dataContainer + ` flex-1 `}>
                  {Number(item.Price).toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </div>

                <div
                  className={presets.dataContainer + ` flex-1`}
                >{`${item.Amount.toLocaleString("pt-BR")} ${item.AmountType}`}</div>
              </section>
            </article>
          );
        })}
    </section>
  );
}
export default ItemsList;
