import { twMerge } from 'tailwind-merge'

export type DialogBodyProps = React.HTMLAttributes<HTMLDivElement>

export const Body: React.FC<DialogBodyProps> = ({ children, ...props }) => {
  return (
    <div
      {...props}
      className={twMerge(
        'max-h-[60vh] overflow-y-auto px-6 py-6 text-sm text-slate-500 dark:text-slate-400',
        props.className
      )}
    >
      {children}
    </div>
  )
}

Body.displayName = 'Dialog.Body'
