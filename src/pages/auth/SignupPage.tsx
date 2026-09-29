import type { FormEvent } from 'react'
import TextField from '@/components/forms/TextField'
import Button from '@/components/ui/Button'
import AuthHeading from './components/AuthHeading'
import AuthLayout from './components/AuthLayout'
import AuthSwitchPrompt from './components/AuthSwitchPrompt'

export default function SignupPage() {
  // UI only for now — account creation isn't wired up yet.
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => event.preventDefault()

  return (
    <AuthLayout
      introTitle="Sign up and come in"
      introText="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost"
    >
      <AuthHeading eyebrow="Create an Account" title="Welcome to ByteSpace" />

      <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-6">
        <TextField
          label="Full Name"
          name="fullName"
          autoComplete="name"
          placeholder="Jamie Davis"
          required
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="designer@example.com"
          required
        />
        <TextField
          label="Password"
          name="password"
          type="password"
          autoComplete="new-password"
          placeholder="********"
          required
        />
        <Button type="submit" className="self-end">
          Continue
        </Button>
      </form>

      <AuthSwitchPrompt
        question="Already have an account?"
        linkLabel="Login"
        to="/login"
        className="mt-30.5 text-shuttle-gray-700"
      />
    </AuthLayout>
  )
}
