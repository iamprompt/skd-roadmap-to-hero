import type { NextPage } from 'next'
import type { ReactNode } from 'react'
import Header from '../components/Header'

interface Props {
  children: ReactNode
}

export const Layout: NextPage<Props> = ({ children }) => {
  return (
    <>
      <Header navigation={[]} className="fixed inset-0" />
      <main className="mt-16">{children}</main>
    </>
  )
}
