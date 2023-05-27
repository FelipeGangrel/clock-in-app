import { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'
import { clsx } from 'clsx'
import type { WithFieldStatus } from '@/contracts/forms'

export type InputProps = JSX.IntrinsicElements['input'] & WithFieldStatus

const BASE_CLASSES =
  'rounded-md border-2 bg-white px-4 py-2 text-slate-700 focus:border-slate-300 focus:outline-none'

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ hasError, ...props }, ref) => {
    const classes = clsx(BASE_CLASSES, {
      'border-red-500': hasError,
    })

    return (
      <input
        ref={ref}
        {...props}
        className={twMerge(classes, props.className)}
      />
    )
  }
)

Input.displayName = 'Input'
