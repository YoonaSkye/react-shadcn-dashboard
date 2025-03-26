import { ChevronRight, type LucideIcon } from 'lucide-react';

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from '@/components/ui/collapsible';
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub
} from '@/components/ui/sidebar';
import { Link } from 'react-router-dom';

type MenuItem = {
  title: string;
  url: string;
  icon?: LucideIcon;
  isActive?: boolean;
  items?: MenuItem[];
};

export function NavMain({
  items,
  group
}: {
  items: MenuItem[];
  group: string;
}) {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>{group}</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item, index) => (
          <Tree key={index} item={item} />
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}

function Tree({ item }: { item: MenuItem }) {
  // const [name, ...items] = Array.isArray(item) ? item : [item];
  const { items, title: name, url } = item;

  if (!items || !items.length) {
    return (
      <SidebarMenuButton
        // isActive={name === 'button.tsx'}
        className="data-[active=true]:bg-transparent"
        asChild
      >
        <Link to={url}>
          {item.icon && <item.icon />}
          <span>{name}</span>
        </Link>
      </SidebarMenuButton>
    );
  }
  return (
    <SidebarMenuItem>
      <Collapsible
        className="group/collapsible [&[data-state=open]>button>svg:first-child]:rotate-90"
        // defaultOpen={name === 'components' || name === 'ui'}
      >
        <CollapsibleTrigger asChild>
          <SidebarMenuButton tooltip={name}>
            {item.icon && <item.icon />}
            <span>{name}</span>
            <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
          </SidebarMenuButton>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <SidebarMenuSub>
            {items.map((subItem, index) => (
              <Tree key={index} item={subItem} />
            ))}
          </SidebarMenuSub>
        </CollapsibleContent>
      </Collapsible>
    </SidebarMenuItem>
  );
}
