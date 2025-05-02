
import { lazy, useRef, useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { skills, filters } from '@/data/skills'
import useIntersectionObserver from '@/hooks/useIntersectionObserver'
import clsx from 'clsx'
import SkillsProps from '@/types/components/SkillsProps'

const ArrowRightSLineIcon = lazy(() => import('remixicon-react/ArrowRightSLineIcon'))
const Badge = lazy(() => import('@/components/shared/Badge'))
const Heading2 = lazy(() => import('@/components/shared/Heading2'))
const SkillsCard = lazy(() => import('@/components/shared/SkillsCard'))
const Section = lazy(() => import('@/components/layouts/Section'))
const InlineLink = lazy(() => import('@/components/shared/InlineLink'))


export default function Skills(): JSX.Element {
  const [filteredSkills, setFilteredSkills] = useState<Array<SkillsProps>>([...skills])
  const [selectedFilters, setSelectedFilters] = useState<Array<string>>([])
  const ref = useRef<HTMLDivElement>(null)
  
  useIntersectionObserver(ref, (): void => {
    ref.current?.classList.add('animate-start')
  })

  const filterSkills = (newValue: string): void => {
    if (selectedFilters.includes(newValue)) {
      setSelectedFilters(selectedFilters.filter(value => value !== newValue))
      return
    }
    setSelectedFilters([...selectedFilters, newValue])
  }
  const removeselectedFilters = (): void => {
    setSelectedFilters([])
  }

  useEffect((): void => {
    let filtered: SkillsProps[] = [...skills]

    if (selectedFilters.length) {
      filtered = skills.filter((project: SkillsProps) => {
        let allTechStacks: string[] = [...project.type]
        return selectedFilters.every((filter: string) => allTechStacks.includes(filter))
      })
    }

    setFilteredSkills(filtered)
  }, [selectedFilters])

  const skillsEntry: JSX.Element[] = filteredSkills
    .map(skill => (
      <SkillsCard
        {...skill}
        key={skill.id}
      />
    ))

  const filterEntry: JSX.Element[] = filters.map(filter => (
    <Badge
      key={filter}
      className='animate-fade-in cursor-pointer !delay-200'
      active={selectedFilters.includes(filter)}
      onClick={(): void => filterSkills(filter)}
    >
      {filter}
    </Badge>
  ))

  return (
    <div ref={ref}>
      <Section
        id='skills'
        className='scroll-mt-8'
      >
        <Heading2 className='animate-fade-in pb-6 text-center text-primary-dark !delay-200 dark:text-white'>
          Skills
        </Heading2>
        <ul className='flex flex-wrap gap-2'>
          <li className='animate-fade-in inline !delay-200'>Filters:</li>
          {filterEntry}
        </ul>
        {!!filteredSkills.length && (
        <div
          className={clsx(
            'animate-fade-in !delay-300',
            'mx-auto mt-6 md:mt-8',
            'grid justify-items-center gap-x-6 gap-y-8 sm:grid-cols-5 xl:grid-cols-6'
          )}
        >
          {skillsEntry}
        </div>
        )}
        {!filteredSkills.length && (
        <div className='animate-fade-in mt-8 !delay-300'>
          <p className='text-muted-dark dark:text-muted'>
            Results not found.{' '}
            <span onClick={removeselectedFilters}>
              <InlineLink>Clear filters</InlineLink>
            </span>
          </p>
        </div>
      )}
      </Section>
    </div>
  )
}
