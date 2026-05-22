import { useState } from "react";
import "./createMenu.css";

function CreateMenu() {
const [image, setImage] = useState("")

  function handleImage(event) {
    const file = event.target.files[0];

    if (!file) return;

    const imageUrl = URL.createObjectURL(file)

    setImage(imageUrl)
  }

  return (
    <>
      <section id="createMenu">
        <input type="file" accept="image/*" onChange={handleImage} style={{backgroundImage:`url(${image})`}}/>

        <form>
          <div>
            <label htmlFor="itemName">Nome do Produto</label>
            <input type="text" id="itemName"/>
          </div>

          <div>
            <label htmlFor="itemPrice">Preço do Produto</label>
            <input type="number" id="itemPrice" />
          </div>

          <div>
            <label htmlFor="itemAmount">Quantidade</label>
            <input type="number" id="itemAmount" />
          </div>
        </form>
      </section>
    </>
  )
}
export default CreateMenu;
