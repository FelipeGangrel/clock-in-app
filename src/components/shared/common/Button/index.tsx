import { forwardRef } from 'react'
import { buttonVariants, ButtonVariantProps } from './cva'
import { twMerge } from 'tailwind-merge'

export type ButtonProps = JSX.IntrinsicElements['button'] & ButtonVariantProps

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, ...props }, ref) => {
    return (
      <button
        ref={ref}
        {...props}
        className={twMerge(
          buttonVariants({
            variant,
          }),
          props.className
        )}
      />
    )
  }
)

Button.displayName = 'Button'
