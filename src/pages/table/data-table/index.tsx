import BasicProTable from '@/components/basic-pro-table';
import data from './data.json';

export default function DataTablePage() {
  return (
    <div className="p-3">
      <BasicProTable data={data} />
    </div>
  );
}
