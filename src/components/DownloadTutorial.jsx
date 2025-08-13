import { useState, useEffect } from 'react'
import { downloadAPK, getDeviceInfo, getInstallInstructions } from '../services/downloadService'

const DownloadTutorial = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState(1)
  const [downloadProgress, setDownloadProgress] = useState(0)
  const [downloadMessage, setDownloadMessage] = useState('')
  const [isDownloading, setIsDownloading] = useState(false)
  const [deviceInfo, setDeviceInfo] = useState(null)
  const [installInstructions, setInstallInstructions] = useState(null)

  const steps = [
    {
      id: 1,
      title: "Download APK",
      description: "Click the download button below to get the CiusPro APK file",
      icon: "📱",
      action: "Download APK"
    },
    {
      id: 2,
      title: "Enable Unknown Sources",
      description: "Go to Settings > Security > Unknown Sources and enable it",
      icon: "⚙️",
      action: "Open Settings"
    },
    {
      id: 3,
      title: "Install APK",
      description: "Open the downloaded file and tap 'Install' to proceed",
      icon: "📦",
      action: "Install Now"
    },
    {
      id: 4,
      title: "Open & Play",
      description: "Launch CiusPro, complete KYC, and start winning!",
      icon: "🎮",
      action: "Get ₹10K Bonus"
    }
  ]

  useEffect(() => {
    if (isOpen) {
      const info = getDeviceInfo()
      setDeviceInfo(info)
      setInstallInstructions(getInstallInstructions(info))
    }
  }, [isOpen])

  const handleDownload = async () => {
    setIsDownloading(true)
    setDownloadProgress(0)
    setDownloadMessage('Starting download...')
    
    try {
      const result = await downloadAPK((progress, message) => {
        setDownloadProgress(progress)
        setDownloadMessage(message)
      })
      
      if (result.success) {
        setCurrentStep(2)
        alert('Download completed! Check your downloads folder.')
      } else {
        alert('Download failed: ' + result.message)
      }
    } catch (error) {
      alert('Download failed. Please try again.')
    } finally {
      setIsDownloading(false)
    }
  }

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleClose = () => {
    setCurrentStep(1)
    setDownloadProgress(0)
    setDownloadMessage('')
    setIsDownloading(false)
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={handleClose}
      />
      
      {/* Modal */}
      <div className="relative bg-surface border border-surface-2 rounded-2xl p-8 max-w-md w-full shadow-card">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-muted hover:text-text transition-colors"
          aria-label="Close tutorial"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-2">Download & Install Guide</h2>
          <p className="text-muted">Follow these steps to install CiusPro on your device</p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-muted mb-2">
            <span>Step {currentStep} of {steps.length}</span>
            <span>{Math.round((currentStep / steps.length) * 100)}%</span>
          </div>
          <div className="w-full bg-surface-2 rounded-full h-2">
            <div 
              className="bg-accent h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / steps.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Current Step */}
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">{steps[currentStep - 1].icon}</div>
          <h3 className="text-xl font-bold mb-3">{steps[currentStep - 1].title}</h3>
          <p className="text-muted mb-6">{steps[currentStep - 1].description}</p>
          
          {/* Step-specific content */}
          {currentStep === 1 && (
            <div className="space-y-4">
              <div className="bg-surface-2 rounded-lg p-4">
                <div className="text-sm text-muted mb-2">File Size: 45.2 MB</div>
                <div className="text-sm text-muted mb-2">Version: 2.1.0</div>
                <div className="text-sm text-muted mb-2">Compatible: Android 6.0+</div>
                {deviceInfo && (
                  <div className="text-sm text-accent mt-2">
                    📱 Detected: {deviceInfo.isAndroid ? 'Android Device' : deviceInfo.isIOS ? 'iOS Device' : 'Desktop'}
                  </div>
                )}
              </div>
              
              {isDownloading ? (
                <div className="space-y-4">
                  <div className="bg-surface-2 rounded-lg p-4">
                    <div className="text-sm text-muted mb-2">{downloadMessage}</div>
                    <div className="w-full bg-surface rounded-full h-2">
                      <div 
                        className="bg-accent h-2 rounded-full transition-all duration-300"
                        style={{ width: `${downloadProgress}%` }}
                      />
                    </div>
                    <div className="text-xs text-muted mt-1">{downloadProgress}%</div>
                  </div>
                </div>
              ) : (
                <button 
                  onClick={handleDownload}
                  className="cta w-full"
                  disabled={isDownloading}
                >
                  {isDownloading ? 'Downloading...' : steps[currentStep - 1].action}
                </button>
              )}
            </div>
          )}
          
          {currentStep === 2 && (
            <div className="space-y-4">
              {installInstructions && (
                <div className="bg-surface-2 rounded-lg p-4 text-left">
                  <div className="font-semibold text-accent mb-3">{installInstructions.title}</div>
                  {installInstructions.steps.map((step, index) => (
                    <div key={index} className="text-sm text-muted mb-2">{step}</div>
                  ))}
                </div>
              )}
              <button 
                onClick={handleNext}
                className="ghost-btn w-full"
              >
                I've Enabled Unknown Sources
              </button>
            </div>
          )}
          
          {currentStep === 3 && (
            <div className="space-y-4">
              <div className="bg-surface-2 rounded-lg p-4 text-left">
                <div className="text-sm text-muted mb-2">📁 Open Downloads folder</div>
                <div className="text-sm text-muted mb-2">📦 Tap CiusPro.apk</div>
                <div className="text-sm text-muted mb-2">✅ Tap Install</div>
                <div className="text-sm text-muted">⏳ Wait for installation to complete</div>
              </div>
              <button 
                onClick={handleNext}
                className="ghost-btn w-full"
              >
                Installation Complete
              </button>
            </div>
          )}
          
          {currentStep === 4 && (
            <div className="space-y-4">
              <div className="bg-success/20 border border-success/30 rounded-lg p-4">
                <div className="text-success font-bold mb-2">🎉 Installation Successful!</div>
                <div className="text-sm text-muted">
                  Open CiusPro and get your ₹10K joining bonus instantly!
                </div>
              </div>
              <button 
                onClick={handleClose}
                className="cta w-full"
              >
                Start Playing Now!
              </button>
            </div>
          )}
        </div>

        {/* Navigation */}
        {currentStep > 1 && currentStep < steps.length && (
          <div className="flex justify-between">
            <button 
              onClick={handlePrev}
              className="ghost-btn"
            >
              ← Previous
            </button>
            <button 
              onClick={handleNext}
              className="ghost-btn"
            >
              Next →
            </button>
          </div>
        )}

        {/* Tips */}
        <div className="mt-8 pt-6 border-t border-surface-2">
          <div className="text-sm text-muted">
            <div className="font-semibold mb-2">💡 Tips:</div>
            <ul className="space-y-1 text-xs">
              <li>• Ensure you have stable internet connection</li>
              <li>• Keep your device charged during download</li>
              <li>• Complete KYC verification for instant withdrawals</li>
              <li>• Contact support if you face any issues</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DownloadTutorial
