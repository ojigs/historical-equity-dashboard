import {
  LineChart,
  ResponsiveContainer,
  Legend,
  Tooltip,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import { useState, useEffect } from "react";

const Chart = (props) => {
  const [data, setData] = useState();

  useEffect(() => {
    // console.log(data && data.length);
    setData(props.data);
  }, [props.data, data]);

  return (
    <>
      <h3 className="mt-5 mb-3">This is a line chart for {props.title}</h3>
      <ResponsiveContainer width="100%" aspect={3}>
        <LineChart
          data={data}
          margin={{ right: 300 }}
          zoom={{ x: true, y: true }}
          dots={false}
        >
          <CartesianGrid />
          <XAxis dataKey="time" interval={"preserveStartEnd"} />
          <YAxis domain={["dataMin - 0.2", "dataMax + 0.2"]}></YAxis>
          <Legend />
          <Tooltip />
          <Line
            type={"monotone"}
            dataKey="balance"
            stroke="black"
            activeDot={{ r: 8 }}
          />
          <Line
            type={"monotone"}
            dataKey="equity"
            stroke="red"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default Chart;
