import type { FormEvent } from 'react'
import { footerColumns, legalLinks } from '@/constants/navigation'
import Button from '@/components/ui/Button'
import Logo from '@/components/ui/Logo'
import Container from './Container'

export default function Footer() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => event.preventDefault()

  return (
    <footer className="border-t border-shuttle-gray-200 bg-white text-shuttle-gray-950">
      <Container className="flex flex-col gap-[130px] pt-[70px] pb-12">
        <div className="flex items-start gap-[92px]">
          {/* Newsletter */}
          <div className="flex flex-col gap-[45px]">
            <div className="flex flex-col gap-4">
              <Logo tone="dark" />
              <p className="w-[528px] text-body-s">
                Stay Up to date with our latest features and releases by joining our newsletter.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <form onSubmit={handleSubmit} className="flex items-start gap-6">
                <label className="flex h-[52px] w-[376px] items-center rounded-full border border-shuttle-gray-200 bg-white px-6">
                  <span className="sr-only">Email address</span>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="min-w-0 flex-1 bg-transparent text-body-m outline-none placeholder:text-shuttle-gray-950"
                  />
                </label>
                <Button type="submit">Search</Button>
              </form>
              <p className="w-[504px] text-body-xs">
                By subscribing, you agree to our Privacy Policy and consent to receive updates from
                our company.
              </p>
            </div>
          </div>

          {/* Link columns */}
          <nav aria-label="Footer" className="flex w-[580px] items-end gap-10">
            {footerColumns.map((column, index) => (
              <div key={column.title ?? index} className="flex w-[167px] flex-col gap-6">
                {column.title && <h3 className="text-body-m text-transparent">{column.title}</h3>}
                <ul className="flex flex-col gap-4 text-body-s whitespace-nowrap">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a href="#">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="flex h-[42px] flex-col justify-between">
          <hr className="border-shuttle-gray-200" />
          <div className="flex items-start justify-between text-body-xs">
            <p className="w-[460px]">@ 2023 ByteSpace. All rights reserved.</p>
            <ul className="flex gap-6 whitespace-nowrap">
              {legalLinks.map((link) => (
                <li key={link}>
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  )
}
