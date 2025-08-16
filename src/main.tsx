
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Profile from './pages/Profile/index.tsx'
import Blog from './pages/Blog/index.tsx'
import About from './pages/About us/index.tsx'


createRoot(document.getElementById('root')!).render(
  <BrowserRouter> 
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/blog' element={<Blog />} />
      <Route path='/about-us' element={<About />} />
    </Routes>
  </BrowserRouter>
)
