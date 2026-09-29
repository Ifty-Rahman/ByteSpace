import { assets } from '@/constants/assets'

const providers = [
  { name: 'Facebook', icon: assets.icons.facebook },
  { name: 'Google', icon: assets.icons.google },
]

export default function SocialSignIn({ className }: { className?: string }) {
  return (
    <div className={className}>
      <div className="flex items-center gap-[11px]">
        <span className="h-px w-[200px] bg-divider" />
        <span className="text-body-l text-muted">or</span>
        <span className="h-px w-[200px] bg-divider" />
      </div>

      <div className="mt-10 flex justify-center gap-4">
        {providers.map(({ name, icon }) => (
          <button
            key={name}
            type="button"
            aria-label={`Continue with ${name}`}
            className="flex size-[72px] items-center justify-center rounded-3xl border border-divider bg-white"
          >
            <img src={icon} alt="" />
          </button>
        ))}
      </div>
    </div>
  )
}
