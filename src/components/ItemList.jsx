function ItemList({ items }) {
  return (
    <section id="itemList">
      {items.map((item) => {
        return (
          <article key={item.id} className="itemCard">
            <div>
              <i
                className={`fas item ${item.icon}`}
                style={{ color: `${item.color}` }}
              ></i>
            </div>

            <div>
              <h2> Nome: {item.name} </h2>

              <span>
                Preço:{" "}
                {Number(item.price).toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </span>

              <span> Quantidade: {item.amount} </span>
            </div>
          </article>
        );
      })}
    </section>
  );
}
export default ItemList;
