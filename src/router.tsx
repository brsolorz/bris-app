import { JSX } from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from '@/views/HomePage'
import AboutPage from '@/views/AboutPage'
import ProjectPage from '@/views/ProjectsPage'
//import NotFoundPage from '@/pages/NotFoundPage'

export default function Router(): JSX.Element {
  return (
    <Routes>
      <Route
        path='/'
        element={<HomePage />}
      />
      <Route
        path='/projects'
        element={<ProjectPage />}
      />
      <Route
        path='/about'
        element={<AboutPage />}
      />
      {/*<Route
        path='/*'
        element={<NotFoundPage />}
      />*/}
    </Routes>
  )
}
