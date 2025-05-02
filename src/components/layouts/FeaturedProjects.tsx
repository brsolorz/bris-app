
import { lazy, useRef, useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { projects, filters } from '@/data/projects'
import useIntersectionObserver from '@/hooks/useIntersectionObserver'
import clsx from 'clsx'
import ProjectProps from '@/types/components/ProjectProps'

const Heading2 = lazy(() => import('@/components/shared/Heading2'))
const ProjectCard = lazy(() => import('@/components/shared/ProjectCard'))
const Section = lazy(() => import('@/components/layouts/Section'))
const Badge = lazy(() => import('@/components/shared/Badge'))
const InlineLink = lazy(() => import('@/components/shared/InlineLink'))


export default function Projects(): JSX.Element {
  const [filteredProjects, setFilteredProjects] = useState<Array<ProjectProps>>([...projects])
  const [selectedFilters, setSelectedFilters] = useState<Array<string>>([])
  
  const filterProjects = (newValue: string): void => {
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
    let filtered: ProjectProps[] = [...projects]

    if (selectedFilters.length) {
      filtered = projects.filter((project: ProjectProps) => {
        let projectType: string = project.type
        return selectedFilters.every((filter: string) => projectType ===filter)
      })
    }

    setFilteredProjects(filtered)
  }, [selectedFilters])

  const filterEntry: JSX.Element[] = filters.map(filter => (
    <Badge
      key={filter}
      className='animate-fade-in cursor-pointer !delay-200'
      active={selectedFilters.includes(filter)}
      onClick={(): void => filterProjects(filter)}
    >
      {filter}
    </Badge>
  ));

  const ref = useRef<HTMLDivElement>(null)
  useIntersectionObserver(ref, (): void => {
    ref.current?.classList.add('animate-start')
  })

  const projectsEntry: JSX.Element[] = filteredProjects
    .filter(({ featured }) => !!featured)
    .map(project => (
      <ProjectCard
        {...project}
        key={project.id}
      />
    ))

  return (
    <div ref={ref}>
      <Section
        id='projects'
        className='scroll-mt-8'
      >
        <Heading2 className='animate-fade-in pb-6 text-center text-primary-dark !delay-200 dark:text-white'>
          Projects
        </Heading2>
        <ul className='flex flex-wrap gap-2'>
          <li className='animate-fade-in inline !delay-200'>Filters:</li>
          {filterEntry}
        </ul>
        {!!filteredProjects.length && (
          <div
            className={clsx(
              'animate-fade-in !delay-300',
              'mx-auto mt-6 md:mt-8',
              'grid justify-items-center gap-x-6 gap-y-8 sm:grid-cols-2 xl:grid-cols-3'
            )}
          >
            {projectsEntry}
          </div>
        )}
        {!filteredProjects.length && (
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
