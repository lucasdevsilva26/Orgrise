import { useLocation, useNavigate } from "react-router";

function ContentButton({ presets, extraClasses }) {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <button
      className={
        presets.textButton +
        (location.pathname === "/content" ? presets.bgChange : "") +
        " h-10! " + extraClasses
      }
      onClick={() => navigate("/content")}
    >
      Conteúdos
    </button>
  );
}
export default ContentButton;
