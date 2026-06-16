import { Global } from "../main";
import Body from "../components/Body";
import Footer from "../components/Footer";
import Header from "../components/header/Header";
import { useState } from "react";

function Alerts() {
  const presets = {
    dataContainer: " flex items-center justify-between gap-2 w-max p-1 ",
    dataTitle:
      ` p-2 rounded-xl font-bold ` +
      Global.colors.title +
      Global.colors.background,
    dataValues: ` p-1 rounded-xl ` + Global.colors.frontground1,
  };

  const userData = JSON.parse(localStorage.getItem("userData")) || [];

  const alerts = userData.find(
    (data) => data.email === localStorage.getItem("logged"),
  ).alerts;

  return (
    <>
      <Header></Header>
      <Body direction={"flex-col"}>
        <section
          className={` flex flex-col place-items-center w-full h-full py-4 `}
        >
          <h1 className={Global.colors.title + `text-2xl font-bold `}>
            Lista de Alertas
          </h1>

          <hr className={` w-full h-4 my-4` + Global.colors.border} />

          <section className={` flex flex-wrap justify-center gap-10 w-full `}>
            {[...alerts].reverse().map((alert) => {
              return (
                <article
                  key={crypto.randomUUID()}
                  className={
                    ` flex flex-col gap-2 w-100 p-4 rounded-2xl border-2 border-amber-500 ` +
                    Global.colors.frontground0
                  }
                >
                  <div className={presets.dataContainer}>
                    <span className={presets.dataTitle}>Setor:</span>
                    <span className={presets.dataValues}>{alert.area}</span>

                    <span className={presets.dataTitle}>Efeito:</span>
                    <span className={presets.dataValues}>{alert.effect}</span>
                  </div>

                  <div className={presets.dataContainer}>
                    <span className={presets.dataTitle}>Data:</span>
                    <span className={presets.dataValues}>{alert.date}</span>

                    <span className={presets.dataTitle}>Hora:</span>
                    <span className={presets.dataValues}>{alert.hour}</span>
                  </div>

                  <div
                    className={` flex-col items-start ` + presets.dataContainer}
                  >
                    <span className={presets.dataTitle}>Descrição:</span>
                    <span className={presets.dataValues + ` w-28/30 `}>
                      {alert.description}
                    </span>
                  </div>
                </article>
              );
            })}
          </section>
        </section>
      </Body>
      <Footer></Footer>
    </>
  );
}
export default Alerts;
