import { JSX } from 'react'
import ComponentProps from '@/types/components/ComponentProps'

export default interface SkillsProps extends ComponentProps {
  title: string
  type: string[]
}
