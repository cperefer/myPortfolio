import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { MyPortfolio } from './components/MyPortfolio'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MyPortfolio />
  </StrictMode>,
)
