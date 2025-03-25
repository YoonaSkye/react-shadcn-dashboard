import { ChartDisplay } from '@/components/chart-display';
import ChartAreaStacked from './components/chart-area-stacked';
import ChartBarMultiple from './components/chart-bar-multiple';
import ChartPieDonutText from './components/chart-pie-donut-text';

import { Separator } from '@/components/ui/separator';
import ChartPieSimple from './components/chart-pie-simple';
import ChartPieSeparatorNone from './components/chart-pie-separator-none';
import ChartPieLabel from './components/chart-pie-label';
import ChartPieLabelCustom from './components/chart-pie-label-custom';
import ChartPieLabelList from './components/chart-pie-label-list';
import ChartPieLegend from './components/chart-pie-legend';
import ChartPieDonut from './components/chart-pie-donut';
import ChartPieDonutActive from './components/chart-pie-donut-active';
import ChartPieStacked from './components/chart-pie-stacked';
import ChartPieInteractive from './components/chart-pie-interactive';

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
            id="pie-chart"
            className="grid flex-1 scroll-mt-20 items-start gap-10 md:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:gap-10"
          >
            <ChartDisplay name="chart-pie-simple">
              <ChartPieSimple />
            </ChartDisplay>
            <ChartDisplay name="chart-pie-separator-none">
              <ChartPieSeparatorNone />
            </ChartDisplay>
            <ChartDisplay name="chart-pie-label">
              <ChartPieLabel />
            </ChartDisplay>
            <ChartDisplay name="chart-pie-label-custom">
              <ChartPieLabelCustom />
            </ChartDisplay>
            <ChartDisplay name="chart-pie-label-list">
              <ChartPieLabelList />
            </ChartDisplay>
            <ChartDisplay name="chart-pie-legend">
              <ChartPieLegend />
            </ChartDisplay>
            <ChartDisplay name="chart-pie-donut">
              <ChartPieDonut />
            </ChartDisplay>
            <ChartDisplay name="chart-pie-donut-active">
              <ChartPieDonutActive />
            </ChartDisplay>
            <ChartDisplay name="chart-pie-donut-text">
              <ChartPieDonutText />
            </ChartDisplay>
            <ChartDisplay name="chart-pie-stacked">
              <ChartPieStacked />
            </ChartDisplay>
            <ChartDisplay name="chart-pie-interactive">
              <ChartPieInteractive />
            </ChartDisplay>
          </div>
        </div>
      </div>
    </div>
  );
}
