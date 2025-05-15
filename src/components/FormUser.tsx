import { z } from 'zod'
import { toast } from 'sonner'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { phoneMask } from '@/utils/masks/phoneMask'
import { ChangeEvent } from 'react'
import { cpfMask } from '@/utils/masks/cpfMask'
import { rgMask } from '@/utils/masks/rgMask'
import { Switch } from './ui/switch'
import { Checkbox } from './ui/checkbox'
import { SheetClose, SheetFooter } from './ui/sheet'

const FormSchema = z.object({
  name: z
    .string({
      required_error: 'Campo nome é obrigatório',
    })
    .min(2, {
      message: 'Nome precisa conter pelo menos duas letras',
    }),
  email: z
    .string({
      required_error: 'Campo nome é obrigatório',
    })
    .email({ message: 'E-mail inválido' }),
  phone: z
    .string({
      required_error: 'Campo telefone é obrigatório',
    })
    .min(14, { message: 'Formato inválido' })
    .max(15, { message: 'Formato inválido' }),
  cpf: z
    .string({
      required_error: 'Campo cpf é obrigatório',
    })
    .min(14, { message: 'Formato inválido' })
    .max(14, { message: 'Formato inválido' }),
  rg: z
    .string({
      required_error: 'Campo rg é obrigatório',
    })
    .min(10, { message: 'Formato inválido' })
    .max(10, { message: 'Formato inválido' }),
  active: z.boolean().optional(),
  whatsapp: z.boolean().optional(),
})

function FormUser() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log('submit')
    toast('You submitted the following values:', {
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <Form {...form}>
      <form
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex h-full w-full flex-col justify-between"
      >
        <div className="grid gap-5">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>E-mail</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Telefone</FormLabel>
                <FormControl
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    form.setValue('phone', phoneMask(e.target.value))
                  }
                >
                  <Input placeholder="Informe o telefone" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="whatsapp"
            render={({ field }) => (
              <FormItem className="-mt-3 flex items-center">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormLabel>WhatsApp</FormLabel>
              </FormItem>
            )}
          />
          <div className="grid gap-x-4 gap-y-5 md:grid-cols-2">
            <FormField
              control={form.control}
              name="cpf"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>CPF</FormLabel>
                  <FormControl
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      form.setValue('cpf', cpfMask(e.target.value))
                    }
                  >
                    <Input placeholder="Informe o CPF" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="rg"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>RG</FormLabel>
                  <FormControl
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      form.setValue('rg', rgMask(e.target.value))
                    }
                  >
                    <Input placeholder="Informe o CPF" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="active"
            render={({ field }) => {
              return (
                <FormItem className="border-grey-50 flex flex-row items-center justify-between rounded-md border p-4">
                  <div className="space-y-0.5">
                    <FormLabel className="text-base">Status</FormLabel>
                    <FormDescription className="text-light-grey">
                      Definia se o usuário estará ativo ao ser adicionado.
                    </FormDescription>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                </FormItem>
              )
            }}
          />
        </div>
        <div className="flex flex-col gap-3 md:flex-row md:justify-end">
          <SheetFooter>
            <SheetClose asChild>
              <Button
                variant="outline"
                size="lg"
                type="submit"
                rounded="circle"
              >
                Cancelar
              </Button>
            </SheetClose>
          </SheetFooter>
          <Button rounded="circle" size="lg" type="submit">
            Adicionar
          </Button>
        </div>
      </form>
    </Form>
  )
}

export { FormUser }
