import { Suspense } from 'react';
import { columns } from './columns';
import { data, filterFields } from './constants';
import { DataTable } from './data-table';
import { Skeleton } from './skeleton';

export default function ProTablePage() {
  return (
    <div className="p-3">
      <Suspense fallback={<Skeleton />}>
        <DataTable columns={columns} data={data} filterFields={filterFields} />
      </Suspense>
    </div>
  );
}
