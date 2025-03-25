import CalendarDateRangePicker from '@/components/date-range-picker';
import { Button } from '@/components/ui/button';
import WebsiteAnalyticsCard from './cards/website-analytics';
import AverageDailySalesCard from './cards/average-daily-sales';
import SalesOverviewCard from './cards/sales-overview';
import EarningReportsCard from './cards/earning-reports';

export default function Page() {
  return (
    <>
      <div className="mb-4 flex items-center justify-between space-y-2">
        <h1 className="text-2xl font-bold tracking-tight">Website Analytics</h1>
        <div className="flex items-center space-x-2">
          <CalendarDateRangePicker />
          <Button>Download</Button>
        </div>
      </div>
      <div className="grid gap-4 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <WebsiteAnalyticsCard />
        </div>
        <div className="lg:col-span-4">
          <AverageDailySalesCard />
        </div>
        <div className="lg:col-span-4">
          <SalesOverviewCard />
        </div>
        <div className="lg:col-span-8">
          <EarningReportsCard />
        </div>
        <div className="lg:col-span-4"></div>
        <div className="lg:col-span-4"></div>
        <div className="lg:col-span-4"></div>
        <div className="lg:col-span-4"></div>
      </div>
    </>
  );
}
