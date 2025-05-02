import { lazy, JSX } from 'react'
import clsx from 'clsx'
import SkillProps from '@/types/components/SkillsProps'

const Badge = lazy(() => import('@/components/shared/Badge'))
const SmallCard = lazy(() => import('@/components/shared/SmallCard'))
const Heading3 = lazy(() => import('@/components/shared/Heading3'))

export default function SkillsCard({
  title,
  type
}: SkillProps): JSX.Element {
  const techStacksEntry = type.map(
    (techStack: string, index: number): JSX.Element => (
      <Badge
        key={index}
        className={clsx(
          'mr-2 last-of-type:mr-0',
          'text-base font-medium text-primary-dark dark:text-primary-light'
        )}
      >
        {techStack}
      </Badge>
    )
)

  return (
    <SmallCard className='flex flex-col justify-between'>
      <header>
        <Heading3>
            {title}
        </Heading3>
      </header>
      <footer>
        <div className='mb-1 flex flex-wrap'>{techStacksEntry}</div>
      </footer>
    </SmallCard>
  )
}
