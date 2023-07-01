import { twMerge } from 'tailwind-merge'

export type FormRowProps = JSX.IntrinsicElements['div']

export function FormRow({ children, ...props }: FormRowProps) {
  return (
    <div
      {...props}
      className={twMerge('flex flex-col space-y-1', props.className)}
    >
      {children}
    </div>
  )
}
