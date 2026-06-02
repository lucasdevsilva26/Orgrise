import Body from "../components/Body";
import Footer from "../components/Footer";
import Header from "../components/Header";

import { Global } from "../main";

function Landing() {
  const presets = {};

  return (
    <>
      <Header colors={Global.colors}></Header>
      <Body colors={Global.colors} direction={"flex-row"}>
        <section className={` flex flex-col items-center w-full py-10 `}>
          <h1 className={` text-4xl font-bold `}>Como começar?</h1>
        <p></p>
        </section>
      </Body>
      <Footer colors={Global.colors}></Footer>
    </>
  );
}
export default Landing;
