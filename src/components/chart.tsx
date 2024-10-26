import { Pie, PieChart } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";
import type { ChartConfig } from "@/components/ui/chart";

export const description = "A pie chart with a legend";

// Datos del gráfico de pastel con colores actualizados
const chartData = [
  { category: "Private Investors", value: 11000000, fill: "#FF5733" }, // 20% (Rojo)
  { category: "Airdrop & Community", value: 44000000, fill: "#33FF57" }, // 8% (Verde)
  { category: "Team & Advisors", value: 66000000, fill: "#3357FF" }, // 12% (Azul)
  { category: "Play-to-Earn", value: 137500000, fill: "#F1C40F" }, // 25% (Amarillo)
  { category: "Liquidity & Staking", value: 55000000, fill: "#9B59B6" }, // 10% (Morado)
  { category: "Development Fund", value: 38500000, fill: "#E67E22" }, // 7% (Naranja)
];

const chartConfig = {
  privateInvestors: {
    label: "Private Investors",
    color: "#FF5733",
  },
  airdrop: {
    label: "Airdrop & Community",
    color: "#33FF57",
  },
  team: {
    label: "Team & Advisors",
    color: "#3357FF",
  },
  playToEarn: {
    label: "Play-to-Earn",
    color: "#F1C40F",
  },
  liquidity: {
    label: "Liquidity & Staking",
    color: "#9B59B6",
  },
  development: {
    label: "Development Fund",
    color: "#E67E22",
  },
} satisfies ChartConfig;

export default function Chart() {
  return (
    <Card className="flex flex-col bg-transparent border-none font-bold text-xl w-full">
      <CardHeader className="items-center pb-0">
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[500px]" // Aumenta el tamaño
        >
          <PieChart width={1000} height={500}> {/* Aumenta el tamaño */}
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="category"
              outerRadius="80%"
              innerRadius="30%"
              label
            />
            <ChartLegend
              className="flex-wrap gap-4 [&>*]:flex [&>*]:items-center [&>*]:text-2xl" // Aumenta el tamaño de la leyenda
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
