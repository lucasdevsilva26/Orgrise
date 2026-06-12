import { Cell, Pie, PieChart } from "recharts";
import { Global } from "../../main";

function MyPieChart({ data, size, colors, valuePercentages }) {
  return (
    <>
      <PieChart width={size[0]} height={size[1]}>
        <Pie
          stroke={Global.theme ? "#000" : "#fff"}
          data={data.map((item) => ({
            value: Number(((item / valuePercentages) * 100).toFixed(2)),
          }))}
          dataKey={"value"}
          outerRadius={"75%"}
          innerRadius={"50%"}
          animationDuration={750}
          animationEasing="ease-out"
          label={({ cx, cy, midAngle, outerRadius, value }) => {
            const radian = Math.PI / 180;

            return (
              <text
                x={cx + (outerRadius + 50) * Math.cos(-midAngle * radian)}
                y={cy + (outerRadius + 50) * Math.sin(-midAngle * radian)}
                fontSize={16}
                fontWeight="bold"
                fill={Global.theme ? "#000" : "#fff"}
                textAnchor="middle"
              >
                {value + "%"}
              </text>
            );
          }}
          className=" outline-none "
        >
          {data.map((entry, index) => {
            return <Cell key={index} fill={colors[index % colors.length]} />;
          })}
        </Pie>
      </PieChart>
    </>
  );
}
export default MyPieChart;
