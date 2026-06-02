import { useNavigate } from "react-router";
import { Global } from "../main";

function LoginButton({ presets, extraClasses }) {
  const navigate = useNavigate();

  return (
    <button
      className={
        presets.borderButtonBg + presets.scaleChange + extraClasses + ` ${Global.logged ? 'hidden!' : ''} `
      }
      onClick={() => navigate("/login")}
    >
      <span className={presets.borderButtonFg}>Entrar</span>
    </button>
  );
}
export default LoginButton;