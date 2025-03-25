import { cn } from '@/lib/utils';

import {
  AreaChart,
  BarChartBig,
  Hexagon,
  LineChart,
  MousePointer2,
  PieChart,
  Radar
} from 'lucide-react';

type Chart = {
  categories: string;
};

export function ChartToolbar({
  chart,
  className
}: {
  chart: Chart;
} & React.ComponentProps<'div'>) {
  return (
    <div className={cn('flex items-center gap-2', className)}>
      <div className="flex items-center gap-1.5 pl-1 text-[13px] text-muted-foreground [&>svg]:h-[0.9rem] [&>svg]:w-[0.9rem]">
        <ChartTitle chart={chart} />
      </div>
    </div>
  );
}

function ChartTitle({ chart }: { chart: Chart }) {
  const { categories } = chart;

  if (!categories?.length) {
    return null;
  }

  if (categories.includes('line')) {
    return (
      <>
        <LineChart /> Chart
      </>
    );
  }

  if (categories.includes('bar')) {
    return (
      <>
        <BarChartBig /> Chart
      </>
    );
  }

  if (categories.includes('pie')) {
    return (
      <>
        <PieChart /> Chart
      </>
    );
  }

  if (categories.includes('area')) {
    return (
      <>
        <AreaChart /> Chart
      </>
    );
  }

  if (categories.includes('radar')) {
    return (
      <>
        <Hexagon /> Chart
      </>
    );
  }

  if (categories.includes('radial')) {
    return (
      <>
        <Radar /> Chart
      </>
    );
  }

  if (categories.includes('tooltip')) {
    return (
      <>
        <MousePointer2 />
        Tooltip
      </>
    );
  }

  return categories[0];
}
