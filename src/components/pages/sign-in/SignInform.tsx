import { Card } from "@/components/shared";

export function SignInForm() {
  return (
    <Card>
      <form className="flex flex-col space-y-4">
        <div className="flex flex-col space-y-1">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            className="border-2 border-gray-300 px-3 py-2 rounded-md"
          />
        </div>
      </form>
    </Card>
  );
}
