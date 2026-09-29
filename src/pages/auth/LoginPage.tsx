import type { FormEvent } from 'react'
import TextField from '@/components/forms/TextField'
import Button from '@/components/ui/Button'
import AuthHeading from './components/AuthHeading'
import AuthLayout from './components/AuthLayout'
import AuthSwitchPrompt from './components/AuthSwitchPrompt'
import SocialSignIn from './components/SocialSignIn'

export default function LoginPage() {
  // UI only for now — signing in isn't wired up yet.
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => event.preventDefault()

  return (
    <AuthLayout
      introTitle="Sign in with ease"
      introText="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
    >
      <AuthHeading eyebrow="Sign In" title="Welcome Back" />

      <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-6">
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
          autoComplete="current-password"
          placeholder="********"
          required
        />
        <Button type="submit" className="self-end">
          Sign In
        </Button>
      </form>

      <SocialSignIn className="mt-18.25" />

      <AuthSwitchPrompt
        question="New user?"
        linkLabel="Create an account"
        to="/signup"
        className="mt-18.25 text-muted"
      />
    </AuthLayout>
  )
}
