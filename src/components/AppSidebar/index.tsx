import { Headset } from 'lucide-react'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from '@/components/ui/sidebar'
import { menus } from './menu'
import { Fragment } from 'react/jsx-runtime'
import { Button } from '../ui/button'
import { UserSidebarDropdown } from '../UserSidebarDropdown'

function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="border-sidebar-border flex h-[72px] justify-center border-b">
        <Button variant="secondary">logo</Button>
      </SidebarHeader>
      <SidebarContent>
        <UserSidebarDropdown companyName="Filial A" />
        <SidebarGroup>
          {menus.map(({ title, items }) => (
            <Fragment key={title}>
              <SidebarGroupLabel>{title}</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {items.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild>
                        <a href={item.url}>
                          <item.icon />
                          <span>{item.title}</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </Fragment>
          ))}
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className="flex items-center justify-between px-8 pb-0.5">
          <span className="text-primary text-sm">Precisa de ajuda?</span>
          <div className="[&>svg]:size-4 [&>svg]:shrink-0">
            <Headset />
          </div>
        </div>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}

export { AppSidebar }
