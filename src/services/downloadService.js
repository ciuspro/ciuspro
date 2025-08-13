// Download service for handling APK downloads
export const downloadAPK = async (onProgress) => {
  try {
    // Simulate download progress
    const steps = [
      { progress: 10, message: 'Preparing download...' },
      { progress: 30, message: 'Connecting to server...' },
      { progress: 50, message: 'Downloading APK file...' },
      { progress: 80, message: 'Verifying file integrity...' },
      { progress: 100, message: 'Download complete!' }
    ]

    for (let i = 0; i < steps.length; i++) {
      const step = steps[i]
      onProgress(step.progress, step.message)
      
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 800))
    }

    // Real APK file download
    const apkUrl = '/apk/CiusPro-v2.1.0.apk'
    const link = document.createElement('a')
    link.href = apkUrl
    link.download = 'CiusPro-v2.1.0.apk'
    
    // Trigger download
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    
    return { success: true, message: 'Download completed successfully!' }
    
  } catch (error) {
    console.error('Download failed:', error)
    return { success: false, message: 'Download failed. Please try again.' }
  }
}

// Check if device is Android
export const isAndroidDevice = () => {
  return /Android/i.test(navigator.userAgent)
}

// Check if device supports APK installation
export const canInstallAPK = () => {
  return isAndroidDevice() || navigator.userAgent.includes('Mobile')
}

// Get device info for better user experience
export const getDeviceInfo = () => {
  const userAgent = navigator.userAgent
  const isAndroid = /Android/i.test(userAgent)
  const isIOS = /iPhone|iPad|iPod/i.test(userAgent)
  const isMobile = /Mobile/i.test(userAgent)
  
  return {
    isAndroid,
    isIOS,
    isMobile,
    userAgent
  }
}

// Show installation instructions based on device
export const getInstallInstructions = (deviceInfo) => {
  if (deviceInfo.isAndroid) {
    return {
      title: 'Android Installation Guide',
      steps: [
        '1. Download the APK file',
        '2. Go to Settings > Security',
        '3. Enable "Unknown Sources"',
        '4. Open Downloads folder',
        '5. Tap CiusPro.apk to install',
        '6. Follow on-screen instructions'
      ]
    }
  } else if (deviceInfo.isIOS) {
    return {
      title: 'iOS Installation Guide',
      steps: [
        '1. CiusPro is not available on iOS',
        '2. Please use an Android device',
        '3. Or visit our mobile website',
        '4. Contact support for alternatives'
      ]
    }
  } else {
    return {
      title: 'Desktop Installation Guide',
      steps: [
        '1. Download the APK file',
        '2. Transfer to your Android device',
        '3. Enable Unknown Sources on device',
        '4. Install APK on your device',
        '5. Open CiusPro and start playing'
      ]
    }
  }
}
