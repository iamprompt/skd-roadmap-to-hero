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
      <Header
        navigation={[
          {
            label: 'คอร์สออนไลน์',
            href: '/',
          },
          {
            label: 'เวิร์กชอป',
            href: '/',
          },
          {
            label: 'Bootcamp',
            href: '/',
          },
          {
            label: 'สำหรับองค์กร',
            href: '/',
          },
          {
            label: 'บทความ',
            href: '/',
          },
          {
            label: 'Guide',
            href: '/guide',
          },
        ]}
        className="fixed inset-0 z-50"
      />
      <main className="mt-16">{children}</main>
      <Footer />
    </>
  )
}
