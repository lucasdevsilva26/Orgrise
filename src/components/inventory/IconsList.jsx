import { Global } from "../../main";

function IconsList({ presets, itemsMenu, iconsList, setIcon, setItemsMenu }) {
  const colors = {food:"text-amber-300", vehicle:"text-blue-400", tool:"text-green-400"}
  return (
    <section
      className={`flex flex-wrap items-center justify-center gap-4 max-w-200 w-4/5 h-max aspect-square fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 p-3 rounded-xl border-4 text-4xl ${Global.colors.border} ${Global.colors.frontground1} ${itemsMenu ? "" : "hidden!"} z-51 overflow-y-scroll overflow-x-hidden scrollbar-thumb-gray-950`}
    >
      {iconsList.map((icon) => {
        return (
          <i
            className={
              `fas fa-${icon.icon} ${colors[icon.category]}` +
              presets.scaleChange
            }
            onClick={() => {
              setIcon(icon.icon);
              setItemsMenu(false);
            }}
          ></i>
        );
      })}
    </section>
  );
}
export default IconsList;
