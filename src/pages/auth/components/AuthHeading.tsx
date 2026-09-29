interface AuthHeadingProps {
  eyebrow: string
  title: string
}

export default function AuthHeading({ eyebrow, title }: AuthHeadingProps) {
  return (
    <header>
      <p className="text-body-l text-persian-blue-800">{eyebrow}</p>
      <h1 className="font-heading text-heading-m font-semibold text-shuttle-gray-950">{title}</h1>
    </header>
  )
}
