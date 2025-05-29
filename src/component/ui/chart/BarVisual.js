import { BarChart } from "@tremor/react";

const chartdata = [
  {
    name: "PM2.5",
    "Number of Air Quality Particles": 75,
  },
  {
    name: "NO",
    "Number of Air Quality Particles": 70,
  },
  {
    name: "O3",
    "Number of Air Quality Particles": 65,
  },
  {
    name: "NO2",
    "Number of Air Quality Particles": 50,
  },
  {
    name: "SO2",
    "Number of Air Quality Particles": 40,
  },
  {
    name: "CO",
    "Number of Air Quality Particles": 25,
  }
];

const dataFormatter = (number) =>
  Intl.NumberFormat("us").format(number).toString();

export default function BarVisual() {
  return (
    <BarChart
      data={chartdata}
      index="name"
      categories={["Number of Air Quality Particles"]}
      colors={["blue"]}
      valueFormatter={dataFormatter}
      yAxisWidth={45}
      onValueChange={(v) => console.log(v)}
    />
  );
}
