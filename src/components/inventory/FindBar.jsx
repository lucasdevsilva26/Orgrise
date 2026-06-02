import { Global } from "../../main";

function FindBar({ presets }) {
  return (
    <section
      className={
        Global.colors.border +
        ` flex flex-wrap items-center justify-center gap-3 px-6 h-max py-5 border-b-2 `
      }
    >
      <button className={presets.toolButton + ` justify-self-start `}>
        <i className={` fas fa-filter `}></i>Filtrar
        <select className={Global.colors.background + ` w-4 `}>
          <option value=""></option>

          <option value="a" className={Global.colors.text + ` text-black `}>
            Alfabética
          </option>

          <option value="a" className={Global.colors.text + ` text-black `}>
            Quantidade
          </option>

          <option value="a" className={Global.colors.text + ` text-black `}>
            Preço
          </option>
        </select>
      </button>

      <div
        className={` flex items-center justify-evenly gap-1 mx-auto w-200 px-6 h-10 ${Global.colors.frontground0} rounded-4xl text-2xl font-bold `}
      >
        <input
          type="text"
          placeholder="Pesquisar"
          className={` flex text-left w-full outline-none `}
        />

        <button className={presets.toolButton}>
          <i className={` fas fa-magnifying-glass `}></i>
        </button>
      </div>

      <button className={presets.toolButton + `  `}>
        <i className="fas fa-list"></i>Crescente
      </button>
    </section>
  );
}
export default FindBar;
