import * as React from 'react';

import { cn } from '@/lib/utils';
import { ChartToolbar } from '@/components/chart-toolbar';

export function ChartDisplay({
  name,
  children,
  className
}: { name: string } & React.ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        'themes-wrapper group relative flex flex-col overflow-hidden rounded-xl border shadow transition-all duration-200 ease-in-out hover:z-30',
        className
      )}
    >
      <ChartToolbar
        chart={{ categories: name }}
        className="relative z-20 flex justify-start border-b bg-card px-3 py-2.5 text-card-foreground"
      >
        {children}
      </ChartToolbar>
      <div className="relative z-10 [&>div]:rounded-none [&>div]:border-none [&>div]:shadow-none">
        {children}
      </div>
    </div>
  );
}
