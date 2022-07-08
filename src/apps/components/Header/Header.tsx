import clsx from 'clsx'
import Link from 'next/link'
import type { FC } from 'react'
import type { HeaderProps } from './types'

const Header: FC<HeaderProps> = ({ navigation, className }) => {
  return (
    <header className={clsx('h-16 w-full bg-white shadow-md', className)}>
      <div className="mx-auto flex h-full max-w-screen-xl items-center justify-between px-5">
        <Link href="/">
          <a>
            <img
              src="/static/images/Skooldio_Logo.svg"
              alt="Skooldio"
              className="h-11 w-[140px]"
            />
          </a>
        </Link>

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
