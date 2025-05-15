import { ReactNode } from 'react'

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { FormUser } from './FormUser'
import { User } from '@/domain/user/types/user'

interface ModalRegisterUserProps {
  user?: User
  open: boolean
  trigger?: ReactNode
  toggleOpen: (open: boolean) => void
}

function ModalRegisterUser({
  user,
  open,
  trigger,
  toggleOpen,
}: ModalRegisterUserProps) {
  return (
    <Sheet open={open} onOpenChange={toggleOpen}>
      {!!trigger && <SheetTrigger asChild>{trigger}</SheetTrigger>}
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="font-noto text-2xl font-normal">
            Adicionar usuário
          </SheetTitle>
        </SheetHeader>
        <div className="flex-1">
          <FormUser user={user} onSubmitForm={() => toggleOpen(false)} />
        </div>
      </SheetContent>
    </Sheet>
  )
}

export { ModalRegisterUser }
