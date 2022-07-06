import Link from 'next/link'
import type { FC } from 'react'
import type { HeaderProps } from './types'

const Header: FC<HeaderProps> = ({ navigation }) => {
  return (
    <header className="h-16 w-full bg-white shadow-md">
      <div className="mx-auto flex h-full max-w-screen-lg items-center justify-between px-5">
        <div>
          <img
            src="/static/images/Skooldio_Logo.svg"
            alt="Skooldio"
            className="h-11 w-[140px]"
          />
        </div>

        <nav>
          <ul className="flex gap-5">
            {navigation.map((nav) => (
              <Link href={nav.href} key={nav.label}>
                <a className="font-light hover:underline">
                  <li>{nav.label}</li>
                </a>
              </Link>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
