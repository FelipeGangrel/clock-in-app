import { Card, Input } from '@/components/shared'

export function SignInForm() {
  return (
    <Card>
      <form className="flex flex-col space-y-4">
        <div className="flex flex-col space-y-1">
          <label htmlFor="email">Email</label>
          <Input name="email" id="email" />
        </div>
      </form>
    </Card>
  )
}
