import { twMerge } from 'tailwind-merge'
import { cardVariants, type CardVariantProps } from './cva'

export type CardProps = JSX.IntrinsicElements['div'] & CardVariantProps

export function Card({ children, shadow, ...props }: CardProps) {
  return (
    <div
      {...props}
      className={twMerge(cardVariants({ shadow }), props.className)}
    >
      {children}
    </div>
  )
}
