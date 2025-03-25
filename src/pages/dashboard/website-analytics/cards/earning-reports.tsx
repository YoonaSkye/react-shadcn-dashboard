import { Bar, BarChart, XAxis } from 'recharts';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from '@/components/ui/chart';

const chartData = [
  { week: 'Monday', sales: 35 },
  { week: 'Tuesday', sales: 30 },
  { week: 'Wednesday', sales: 37 },
  { week: 'Thursday', sales: 14 },
  { week: 'Friday', sales: 20 },
  { week: 'Saturday', sales: 24 },
  { week: 'Sunday', sales: 38 }
];

const chartConfig = {
  sales: {
    label: 'Sales'
    // color: 'hsl(var(--chart-1))'
  }
} satisfies ChartConfig;

export default function EarningReportsCard() {
  return (
    <Card>
      <CardHeader className="flex flex-col space-y-1.5 p-6">
        <CardTitle className="text-base">Earning Reports</CardTitle>
        <CardDescription>Weekly Earnings Overview</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 lg:grid-cols-3">
          <div>
            <div className="mb-2 flex items-center gap-2">
              <div className="text-2xl font-bold lg:text-4xl">$1.468</div>
              <div className="text-green-foreground hover:bg-green/80 inline-flex items-center rounded-full border border-transparent bg-green-100 px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 dark:bg-green-950">
                +4.2%
              </div>
            </div>
            <div className="text-sm text-muted-foreground">
              You informed of this week compared to last week
            </div>
          </div>
          <div className="col-span-2">
            <ChartContainer config={chartConfig} className="h-[150px] w-full">
              <BarChart accessibilityLayer data={chartData} barSize={40}>
                <XAxis
                  dataKey="week"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                  tickFormatter={(value) => value.slice(0, 3)}
                />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                />
                <Bar dataKey="sales" fill="var(--color-desktop)" radius={6} />
              </BarChart>
            </ChartContainer>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
