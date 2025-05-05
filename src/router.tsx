import { JSX } from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from '@/views/HomePage'
//import NotFoundPage from '@/pages/NotFoundPage'

export default function Router(): JSX.Element {
  return (
    <Routes>
      <Route
        path='/'
        element={<HomePage />}
      />
      {/*<Route
        path='/*'
        element={<NotFoundPage />}
      />*/}
    </Routes>
  )
}
