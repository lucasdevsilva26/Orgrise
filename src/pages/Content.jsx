import Header from "../components/header/Header";
import Body from "../components/Body";
import Footer from "../components/Footer";

import { Global } from "../main";

function Content() {
  return (
    <>
      <Header colors={Global.colors}></Header>
      <Body colors={Global.colors} direction={"flex-col"}></Body>
      <Footer colors={Global.colors}></Footer>
    </>
  );
}
export default Content;
