import { Link, type LinkProps } from '@tanstack/react-router'
import { cn } from '@/utils/cn'

interface AuthSwitchPromptProps {
  question: string
  linkLabel: string
  to: LinkProps['to']
  className?: string
}

/** "Already have an account? Login" style prompt linking to the other auth page. */
export default function AuthSwitchPrompt({ question, linkLabel, to, className }: AuthSwitchPromptProps) {
  return (
    <p className={cn('text-center text-base leading-[1.6]', className)}>
      {question}{' '}
      <Link to={to} className="text-persian-blue-800">
        {linkLabel}
      </Link>
    </p>
  )
}
