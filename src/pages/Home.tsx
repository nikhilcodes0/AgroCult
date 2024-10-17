import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import {
  Area,
  AreaChart,
  CartesianGrid,
  XAxis,YAxis,
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
import humidityImage from "../assets/humidity.svg";
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
import { Separator } from "@/components/ui/separator";
// import { Checkbox } from "@/components/ui/checkbox";
// import { Link } from "react-router-dom";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";




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

const soilData = [{ month: "January", temperature: "20", fill: "#8bea7c" }];
function Home() {
  // const latestTemperatureData = temperatureData[temperatureData.length - 1];
  // const HumidityData0 = humidityData[humidityData.length - 1];
  // const HumidityData1 = humidityData[humidityData.length - 2];
  // const latestHumidityData =
  //   HumidityData0.temperature - HumidityData1.temperature;

  const soilPercentage = Number(soilData[0].temperature);
  const endAngle = (soilPercentage / 100) * 360;

  const [temperature, setTemperature] = useState<{ time: string; temperature: number }[]>([]);
  const [humidity, setHumidity] = useState<{ time: string; humidity: number }[]>([]);
  // const [humidity, setHumidity] = useState([]);
  const [lastTemperature, setLastTemperature] = useState<number | null>(null);
  const [lastHumidity, setLastHumidity] = useState<number | null>(null);

  const fetchTemperature = async () => {
    try {
      const response = await fetch(
        'https://sugoi-api.vercel.app/agri/realtime_data'
      );
      const result = await response.json();

      setLastTemperature(result.temperature);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchHumidity = async () => {
    try {
      const response = await fetch(
        'https://sugoi-api.vercel.app/agri/realtime_data'
      );
      const result = await response.json();

      setLastHumidity(result.humidity);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      fetchTemperature();
      fetchHumidity();
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (lastTemperature !== null) {
      setTemperature((prevData) => [
        ...prevData.slice(-19),
        {
          time: new Date().toLocaleTimeString(),
          temperature: lastTemperature,
        },
      ]);
    }
  }, [lastTemperature]);

  useEffect(() => {
    if (lastHumidity !== null) {
      setHumidity((prevData) => [
        ...prevData.slice(-19),
        {
          time: new Date().toLocaleTimeString(),
          humidity: lastHumidity,
        },
      ]);
    }
  }, [lastHumidity]);

  return (
    <>
    <div className="lg:px-24 xl:px-32 2xl:px-48">
      <Navbar />
      <div className="w-[90%] mx-auto text-[#dcffd7]">
        <div className="md:flex md:gap-14  md:justify-between my-7 md:items-center lg:text-xl">
          <div className="mb-4 flex-col items-center h-fit md:flex lg:w-1/2 lg:items-start">
            <p className="text-5xl lg:w-72 w-60 leading-snug tracking-wide font-[Roboto} xl:w-80 xl:text-7xl 2xl:text-8xl 2xl:w-[28rem]">
              Real-time Temperature
            </p>
            <div className="flex items-center gap-2 my-6">
              <img src={thermometer} alt="" className="w-8" />
              <p className="opacity-80 font-semibold">
                See your real time temperature
              </p>
            </div>
          </div>
          <Card className="w-full bg-[#eaffe7] my-12 lg:my-10 md:w-[50%]">
            <CardHeader>
              <CardTitle>Temperature</CardTitle>
              <CardDescription className="text-black">
                <p className="font-semibold text-2xl">
                  {lastTemperature}°C
                </p>
              </CardDescription>
            </CardHeader>
            <CardContent className="">
              <ChartContainer config={chartConfig}>
                <AreaChart
                  accessibilityLayer
                  data={temperature}
                  margin={{
                    left: 0,
                    right: 0,
                  }}
                >
                  <CartesianGrid vertical={false} />
                  <XAxis
                    dataKey="time"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={5}
                    tickFormatter={(value) => value.slice(0, 4)}
                    style={{ fill: "#000000" }}
                  />
                  <YAxis />
                  
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

        <div className="md:flex md:flex-row-reverse md:gap-16 items-center lg:justify-between">
          <div className="md:text-right">
            <p className="text-5xl leading-snug tracking-wide font-[Roboto} xl:w-80 xl:text-7xl 2xl:text-8xl 2xl:w-[28rem]">
              Real-time Humidity
            </p>
            <div className="flex items-center gap-2 my-6 text-right md:w-fit md:ml-auto">
              <img src={humidityImage} alt="" className="w-6" />
              <p className="opacity-80 font-semibold">
                See your real time humidity
              </p>
            </div>
          </div>
          <Card className="w-full bg-[#1eff00] border-transparent my-12 md:w-1/2">
            <CardHeader>
              <CardTitle className="flex items-center justify-between w-fit gap-2">
                <img src={humidityImage} alt="" className="w-6 -mx-2 stroke-black" />
                Humidity
              </CardTitle>
              <CardDescription className="text-black text-3xl font-bold pt-4">
                {lastHumidity}%
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig}>
                <BarChart
                  accessibilityLayer
                  data={humidity.slice(-6)}
                  margin={{
                    top: 30,
                  }}
                >
                  <CartesianGrid vertical={false} />
                  <XAxis
                    dataKey="time"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    tickFormatter={(value) => value.slice(0, 4)}
                    style={{ fill: "#000000" }}
                  />
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent hideLabel />}
                  />
                  <Bar
                    dataKey="humidity"
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

        <div className="md:grid md:grid-cols-2 md:items-center">
          <div className="mb-10">
            <p className="text-5xl leading-snug tracking-wide font-[Roboto} xl:w-80 xl:text-6xl 2xl:text-8xl 2xl:w-[38rem]">
              The current Soil Moisture
            </p>
          </div>
          <Card className="flex flex-col bg-transparent border-none shadow-none mt-4">
            <CardContent className="flex-1 pb-0">
              <ChartContainer
                config={chartConfig}
                className="mx-auto aspect-square max-h-[450px] "
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
                    className="first:fill-[#dcffd7] last:fill-background"
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
      </div>
    </>
  );
}

export default Home;
