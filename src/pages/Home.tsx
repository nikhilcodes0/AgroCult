import Navbar from "@/components/Navbar";
import {
  Area,
  AreaChart,
  CartesianGrid,
  XAxis,
  Bar,
  BarChart,
  LabelList,
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts";
import thermometer from "../assets/thermometer-warm.svg";
import humidity from "../assets/humidity.svg";
// import health from "../assets/health.svg";
// import disease from "../assets/disease.png";
// import plant from "../assets/plant.svg";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
// import { Separator } from "@/components/ui/separator";
// import { Checkbox } from "@/components/ui/checkbox";
// import { Link } from "react-router-dom";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const temperatureData = [
  { month: "January", temperature: 18 },
  { month: "February", temperature: 30 },
  { month: "March", temperature: 23 },
  { month: "April", temperature: 73 },
  { month: "May", temperature: 20 },
  { month: "June", temperature: 19 },
  { month: "July", temperature: 20 },
];

const humidityData = [
  { month: "January", temperature: 8 },
  { month: "February", temperature: 38 },
  { month: "March", temperature: 20 },
  { month: "April", temperature: 43 },
  { month: "May", temperature: 10 },
  { month: "June", temperature: 29 },
  { month: "July", temperature: 60 },
  { month: "August", temperature: 40 },
];

const chartConfig = {
  temperature: {
    label: "temperature",
    color: "#5d9763",
  },
  humidity: {
    label: "humidity",
    color: "#fcff45",
  },
  soil: {
    label: "soil",
    color: "#8bea7c",
  },
} satisfies ChartConfig;

const soilData = [{ month: "January", temperature: "50", fill: "#8bea7c" }];
function Home() {
  const latestTemperatureData = temperatureData[temperatureData.length - 1];
  const HumidityData0 = humidityData[humidityData.length - 1];
  const HumidityData1 = humidityData[humidityData.length - 2];
  const latestHumidityData =
    HumidityData0.temperature - HumidityData1.temperature;

  const soilPercentage = Number(soilData[0].temperature);
  const endAngle = (soilPercentage / 100) * 360;

  return (
    <>
      <Navbar />
      <div className="w-[90%] mx-auto text-[#dcffd7]">
        <div className="md:flex md:gap-14 md:items-center lg:justify-center">
          <div className="mb-4">
            <p className="text-5xl w-60 leading-snug tracking-wide font-[Roboto}">
              Real-time Temperature
            </p>
            <div className="flex items-center gap-2 my-6">
              <img src={thermometer} alt="" className="w-8" />
              <p className="opacity-80 font-semibold">
                See your real time temperature
              </p>
            </div>
          </div>
          <Card className="w-full bg-[#eaffe7] my-12 lg:my-0 lg:max-w-[500px]">
            <CardHeader>
              <CardTitle>Temperature</CardTitle>
              <CardDescription className="text-black">
                <p className="font-semibold text-2xl">
                  {latestTemperatureData.temperature}°C
                </p>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig}>
                <AreaChart
                  accessibilityLayer
                  data={temperatureData}
                  margin={{
                    left: 0,
                    right: 0,
                  }}
                >
                  <CartesianGrid vertical={false} />
                  <XAxis
                    dataKey="month"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={5}
                    tickFormatter={(value) => value.slice(0, 3)}
                    style={{ fill: "#000000" }}
                  />
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent indicator="line" />}
                  />
                  <Area
                    dataKey="temperature"
                    type="natural"
                    fill="var(--color-temperature)"
                    fillOpacity={0.9}
                    stroke="var(--color-temperature)"
                  />
                </AreaChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>

        <Separator className="my-10  mx-auto opacity-100 bg-[#dcffd71a] p-[1px]" />

        <div className="md:flex md:flex-row-reverse md:gap-14">
          <div>
            <p className="text-5xl leading-snug tracking-wide font-[Roboto}">
              Real-time Humidity
            </p>
            <div className="flex items-center gap-2 my-6">
              <img src={humidity} alt="" className="w-6" />
              <p className="opacity-80 font-semibold">
                See your real time humidity
              </p>
            </div>
          </div>
          <Card className="w-full bg-[#1eff00] border-transparent my-12">
            <CardHeader>
              <CardTitle className="flex items-center justify-between w-fit gap-2">
                <img src={humidity} alt="" className="w-6 -mx-2 stroke-black" />
                Humidity
              </CardTitle>
              <CardDescription className="text-black text-3xl font-bold pt-4">
                {latestHumidityData} °C
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig}>
                <BarChart
                  accessibilityLayer
                  data={humidityData}
                  margin={{
                    top: 30,
                  }}
                >
                  <CartesianGrid vertical={false} />
                  <XAxis
                    dataKey="month"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    tickFormatter={(value) => value.slice(0, 3)}
                    style={{ fill: "#000000" }}
                  />
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent hideLabel />}
                  />
                  <Bar
                    dataKey="temperature"
                    fill="var(--color-humidity)"
                    radius={8}
                  >
                    <LabelList
                      position="top"
                      offset={12}
                      className="fill-foreground"
                      fontSize={12}
                    />
                  </Bar>
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>
        <Separator className="my-10 mx-auto opacity-100 bg-[#dcffd71a] p-[1px]" />

        <div className="md:grid md:grid-cols-2">
          <div className="mb-10">
            <p className="text-5xl leading-snug tracking-wide font-[Roboto}">
              The current Soil Moisture
            </p>
          </div>
          <Card className="flex flex-col bg-transparent border-none shadow-none mt-4">
            <CardContent className="flex-1 pb-0">
              <ChartContainer
                config={chartConfig}
                className="mx-auto aspect-square max-h-[450px]"
              >
                <RadialBarChart
                  data={soilData}
                  startAngle={90}
                  endAngle={90 + endAngle}
                  innerRadius={90}
                  outerRadius={280}
                >
                  <PolarGrid
                    gridType="circle"
                    radialLines={false}
                    stroke="none"
                    className="first:fill-[#dcffd7] last:fill-background "
                    polarRadius={[126, 54]}
                  />
                  <RadialBar
                    dataKey="temperature"
                    background
                    cornerRadius={10}
                  />
                  <PolarRadiusAxis
                    tick={false}
                    tickLine={false}
                    axisLine={false}
                  >
                    <Label
                      content={({ viewBox }) => {
                        if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                          return (
                            <text
                              x={viewBox.cx}
                              y={viewBox.cy}
                              textAnchor="middle"
                              dominantBaseline="middle"
                            >
                              <tspan
                                x={viewBox.cx}
                                y={viewBox.cy}
                                className="fill-secondary text-3xl font-bold "
                              >
                                {soilData[0].temperature.toLocaleString() +
                                  "%" || "-"}
                              </tspan>
                            </text>
                          );
                        }
                      }}
                    />
                  </PolarRadiusAxis>
                </RadialBarChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>
        {/*  <Separator className="my-10 w-[95%] mx-auto opacity-100 bg-[#dcffd71a] p-[1px]" />

       <div>
          <div>
            <p className="text-5xl leading-snug tracking-wide font-[Roboto}">
              Plant Disease Status
            </p>
          </div>
          <div>
            <div className="mt-10">
              <img src={disease} alt="" />
            </div>
            <div className="flex items-end gap-3 float-end flex-col">
              <div className="flex items-center gap-3">
                <Checkbox id="healthy" className="bg-white" />
                <label
                  htmlFor="healthy"
                  className="text-[#8bea7c] font-medium text-2xl"
                >
                  Healthy
                  <span className="ml-2">
                    <img src={health} alt="" className="inline" />
                  </span>
                </label>
              </div>
              <div className="flex items-center gap-3">
                <Checkbox id="healthy" className="bg-white" />
                <label
                  htmlFor="healthy"
                  className="text-[#d22e2a] font-semibold text-2xl"
                >
                  Disease Detected
                  <span className="ml-2">
                    <img src={plant} alt="" className="inline" />
                  </span>
                </label>
              </div>
                <Link to="/about">View Details</Link>
                    

            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}

export default Home;
