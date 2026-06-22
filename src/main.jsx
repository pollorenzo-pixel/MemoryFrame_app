import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import AppErrorBoundary from './components/AppErrorBoundary.jsx'
import './styles/global.css'

const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error('MemoryFrame root element was not found')
}

createRoot(rootElement).render(
  <StrictMode>
    <AppErrorBoundary>
      <App />
    </AppErrorBoundary>
  </StrictMode>,
)
