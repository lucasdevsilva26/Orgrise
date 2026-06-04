import { Global } from "../main";

function Body({direction, children}) {
  return <main className={`flex ${direction} min-h-screen overflow-hidden ${Global.colors.text} ${Global.colors.background}`}>{children}</main>;
}
export default Body;
