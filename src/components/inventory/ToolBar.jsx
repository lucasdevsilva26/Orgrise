import { Global } from "../../main";

function ToolBar({ presets, mode, setMode, setIconsMenu }) {
  return (
    <section
      className={
        Global.colors.border +
        ` flex flex-wrap justify-evenly h-max py-5 border-b-2 `
      }
    >
      <button
        className={presets.toolButton}
        onClick={() => {
          setMode(mode === "create" ? "" : "create");
          setIconsMenu(false)
        }}
      >
        {" "}
        <i className={` fas fa-plus `}></i>Criar Produto
      </button>

      <button
        className={presets.toolButton}
        onClick={() => {
          setMode(mode === "edit" ? "" : "edit");
          setIconsMenu(false)
        }}
      >
        {" "}
        <i className={` fas fa-pen-to-square `}></i>Editar Produto
      </button>

      <button
        className={presets.toolButton}
        onClick={() => {
          setMode(mode === "remove" ? "" : "remove");
          setIconsMenu(false)
        }}
      >
        {" "}
        <i className={` fas fa-eraser `}></i>Remover Produto
      </button>
    </section>
  );
}
export default ToolBar;
