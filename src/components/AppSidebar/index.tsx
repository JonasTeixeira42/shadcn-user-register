import { useState } from 'react'
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
import { allMenus } from './menu'

import { Button } from '../ui/button'
import { UserSidebarDropdown } from '../UserSidebarDropdown'

type MenuKeys = 'main' | 'settings'

function AppSidebar() {
  const [menus, setMenus] = useState(allMenus)

  const handleClick = (parent: MenuKeys, menuTitle: string) => {
    const menusCopy = { ...menus }

    Object.entries(menusCopy).forEach(([key, items]) => {
      items.forEach((item) => {
        if (item.title === menuTitle && parent === key) {
          return (item.isActive = true)
        }

        item.isActive = false
      })
    })

    setMenus(menusCopy)
  }

  return (
    <Sidebar>
      <SidebarHeader className="border-sidebar-border flex h-[72px] justify-center border-b">
        <Button variant="secondary">logo</Button>
      </SidebarHeader>
      <SidebarContent>
        <UserSidebarDropdown companyName="Filial A" />
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menus.main.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    onClick={() => handleClick('main', item.title)}
                    isActive={item.isActive}
                    asChild
                  >
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Configurações</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menus.settings.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    onClick={() => handleClick('settings', item.title)}
                    isActive={item.isActive}
                    asChild
                  >
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
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
