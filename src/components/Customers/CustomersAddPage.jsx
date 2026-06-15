import { useState } from "react";
import { Global } from "../../main";

function CustomersAddPage({ addPage, setAddPage, customers, setCustomers }) {
  const presets = {
    inputDiv: ` flex flex-col w-full `,
    inputTitle: ` font-bold cursor-pointer ` + Global.colors.title,
    inputContainer: ` p-2 text-xl rounded-sm ` + Global.colors.frontground1,
    bgButton:
      `cursor-pointer w-1/2 px-4 py-1.5 h-max mt-4 bg-linear-to-r rounded-4xl text-white font-bold text-xl ` +
      Global.colors.buttonBg,
  };

  const [data, setData] = useState({
    name: "",
    tel: "",
    email: "",
    city: "",
    status: true,
    lastBuy: 0,
    totalBuy: 0,
  });

  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("userData")) || [],
  );

  return (
    <form
      className={
        ` flex-col items-center gap-4 w-100 h-max p-8 border rounded-xl fixed top-1/2 left-1/2 -translate-1/2 ${addPage ? "flex" : "hidden"} ` +
        Global.colors.frontground0 +
        Global.colors.border
      }
      onSubmit={(e) => {
        e.preventDefault();

        if (customers.some((people) => people.email === data.email)) {
          console.log("Email já existe");
          return;
        } else if (customers.some((people) => people.tel === data.tel)) {
          console.log("Telefone já existe");
          return;
        }

        const newCustomers = [...customers, data];

        setCustomers(newCustomers);

        const newUserData = structuredClone(userData);
        newUserData.find(
          (data) => data.email === localStorage.getItem("logged"),
        ).customers = newCustomers;

        setUserData(newUserData);
        localStorage.setItem("userData", JSON.stringify(newUserData));
      }}
    >
      <h1 className={` font-bold text-2xl ` + Global.colors.title}>
        Adicionar Cliente
      </h1>

      <div className={` flex flex-col gap-2 w-full `}>
        <div className={presets.inputDiv}>
          <label htmlFor="name" className={presets.inputTitle}>
            Nome
          </label>
          <input
            type="text"
            id="name"
            className={presets.inputContainer}
            required
            onChange={(e) => {
              setData({ ...data, name: e.target.value });
            }}
          />
        </div>

        <div className={presets.inputDiv}>
          <label htmlFor="tel" className={presets.inputTitle}>
            Telefone
          </label>
          <input
            type="tel"
            id="tel"
            className={presets.inputContainer}
            value={data.tel}
            required
            onChange={(e) => {
              let tel = e.target.value.replace(/\D/g, "");

              tel = tel
                .replace(/^(\d{2})(\d)/, "($1) $2")
                .replace(/(\d{5})(\d)/, "$1-$2")
                .slice(0, 15);

              setData({ ...data, tel: tel });
            }}
          />
        </div>

        <div className={presets.inputDiv}>
          <label htmlFor="email" className={presets.inputTitle}>
            Email
          </label>
          <input
            type="email"
            id="email"
            className={presets.inputContainer}
            required
            onChange={(e) => {
              setData({ ...data, email: e.target.value });
            }}
          />
        </div>

        <div className={presets.inputDiv}>
          <label htmlFor="city" className={presets.inputTitle}>
            Cidade
          </label>
          <input
            type="text"
            id="city"
            className={presets.inputContainer}
            required
            onChange={(e) => {
              setData({ ...data, city: e.target.value });
            }}
          />
        </div>
      </div>

      <button className={presets.bgButton}>Adicionar</button>

      <div
        className={
          ` flex items-center justify-center fixed top-0 left-full -translate-1/2 w-8 h-8 border-2 rounded-full cursor-pointer ` +
          Global.colors.border +
          Global.colors.frontground2
        }
        onClick={() => setAddPage(false)}
      >
        <i className={` fas fa-xmark text-xl ` + Global.colors.title}></i>
      </div>
    </form>
  );
}
export default CustomersAddPage;
