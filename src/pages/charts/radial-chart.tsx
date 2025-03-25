import { ChartDisplay } from '@/components/chart-display';
import ChartAreaStacked from './components/chart-area-stacked';
import ChartBarMultiple from './components/chart-bar-multiple';
import ChartPieDonutText from './components/chart-pie-donut-text';

import { Separator } from '@/components/ui/separator';

import ChartRadialSimple from './components/chart-radial-simple';
import ChartRadialLabel from './components/chart-radial-label';
import ChartRadialGrid from './components/chart-radial-grid';
import ChartRadialText from './components/chart-radial-text';
import ChartRadialShape from './components/chart-radial-shape';
import ChartRadialStacked from './components/chart-radial-stacked';

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
            id="radial-chart"
            className="grid flex-1 scroll-mt-20 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:gap-10"
          >
            <ChartDisplay name="chart-radial-simple">
              <ChartRadialSimple />
            </ChartDisplay>
            <ChartDisplay name="chart-radial-label">
              <ChartRadialLabel />
            </ChartDisplay>
            <ChartDisplay name="chart-radial-grid">
              <ChartRadialGrid />
            </ChartDisplay>
            <ChartDisplay name="chart-radial-text">
              <ChartRadialText />
            </ChartDisplay>
            <ChartDisplay name="chart-radial-shape">
              <ChartRadialShape />
            </ChartDisplay>
            <ChartDisplay name="chart-radial-stacked">
              <ChartRadialStacked />
            </ChartDisplay>
          </div>
        </div>
      </div>
    </div>
  );
}
