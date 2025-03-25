import { ChartDisplay } from '@/components/chart-display';
import ChartAreaStacked from './components/chart-area-stacked';
import ChartBarMultiple from './components/chart-bar-multiple';
import ChartPieDonutText from './components/chart-pie-donut-text';

import { Separator } from '@/components/ui/separator';

import ChartRadarDefault from './components/chart-radar-default';
import ChartRadarDots from './components/chart-radar-dots';
import ChartRadarMultiple from './components/chart-radar-multiple';
import ChartRadarLinesOnly from './components/chart-radar-lines-only';
import ChartRadarLabelCustom from './components/chart-radar-label-custom';
import ChartRadarRadius from './components/chart-radar-radius';
import ChartRadarGridCustom from './components/chart-radar-grid-custom';
import ChartRadarGridFill from './components/chart-radar-grid-fill';
import ChartRadarGridNone from './components/chart-radar-grid-none';
import ChartRadarGridCircle from './components/chart-radar-grid-circle';
import ChartRadarGridCircleNoLines from './components/chart-radar-grid-circle-no-lines';
import ChartRadarIcons from './components/chart-radar-icons';
import ChartRadarLegend from './components/chart-radar-legend';
import ChartRadarGridCircleFill from './components/chart-radar-grid-circle-fill';

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
            id="radar-chart"
            className="grid flex-1 scroll-mt-20 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:gap-10"
          >
            <ChartDisplay name="chart-radar-default">
              <ChartRadarDefault />
            </ChartDisplay>
            <ChartDisplay name="chart-radar-dots">
              <ChartRadarDots />
            </ChartDisplay>
            <ChartDisplay name="chart-radar-multiple">
              <ChartRadarMultiple />
            </ChartDisplay>
            <ChartDisplay name="chart-radar-lines-only">
              <ChartRadarLinesOnly />
            </ChartDisplay>
            <ChartDisplay name="chart-radar-label-custom">
              <ChartRadarLabelCustom />
            </ChartDisplay>
            <ChartDisplay name="chart-radar-radius">
              <ChartRadarRadius />
            </ChartDisplay>
            <ChartDisplay name="chart-radar-grid-custom">
              <ChartRadarGridCustom />
            </ChartDisplay>
            <ChartDisplay name="chart-radar-grid-fill">
              <ChartRadarGridFill />
            </ChartDisplay>
            <ChartDisplay name="chart-radar-grid-none">
              <ChartRadarGridNone />
            </ChartDisplay>
            <ChartDisplay name="chart-radar-grid-circle">
              <ChartRadarGridCircle />
            </ChartDisplay>
            <ChartDisplay name="chart-radar-grid-circle-no-lines">
              <ChartRadarGridCircleNoLines />
            </ChartDisplay>
            <ChartDisplay name="chart-radar-grid-circle-fill">
              <ChartRadarGridCircleFill />
            </ChartDisplay>
            <ChartDisplay name="chart-radar-legend">
              <ChartRadarLegend />
            </ChartDisplay>
            <ChartDisplay name="chart-radar-icons">
              <ChartRadarIcons />
            </ChartDisplay>
          </div>
        </div>
      </div>
    </div>
  );
}
