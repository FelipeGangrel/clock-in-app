import { cva, type VariantProps } from 'class-variance-authority'

export const buttonVariants = cva(
  'flex flex-row items-center justify-center rounded-md px-4 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2',
  {
    variants: {
      variant: {
        primary:
          'bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  }
)

export type ButtonVariantProps = VariantProps<typeof buttonVariants>
