import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Create from './pages/Create';
import App from './App.jsx'
import About from '../components/About.jsx';
import ResumePreview from './pages/ResumePreview.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/create" element={<Create />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/preview" element={<ResumePreview />} />
    </Routes>
  </BrowserRouter>,
)
