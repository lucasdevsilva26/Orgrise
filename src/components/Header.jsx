import { useNavigate } from "react-router";
import "./header.css";

function Header() {
  const navigate = useNavigate();

  return (
    <header id="header">
      <div>
        <button className="responButton" onClick={() => navigate("/")}>
          <div style={{fontSize:'1.5rem', fontWeight:'bold'}}>O</div>
          <h1>rgrise</h1>
        </button>
      </div>

      <nav>
        <button onClick={() => navigate("/")}><span>Início</span></button>

        <button><span>Conteúdo</span></button>
      </nav>

      <nav>
        <button className="responButton" onClick={() => navigate("/login")}>
          <span>Entrar</span>
        </button>

        <button className="responButton" onClick={() => navigate("/signon")}>
          Cadastrar-se
        </button>
      </nav>
    </header>
  );
}
export default Header;
