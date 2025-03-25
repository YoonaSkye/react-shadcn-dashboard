import * as React from 'react';
import {
  AudioWaveform,
  Command,
  GalleryVerticalEnd,
  MessagesSquare,
  Table,
  Info,
  Settings,
  ChartLine,
  PieChart,
  BarChart,
  Gauge,
  ServerOff,
  UserX,
  Ban
} from 'lucide-react';

import { NavMain } from '@/components/nav-sidebar/nav-main';
import { NavUser } from '@/components/nav-sidebar/nav-user';
import { TeamSwitcher } from '@/components/nav-sidebar/team-switcher';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader
} from '@/components/ui/sidebar';

// This is sample data.
const data = {
  user: {
    name: 'shadcn',
    email: 'm@example.com',
    avatar: '/images/avatars/10.png'
  },
  teams: [
    {
      name: 'Acme Inc',
      logo: GalleryVerticalEnd,
      plan: 'Enterprise'
    },
    {
      name: 'Acme Corp.',
      logo: AudioWaveform,
      plan: 'Startup'
    },
    {
      name: 'Evil Corp.',
      logo: Command,
      plan: 'Free'
    }
  ],
  navMain: [
    {
      title: 'Default',
      icon: PieChart,
      url: '/dashboard/default'
    },
    {
      title: 'CRM',
      icon: BarChart,
      url: '/dashboard/crm'
    },
    {
      title: 'Website Analytics',
      icon: Gauge,
      url: '/dashboard/website-analytics'
    }
  ],
  navComponents: [
    {
      title: '表单',
      icon: MessagesSquare,
      url: '/form',
      items: [
        {
          title: '基本表单',
          url: '/form/basic-form'
        }
        // {
        //   title: '步骤表单',
        //   url: '/form/step-form'
        // },
        // {
        //   title: '高级表单',
        //   url: '/form/advanced-form'
        // }
      ]
    },
    {
      title: '表格',
      url: '/list',
      icon: Table,
      items: [
        {
          title: '数据表格',
          url: '/list/data-table'
        },
        {
          title: '高级表格',
          url: '/list/pro-table'
        }
        // {
        //   title: '表格列表',
        //   url: '/list/table-list'
        // },
        // {
        //   title: '卡片列表',
        //   url: '/list/card-list'
        // }
      ]
    },
    {
      title: '图表',
      icon: ChartLine,
      url: '/charts',
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
  ],
  navPages: [
    { title: '404', url: '/pages/404', icon: Ban },
    { title: '403', url: '/pages/403', icon: UserX },
    { title: '500', url: '/pages/500', icon: ServerOff }
  ],
  navOthers: [
    {
      title: '设置',
      icon: Settings,
      url: '/settings'
    },
    {
      title: '系统',
      icon: Info,
      url: '/system'
    }
  ]
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} group="DASHBOARDS" />
        <NavMain items={data.navComponents} group="COMPONENTS" />
        <NavMain items={data.navPages} group="PAGES" />
        <NavMain items={data.navOthers} group="OTHERS" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
