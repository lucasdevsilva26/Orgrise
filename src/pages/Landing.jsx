import Body from "../components/Body";
import Footer from "../components/Footer";
import Header from "../components/header/Header";

import { Global } from "../main";

function Landing() {
  const presets = {};

  const cards = [
    {
      icon: "fas fa-brain",
      title: "Tutorial",
      Description:
        "Acesse guias rápidos e instruções para aprender a utilizar todas as funcionalidades do sistema.",
    },
    {
      icon: "fas fa-chart-column",
      title: "Gráficos",
      Description:
        "Visualize informações importantes do seu negócio através de gráficos e indicadores de desempenho.",
    },
    {
      icon: "fas fa-boxes-stacked",
      title: "Estoque",
      Description:
        "Cadastre, edite e acompanhe todos os produtos disponíveis em seu estoque.",
    },
    {
      icon: "fas fa-truck-fast",
      title: "Pedidos",
      Description:
        "Gerencie os pedidos realizados pelos clientes, acompanhe status e histórico de vendas.",
    },
    {
      icon: "fas fa-people-group",
      title: "Clientes",
      Description:
        "Cadastre e consulte informações dos seus clientes para facilitar o atendimento.",
    },
    {
      icon: "fas fa-file-contract",
      title: "Faturas",
      Description: "Crie, visualize e acompanhe faturas e cobranças emitidas.",
    },
    {
      icon: "fab fa-cash-app",
      title: "Financeiro",
      Description:
        "Monitore receitas, despesas e tenha uma visão geral da saúde financeira da empresa.",
    },
    {
      icon: "fas fa-user-tie",
      title: "Funcionários",
      Description:
        "Gerencie informações da equipe, cargos e dados dos colaboradores.",
    },
    {
      icon: "far fa-calendar-days",
      title: "Agenda",
      Description: "Organize compromissos, reuniões e tarefas importantes.",
    },
    {
      icon: "fas fa-file-lines",
      title: "Relatórios",
      Description:
        "Gere relatórios detalhados para análise e tomada de decisões.",
    },
    {
      icon: "fas fa-handshake",
      title: "Fornecedores",
      Description:
        "Cadastre e acompanhe os fornecedores responsáveis pelo abastecimento da empresa.",
    },
    {
      icon: "fas fa-triangle-exclamation",
      title: "Alertas",
      Description:
        "Receba notificações sobre eventos importantes, pendências e situações que exigem atenção.",
    },
    {
      icon: "fas fa-screwdriver-wrench",
      title: "Configurações",
      Description:
        "Personalize o sistema de acordo com as necessidades da sua empresa.",
    },
  ];

  return (
    <>
      <Header colors={Global.colors}></Header>
      <Body colors={Global.colors} direction={"flex-row"}>
        <section
          className={` flex flex-col items-center gap-10 w-full py-10 relative `}
        >
          <h1 className={` text-4xl font-bold ${Global.colors.title} `}>
            Como começar?
          </h1>

          <div
            className={`flex flex-col place-items-center w-full py-10 ${Global.colors.frontground1}`}
          >
            <div className="flex flex-col place-items-center gap-10 max-w-1/2 ">
              <h2 className={`text-5xl font-bold ${Global.colors.title} `}>
                Como usar o menu lateral:
              </h2>

              <p className={`text-2xl text-justify `}>
                {" "}
                O menu localizado à esquerda reúne todas as principais
                ferramentas do sistema. Basta clicar em uma opção para acessar
                sua funcionalidade.
              </p>
            </div>
          </div>

          <section className={`flex flex-wrap gap-10 justify-center w-full px-10`}>
            {cards.map((card) => {
              return (
                <div
                  key={crypto.randomUUID()}
                  className={`flex flex-col place-items-center gap-4 w-100 p-5 rounded-2xl ${Global.colors.frontground0} border-2 ${Global.colors.border} flip3D swordGlow movimentAnim`}
                >
                  <i
                    className={`${card.icon} text-5xl ${Global.colors.title}`}
                  ></i>
                  <h1 className={`text-3xl font-bold ${Global.colors.title}`}>
                    {card.title}
                  </h1>
                  <p className="text-xl text-justify">{card.Description}</p>
                </div>
              );
            })}
          </section>
        </section>
      </Body>
      <Footer colors={Global.colors}></Footer>
    </>
  );
}
export default Landing;
