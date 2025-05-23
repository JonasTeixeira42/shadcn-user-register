import * as React from 'react'

import { cn } from '@/lib/utils'

interface InputProps extends React.ComponentProps<'input'> {
  icon?: React.ReactElement
}

function Input({ className, type, icon, ...props }: InputProps) {
  const hasIcon = !!icon

  return (
    <div className={cn('relative flex items-center rounded-md', className)}>
      {!!hasIcon && (
        <div className="text-light-grey absolute ml-3.5 [&>svg]:size-4">
          {icon}
        </div>
      )}
      <input
        type={type}
        data-slot="input"
        className={cn(
          'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
          'border-input rounded-md border shadow-xs transition-[color,box-shadow] outline-none',
          'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
          'file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 flex h-9 w-full min-w-0 bg-transparent px-3 py-1 text-base file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
          {
            'pl-8': hasIcon,
          }
        )}
        {...props}
      />
    </div>
  )
}

export { Input }
