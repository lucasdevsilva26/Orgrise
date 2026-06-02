import { useNavigate } from "react-router";
import { Global } from "../main";

function SignonButton({ presets, extraClasses }) {
  const navigate = useNavigate();

  return (
    <button
          className={presets.bgButton + presets.scaleChange + extraClasses + ` ${Global.logged ? 'hidden!' : ''} `}
        >
          Cadastrar-se
        </button>
  );
}
export default SignonButton;