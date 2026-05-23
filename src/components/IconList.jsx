import './iconList.css'

function IconList({icons, iconChange, color}) {
  return (
    <>
      <section id="iconList">
        {icons.map((icon) => {
          return (
            <button key={icon.id} className="responButton" onClick={() => iconChange(icon.icon)}>
                <i className={`fas ${icon.icon}`} style={{ color: `${color}` }}></i>
            </button>
          );
        })}
      </section>
    </>
  );
}
export default IconList;
