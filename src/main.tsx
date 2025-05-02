import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from '@/App'
import './main.css'

createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <link rel="icon" href="/favicon.png" sizes="any" />
    <link rel="apple-touch-icon" href="/favicon.png" sizes="any" />
    <App />
  </BrowserRouter>
)