import Header from "../components/Header";
import Body from "../components/Body";
import Footer from "../components/Footer";
import LoginSignonInput from "../components/LoginSignonInput";
import { useNavigate } from "react-router";

import { Global } from "../main";

function Signon() {
  const presets = {
    title: `font-bold text-4xl ${Global.colors.title} sm:text-6xl`,
    parag: "pl-3",
    bgButton: `cursor-pointer w-100 px-4 h-max py-2 bg-linear-to-r ${Global.colors.buttonBg} rounded-4xl font-bold text-white text-3xl`,
    scaleChange: ` duration-350 hover:scale-95 `,
  };
  const navigate = useNavigate();

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
              form.preventDefault()
              navigate("/landing");
              Global.logged = true
            }}
          >
            <h1 className={presets.title}>Cadastro</h1>

            <LoginSignonInput
              name={"Email"}
              type={"email"}
              toggleVisibility={false}
              colors={Global.colors}
            ></LoginSignonInput>

            <LoginSignonInput
              name={"Senha"}
              type={"text"}
              toggleVisibility={true}
              colors={Global.colors}
            ></LoginSignonInput>

            <LoginSignonInput
              name={"Confirmar senha"}
              type={"text"}
              toggleVisibility={true}
              colors={Global.colors}
            ></LoginSignonInput>

            <div className={` w-1/2 `}>
              <button
                className={presets.bgButton + presets.scaleChange + ` w-full `}
                type="submit"
              >
                Criar conta
              </button>
            </div>
          </form>
        </section>
      </Body>
      <Footer colors={Global.colors}></Footer>
    </>
  );
}
export default Signon;
