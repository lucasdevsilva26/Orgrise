import { Global } from "../main";

function ItemsList({items, mode, colorMode, setItems}) {
  return (
    <section className={` grid grid-cols-10 justify-evenly h-full p-4 `}>
            {items.map((item) => {
              return (
                <article
                  key={item.id}
                  className={` flex gap-2 m-3 border-2 ${colorMode} rounded-xl `}
                  onClick={() => {
                    if (mode) {
                      setItems(
                        items.filter(
                          (anotherItem) => anotherItem.id !== item.id,
                        ),
                      );
                    }
                  }}
                >
                  <div
                    className={` flex items-center justify-center px-2 w-25 h-25 ${Global.colors.frontground0} rounded-2xl text-2xl `}
                  >
                    <i className={` fas fa-${item.icon} text-6xl `}></i>
                  </div>

                  <section className={` flex flex-col  justify-evenly`}>
                    <div>{item.Name}</div>

                    <div>{item.Price}</div>

                    <div>{item.Amount}</div>
                  </section>
                </article>
              );
            })}
          </section>
  );
}
export default ItemsList;
