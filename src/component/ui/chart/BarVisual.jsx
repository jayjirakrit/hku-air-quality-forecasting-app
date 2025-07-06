import { BarChart } from "@tremor/react";
import React, {memo} from "react";

const dataFormatter = (number) =>
  Intl.NumberFormat("us").format(number).toString();

function BarVisual({chartData}) {
  return (
    <BarChart
      data={chartData}
      index="name"
      categories={["Number of Air Quality Particles"]}
      colors={["blue"]}
      valueFormatter={dataFormatter}
      yAxisWidth={45}
    />
  );
}

export default memo(BarVisual);