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
        <input type="file" accept="image/*" onChange={handleImage} style={{backgroundImage:`url(${image})`}}/>
        <input type="text" />
        <input type="number" name="" id="" />
        <input type="number" name="" id="" />

    </>
  )
}
export default CreateMenu;
