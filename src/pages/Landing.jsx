import Header from "../components/Header";
import Footer from "../components/Footer";
import "./landing.css";
import { useState } from "react";
import CreateMenu from "../components/CreateMenu";
import SideBar from "../components/SideBar";
import SideMenus from "../components/SideMenus";

function Landing() {
  const [sideMenuState, changeSideMenuState] = useState(false);

  return (
    <>
      <Header
        sideMenuState={sideMenuState}
        changeSideMenuState={changeSideMenuState}
      ></Header>

      <main id="landing">
        <h1>Bem vindo!</h1>

        <SideBar></SideBar>
        <SideMenus sideMenuState={sideMenuState}></SideMenus>

        <CreateMenu></CreateMenu>
      </main>

      <Footer></Footer>
    </>
  );
}
export default Landing;
