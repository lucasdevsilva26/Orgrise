import { useState } from "react";
import { useNavigate } from "react-router";
import { Global } from "../../main";

function LoggedSideBar({presets}) {
    const navigate = useNavigate()

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
        <aside
                className={`flex flex-col items-center gap-4 w-50 px-6 h-full py-18 ${Global.colors.background} border-r-2 ${Global.colors.border} fixed top-0 right-full text-base! ${sideMenus ? "translate-x-full" : "translate-x-0"} duration-500 ${localStorage.getItem('logged') === 'true' ? "" : "hidden!"} z-50`}
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
                    `flex items-center justify-center absolute top-18 left-full ml-2 w-10 h-10 rounded-4xl ${Global.colors.buttonBg} text-white font-bold text-3xl ${sideMenus ? "rotate-180" : "rotate-0"} duration-1000 opacity-75` +
                    presets.scaleChange
                  }
                  onClick={() => setSideMenus(!sideMenus)}
                >
                  <i className={`fas fa-angle-right`}></i>
                </button>
              </aside>
    )
}
export default LoggedSideBar