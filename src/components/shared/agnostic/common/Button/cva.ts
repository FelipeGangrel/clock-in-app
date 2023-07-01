import { cva, type VariantProps } from 'class-variance-authority'

export const buttonVariants = cva(
  `flex flex-row items-center justify-center rounded-md px-4 py-2 font-medium leading-7 outline-2 focus:outline focus:outline-offset-2`,
  {
    variants: {
      variant: {
        primary: `bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-indigo-600 dark:hover:bg-indigo-500 dark:focus:outline-indigo-500`,
        secondary: `bg-slate-200 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600 dark:focus:outline-slate-600`,
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  }
)

export type ButtonVariantProps = VariantProps<typeof buttonVariants>
