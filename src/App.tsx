'use client'
import { lazy, useEffect, JSX } from 'react'
import Router from './router'
import checkDarkTheme from '@/utils/checkDarkTheme'

const ScrollToTop = lazy(() => import('@/components/shared/ScrollToTop'))
const ScrollToTopFAB = lazy(() => import('@/components/shared/ScrollToTopFAB'))

export default function App(): JSX.Element {
  useEffect((): void => {
    if (checkDarkTheme()) {
      document.documentElement.classList.add('dark')
      return
    }
    document.documentElement.classList.remove('dark')
  }, [])

  return (
    <>
      <Router />
      <ScrollToTop />
      <ScrollToTopFAB />
    </>
  )
}
