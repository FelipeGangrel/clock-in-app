import * as RadixDialog from '@radix-ui/react-dialog'
import { twMerge } from 'tailwind-merge'
import { X } from '@phosphor-icons/react'

export type DialogHeaderProps = {
  titleProps?: Omit<RadixDialog.DialogTitleProps, 'children'>
} & React.HTMLAttributes<HTMLDivElement>

export const Header: React.FC<DialogHeaderProps> = ({
  children,
  titleProps,
  ...props
}) => {
  return (
    <div
      {...props}
      className={twMerge(
        'flex items-center justify-between px-6 py-4',
        props.className
      )}
    >
      <RadixDialog.Title
        {...titleProps}
        className={twMerge(
          'text-lg font-medium text-slate-900 dark:text-slate-100',
          titleProps?.className
        )}
      >
        {children}
      </RadixDialog.Title>
      <RadixDialog.Close className="inline-flex h-6 w-6 items-center justify-center text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200">
        <X />
      </RadixDialog.Close>
    </div>
  )
}

Header.displayName = 'Dialog.Header'
