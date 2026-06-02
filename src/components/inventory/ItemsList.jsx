import { Global } from "../../main";

function ItemsList({ items, mode, colorMode, setItems }) {
  const presets = {
    dataContainer: ` w-9/10 px-2 rounded-2xl ${Global.colors.frontground1} overflow-hidden line-clamp-2 break-words `,
  };

  return (
    <section
      className={` grid grid-rows-1 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl-grid-cols-7 2xl-grid-cols-9 justify-evenly h-full p-2 `}
    >
      {items.map((item) => {
        return (
          <article
            key={item.id}
            className={` flex items-center justify-center gap-2 m-3 w-9/10 h-9/10 border-2 ${colorMode} rounded-xl ${Global.colors.frontground0} `}
            onClick={() => {
              if (mode === "remove") {
                setItems(
                  items.filter((anotherItem) => anotherItem.id !== item.id),
                );
              }
            }}
          >
            <div
              className={` flex items-center justify-center w-1/2 ml-1 h-9/10 ${Global.colors.frontground1} rounded-2xl text-2xl `}
            >
              <i className={` fas fa-${item.icon} text-6xl `}></i>
            </div>

            <section
              className={` flex flex-col items-center justify-evenly gap-2 w-1/2 h-full py-1 `}
            >
              <div className={presets.dataContainer + ` h-12 `}>{item.Name}</div>

              <div className={presets.dataContainer}>{item.Price}</div>

              <div className={presets.dataContainer}>{item.Amount}</div>
            </section>
          </article>
        );
      })}
    </section>
  );
}
export default ItemsList;
