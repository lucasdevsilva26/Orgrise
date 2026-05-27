import { useState } from "react";
import "./sideMenus.css";
import { useNavigate } from "react-router";

function SideMenus({sideMenuState}) {
  const navigate = useNavigate();

  return (
    <>
      <aside
        id="sideMenus"
        style={{ transform: `translateX(${sideMenuState ? 0 : 100}%)` }}
      >
        <button
          id="start"
          className="coloredButton responButton"
          onClick={() => navigate("/")}
        >
          <span>
            <i className="fas fa-house"></i>
            Início
          </span>
        </button>

        <button
        id="content"
          className="coloredButton responButton"
          onClick={() => navigate("/content")}
        >
          <span>
            <i className="fas fa-lightbulb"></i>
            Conteúdo
          </span>
        </button>

        <button
        id="login"
          className="coloredButton responButton"
          onClick={() => navigate("/login")}
        >
          <span>
            <i className="fas fa-arrow-right-to-bracket"></i>
            Entrar
          </span>
        </button>

        <button
        id="signon"
          className="coloredButton responButton"
          onClick={() => navigate("/signon")}
        >
          <span>
            <i className="fas fa-user-pen"></i>
            Cadastrar-se
          </span>
        </button>
      </aside>
    </>
  );
}
export default SideMenus;
