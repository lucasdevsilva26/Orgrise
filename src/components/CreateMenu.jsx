import { useState } from "react";
import "./createMenu.css";

function CreateMenu() {
  const [items, changeItems] = useState([])

  const [image, setImage] = useState("")
  const [name, changeName] = useState()
  const [price, changeprice] = useState()
  const [amount, changeAmount] = useState()

  function handleImage(event) {
    const file = event.target.files[0];

    if (!file) return;

    const imageUrl = URL.createObjectURL(file)

    setImage(imageUrl)
  }

function createItem(name, price, amount) {
  if (name && price && amount) {
    if (name.trim().length == 0 && price.trim().length == 0 && amount.trim().length == 0) { return }

    const newItem = {
      id:crypto.randomUUID(),
      image: 1,
      name: name,
      price: price,
      amount: amount,
    }

    items.filter((item) => {if (item.name == newItem.name) { return }})

    changeItems([...items, newItem])
  }
}

  return (
    <>
      <section id="createMenu">
        <section>
          <input type="file" accept="image/*" onChange={handleImage} style={{backgroundImage:`url(${image})`}}/>

          <form>
            <div>
              <label htmlFor="itemName">Nome do Produto</label>
              <input type="text" id="itemName" onChange={(e) => changeName(e.target.value)}/>
            </div>

            <div>
              <label htmlFor="itemPrice">Preço do Produto</label>
              <input type="number" id="itemPrice" onChange={(e) => changeprice(e.target.value)}/>
            </div>

            <div>
              <label htmlFor="itemAmount">Quantidade</label>
              <input type="number" id="itemAmount" onChange={(e) => changeAmount(e.target.value)}/>
            </div>
          </form>
        </section>

        <button onClick={() => createItem(name, price, amount)}>Criar</button>
      </section>

      <section id="itemList">
        {items.map((item) => {
          return ( 
            <article key={item.id} className="itemCard"> 

              <img/>

              <h2> { item.name } </h2>

              <span> { item.price } </span>

              <span> { item.amount } </span>
            </article>
          )
        })}
      </section>
    </>
  )
}
export default CreateMenu;
