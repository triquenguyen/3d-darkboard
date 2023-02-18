import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home, About, Darkboard } from './pages'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/darkboard" element={<Darkboard />} />
      </Routes>
    </BrowserRouter>
  )
}