import { useRouter } from '@/routes/hooks/use-router';
import { type DialogProps } from '@radix-ui/react-dialog';
import * as React from 'react';

import { Button } from '@/components/ui/button';
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from '@/components/ui/command';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

const docsConfig = {
  navMain: [
    {
      title: 'dashboard',
      items: [
        {
          title: '概览',
          url: '/dashboard/overview'
        },
        {
          title: '分析',
          url: '/dashboard/analytics'
        },
        {
          title: '工作台',
          url: '/dashboard/workplace'
        }
      ]
    },
    {
      title: 'form',
      items: [
        {
          title: '基本表单',
          url: '/form/basic-form'
        },
        {
          title: '步骤表单',
          url: '/form/step-form'
        },
        {
          title: '高级表单',
          url: '/form/advanced-form'
        }
      ]
    },

    {
      title: 'table',
      items: [
        {
          title: '数据表格',
          label: '128',
          url: '/list/data-table'
        },
        {
          title: '高级表格',
          url: '/list/pro-table'
        },
        {
          title: '表格列表',
          label: '972',
          url: '/list/table-list'
        },
        {
          title: '卡片列表',
          label: '8',
          url: '/list/card-list'
        }
      ]
    },
    {
      title: 'charts',
      items: [
        {
          title: '面积图',
          url: '/charts/area-chart'
        },
        {
          title: '柱状图',
          url: '/charts/bar-chart'
        },
        {
          title: '折线图',
          url: '/charts/line-chart'
        },
        {
          title: '饼图',
          url: '/charts/pie-chart'
        },
        {
          title: '雷达图',
          url: '/charts/radar-chart'
        },
        {
          title: '径向图',
          url: '/charts/radial-chart'
        },
        {
          title: '提示图',
          url: '/charts/tooltip'
        }
      ]
    }
  ]
};

export function CommandMenu({ ...props }: DialogProps) {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === 'k' && (e.metaKey || e.ctrlKey)) || e.key === '/') {
        if (
          (e.target instanceof HTMLElement && e.target.isContentEditable) ||
          e.target instanceof HTMLInputElement ||
          e.target instanceof HTMLTextAreaElement ||
          e.target instanceof HTMLSelectElement
        ) {
          return;
        }

        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  const runCommand = React.useCallback((command: () => unknown) => {
    setOpen(false);
    command();
  }, []);

  return (
    <>
      <Button
        variant="outline"
        className={cn(
          'relative h-8 w-full justify-start rounded-[0.5rem] bg-muted/50 text-sm font-normal text-muted-foreground shadow-none sm:pr-12 md:w-40 lg:w-56 xl:w-64'
        )}
        onClick={() => setOpen(true)}
        {...props}
      >
        <span className="hidden lg:inline-flex">Search documentation...</span>
        <span className="inline-flex lg:hidden">Search...</span>
        <kbd className="pointer-events-none absolute right-[0.3rem] top-[0.3rem] hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {/* <CommandGroup heading="Links">
            {docsConfig.navMain.map((navItem) => (
              <CommandItem
                className="cursor-pointer"
                key={navItem.url}
                value={navItem.title}
                onSelect={() => {
                  runCommand(() => router.push(navItem.url as string));
                }}
              >
                {navItem.title}
              </CommandItem>
            ))}
          </CommandGroup> */}
          {docsConfig.navMain.map((group, index) => (
            <>
              <CommandGroup key={group.title} heading={group.title}>
                {group.items.map((navItem) => (
                  <CommandItem
                    key={navItem.url}
                    value={navItem.title}
                    onSelect={() => {
                      runCommand(() => router.push(navItem.url as string));
                    }}
                  >
                    {/* <div className="mr-2 flex h-4 w-4 items-center justify-center">
                    <Circle className="h-3 w-3" />
                  </div> */}
                    {navItem.title}
                  </CommandItem>
                ))}
              </CommandGroup>
              {index === docsConfig.navMain.length - 1 ? null : <Separator />}
            </>
          ))}
        </CommandList>
      </CommandDialog>
    </>
  );
}
