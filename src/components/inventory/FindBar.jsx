import { useState } from "react";
import { Global } from "../../main";

function FindBar({ presets, setSearchText }) {
  const [filterType, setFilterType] = useState('name')

  return (
    <section
      className={
        Global.colors.border +
        ` flex flex-wrap items-center justify-center gap-3 px-6 h-max py-5 border-b-2 `
      }
    >
      <div
        className={` flex items-center justify-evenly gap-1 mx-auto max-w-200 w-full px-6 h-10 ${Global.colors.frontground0} rounded-4xl text-2xl font-bold `}
      >
        <input
          type="text"
          placeholder="Pesquisar"
          className={` flex text-left w-full outline-none`}
          onChange={(e) => setSearchText(e.target.value)}
        />

        <button className={presets.toolButton}>
          <i className={` fas fa-magnifying-glass `}></i>
        </button>
      </div>
    </section>
  );
}
export default FindBar;
