import { useLocation, useNavigate } from "react-router";

function StartButton({ presets, extraClasses }) {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <button
      className={
        presets.textButton +
        (location.pathname === "/" ? presets.bgChange : "") +
        " h-10! " + extraClasses
      }
      onClick={() => navigate("/")}
    >
      Início
    </button>
  );
}
export default StartButton;
