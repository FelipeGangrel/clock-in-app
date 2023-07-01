import {
  Card,
  Input,
  Label,
  Button,
  FormRow,
} from '@/components/shared/agnostic'
import TopIcon from './TopIcon'

export function SignInForm() {
  return (
    <Card shadow="lg" className="relative w-full max-w-sm items-center pt-12">
      <TopIcon />
      <form className="flex w-full flex-col space-y-4">
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
