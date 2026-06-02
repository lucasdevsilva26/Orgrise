function Body({colors, direction,children}) {
  return <main className={`flex ${direction} min-h-screen overflow-hidden ${colors.text} ${colors.background}`}>{children}</main>;
}
export default Body;
