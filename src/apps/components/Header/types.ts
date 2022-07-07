export interface Navigation {
  label: string
  href: string
  internalLink?: boolean
}

export interface HeaderProps {
  navigation: Navigation[]
  className?: string
}
