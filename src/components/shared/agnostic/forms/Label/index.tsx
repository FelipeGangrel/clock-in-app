import { twMerge } from 'tailwind-merge'

export type LabelProps = JSX.IntrinsicElements['label'] & {
  required?: boolean
}

const BASE_CLASSES = 'text-sm'

export function Label({ children, required, ...props }: LabelProps) {
  return (
    <label {...props} className={twMerge(BASE_CLASSES, props.className)}>
      {children} {required && <span className="text-red-500">*</span>}
    </label>
  )
}
