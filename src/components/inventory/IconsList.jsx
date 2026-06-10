import { Global } from "../../main";

function IconsList({
  presets,
  iconsMenu,
  iconsList,
  setIcon,
  setIconsMenu,
  setMode,
}) {
  const colors = {
    food: "text-amber-300",
    vehicle: "text-blue-400",
    tool: "text-green-400",
  };
  return (
    <div
      className={` max-w-200 w-4/5 h-1/2 aspect-square fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 p-3 rounded-xl border-4 text-4xl ${Global.colors.border} ${Global.colors.frontground1} ${iconsMenu ? "" : "hidden!"} z-51 scrollbar-thumb-gray-950 `}
    >
      <button
        className={
          ` fixed top-0 right-0 w-10 h-10 translate-x-1/2 -translate-y-1/2 ${Global.colors.frontground1} border-2 ${Global.colors.border} rounded-4xl text-2xl ` +
          presets.scaleChange
        }
        onClick={() => {
          setMode("");
          setIconsMenu(false);
        }}
      >
        <i className={` fas fa-xmark `}></i>
      </button>

      <section
        className={`flex flex-wrap items-center justify-center gap-4 w-full h-full overflow-y-scroll overflow-x-hidden`}
      >
        {iconsList.map((icon) => {
          return (
            <i
              key={crypto.randomUUID()}
              className={
                `fas fa-${icon.icon} ${colors[icon.category]}` +
                presets.scaleChange
              }
              onClick={() => {
                setIcon(icon.icon);
                setIconsMenu(false);
              }}
            ></i>
          );
        })}
      </section>
    </div>
  );
}
export default IconsList;
