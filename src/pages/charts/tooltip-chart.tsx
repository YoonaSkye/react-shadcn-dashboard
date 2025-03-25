import { ChartDisplay } from '@/components/chart-display';
import ChartAreaStacked from './components/chart-area-stacked';
import ChartBarMultiple from './components/chart-bar-multiple';
import ChartPieDonutText from './components/chart-pie-donut-text';

import { Separator } from '@/components/ui/separator';

import ChartTooltipDefault from './components/chart-tooltip-default';
import ChartTooltipIndicatorLine from './components/chart-tooltip-indicator-line';
import ChartTooltipIndicatorNone from './components/chart-tooltip-indicator-none';
import ChartTooltipLabelCustom from './components/chart-tooltip-label-custom';
import ChartTooltipLabelFormatter from './components/chart-tooltip-label-formatter';
import ChartTooltipLabelNone from './components/chart-tooltip-label-none';
import ChartTooltipFormatter from './components/chart-tooltip-formatter';
import ChartTooltipIcons from './components/chart-tooltip-icons';
import ChartTooltipAdvanced from './components/chart-tooltip-advanced';

export default function Charts() {
  return (
    <div className="grid gap-4">
      <div className="gap-6 md:flex md:flex-row-reverse md:items-start">
        <div className="grid flex-1 gap-12">
          <h2 className="sr-only">Examples</h2>
          <div
            id="examples"
            className="grid flex-1 scroll-mt-20 items-start gap-10 md:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:gap-10"
          >
            <ChartDisplay name="chart-area-stacked">
              <ChartAreaStacked />
            </ChartDisplay>
            <ChartDisplay name="chart-bar-multiple">
              <ChartBarMultiple />
            </ChartDisplay>
            <ChartDisplay
              name="chart-pie-donut-text"
              className="[&_[data-chart]]:xl:max-h-[243px]"
            >
              <ChartPieDonutText />
            </ChartDisplay>
          </div>
          <Separator />

          <div
            id="tooltip"
            className="chart-wrapper grid flex-1 scroll-mt-20 items-start gap-10 md:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:gap-10"
          >
            <ChartDisplay name="chart-tooltip-default">
              <ChartTooltipDefault />
            </ChartDisplay>
            <ChartDisplay name="chart-tooltip-indicator-line">
              <ChartTooltipIndicatorLine />
            </ChartDisplay>
            <ChartDisplay name="chart-tooltip-indicator-none">
              <ChartTooltipIndicatorNone />
            </ChartDisplay>
            <ChartDisplay name="chart-tooltip-label-custom">
              <ChartTooltipLabelCustom />
            </ChartDisplay>
            <ChartDisplay name="chart-tooltip-label-formatter">
              <ChartTooltipLabelFormatter />
            </ChartDisplay>
            <ChartDisplay name="chart-tooltip-label-none">
              <ChartTooltipLabelNone />
            </ChartDisplay>
            <ChartDisplay name="chart-tooltip-formatter">
              <ChartTooltipFormatter />
            </ChartDisplay>
            <ChartDisplay name="chart-tooltip-icons">
              <ChartTooltipIcons />
            </ChartDisplay>
            <ChartDisplay name="chart-tooltip-advanced">
              <ChartTooltipAdvanced />
            </ChartDisplay>
          </div>
        </div>
      </div>
    </div>
  );
}
