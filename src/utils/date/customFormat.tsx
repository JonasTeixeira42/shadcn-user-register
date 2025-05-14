import { format } from 'date-fns'

function customFormat(date: Date | string, formatString: string) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-return
  return format(date, formatString)
}

export { customFormat }
