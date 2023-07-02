'use client'

import { Button, VisuallyHidden } from '@/components/shared/agnostic'
import { Dialog } from '@/components/shared/client-side'

const Modal = () => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <Button type="button">Open example modal</Button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Content>
        <Dialog.Header>Modal title here</Dialog.Header>
        <Dialog.Body>
          <VisuallyHidden.Root>
            <Dialog.Description>
              The description for this modal
            </Dialog.Description>
          </VisuallyHidden.Root>
          <div className="space-y-4">
            {Array.from({ length: 16 }).map((_, i) => (
              <p key={i}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
                laborum odio deleniti, adipisci quisquam iure recusandae ullam
                quo nulla. Enim.
              </p>
            ))}
          </div>
        </Dialog.Body>
        <Dialog.Footer>
          <Dialog.Close asChild className="ml-auto">
            <Button variant="secondary" type="button">
              Close
            </Button>
          </Dialog.Close>
          <Dialog.Close asChild>
            <Button type="button">Save changes</Button>
          </Dialog.Close>
        </Dialog.Footer>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
)

export default Modal
