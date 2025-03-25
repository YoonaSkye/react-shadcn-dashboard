import { ChartDisplay } from '@/components/chart-display';
import ChartAreaStacked from './components/chart-area-stacked';
import ChartBarMultiple from './components/chart-bar-multiple';
import ChartPieDonutText from './components/chart-pie-donut-text';

import { Separator } from '@/components/ui/separator';
import ChartBarDefault from './components/chart-bar-default';
import ChartBarHorizontal from './components/chart-bar-horizontal';
import ChartBarLabel from './components/chart-bar-label';
import ChartBarLabelCustom from './components/chart-bar-label-custom';
import ChartBarMixed from './components/chart-bar-mixed';
import ChartBarActive from './components/chart-bar-active';
import ChartBarNegative from './components/chart-bar-negative';
import ChartBarInteractive from './components/chart-bar-interactive';
import ChartBarStacked from './components/chart-bar-stacked';

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
            id="bar-chart"
            className="grid flex-1 scroll-mt-20 items-start gap-10 md:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:gap-10"
          >
            <ChartDisplay name="chart-bar-default">
              <ChartBarDefault />
            </ChartDisplay>
            <ChartDisplay name="chart-bar-horizontal">
              <ChartBarHorizontal />
            </ChartDisplay>
            <ChartDisplay name="chart-bar-multiple">
              <ChartBarMultiple />
            </ChartDisplay>
            <ChartDisplay name="chart-bar-label">
              <ChartBarLabel />
            </ChartDisplay>
            <ChartDisplay name="chart-bar-label-custom">
              <ChartBarLabelCustom />
            </ChartDisplay>
            <ChartDisplay name="chart-bar-mixed">
              <ChartBarMixed />
            </ChartDisplay>
            <ChartDisplay name="chart-bar-stacked">
              <ChartBarStacked />
            </ChartDisplay>
            <ChartDisplay name="chart-bar-active">
              <ChartBarActive />
            </ChartDisplay>
            <ChartDisplay name="chart-bar-negative">
              <ChartBarNegative />
            </ChartDisplay>
            <div className="md:col-span-2 lg:col-span-3">
              <ChartDisplay name="chart-bar-interactive">
                <ChartBarInteractive />
              </ChartDisplay>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
