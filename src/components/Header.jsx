import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import DownloadTutorial from './DownloadTutorial'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showTutorial, setShowTutorial] = useState(false)
  const location = useLocation()

  const navLinks = [
    { name: 'Games', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'FAQs', path: '/faqs' },
    { name: 'Help', path: '/help' }
  ]

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true
    if (path !== '/' && location.pathname === path) return true
    return false
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-bg/95 backdrop-blur-sm border-b border-surface">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-accent">
            CiusPro
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-medium transition-colors ${
                  isActive(link.path)
                    ? 'text-accent'
                    : 'text-muted hover:text-text'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Download Button */}
          <button 
            className="hidden md:block cta text-sm"
            onClick={() => setShowTutorial(true)}
          >
            Download APK
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-muted hover:text-text"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-surface">
            <nav className="flex flex-col space-y-4 pt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`font-medium transition-colors ${
                    isActive(link.path)
                      ? 'text-accent'
                      : 'text-muted hover:text-text'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <button 
                className="cta text-sm w-full mt-4"
                onClick={() => {
                  setShowTutorial(true)
                  setIsMenuOpen(false)
                }}
              >
                Download APK
              </button>
            </nav>
          </div>
        )}
      </div>
      
      {/* Download Tutorial Modal */}
      <DownloadTutorial 
        isOpen={showTutorial}
        onClose={() => setShowTutorial(false)}
      />
    </header>
  )
}

export default Header
