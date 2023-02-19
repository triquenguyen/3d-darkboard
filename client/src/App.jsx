import { BrowserRouter, Routes, Route } from 'react-router-dom'
import "./App.css"
import { Home, About, Darkboard, Demo } from './pages'
import { ScrollToTop, Navbar } from './components'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/darkboard" element={<Darkboard />} />
        <Route path="/demo" element={<Demo />} />
      </Routes>
    </BrowserRouter>
  )
}