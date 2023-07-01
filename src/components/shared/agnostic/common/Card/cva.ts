import { cva, type VariantProps } from 'class-variance-authority'

export const cardVariants = cva(
  `flex flex-col rounded-md border-2 border-slate-200 bg-slate-50 px-6 py-6 dark:border-slate-700 dark:bg-slate-800`,
  {
    variants: {
      shadow: {
        none: 'shadow-none',
        sm: 'shadow-sm',
        md: 'shadow-md',
        lg: 'shadow-lg',
        xl: 'shadow-xl',
      },
    },
    defaultVariants: {
      shadow: 'md',
    },
  }
)

export type CardVariantProps = VariantProps<typeof cardVariants>
