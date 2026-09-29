interface GlowProps {
  src: string
  left: number
  top: number
  size: number
}

const BLUR_BLEED = 40

export default function Glow({ src, left, top, size }: GlowProps) {
  return (
    <img
      src={src}
      alt=""
      aria-hidden
      className="pointer-events-none absolute max-w-none"
      style={{
        left: left - BLUR_BLEED,
        top: top - BLUR_BLEED,
        width: size + BLUR_BLEED * 2,
        height: size + BLUR_BLEED * 2,
      }}
    />
  )
}
