import clsx, { ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

const dateFOrmatter = new Intl.DateTimeFormat(window.context.locale, {
  dateStyle: 'short',
  timeStyle: 'short',
  timeZone: 'UTC'
})

//Date text formatter
export const formatDateFormMs = (ms: number) => dateFOrmatter.format(ms)

//ClassName merger
export const cn = (..._args: ClassValue[]) => {
  return twMerge(clsx(..._args))
}

