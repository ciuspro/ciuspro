import { Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Header from './components/Header'
import Footer from './components/Footer'
import StickyDownloadBar from './components/StickyDownloadBar'
import SEOHead from './components/SEOHead'
import Home from './routes/Home'
import About from './routes/About'
import Blog from './routes/Blog'
import Faqs from './routes/Faqs'
import Help from './routes/Help'

function App() {
  return (
    <HelmetProvider>
      <div className="min-h-screen bg-bg text-text font-montserrat">
        <SEOHead />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/faqs" element={<Faqs />} />
            <Route path="/help" element={<Help />} />
          </Routes>
        </main>
        <Footer />
        <StickyDownloadBar />
      </div>
    </HelmetProvider>
  )
}

export default App
