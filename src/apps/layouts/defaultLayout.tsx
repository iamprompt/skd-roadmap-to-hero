import type { NextPage } from 'next'
import type { ReactNode } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

interface Props {
  children: ReactNode
}

export const Layout: NextPage<Props> = ({ children }) => {
  return (
    <>
      <Header navigation={[]} className="fixed inset-0 z-50" />
      <main className="mt-16">{children}</main>
      <Footer />
    </>
  )
}
