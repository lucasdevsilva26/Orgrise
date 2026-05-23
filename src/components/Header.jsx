import { useNavigate } from "react-router";
import "./header.css";

function Header() {
  const navigate = useNavigate();

  return (
    <header id="header">
      <div id="logo">
        <button className="responButton" onClick={() => navigate("/")}>
          <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>O</div>
          <h1>rgrise</h1>
        </button>
      </div>

      <nav>
        <button id="start" onClick={() => navigate("/")}>
          <span>Início</span>
        </button>

        <button id="content">
          <span>Conteúdo</span>
        </button>
      </nav>

      <nav>
        <button
          id="login"
          className="responButton"
          onClick={() => navigate("/login")}
        >
          <span>Entrar</span>
        </button>

        <button
          id="signon"
          className="responButton"
          onClick={() => navigate("/signon")}
        >
          Cadastrar-se
        </button>

        <button
          id="menu"
          className="responButton"
          onClick={() => console.log("redirect")}
        >
          <i className="fas fa-bars"></i>
        </button>
      </nav>
    </header>
  );
}
export default Header;
