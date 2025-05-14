import { ChevronsUpDown } from 'lucide-react'

import { Avatar, AvatarFallback } from './ui/avatar'
import { DropdownMenu, DropdownMenuTrigger } from './ui/dropdown-menu'
import { SidebarGroup, SidebarGroupContent } from './ui/sidebar'
import { Button } from './ui/button'
import { getInitialLetters } from '@/utils/formatters/getAvatarFallback'

interface UserSidebarDropdown {
  companyName: string
}

function UserSidebarDropdown({ companyName }: UserSidebarDropdown) {
  return (
    <SidebarGroup>
      <SidebarGroupContent>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              size="lg"
              variant="ghost"
              className="w-full justify-between"
            >
              <Avatar className="h-8 w-8 rounded-lg">
                <AvatarFallback>
                  {getInitialLetters(companyName)}
                </AvatarFallback>
              </Avatar>
              <span>{companyName}</span>
              <ChevronsUpDown />
            </Button>
          </DropdownMenuTrigger>
        </DropdownMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}

export { UserSidebarDropdown }
