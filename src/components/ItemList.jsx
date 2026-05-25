function ItemList({items}) {
    return (
    <section id="itemList">
        {items.map((item) => {
          return (
            <article key={item.id} className="itemCard">
              <i
                className={`fas item ${item.icon}`}
                style={{ color: `${item.color}` }}
              ></i>

              <h2> {item.name} </h2>

              <span>
                {" "}
                {Number(item.price).toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}{" "}
              </span>

              <span> {item.amount} </span>
            </article>
          );
        })}
      </section>
    )
}
export default ItemList