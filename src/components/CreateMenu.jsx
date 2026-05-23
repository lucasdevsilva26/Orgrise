import { useState } from "react";
import "./createMenu.css";
import IconList from "./IconList";

function CreateMenu() {
  const [items, changeItems] = useState([]);

  const [icons, changeIcons] = useState([
    { id: 0, icon: "fa-utensils" },
    { id: 1, icon: "fa-burger" },
    { id: 2, icon: "fa-hamburger" },
    { id: 3, icon: "fa-hotdog" },
    { id: 4, icon: "fa-pizza-slice" },
    { id: 5, icon: "fa-cheese" },
    { id: 6, icon: "fa-bacon" },
    { id: 7, icon: "fa-bread-slice" },
    { id: 8, icon: "fa-egg" },
    { id: 9, icon: "fa-drumstick-bite" },
    { id: 10, icon: "fa-fish" },
    { id: 11, icon: "fa-shrimp" },
    { id: 12, icon: "fa-apple-whole" },
    { id: 13, icon: "fa-lemon" },
    { id: 14, icon: "fa-pepper-hot" },
    { id: 15, icon: "fa-carrot" },
    { id: 16, icon: "fa-seedling" },
    { id: 17, icon: "fa-wheat-awn" },
    { id: 18, icon: "fa-ice-cream" },
    { id: 19, icon: "fa-cake-candles" },
    { id: 20, icon: "fa-birthday-cake" },
    { id: 21, icon: "fa-cookie" },
    { id: 22, icon: "fa-cookie-bite" },
    { id: 23, icon: "fa-candy-cane" },
    { id: 24, icon: "fa-mug-hot" },
    { id: 25, icon: "fa-coffee" },
    { id: 26, icon: "fa-wine-glass" },
    { id: 27, icon: "fa-wine-glass-empty" },
    { id: 28, icon: "fa-whiskey-glass" },
    { id: 29, icon: "fa-beer-mug-empty" },
    { id: 30, icon: "fa-beer" },
    { id: 31, icon: "fa-martini-glass" },
    { id: 32, icon: "fa-martini-glass-citrus" },
    { id: 33, icon: "fa-champagne-glasses" },
    { id: 34, icon: "fa-blender" },
    { id: 35, icon: "fa-blender-phone" },
    { id: 36, icon: "fa-bowl-food" },
    { id: 37, icon: "fa-bowl-rice" },
    { id: 38, icon: "fa-plate-wheat" },
    { id: 39, icon: "fa-jar" },
    { id: 40, icon: "fa-jar-wheat" },
    { id: 41, icon: "fa-kitchen-set" },
    { id: 42, icon: "fa-store" },
    { id: 43, icon: "fa-store-slash" },
    { id: 44, icon: "fa-shop" },
    { id: 45, icon: "fa-shop-slash" },
    { id: 46, icon: "fa-cart-shopping" },
    { id: 47, icon: "fa-shopping-cart" },
    { id: 48, icon: "fa-basket-shopping" },
    { id: 49, icon: "fa-cash-register" },
    { id: 50, icon: "fa-barcode" },
    { id: 51, icon: "fa-receipt" },
    { id: 52, icon: "fa-tags" },
    { id: 53, icon: "fa-tag" },
    { id: 54, icon: "fa-box" },
    { id: 55, icon: "fa-box-open" },
    { id: 56, icon: "fa-boxes-stacked" },
    { id: 57, icon: "fa-boxes" },
    { id: 58, icon: "fa-warehouse" },
    { id: 59, icon: "fa-truck" },
    { id: 60, icon: "fa-truck-fast" },
    { id: 61, icon: "fa-dolly" },
    { id: 62, icon: "fa-scale-balanced" },
    { id: 63, icon: "fa-money-bill" },
    { id: 64, icon: "fa-credit-card" },
    { id: 65, icon: "fa-wallet" },
    { id: 66, icon: "fa-bag-shopping" },
    { id: 67, icon: "fa-gift" },
    { id: 68, icon: "fa-question" },
  ]);

  const [icon, setIcon] = useState(icons[68].icon);
  const [color, changeColor] = useState('#000');
  const [name, changeName] = useState();
  const [price, changeprice] = useState();
  const [amount, changeAmount] = useState();

  function createItem(icon, color, name, price, amount) {
    let canAdd = true;

    if (name && price && amount) {
      if (
        name.trim().length == 0 &&
        price.trim().length == 0 &&
        amount.trim().length == 0
      ) {
        canAdd = false;
      }

      if (items.length > 0) {
        items.filter((item) => {
          if (item.name.trim() == name.trim()) {
            canAdd = false;
          }
        });
      }

      if (canAdd) {
        const newItem = {
          id: crypto.randomUUID(),
          icon: icon,
          color: color,
          name: name,
          price: price,
          amount: amount,
        };
        changeItems([...items, newItem]);
      }
    }
  }
  function iconChange(iconName) {
    setIcon(iconName);
  }

  return (
    <>
      <section id="createMenu">
        <section>
          <div>
            <label htmlFor="iconManager">Escolha o ícone</label>
            <button id="iconManager">
              <i className={`fas ${icon}`} style={{ color: `${color}` }}></i>
            </button>
            <div>
              <label htmlFor="itemColor">Escolha a cor</label>
              <input
                type="color"
                id="itemColor"
                onChange={(e) => changeColor(e.target.value)}
              />
            </div>
          </div>

          <form>
            <div>
              <label htmlFor="itemName">Nome do Produto</label>
              <input
                type="text"
                id="itemName"
                onChange={(e) => changeName(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="itemPrice">Preço do Produto</label>
              <input
                type="number"
                id="itemPrice"
                onChange={(e) => changeprice(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="itemAmount">Quantidade</label>
              <input
                type="number"
                id="itemAmount"
                onChange={(e) => changeAmount(e.target.value)}
              />
            </div>
          </form>
        </section>

        <button onClick={() => createItem(icon, color, name, price, amount)}>
          Criar
        </button>
      </section>

      <IconList icons={icons} iconChange={iconChange} color={color} ></IconList>

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
    </>
  );
}
export default CreateMenu;
