import { useNavigate } from "react-router";

function LoginButton({ presets, extraClasses }) {
  const navigate = useNavigate();

  return (
    <button
      className={
        presets.borderButtonBg + presets.scaleChange + extraClasses +  ` ${localStorage.getItem('logged') !== 'false' ? "hidden!" : ""} `
      }
      onClick={() => navigate("/login")}
    >
      <span className={presets.borderButtonFg}>Entrar</span>
    </button>
  );
}
export default LoginButton;