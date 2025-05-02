import { JSX, lazy, Suspense } from 'react'
import { Helmet } from 'react-helmet'
import Preloader from '@/components/shared/Preloader'

const PageWrapper = lazy(() => import('@/components/layouts/PageWrapper'))
const Navbar = lazy(() => import('@/components/layouts/Navbar'))
const Projects = lazy(() => import('@/components/layouts/Projects'))

export default function AboutPage(): JSX.Element {
  return (
    <>
      <Helmet>
        <title>Projects by Louis Gustavo | Full-stack Development</title>
        <meta
          name='description'
          content="Explore Louis Gustavo's full-stack software projects featuring Spring Boot, Vue.js, Next.js, React, Laravel, and more!"
        />
        <link
          rel='canonical'
          href='https://louisite.com/projects'
        />
      </Helmet>
      <Suspense fallback={<Preloader />}>
        <PageWrapper>
          <Navbar />
          <Projects />
        </PageWrapper>
      </Suspense>
    </>
  )
}