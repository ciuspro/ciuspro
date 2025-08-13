import { useState } from 'react'
import DownloadTutorial from './DownloadTutorial'

const Hero = () => {
  const [showTutorial, setShowTutorial] = useState(false)

  return (
    <section className="pt-24 pb-16 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              <span className="text-text">PLAY GAMES</span>
              <br />
              <span className="text-accent">WIN REAL CASH</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted mb-8 max-w-lg mx-auto lg:mx-0">
              Instant withdrawal • 24×7 support • Fair gameplay
            </p>
            
            <div className="space-y-4">
              <button 
                className="cta text-lg px-8 py-4"
                onClick={() => setShowTutorial(true)}
              >
                Download & Get ₹10K
              </button>
              
              <div className="text-sm text-muted">
                APK • Safe & Secure
              </div>
            </div>
          </div>

          {/* Right - Hero Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Hero Image Placeholder */}
              <div className="w-80 h-80 md:w-96 md:h-96 bg-gradient-to-br from-surface to-surface-2 rounded-2xl flex items-center justify-center shadow-card">
                <div className="text-center">
                  <div className="text-8xl mb-4">🎮</div>
                  <div className="text-accent font-bold text-xl">Hero Image</div>
                  <div className="text-muted text-sm">1400×1000 PNG</div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent rounded-full flex items-center justify-center text-2xl animate-bounce">
                💰
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-success rounded-full flex items-center justify-center text-xl animate-pulse">
                ⭐
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Download Tutorial Modal */}
      <DownloadTutorial 
        isOpen={showTutorial}
        onClose={() => setShowTutorial(false)}
      />
    </section>
  )
}

export default Hero
