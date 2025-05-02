
import { JSX } from 'react'
import clsx from 'clsx'
import ComponentProps from '@/types/components/ComponentProps'

export default function SmallCard({ className, children }: ComponentProps): JSX.Element {
  return (
    <div
      className={clsx(
        'group',
        'w-full',
        'transform duration-300',
        'rounded-2xl border border-slate-500/20 dark:border-slate-600/30',
        'bg-slate-100/20 dark:bg-slate-600/20',
        'hover:bg-slate-100/30 dark:hover:bg-slate-600/30',
        'cursor-pointer',
        'p-3 sm:p-4',
        className
      )}
    >
      {children}
    </div>
  )
}
