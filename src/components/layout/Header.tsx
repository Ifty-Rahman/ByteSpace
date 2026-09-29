import { assets } from '../../constants/assets'
import { accountNav, primaryNav } from '../../data/landing'
import { cn } from '../../utils/cn'
import Logo from '../ui/Logo'
import Container from './Container'

export default function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-20 h-[120px]">
      <Container className="relative h-full">
        <Logo className="absolute top-[35px] left-[2px]" />

        <nav
          aria-label="Main"
          className="absolute top-1/2 left-[calc(50%-0.5px)] -translate-x-1/2 -translate-y-1/2"
        >
          <ul className="flex items-start gap-6 whitespace-nowrap text-shuttle-gray-50">
            {primaryNav.map(({ label, href, active }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-current={active ? 'page' : undefined}
                  className={cn(active ? 'text-label-m font-medium' : 'text-base leading-[1.6]')}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="absolute top-12 right-0 flex items-start gap-6 whitespace-nowrap text-body-m text-shuttle-gray-50">
          {accountNav.map(({ label, href }) => (
            <a key={label} href={href}>
              {label}
            </a>
          ))}
          <button type="button" aria-label="Cart" className="size-6">
            <img src={assets.icons.bag} alt="" className="size-6" />
          </button>
        </div>
      </Container>
    </header>
  )
}
