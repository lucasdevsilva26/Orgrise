import Header from "../components/header/Header";
import Body from "../components/Body";
import Footer from "../components/Footer";
import LoginSignonInput from "../components/header/LoginSignonInput";
import { useNavigate } from "react-router";

import { Global } from "../main";
import { useState } from "react";

function Login() {
  const presets = {
    title: `font-bold text-6xl ${Global.colors.title} `,
    parag: "pl-3",
    bgButton: `cursor-pointer w-100 px-4 h-max py-2 bg-linear-to-r ${Global.colors.buttonBg} rounded-4xl font-bold text-white text-3xl`,
    scaleChange: ` duration-350 hover:scale-95 `,
  };
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userData = JSON.parse(localStorage.getItem("userData")) || [];

  const validations = {
    email: {
      isNull: [
        !email || email.trim().length === 0,
        "Preencha o campo Email para continuar!",
      ],
      notExists: [
        !userData.some((data) => email.trim().toLowerCase() === data.email),
        "Email não cadastrado, tente outro!",
      ],
    },
    password: {
      isNull: [
        !password || password.trim().length === 0,
        "Preencha o campo Senha para continuar!",
      ],
      passwordWrong: [
        password !==
          userData.find((data) => data.email === email.trim().toLowerCase())
            ?.password,
        "Senha errada, tente outra!",
      ],
    },
  };
  const isValid = Object.values(validations).every((field) =>
    Object.values(field).every(([failed]) => !failed),
  );

  return (
    <>
      <Header colors={Global.colors}></Header>
      <Body colors={Global.colors} direction={"flex-col"}>
        <section
          className={`flex flex-col items-center justify-center h-screen`}
        >
          <form
            action=""
            className={`flex flex-col items-center justify-center gap-10 w-8/10 max-w-110 px-4 py-10 text-justify wrap-break-word ${Global.colors.frontground0} rounded-2xl shadow-2xl`}
            onSubmit={(form) => {
              form.preventDefault();
              const validEmail = email.trim().toLowerCase();

              if (form.currentTarget.checkValidity() && isValid) {
                navigate("/landing");
                localStorage.setItem("logged", validEmail);
              }
            }}
          >
            <h1 className={presets.title}>Login</h1>

            <LoginSignonInput
              name={"Email"}
              type={"email"}
              toggleVisibility={false}
              colors={Global.colors}
              setValue={setEmail}
              errorMsg={
                validations.email.isNull[0]
                  ? validations.email.isNull[1]
                  : validations.email.notExists[0]
                    ? validations.email.notExists[1]
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
                validations.password.isNull[0]
                  ? validations.password.isNull[1]
                  : validations.password.passwordWrong[0]
                    ? validations.password.passwordWrong[1]
                    : ""
              }
            ></LoginSignonInput>

            <div className={` flex flex-col place-items-center w-5/6 `}>
              <button
                className={
                  presets.bgButton +
                  presets.scaleChange +
                  ` w-full ${isValid ? "presets.scaleChange" : "opacity-50 cursor-default!"} `
                }
                type="submit"
              >
                Entrar
              </button>
              <span
                className=" text-violet-500 font-bold cursor-pointer "
                onClick={() => navigate("/signon")}
              >
                Não possuí uma conta? Clique aqui.
              </span>
            </div>
          </form>
        </section>
      </Body>
      <Footer colors={Global.colors}></Footer>
    </>
  );
}
export default Login;
