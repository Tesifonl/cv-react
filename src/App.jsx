import { Routes, Route, Navigate } from 'react-router'
import Header from './components/Header'
import Navigation from './components/Nav'
import Footer from './components/Footer'
import LandingPage from './pages/LandingPage'
import PortfolioPage from './pages/PortfolioPage'
import ExperiencePage from './pages/ExperiencePage'

function App() {
  return (
    <>
      <Header />
      <Navigation />

      <main className="container mt-4">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
    </>
  )
}

export default App