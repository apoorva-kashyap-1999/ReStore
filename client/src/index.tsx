import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../../client/src/app/layout/style.css'
import App from '../../client/src/app/layout/App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
