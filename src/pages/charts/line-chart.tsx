import { ChartDisplay } from '@/components/chart-display';
import ChartAreaStacked from './components/chart-area-stacked';
import ChartBarMultiple from './components/chart-bar-multiple';
import ChartPieDonutText from './components/chart-pie-donut-text';

import { Separator } from '@/components/ui/separator';
import ChartLineDefault from './components/chart-line-default';
import ChartLineLinear from './components/chart-line-linear';
import ChartLineStep from './components/chart-line-step';
import ChartLineMultiple from './components/chart-line-multiple';
import ChartLineDots from './components/chart-line-dots';
import ChartLineDotsCustom from './components/chart-line-dots-custom';
import ChartLineDotsColors from './components/chart-line-dots-colors';
import ChartLineLabel from './components/chart-line-label';
import ChartLineLabelCustom from './components/chart-line-label-custom';
import ChartLineInteractive from './components/chart-line-interactive';

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
            id="line-chart"
            className="grid flex-1 scroll-mt-20 items-start gap-10 md:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:gap-10"
          >
            <ChartDisplay name="chart-line-default">
              <ChartLineDefault />
            </ChartDisplay>
            <ChartDisplay name="chart-line-linear">
              <ChartLineLinear />
            </ChartDisplay>
            <ChartDisplay name="chart-line-step">
              <ChartLineStep />
            </ChartDisplay>
            <ChartDisplay name="chart-line-multiple">
              <ChartLineMultiple />
            </ChartDisplay>
            <ChartDisplay name="chart-line-dots">
              <ChartLineDots />
            </ChartDisplay>
            <ChartDisplay name="chart-line-dots-custom">
              <ChartLineDotsCustom />
            </ChartDisplay>
            <ChartDisplay name="chart-line-dots-colors">
              <ChartLineDotsColors />
            </ChartDisplay>
            <ChartDisplay name="chart-line-label">
              <ChartLineLabel />
            </ChartDisplay>
            <ChartDisplay name="chart-line-label-custom">
              <ChartLineLabelCustom />
            </ChartDisplay>
            <div className="md:col-span-2 lg:col-span-3">
              <ChartDisplay name="chart-line-interactive">
                <ChartLineInteractive />
              </ChartDisplay>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
