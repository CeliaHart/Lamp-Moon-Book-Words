import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home.tsx'
import LaunchPage from './pages/LaunchPage.tsx'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LaunchPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/animation" element={<LaunchPage />} />
      </Routes>
    </BrowserRouter>
  )
}
