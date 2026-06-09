import { useNavigate } from "react-router";

function SignonButton({ presets, extraClasses }) {
  const navigate = useNavigate();

  return (
    <button
          className={presets.bgButton + presets.scaleChange + extraClasses + ` ${localStorage.getItem('logged') === 'true' ? "hidden!" : ""}`} onClick={() => navigate('/signon')}
        >
          Cadastrar-se
        </button>
  );
}
export default SignonButton;