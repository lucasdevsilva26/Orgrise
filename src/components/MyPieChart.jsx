import { Pie, PieChart, Tooltip } from "recharts";

const color = ["fff", "ff0", "f00"];

function MyPieChart({ data }) {
  return (
    <PieChart width={500} height={500}>
      <Pie
        data={data}
        dataKey={"value"}
        nameKey={"name"}
        outerRadius={200}
        fill="#00BAA6"
        label={({ name, value }) => `${name}: ${value}%`}
      />
      <Tooltip />
    </PieChart>
  );
}
export default MyPieChart;
