function Footer({ colors }) {
  return (
    <footer
      className={`flex items-center justify-evenly w-full h-max py-1 ${colors.frontground0} border-t-3 ${colors.border} font-bold text-1xl ${colors.text}`}
    >
      Orgrise 2026, Todos os direitos reservados.
    </footer>
  );
}
export default Footer;