import { z } from 'zod'

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
    .min(6, { message: 'Formato inválido' })
    .max(12, { message: 'Formato inválido' }),
  active: z.boolean(),
  whatsapp: z.boolean(),
})

export { FormSchema }
