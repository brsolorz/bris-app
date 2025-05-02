
import { JSX, lazy, Suspense, useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import Preloader from '@/components/shared/Preloader'
import about from '@/data/docs/about.md'

const PageWrapper = lazy(() => import('@/components/layouts/PageWrapper'))
const Navbar = lazy(() => import('@/components/layouts/Navbar'))
const Home = lazy(() => import('@/components/layouts/Home'))
const FeaturedProjects = lazy(() => import('@/components/layouts/FeaturedProjects'))
const Skills = lazy(() => import('@/components/layouts/Skills'))
const About = lazy(() => import('@/components/layouts/About'))

export default function HomePage(): JSX.Element {
  const [content, setContent] = useState<string>('')

  useEffect((): void => {
    fetch(about as RequestInfo)
      .then((response: Response): Promise<string> => {
        console.log('response', response);
        return response.text();
        })
      .then((text: string): void => {
        setContent(text)
        localStorage.about = text
      })
      .catch((): void => setContent('Failed to load content. Please reload the page!'))
  }, [content])
  
  return (
    <>
      <Helmet>
        <title>Brianna Solorzano | Software Engineer</title>
        <meta
          name='description'
          content='Brianna Solorzano is a Software Engineer with experience in building frontend and backend systems using React, Ruby on Rails, Elixir, and more.'
        />
        <link
          rel='canonical'
          href='https://louisite.com'
        />
      </Helmet>
      <Suspense fallback={<Preloader />}>
        <PageWrapper>
          <Navbar />
          <Home/>
          <About children={content} />
          <FeaturedProjects />
          <Skills />
        </PageWrapper>
      </Suspense>
    </>
  )
}
