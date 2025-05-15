import { format } from 'date-fns'

function customFormat(date: Date | string, formatString: string) {
  return format(date, formatString)
}

export { customFormat }
