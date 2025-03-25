import { cn } from '@/lib/utils';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Link, useLocation } from 'react-router-dom';

const links = [
  {
    name: 'Area Chart',
    href: '/charts/area-chart'
  },
  {
    name: 'Bar Chart',
    href: '/charts/bar-chart'
  },
  {
    name: 'Line Chart',
    href: '/charts/line-chart'
  },
  {
    name: 'Pie Chart',
    href: '/charts/pie-chart'
  },
  {
    name: 'Radar Chart',
    href: '/charts/radar-chart'
  },
  {
    name: 'Radial Chart',
    href: '/charts/radial-chart'
  },
  {
    name: 'Tooltip',
    href: '/charts/tooltip'
  }
];

export function ChartsNav({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  const { pathname } = useLocation();

  return (
    <ScrollArea className="max-w-[600px] lg:max-w-none">
      <div className={cn('flex items-center', className)} {...props}>
        {links.map((example, index) => (
          <Link
            to={example.href}
            key={example.href}
            className={cn(
              'flex h-7 shrink-0 items-center justify-center rounded-full px-4 text-center text-sm font-medium transition-colors hover:text-primary',
              pathname?.startsWith(example.href) ||
                (index === 0 && pathname === '/charts')
                ? 'bg-muted text-primary'
                : 'text-muted-foreground'
            )}
          >
            {example.name}
          </Link>
        ))}
      </div>
      <ScrollBar orientation="horizontal" className="invisible" />
    </ScrollArea>
  );
}
