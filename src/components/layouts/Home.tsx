import { lazy } from 'react'
import clsx from 'clsx'
import useFadeInMounted from '@/hooks/useFadeInMounted'
import Bri from '../../assets/briicon.png'

const SlidingInUnderline = lazy(() => import('@/components/shared/SlidingInUnderline'))
const HighlightText = lazy(() => import('@/components/shared/HighlightText'))
const InlineLink = lazy(() => import('@/components/shared/InlineLink'))
const SocialMediaLinks = lazy(() => import('@/components/shared/SocialMediaLinks'))
const Section = lazy(() => import('@/components/layouts/Section'))

export default function Home(): JSX.Element {
  const { animationClass } = useFadeInMounted()

  return (
    <Section
      className={clsx(animationClass, 'flex h-[88vh] min-h-[480px] flex-col justify-center')}
    >
      
      
        <div className='flex h-3/4 flex-col justify-center space-y-4 sm:space-y-6'>
            <h2 className={clsx('animate-fade-in', 'text-xl sm:text-2xl lg:text-3xl')}>
              I'm{' '}
              <SlidingInUnderline
                type='secondary'
                height='lg'
              >
                Brianna (Bri) Solorzano
              </SlidingInUnderline>
            </h2>
          <div className='flex flex-row'>
            <div>
              <h1
                className={clsx(
                  'animate-fade-in !delay-200',
                  'text-3xl sm:text-5xl lg:text-6xl',
                  'break-words font-extrabold tracking-tight'
                )}
              >
                I am a fullstack engineer with experience building user-friendly frontend apps and backend systems.
              </h1>
              <p
                className={clsx(
                  'animate-fade-in !delay-300',
                  'text-muted-dark dark:text-muted',
                  'sm:text-lg lg:text-xl',
                  'pb-0',
                  'mt-3'
                )}
              >
                6+ years of Software engineer experience
              </p>
              <SocialMediaLinks className={clsx('animate-fade-in !delay-500', 'mt-6')} />
              </div>
              <img src={`${Bri}`} alt="briicon" className='ml-3 w-[250px] h-[250px]'/>
          </div>
          
        </div>
    </Section>
  )
}