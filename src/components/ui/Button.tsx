import type { ButtonHTMLAttributes } from 'react'
import { cn } from '../../utils/cn'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

/** Primary lime pill button. */
export default function Button({ className, type = 'button', ...props }: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        'inline-flex shrink-0 items-center justify-center rounded-3xl bg-electric-lime-400 px-6 py-3 text-label-l font-medium whitespace-nowrap text-shuttle-gray-950',
        className,
      )}
      {...props}
    />
  )
}
