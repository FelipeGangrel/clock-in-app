import * as RadixDialog from '@radix-ui/react-dialog'
export type DialogProps = RadixDialog.DialogProps
export type DialogTriggerProps = RadixDialog.DialogTriggerProps
export type DialogCloseProps = RadixDialog.DialogCloseProps

export const Root = RadixDialog.Root
export const Trigger = RadixDialog.Trigger
export const Close = RadixDialog.Close

export * from './Portal'

Root.displayName = 'Dialog.Root'
Trigger.displayName = 'Dialog.Trigger'
Close.displayName = 'Dialog.Close'
