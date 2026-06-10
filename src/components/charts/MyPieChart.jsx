import { Pie, PieChart, Tooltip } from "recharts";

const color = ["fff", "ff0", "f00"];

function MyPieChart({ data, size }) {
  return (
    <>
      <PieChart width={size[0]} height={size[1]}>
        <Pie
          data={data}
          dataKey={"value"}
          nameKey={"name"}
          outerRadius={"100%"}
          innerRadius={"75%"}
          fill="#00BAA6"
          isAnimationActive={false}
          className=" outline-0 "
        />
      </PieChart>
    </>
  );
}
export default MyPieChart;
