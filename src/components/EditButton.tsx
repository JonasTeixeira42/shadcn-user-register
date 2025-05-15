import { useState } from 'react'
import { EllipsisVertical } from 'lucide-react'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'

import { Button } from './ui/button'
import { ModalRegisterUser } from './ModalRegisterUser'
import { User } from '@/domain/user/types/user'

interface EditButtonProps {
  user: User
}

function EditButton({ user }: EditButtonProps) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <ModalRegisterUser
        user={user}
        open={open}
        toggleOpen={(value) => setOpen(value)}
      />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon">
            <EllipsisVertical />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => setOpen(true)}>
            Editar
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}

export { EditButton }
