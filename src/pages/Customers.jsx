import Body from "../components/Body";
import Footer from "../components/Footer";
import Header from "../components/Header";

import { Global } from "../main";

function Customers() {
  const presets = {
    cardIcon: ` text-4xl mr-3 text-white `,
    cardTitle: ` font-bold ` + Global.colors.title,
    cardValue: ` font-bold ` + Global.colors.text,
    cardChanges: ` text-green-500 `,
    cell:
      ` flex-1 flex items-center w-0 pl-2 py-2 border overflow-hidden text-nowrap ` +
      Global.colors.border,
  };

  return (
    <>
      <Header></Header>
      <Body direction={` flex-col `}>
        <section className={` flex flex-col items-center py-5 `}>
          <div className={` flex flex-col mr-auto ml-5 `}>
            <h1 className={` text-3xl font-bold ` + Global.colors.title}>
              Meus Clientes
            </h1>
            <p className={` ml-4 text-1xl font-bold ` + Global.colors.text}>
              Gerencie e acompanhe seus clientes cadastrados
            </p>
          </div>

          <section
            className={
              ` flex justify-evenly w-full p-5 mt-5 ` +
              Global.colors.frontground0
            }
          >
            <article className={` flex `}>
              <div
                className={
                  ` bg-blue-700 w-max h-max p-1 rounded-xl ` + presets.cardIcon
                }
              >
                <i className={` fas fa-people-group `}></i>
              </div>

              <div className={` flex flex-col `}>
                <h2 className={presets.cardTitle}>Total de Clientes</h2>
                <span className={presets.cardValue}>1.240</span>
                <span className={presets.cardChanges}>+18 este mês</span>
              </div>
            </article>

            <article className={` flex `}>
              <div
                className={
                  ` bg-emerald-500 w-max h-max p-1 rounded-xl ` +
                  presets.cardIcon
                }
              >
                <i className={` fas fa-user-plus `}></i>
              </div>

              <div className={` flex flex-col `}>
                <h2 className={presets.cardTitle}>Novos Clientes</h2>
                <span className={presets.cardValue}>86</span>
                <span className={presets.cardChanges}>+18 este mês</span>
              </div>
            </article>

            <article className={` flex `}>
              <div
                className={
                  ` bg-purple-600 w-max h-max p-1 rounded-xl ` +
                  presets.cardIcon
                }
              >
                <i className={` fas fa-chart-line `}></i>
              </div>

              <div className={` flex flex-col `}>
                <h2 className={presets.cardTitle}>Clientes Ativos</h2>
                <span className={presets.cardValue}>1.102</span>
                <span className={presets.cardChanges}>+8 este mês</span>
              </div>
            </article>

            <article className={` flex `}>
              <div
                className={
                  ` bg-amber-400 w-max h-max p-1 rounded-xl ` + presets.cardIcon
                }
              >
                <i className={` fas fa-face-laugh `}></i>
              </div>

              <div className={` flex flex-col `}>
                <h2 className={presets.cardTitle}>Taxa de Satisfação</h2>
                <span className={presets.cardValue}>98%</span>
                <span className={presets.cardChanges}>Exelente</span>
              </div>
            </article>
          </section>

          <section className={` w-full my-5 `}>
            <div>
              <h1 className={` pl-4 font-bold text-3xl ` + Global.colors.title}>
                Lista de Clientes
              </h1>
            </div>

            <section className={` flex flex-col w-full `}>
              <div className={` flex justify-between w-full px-2 font-bold `}>
                <span className={presets.cell + Global.colors.frontground0}>
                  Cliente
                </span>
                <span className={presets.cell + Global.colors.frontground0}>
                  E-mail
                </span>
                <span className={presets.cell + Global.colors.frontground0}>
                  Telefone
                </span>
                <span className={presets.cell + Global.colors.frontground0}>
                  Cidade
                </span>
                <span className={presets.cell + Global.colors.frontground0}>
                  Status
                </span>
                <span className={presets.cell + Global.colors.frontground0}>
                  Ações
                </span>
              </div>

              <div className={` flex justify-between w-full px-2 `}>
                <span className={presets.cell}>Teste da Silva</span>
                <span className={presets.cell}>email@Gmail.com</span>
                <span className={presets.cell}>(00) 0000-0000</span>
                <span className={presets.cell}>São Paulo</span>
                <span className={presets.cell}>Ativo</span>
                <span
                  className={
                    ` flex items-center justify-evenly ` + presets.cell
                  }
                >
                  <i className={` fas fa-eye `}></i>
                  <i className={` fas fa-ellipsis-vertical `}></i>
                </span>
              </div>

              <div className={` flex justify-between w-full px-2 `}>
                <span className={presets.cell}>Teste da Silva</span>
                <span className={presets.cell}>email@Gmail.com</span>
                <span className={presets.cell}>(00) 0000-0000</span>
                <span className={presets.cell}>São Paulo</span>
                <span className={presets.cell}>Ativo</span>
                <span
                  className={
                    ` flex items-center justify-evenly ` + presets.cell
                  }
                >
                  <i className={` fas fa-eye `}></i>
                  <i className={` fas fa-ellipsis-vertical `}></i>
                </span>
              </div>

              <div className={` flex justify-between w-full px-2 `}>
                <span className={presets.cell}>Teste da Silva</span>
                <span className={presets.cell}>email@Gmail.com</span>
                <span className={presets.cell}>(00) 0000-0000</span>
                <span className={presets.cell}>São Paulo</span>
                <span className={presets.cell}>Ativo</span>
                <span
                  className={
                    ` flex items-center justify-evenly ` + presets.cell
                  }
                >
                  <i className={` fas fa-eye `}></i>
                  <i className={` fas fa-ellipsis-vertical `}></i>
                </span>
              </div>

              <div className={` flex justify-between w-full px-2 `}>
                <span className={presets.cell}>Teste da Silva</span>
                <span className={presets.cell}>email@Gmail.com</span>
                <span className={presets.cell}>(00) 0000-0000</span>
                <span className={presets.cell}>São Paulo</span>
                <span className={presets.cell}>Ativo</span>
                <span
                  className={
                    ` flex items-center justify-evenly ` + presets.cell
                  }
                >
                  <i className={` fas fa-eye `}></i>
                  <i className={` fas fa-ellipsis-vertical `}></i>
                </span>
              </div>

              <div className={` flex justify-between w-full px-2 `}>
                <span className={presets.cell}>Teste da Silva</span>
                <span className={presets.cell}>email@Gmail.com</span>
                <span className={presets.cell}>(00) 0000-0000</span>
                <span className={presets.cell}>São Paulo</span>
                <span className={presets.cell}>Ativo</span>
                <span
                  className={
                    ` flex items-center justify-evenly ` + presets.cell
                  }
                >
                  <i className={` fas fa-eye `}></i>
                  <i className={` fas fa-ellipsis-vertical `}></i>
                </span>
              </div>

              <div className={` flex justify-between w-full px-2 `}>
                <span className={presets.cell}>Teste da Silva</span>
                <span className={presets.cell}>email@Gmail.com</span>
                <span className={presets.cell}>(00) 0000-0000</span>
                <span className={presets.cell}>São Paulo</span>
                <span className={presets.cell}>Ativo</span>
                <span
                  className={
                    ` flex items-center justify-evenly ` + presets.cell
                  }
                >
                  <i className={` fas fa-eye `}></i>
                  <i className={` fas fa-ellipsis-vertical `}></i>
                </span>
              </div>

              <div className={` flex justify-between w-full px-2 `}>
                <span className={presets.cell}>Teste da Silva</span>
                <span className={presets.cell}>email@Gmail.com</span>
                <span className={presets.cell}>(00) 0000-0000</span>
                <span className={presets.cell}>São Paulo</span>
                <span className={presets.cell}>Ativo</span>
                <span
                  className={
                    ` flex items-center justify-evenly ` + presets.cell
                  }
                >
                  <i className={` fas fa-eye `}></i>
                  <i className={` fas fa-ellipsis-vertical `}></i>
                </span>
              </div>

              <div className={` flex justify-between w-full px-2 `}>
                <span className={presets.cell}>Teste da Silva</span>
                <span className={presets.cell}>email@Gmail.com</span>
                <span className={presets.cell}>(00) 0000-0000</span>
                <span className={presets.cell}>São Paulo</span>
                <span className={presets.cell}>Ativo</span>
                <span
                  className={
                    ` flex items-center justify-evenly ` + presets.cell
                  }
                >
                  <i className={` fas fa-eye `}></i>
                  <i className={` fas fa-ellipsis-vertical `}></i>
                </span>
              </div>

              <div className={` flex justify-between w-full px-2 `}>
                <span className={presets.cell}>Teste da Silva</span>
                <span className={presets.cell}>email@Gmail.com</span>
                <span className={presets.cell}>(00) 0000-0000</span>
                <span className={presets.cell}>São Paulo</span>
                <span className={presets.cell}>Ativo</span>
                <span
                  className={
                    ` flex items-center justify-evenly ` + presets.cell
                  }
                >
                  <i className={` fas fa-eye `}></i>
                  <i className={` fas fa-ellipsis-vertical `}></i>
                </span>
              </div>
            </section>
          </section>
        </section>
      </Body>
      <Footer></Footer>
    </>
  );
}
export default Customers;
