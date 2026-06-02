function IconsList({ presets, itemsMenu, iconsList, setIcon }) {
  return (
    <section
      className={`flex flex-wrap gap-2 fixed top-1/2 left-1/2 -translate-1/2 p-3 rounded-xl bg-red-900 ${itemsMenu ? "" : "hidden"} `}
    >
      {iconsList.map((icon) => {
        return (
          <i
            className={`fas fa-${icon.icon}` + presets.scaleChange}
            onClick={() => setIcon(icon.icon)}
          ></i>
        );
      })}
    </section>
  );
}
export default IconsList;
