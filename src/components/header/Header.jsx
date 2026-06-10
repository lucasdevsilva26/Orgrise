import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import StartButton from "./StartButton";
import ContentButton from "./ContentButton";
import LoginButton from "./LoginButton";
import SignonButton from "./SignonButton";

import { Global } from "../../main";
import LoggedSideBar from "./LoggedSideBar";

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
  const location = useLocation();
  const [sideBar, setSideBar] = useState(false);

  const loggedOutPages = ['/', '/content', '/login', '/signon']

  useEffect(() => {
    if (localStorage.getItem("logged") === "false" && !loggedOutPages.includes(location.pathname)) {
      navigate("/");
      console.log('aaa')
    }
  });

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
            presets.scaleChange +
            Global.colors.buttonText +
            " cursor-pointer " +
            ""
          }
          onClick={() => setSideBar(false)}
        >
          Fechar <i className={"fas fa-arrow-right-to-bracket"}></i>
        </button>
      </aside>

      <LoggedSideBar presets={presets}></LoggedSideBar>

      <h1
        className={`flex place-items-center gap-2 cursor-pointer text-3xl ${Global.colors.title} ${presets.scaleChange}`}
        onClick={() => {
          navigate("/");
          setSideBar(false);
        }}
      >
        <section className=" w-8 h-8 relative ">
          <div
            className={` w-1 h-3 -rotate-45 bg-amber-400 absolute top-1/2 left-1/2 -translate-1/2 `}
          ></div>
          <div
            className={` w-1 h-1.5 bg-amber-400 absolute top-1/2 left-4/5 -translate-1/2 `}
          ></div>
          <div
            className={` w-1.5 h-1 bg-amber-400 absolute top-4/5 left-1/2 -translate-1/2 `}
          ></div>

          <div
            className={` w-4 h-4 border-3 border-red-500 rounded-full absolute top-1/4 left-1/4 -translate-1/2 `}
          ></div>
          <div
            className={` w-4 h-4 border-4 border-purple-800 rounded-full absolute top-4/4 left-4/4 -translate-1/1 `}
          ></div>

          <div
            className={` w-3 h-3 border-2 border-blue-500 rounded-full absolute top-1/4 left-4/4 -translate-x-1/1 -translate-y-1/2 `}
          ></div>
          <div
            className={` w-3 h-3 border-2 border-teal-500 rounded-full absolute top-4/4 left-1/4 -translate-x-1/2 -translate-y-1/1`}
          ></div>
        </section>
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
