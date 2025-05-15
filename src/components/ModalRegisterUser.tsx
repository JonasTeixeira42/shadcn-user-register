import { Plus } from 'lucide-react'

import { Button } from '@/components/ui/button'

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { FormUser } from './FormUser'

function ModalRegisterUser() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button rounded="circle" size="lg" className="w-full md:w-auto">
          <Plus />
          <span>Adicionar</span>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="font-noto text-2xl font-normal">
            Adicionar usuário
          </SheetTitle>
        </SheetHeader>
        <div className="flex-1">
          <FormUser />
        </div>
      </SheetContent>
    </Sheet>
  )
}

export { ModalRegisterUser }
