import { ChartDisplay } from '@/components/chart-display';
import ChartAreaStacked from './components/chart-area-stacked';
import ChartBarMultiple from './components/chart-bar-multiple';
import ChartPieDonutText from './components/chart-pie-donut-text';

import { Separator } from '@/components/ui/separator';
import ChartAreaDefault from './components/chart-area-default';
import ChartAreaLinear from './components/chart-area-linear';
import ChartAreaStep from './components/chart-area-step';
import ChartAreaStackedExpand from './components/chart-area-stacked-expand';
import ChartAreaLegend from './components/chart-area-legend';
import ChartAreaIcons from './components/chart-area-icons';
import ChartAreaGradient from './components/chart-area-gradient';
import ChartAreaAxes from './components/chart-area-axes';
import ChartAreaInteractive from './components/chart-area-interactive';

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
            id="area-chart"
            className="grid flex-1 scroll-mt-20 items-start gap-10 md:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:gap-10"
          >
            <ChartDisplay name="chart-area-default">
              <ChartAreaDefault />
            </ChartDisplay>
            <ChartDisplay name="chart-area-linear">
              <ChartAreaLinear />
            </ChartDisplay>
            <ChartDisplay name="chart-area-step">
              <ChartAreaStep />
            </ChartDisplay>
            <ChartDisplay name="chart-area-stacked">
              <ChartAreaStacked />
            </ChartDisplay>
            <ChartDisplay name="chart-area-stacked-expand">
              <ChartAreaStackedExpand />
            </ChartDisplay>
            <ChartDisplay name="chart-area-legend">
              <ChartAreaLegend />
            </ChartDisplay>
            <ChartDisplay name="chart-area-icons">
              <ChartAreaIcons />
            </ChartDisplay>
            <ChartDisplay name="chart-area-gradient">
              <ChartAreaGradient />
            </ChartDisplay>
            <ChartDisplay name="chart-area-axes">
              <ChartAreaAxes />
            </ChartDisplay>
            <div className="md:col-span-2 lg:col-span-3">
              <ChartDisplay name="chart-area-interactive">
                <ChartAreaInteractive />
              </ChartDisplay>
            </div>
          </div>
          <Separator />
          {/* <div
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
            </div> */}
        </div>
      </div>
    </div>
  );
}
