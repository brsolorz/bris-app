import { lazy, JSX } from 'react'
import { NavLink } from 'react-router-dom'
import navItems from '@/data/navItems.ts'
import NavItemsProps from '@/types/NavItemsProps'

const PrimaryButton = lazy(() => import('@/components/shared/buttons/PrimaryButton'))

export default function NavLinks(): JSX.Element {
  const scrollToSection = (section: string): void => window.location.assign(section)
  const links = navItems.map(
    (item: NavItemsProps, index: number): JSX.Element => (
      <li
        className='flex'
        key={index}
      >
        <PrimaryButton onClick={() => scrollToSection(item.href)}>
          {item.name}
        </PrimaryButton>
      </li>
    )
  )

  return <ul className='flex flex-row items-center space-x-4'>{links}</ul>
}