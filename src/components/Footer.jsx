import { Global } from "../main";
function Footer() {
  return (
    <footer
      className={`flex items-center justify-evenly w-full h-max py-1 ${Global.colors.frontground0} border-t-3 ${Global.colors.border} font-bold text-1xl ${Global.colors.text}`}
    >
      Orgrise 2026, Todos os direitos reservados.
    </footer>
  );
}
export default Footer;