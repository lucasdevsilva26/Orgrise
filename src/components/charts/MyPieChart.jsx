import { Cell, Pie, PieChart } from "recharts";

function MyPieChart({ data, size, valueToShow, colors }) {
  
  return (
    <>
      <PieChart width={size[0]} height={size[1]}>
        <Pie
          key={valueToShow}
          data={data}
          dataKey={valueToShow}
          nameKey={"Name"}
          outerRadius={"100%"}
          innerRadius={"75%"}
          fill="#00BAA6"
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
