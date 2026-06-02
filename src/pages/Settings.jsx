import Body from "../components/Body";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useState } from "react";
import { Global } from "../main";
import { useNavigate } from "react-router";

function Settings() {
  const [theme, setTheme] = useState(Global.theme);
  const navigate = useNavigate();

  function changeTheme() {
    Global.theme = !Global.theme;
    Global.colors = Global.theme ? Global.oldTheme : Global.darkColors;

    setTheme(Global.theme);
  }

  const presets = {
    scaleChange: ` duration-350 hover:scale-95 cursor-pointer`,
  };

  return (
    <>
      <Header colors={Global.colors}></Header>
      <Body colors={Global.colors} direction={"flex-row"}>
        <section className={` flex gap-6 p-12 `}>
          <button
            className={` flex flex-col gap-1 cursor-pointer w-20 h-20 p-2 ${Global.colors.frontground0} ${Global.colors.text} rounded-xl font-bold shadow-2xl border-2 ${Global.colors.border}`}
            onClick={() => changeTheme()}
          >
            Tema
            <div
              className={` flex items-center justify-center ${Global.colors.frontground1}  w-full h-8 rounded-4xl relative border ${Global.colors.border} `}
            >
              <i
                className={` fas fa-${theme ? "sun" : "moon"}  text-1xl absolute top-1/2 -translate-y-1/2 ${theme ? "left-full -translate-x-11/10 text-amber-300" : "left-0 translate-x-2/10 text-emerald-300"} duration-500`}
              ></i>
            </div>
          </button>

          <button
            className={` flex items-center gap-1 w-max h-max text-red-400 ${presets.scaleChange} `}
            onClick={() => {
              Global.logged = false;
              navigate("/");
            }}
          >
            <i className={` fas fa-triangle-exclamation text-red-400 `}></i>
            Sair da conta
            <i className={` fas fa-triangle-exclamation text-red-400 `}></i>
          </button>
        </section>
      </Body>
      <Footer colors={Global.colors}></Footer>
    </>
  );
}
export default Settings;
