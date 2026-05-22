import { use, useState } from "react";
import './sideBar.css'

function SideBar() {
  const [sideBar, changeSideBar] = useState(false);

  return (
    <>
      <aside id="sideBar" style={{ transform: `translateX(-${sideBar ? 0 : 100}%)` }}>
        <button className="responButton">
          <i className="fas fa-chart-column"></i>
          Gráficos
        </button>

        <button className="responButton">
          <i className="fas fa-boxes-stacked"></i>
          Estoque
        </button>

        <button className="responButton">
          <i className="fas fa-truck-fast"></i>
          Pedidos
        </button>

        <button className="responButton">
          <i className="fas fa-people-group"></i>
          Clientes
        </button>

        <button className="responButton">
          <i className="fas fa-file-contract"></i>
          Notas Fiscais
        </button>

        <button className="responButton">
          <i className="fab fa-cash-app"></i>
          Financeiro
        </button>

        <button className="responButton">
          <i className="fas fa-user-tie"></i>
          Funcionários
        </button>

        <button className="responButton">
          <i className="far fa-calendar-days"></i>
          Agenda
        </button>

        <button className="responButton">
          <i className="fas fa-file-lines"></i>
          Relatórios
        </button>

        <button className="responButton">
          <i className="fas fa-handshake"></i>
          Fornecedores
        </button>

        <button className="responButton">
          <i className="fas fa-triangle-exclamation"></i>
          Alertas
        </button>

        <button className="responButton">
          <i className="fas fa-screwdriver-wrench"></i>
          Configurações
        </button>

        <button id="menuButton" onClick={() => changeSideBar(!sideBar)}>
          <i
            className="fas fa-angle-left"
            style={{ rotate: `${sideBar ? 0 : 180}deg` }}
          ></i>
        </button>
      </aside>
    </>
  );
}
export default SideBar;
