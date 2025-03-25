import { Area, AreaChart } from 'recharts';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { ChartConfig, ChartContainer } from '@/components/ui/chart';

const chartData = [
  { month: 'January', mobile: 80 },
  { month: 'February', mobile: 200 },
  { month: 'March', mobile: 120 },
  { month: 'April', mobile: 190 },
  { month: 'May', mobile: 130 },
  { month: 'June', mobile: 140 }
];

const chartConfig = {
  mobile: {
    label: 'Mobile',
    color: 'hsl(var(--chart-2))'
  }
} satisfies ChartConfig;

export default function AverageDailySalesCard() {
  return (
    <Card>
      <CardHeader className="flex flex-col space-y-1.5 p-6">
        <CardTitle className="text-base">Average Daily Sales</CardTitle>
        <CardDescription>Total Sales This Month</CardDescription>
      </CardHeader>
      <CardContent className="pb-0">
        <div className="mb-4 text-2xl font-bold">$28,450</div>
      </CardContent>
      <ChartContainer
        config={chartConfig}
        className="aspect-auto h-[100px] w-full"
      >
        <AreaChart
          accessibilityLayer
          data={chartData}
          margin={{
            left: 0,
            right: 0
          }}
        >
          <defs>
            <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor="var(--color-mobile)"
                stopOpacity={0.8}
              />
              <stop
                offset="95%"
                stopColor="var(--color-mobile)"
                stopOpacity={0.1}
              />
            </linearGradient>
          </defs>
          <Area
            dataKey="mobile"
            type="natural"
            fill="url(#fillMobile)"
            fillOpacity={0.4}
            stroke="var(--color-mobile)"
            stackId="a"
          />
        </AreaChart>
      </ChartContainer>
    </Card>
  );
}
