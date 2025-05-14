import { CircleHelp, Bell } from 'lucide-react'

import { Button } from './ui/button'
import { SidebarTrigger } from './ui/sidebar'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { ComponentProps } from 'react'

interface HeaderProps {
  avatarUrl?: string
}

function Header({ avatarUrl }: HeaderProps) {
  return (
    <header className="border-sidebar-border flex h-[72px] items-center border-b pr-4 pl-6">
      <SidebarTrigger />
      <div className="ml-auto">
        <NavActions avatarUrl={avatarUrl} />
      </div>
    </header>
  )
}

function NavActions({ avatarUrl }: ComponentProps<typeof Header>) {
  return (
    <div className="flex items-center gap-3">
      <Button variant="outline" size="icon">
        <CircleHelp />
      </Button>
      <Button variant="outline" size="icon">
        <Bell />
      </Button>
      <Avatar>
        <AvatarImage src={avatarUrl} alt="user avatar" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  )
}

export { Header }
