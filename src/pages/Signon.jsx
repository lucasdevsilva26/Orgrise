import Header from "../components/header/Header";
import Body from "../components/Body";
import Footer from "../components/Footer";
import LoginSignonInput from "../components/header/LoginSignonInput";
import { useNavigate } from "react-router";

import { Global } from "../main";
import { useState } from "react";

function Signon() {
  const presets = {
    title: `font-bold text-4xl ${Global.colors.title} sm:text-6xl`,
    parag: "pl-3",
    bgButton: `cursor-pointer w-100 px-4 h-max py-2 bg-linear-to-r ${Global.colors.buttonBg} rounded-4xl font-bold text-white text-3xl`,
    scaleChange: ` duration-350 hover:scale-95 `,
  };
  const navigate = useNavigate();

  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("userData")) || [],
  );

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const validations = {
    email: {
      isNull: [
        !email || email.trim().length === 0,
        "Preencha o campo Email para continuar!",
      ],
      exists: [
        userData.some((data) => email.trim().toLowerCase() === data.email),
        "Email já cadastrado, tente outro!",
      ],
    },
    password: {
      isTiny: [
        password.trim().length < 8,
        "A senha precisa ser maior ou igual à 8 caracteres!",
      ],
    },
    confirmPassword: {
      different: [
        password.trim() !== passwordConfirm.trim(),
        "As duas senhas estão diferentes!",
      ],
    },
  };

  const isValid = Object.values(validations).every((field) =>
    Object.values(field).every(([failed]) => !failed),
  );

  function saveData(formValidity) {
    if (isValid && formValidity) {
      const newData = [
        ...userData,
        {
          email: email.trim().toLowerCase(),
          password: password.trim(),
          storage: [],
          orders: [],
          customers: [],
          invoices:[],
          finance: [],
          employees:[],
          schedule:[],
          reports:[],
          suppliers: [],
          alerts:[]
        },
      ];

      localStorage.setItem("userData", JSON.stringify(newData));
      setUserData(newData);
    }
  }

  return (
    <>
      <Header colors={Global.colors}></Header>
      <Body colors={Global.colors} direction={"flex-col"}>
        <section
          className={`flex flex-col items-center justify-center h-screen`}
        >
          <form
            action=""
            className={`flex flex-col items-center justify-center gap-5 w-8/10 max-w-110 px-4 py-10 text-justify wrap-break-word ${Global.colors.frontground0} rounded-2xl shadow-2xl`}
            onSubmit={(form) => {
              form.preventDefault();

              saveData(form.currentTarget.checkValidity());
              if (isValid && form.currentTarget.checkValidity()) {
                navigate("/landing");
                localStorage.setItem("logged", true);
              }
            }}
          >
            <h1 className={presets.title}>Cadastro</h1>

            <LoginSignonInput
              name={"Email"}
              type={"email"}
              toggleVisibility={false}
              colors={Global.colors}
              setValue={setEmail}
              errorMsg={
                validations.email.isNull[0]
                  ? validations.email.isNull[1]
                  : validations.email.exists[0]
                    ? validations.email.exists[1]
                    : ""
              }
            ></LoginSignonInput>

            <LoginSignonInput
              name={"Senha"}
              type={"text"}
              toggleVisibility={true}
              colors={Global.colors}
              setValue={setPassword}
              errorMsg={
                validations.password.isTiny[0]
                  ? validations.password.isTiny[1]
                  : ""
              }
            ></LoginSignonInput>

            <LoginSignonInput
              name={"Confirmar senha"}
              type={"text"}
              toggleVisibility={true}
              colors={Global.colors}
              setValue={setPasswordConfirm}
              errorMsg={
                validations.confirmPassword.different[0]
                  ? validations.confirmPassword.different[1]
                  : ""
              }
            ></LoginSignonInput>

            <div className={` flex flex-col place-items-center w-5/6 `}>
              <button
                className={
                  presets.bgButton +
                  ` w-full ${isValid ? "presets.scaleChange" : "opacity-50 cursor-default!"} `
                }
                type="submit"
              >
                Criar conta
              </button>

              <span
                className=" text-violet-500 font-bold cursor-pointer "
                onClick={() => navigate("/login")}
              >
                Já possuí uma conta? Clique aqui.
              </span>
            </div>
          </form>
        </section>
      </Body>
      <Footer colors={Global.colors}></Footer>
    </>
  );
}
export default Signon;
