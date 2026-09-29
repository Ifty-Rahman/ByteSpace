import { useId, type InputHTMLAttributes } from 'react'
import { cn } from '@/utils/cn'

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
}

/** Labelled text input used across forms. Any native input prop is passed through. */
export default function TextField({ label, id, className, ...inputProps }: TextFieldProps) {
  const generatedId = useId()
  const inputId = id ?? generatedId

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={inputId} className="text-label-s font-medium text-shuttle-gray-950">
        {label}
      </label>
      <input
        id={inputId}
        className={cn(
          'h-[52px] w-full rounded-xl border border-shuttle-gray-100 bg-white px-6 text-body-l text-shuttle-gray-950 outline-none placeholder:text-shuttle-gray-400 focus-visible:border-persian-blue-800',
          className,
        )}
        {...inputProps}
      />
    </div>
  )
}
