import clsx, { ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const cn = (..._args: ClassValue[]) => {
  return twMerge(clsx(..._args))
}
