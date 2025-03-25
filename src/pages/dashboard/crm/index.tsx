import { SectionCards } from './section-cards';
import { ChartAreaInteractive } from './chart-area-interactive';
import BasicProTable from '@/components/basic-pro-table';

import data from './data.json';

import './index.css';

export default function CrmPage() {
  return (
    <div className="main flex flex-1 flex-col gap-2">
      <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
        <SectionCards />
        <div className="px-4 lg:px-6">
          <ChartAreaInteractive />
        </div>
        <BasicProTable data={data} />
      </div>
    </div>
  );
}
