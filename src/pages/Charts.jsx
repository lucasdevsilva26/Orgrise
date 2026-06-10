import Body from "../components/Body";
import Footer from "../components/Footer";
import Header from "../components/header/Header";
import MyPieChart from "../components/charts/MyPieChart";

import { Global } from "../main";

function Charts() {
  const data = [
    { name: "1", value: 11 },
    { name: "2", value: 14 },
    { name: "3", value: 25 },
    { name: "4", value: 50 },
  ];

  return (
    <>
      <Header colors={Global.colors}></Header>
      <Body colors={Global.colors}>
        <section className={` flex flex-col items-center gap-10 w-full p-10 `}>
          <MyPieChart data={data} size={[500, 500]}></MyPieChart>
        </section>
      </Body>
      <Footer colors={Global.colors}></Footer>
    </>
  );
}
export default Charts;
