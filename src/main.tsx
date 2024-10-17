import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import GlobalsStyles from './globalStyles';
import Menu from './components/menu/Navbar';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalsStyles />
    <Menu />
  </StrictMode>,
)
