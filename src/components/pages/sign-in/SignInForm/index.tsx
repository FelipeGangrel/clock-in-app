import { Card, Input, Label, Button, FormRow } from '@/components/shared'

export function SignInForm() {
  return (
    <Card shadow="lg" className="w-full max-w-sm">
      <form className="flex flex-col space-y-4">
        <FormRow>
          <Label required htmlFor="email">
            Email
          </Label>
          <Input name="email" type="email" id="email" />
        </FormRow>
        <FormRow>
          <Label required htmlFor="password">
            Password
          </Label>
          <Input name="password" type="password" id="password" />
        </FormRow>
        <FormRow>
          <Button type="button" variant="secondary">
            Forgot my password
          </Button>
        </FormRow>
        <FormRow>
          <Button type="submit">Sign In</Button>
        </FormRow>
      </form>
    </Card>
  )
}
