import { Link } from '@tanstack/react-router'
import { assets } from '@/constants/assets'
import { accountNav, primaryNav, type NavItem } from '@/constants/navigation'
import Logo from '@/components/ui/Logo'
import Container from './Container'

function NavLink({ item, className }: { item: NavItem; className?: string }) {
  if (item.to) {
    return (
      <Link
        to={item.to}
        className={className}
        activeOptions={{ exact: true, includeHash: false }}
        activeProps={{ 'aria-current': 'page' }}
      >
        {item.label}
      </Link>
    )
  }
  return (
    <a href={item.href} className={className}>
      {item.label}
    </a>
  )
}

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
            {primaryNav.map((item) => (
              <li key={item.label}>
                <NavLink
                  item={item}
                  className="text-base leading-[1.6] aria-[current=page]:text-label-m aria-[current=page]:font-medium"
                />
              </li>
            ))}
          </ul>
        </nav>

        <div className="absolute top-12 right-0 flex items-start gap-6 whitespace-nowrap text-body-m text-shuttle-gray-50">
          {accountNav.map((item) => (
            <NavLink key={item.label} item={item} />
          ))}
          <button type="button" aria-label="Cart" className="size-6">
            <img src={assets.icons.bag} alt="" className="size-6" />
          </button>
        </div>
      </Container>
    </header>
  )
}
