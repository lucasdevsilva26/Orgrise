import { Global } from "../main";

function ToolBar({ presets, setMode }) {
  return (
    <section
      className={
        Global.colors.border +
        ` flex flex-wrap justify-evenly h-max py-5 border-b-2 `
      }
    >
      <button className={presets.toolButton} onClick={() => setMode("create")}>
        {" "}
        <i className={` fas fa-plus `}></i>Criar Produto
      </button>

      <button className={presets.toolButton} onClick={() => setMode("edit")}>
        {" "}
        <i className={` fas fa-pen-to-square `}></i>Editar Produto
      </button>

      <button className={presets.toolButton} onClick={() => setMode("remove")}>
        {" "}
        <i className={` fas fa-eraser `}></i>Remover Produto
      </button>
    </section>
  );
}
export default ToolBar;
