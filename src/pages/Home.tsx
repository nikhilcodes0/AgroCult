import Navbar from "@/components/Navbar";
import {
  Area,
  AreaChart,
  CartesianGrid,
  XAxis,
  Bar,
  BarChart,
  LabelList,
} from "recharts";
import thermometer from "../assets/thermometer-warm.svg";
import humidity from "../assets/humidity.svg";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

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
} satisfies ChartConfig;

function Home() {
  const latestTemperatureData = temperatureData[temperatureData.length - 1];
  const latestHumidityData = humidityData[humidityData.length - 1];

  return (
    <>
      <Navbar />
      <div className="px-6 text-[#dcffd7]">
        <div>
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
          <Card className="w-full bg-[#eaffe7]">
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

        <Separator className="my-10 w-[95%] mx-auto opacity-100 bg-[#dcffd71a] p-[1px]" />

        <div>
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
          <Card className="w-full bg-[#1eff00] border-transparent">
            <CardHeader>
              <CardTitle>Bar Chart - Label</CardTitle>
              <CardDescription>
                {latestHumidityData.temperature} °C
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig}>
                <BarChart
                  accessibilityLayer
                  data={humidityData}
                  margin={{
                    top: 20,
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
      </div>
    </>
  );
}

export default Home;
