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
              <label>Nome</label>
              <h2> {item.name} </h2>

              <label>Preço</label>
              <span>
                {Number(item.price).toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </span>

              <label>Quantidade</label>
              <span> {item.amount} </span>
            </div>
          </article>
        );
      })}
    </section>
  );
}
export default ItemList;
