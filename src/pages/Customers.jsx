import { useState } from "react";
import Body from "../components/Body";
import Footer from "../components/Footer";
import Header from "../components/header/Header";

import { Global } from "../main";
import CustomersAddPage from "../components/Customers/CustomersAddPage";

function Customers() {
  const presets = {
    cardIcon: ` text-4xl mr-3 text-white `,
    cardTitle: ` font-bold ` + Global.colors.title,
    cardValue: ` text-green-500 font-bold `,

    cellContainer: ` flex flex-col `,
    cellTitle: ` font-bold ` + Global.colors.title,

    bgButton: `cursor-pointer w-max px-4 h-max py-1.5 bg-linear-to-r ${Global.colors.buttonBg} rounded-4xl text-white`,
  };

  const [addPage, setAddPage] = useState(false);
  const [removeMode, setRemoveMode] = useState(false);

  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("userData")) || [],
  );

  const [customers, setCustomers] = useState(
    userData.find((data) => data.email === localStorage.getItem("logged"))
      .customers,
  );

  function changeAddPage() {
    setRemoveMode(false);
    setAddPage(!addPage);
  }
  function changeRemoveMode() {
    setAddPage(false);
    setRemoveMode(!removeMode);
  }

  return (
    <>
      <Header></Header>
      <Body direction={` flex-col `}>
        <section className={` flex flex-col items-center py-5 relative `}>
          <div className={` flex flex-col text-center `}>
            <h1 className={` text-3xl font-bold ` + Global.colors.title}>
              Meus Clientes
            </h1>
            <p className={` ml-4 text-1xl font-bold ` + Global.colors.text}>
              Gerencie e acompanhe seus clientes cadastrados
            </p>
          </div>

          <section
            className={
              ` flex flex-wrap place-items-center justify-evenly gap-6 w-full p-5 mt-5 ` +
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

              <div className={presets.cellContainer}>
                <h2 className={presets.cardTitle}>Total de Clientes</h2>
                <span className={presets.cardValue}>
                  {customers.length.toLocaleString("pt-BR")}
                </span>
              </div>
            </article>
          </section>

          <section className={` w-full my-5 `}>
            <h1
              className={
                ` pl-4 font-bold text-3xl text-center ` + Global.colors.title
              }
            >
              Lista de Clientes
            </h1>

            <div
              className={
                ` flex justify-center gap-4 border-y-2 py-4 my-4` +
                Global.colors.border
              }
            >
              <button
                className={` font-bold ` + presets.bgButton}
                onClick={() => changeAddPage()}
              >
                Adicionar
              </button>
              <button
                className={` font-bold ` + presets.bgButton}
                onClick={() => changeRemoveMode()}
              >
                Remover
              </button>
            </div>

            <div className={` flex flex-wrap justify-center gap-4 `}>
              {customers.map((people) => {
                return (
                  <article
                    key={crypto.randomUUID()}
                    className={
                      ` flex flex-wrap gap-4 w-100 h-60 p-4 rounded-xl border ${removeMode ? "border-red-600" : Global.colors.border} ` +
                      Global.colors.frontground0
                    }
                    onClick={() => {
                      if (removeMode) {
                        const newCustomers = customers.filter(
                          (peopleToVerify) => peopleToVerify !== people,
                        );
                        setCustomers(newCustomers);

                        const newUserData = structuredClone(userData);
                        newUserData.find(
                          (data) =>
                            data.email === localStorage.getItem("logged"),
                        ).customers = newCustomers;

                        let alerts = newUserData.find(
                          (data) =>
                            data.email === localStorage.getItem("logged"),
                        ).alerts;
                        newUserData.find(
                          (data) =>
                            data.email === localStorage.getItem("logged"),
                        ).alerts = [
                          ...alerts,
                          {
                            area: "Clientes",
                            effect: "Remoção",
                            date: new Date().toLocaleDateString("pt-BR"),
                            hour: new Date().toLocaleTimeString("pt-BR", {
                              hour: "2-digit",
                              minute: "2-digit",
                            }),
                            description: `Cliente [${people.name}] removido da ficha de cadastro.`,
                          },
                        ];

                        setUserData(newUserData);
                        localStorage.setItem(
                          "userData",
                          JSON.stringify(newUserData),
                        );
                      }
                    }}
                  >
                    <div className={presets.cellContainer}>
                      <span className={presets.cellTitle}>Nome:</span>
                      <span>{people.name}</span>
                    </div>

                    <div className={presets.cellContainer}>
                      <span className={presets.cellTitle}>Telefone:</span>
                      <span>{people.tel}</span>
                    </div>

                    <div className={presets.cellContainer}>
                      <span className={presets.cellTitle}>Email:</span>
                      <span>{people.email}</span>
                    </div>

                    <div className={presets.cellContainer}>
                      <span className={presets.cellTitle}>Cidade:</span>
                      <span>{people.city}</span>
                    </div>

                    <div className={presets.cellContainer}>
                      <span className={presets.cellTitle}>Status:</span>
                      <span>{people.status ? "Ativo" : "Inativo"}</span>
                    </div>

                    <div className={presets.cellContainer}>
                      <span className={presets.cellTitle}>Última Compra:</span>
                      <span>{people.lastBuy}</span>
                    </div>

                    <div className={presets.cellContainer}>
                      <span className={presets.cellTitle}>
                        Total de Compras:
                      </span>
                      <span>{people.totalBuy}</span>
                    </div>
                  </article>
                );
              })}
            </div>

            <CustomersAddPage
              addPage={addPage}
              setAddPage={setAddPage}
              customers={customers}
              setCustomers={setCustomers}
            ></CustomersAddPage>
          </section>
        </section>
      </Body>
      <Footer></Footer>
    </>
  );
}
export default Customers;
