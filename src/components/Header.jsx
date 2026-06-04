import { useState } from "react";
import { useNavigate } from "react-router";
import StartButton from "./StartButton";
import ContentButton from "./ContentButton";
import LoginButton from "./LoginButton";
import SignonButton from "./SignonButton";

import { Global } from "../main";

function Header() {
  const presets = {
    textButton: `cursor-pointer ${Global.colors.buttonText} px-3 rounded-4xl`,
    borderButtonBg: `cursor-pointer w-max px-1 h-max py-0.75 bg-linear-to-r ${Global.colors.buttonBg} rounded-4xl`,
    borderButtonFg: `flex items-center justify-center w-full px-2 ${Global.colors.frontground0} rounded-4xl ${Global.colors.buttonText}`,
    bgButton: `cursor-pointer w-max px-4 h-max py-1.5 bg-linear-to-r ${Global.colors.buttonBg} rounded-4xl text-white`,
    scaleChange: ` duration-350 hover:scale-95 cursor-pointer`,
    bgChange: ` ${Global.colors.selection} h-full`,
    button: ` flex items-center justify-center gap-3 w-full px-2 py-2 bg-red-300 rounded-4xl font-bold text-white ${Global.colors.buttonBg} `,
  };
  const navigate = useNavigate();
  const [sideBar, setSideBar] = useState(false);
  const [sideMenus, setSideMenus] = useState(false);

  const menus = [
    { path: "Charts", name: "Gráficos", icon: "fas fa-chart-column" },
    { path: "Inventory", name: "Estoque", icon: "fas fa-boxes-stacked" },
    { path: "Orders", name: "Pedidos", icon: "fas fa-truck-fast" },
    { path: "Customers", name: "Clientes", icon: "fas fa-people-group" },
    { path: "Invoices", name: "Faturas", icon: "fas fa-file-contract" },
    { path: "Finance", name: "Financeiro", icon: "fab fa-cash-app" },
    { path: "Employees", name: "Funcionários", icon: "fas fa-user-tie" },
    { path: "Schedule", name: "Agenda", icon: "far fa-calendar-days" },
    { path: "Reports", name: "Relatórios", icon: "fas fa-file-lines" },
    { path: "Suppliers", name: "Fornecedores", icon: "fas fa-handshake" },
    { path: "Alerts", name: "Alertas", icon: "fas fa-triangle-exclamation" },
    {
      path: "Settings",
      name: "Configurações",
      icon: "fas fa-screwdriver-wrench",
    },
  ];

  return (
    <header
      className={`flex items-center justify-evenly w-full h-15 ${Global.colors.frontground0} border-b-3 ${Global.colors.border} overflow-x-hidden font-bold text-2xl ${Global.colors.text} relative`}
    >
      <aside
        className={`flex flex-col items-center gap-5 w-50 h-full px-2 pt-5 fixed top-0 left-full ${sideBar ? "-translate-x-full" : "translate-x-0"} border-l-2 border-l-teal-500 ${Global.colors.frontground0} z-50 duration-500`}
      >
        <StartButton presets={presets} extraClasses={" w-full! "}></StartButton>
        <ContentButton
          presets={presets}
          extraClasses={" w-full! "}
        ></ContentButton>
        <LoginButton presets={presets} extraClasses={" w-full! "}></LoginButton>
        <SignonButton
          presets={presets}
          extraClasses={" w-full! "}
        ></SignonButton>

        <button
          className={
            presets.scaleChange + Global.colors.buttonText + " cursor-pointer " + ""
          }
          onClick={() => setSideBar(false)}
        >
          Fechar <i className={"fas fa-arrow-right-to-bracket"}></i>
        </button>
      </aside>

      <aside
        className={`flex flex-col items-center gap-4 w-50 px-6 h-full py-18 ${Global.colors.background} border-r-2 ${Global.colors.border} fixed top-0 right-full text-base! ${sideMenus ? "translate-x-full" : "translate-x-0"} duration-500 ${Global.logged ? "" : "hidden"} z-50`}
      >
        {menus.map((menuUnit) => {
          return (
            <button
              key={menuUnit.path}
              className={presets.button + presets.scaleChange}
              onClick={() =>
                navigate(
                  "/" +
                    menuUnit.path.charAt(0).toLowerCase() +
                    menuUnit.path.slice(1),
                )
              }
            >
              <i className={menuUnit.icon}></i>
              {menuUnit.name}
            </button>
          );
        })}

        <button
          className={
            `flex items-center justify-center absolute top-18 left-full ml-2 w-10 h-10 rounded-4xl ${Global.colors.buttonBg} text-white font-bold text-3xl ${sideMenus ? "rotate-180" : "rotate-0"} duration-1000` +
            presets.scaleChange
          }
          onClick={() => setSideMenus(!sideMenus)}
        >
          <i className={`fas fa-angle-right`}></i>
        </button>
      </aside>

      <h1
        className={`cursor-pointer text-3xl ${Global.colors.title} ${presets.scaleChange}`}
        onClick={() => {
          navigate("/");
          setSideBar(false);
        }}
      >
        Orgrise
      </h1>

      <nav className={`hidden items-center h-full text sm:flex`}>
        <StartButton presets={presets}></StartButton>
        <ContentButton presets={presets}></ContentButton>
      </nav>

      <nav className={`flex gap-5 items-center`}>
        <LoginButton
          presets={presets}
          extraClasses={" hidden md:flex "}
        ></LoginButton>
        <SignonButton
          presets={presets}
          extraClasses={" hidden md:flex "}
        ></SignonButton>

        <button
          className={
            `flex items-center justify-center h-10! md:hidden ` +
            presets.bgButton +
            presets.scaleChange +
            `aspect-square`
          }
          onClick={() => setSideBar(!sideBar)}
        >
          <i className="fas fa-bars text-lg"></i>
        </button>
      </nav>
    </header>
  );
}
export default Header;
