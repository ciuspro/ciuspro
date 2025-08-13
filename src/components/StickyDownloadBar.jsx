import { useState, useEffect } from 'react'
import DownloadTutorial from './DownloadTutorial'

const StickyDownloadBar = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [showTutorial, setShowTutorial] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsVisible(scrollPosition > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-surface border-t border-surface-2 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between space-y-3 sm:space-y-0">
          <div className="text-center sm:text-left">
            <div className="text-sm font-bold text-accent">
              JOINING BONUS GET ₹10 FREE!
            </div>
            <div className="text-xs text-muted">
              Limited time offer • No deposit required
            </div>
          </div>
          
          <button 
            className="cta text-sm w-full sm:w-auto"
            onClick={() => setShowTutorial(true)}
          >
            Download & Get ₹10K
          </button>
        </div>
      </div>
      
      {/* Download Tutorial Modal */}
      <DownloadTutorial 
        isOpen={showTutorial}
        onClose={() => setShowTutorial(false)}
      />
    </div>
  )
}

export default StickyDownloadBar
