import "./iconList.css";

function IconList({ icons, iconChange, color, iconsMenu, changeIconsMenu }) {
  function setIcon(icon) {
    iconChange(icon);
    changeIconsMenu(false);
  }
  
  return (
    <>
      <section
        id="iconList"
        className="boxShadow"
        style={{ display: `${iconsMenu ? "flex" : "none"}` }}
      >
        <div>
          {icons.map((icon) => {
            return (
              <button
                key={icon.id}
                className="responButton"
                onClick={() => setIcon(icon.icon)}
              >
                <i
                  className={`fas ${icon.icon} textShadow`}
                  style={{ color: `${color}` }}
                ></i>
              </button>
            );
          })}
        </div>

        <button
          id="iconListExitButton"
          className="responButton coloredButton"
          onClick={() => changeIconsMenu(false)}
        >
          <i className="fas fa-xmark"></i>
        </button>
      </section>
    </>
  );
}
export default IconList;
