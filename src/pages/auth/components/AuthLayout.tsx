import type { ReactNode } from 'react'
import Container from '@/components/layout/Container'
import GridBackdrop from '@/components/layout/GridBackdrop'
import Logo from '@/components/ui/Logo'
import AuthShowcase from './AuthShowcase'

interface AuthLayoutProps {
  introTitle: string
  introText: string
  children: ReactNode
}

export default function AuthLayout({ introTitle, introText, children }: AuthLayoutProps) {
  return (
    <div className="relative min-h-screen min-w-[1280px] overflow-hidden bg-persian-blue-800">
      <GridBackdrop />

      <Container className="relative">
        <header className="h-[120px] pt-[35px] pl-[2px]">
          <Logo showWordmark={false} />
        </header>

        <div className="flex items-start justify-between pb-[120px]">
          <div className="relative h-[784px] w-[606px]">
            <div className="ml-[2px] w-[475px] text-shuttle-gray-50">
              <h2 className="font-heading text-heading-xs font-semibold">{introTitle}</h2>
              <p className="mt-4 text-body-l">{introText}</p>
            </div>
            <AuthShowcase />
          </div>

          <main className="h-[784px] w-[579px] shrink-0 rounded-3xl bg-white px-[63px] pt-[61px]">
            {children}
          </main>
        </div>
      </Container>
    </div>
  )
}
