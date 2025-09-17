// TV Channel Switcher with Fixed Rotations and Sound Effects

let currentChannel1 = 0 // GIF channel (channel1 knob)
let currentChannel2 = 0 // MP4 channel (channel2 knob)
let currentContrast = 1.0 // Default contrast level
let contrastLevels = [0.0, 0.5, 1.0, 1.5, 2.0] // Available contrast levels
let currentContrastIndex = 2 // Start at 1.0 (index 2)
let contrastRotation = 0 // Current rotation angle for contrast knob
let channel1Rotation = 0
let channel2Rotation = 0
let volumeRotation = 0
let currentVolume = 0.5 // Default volume level
let volumeLevels = [0.0, 0.25, 0.5, 0.75, 1.0] // Available volume levels
let currentVolumeIndex = 2 // Start at 0.5 (index 2)
let isTVOn = true // Track TV power state
let currentMediaType = 'gif' // Track which media type is currently active
let currentVideoElement = null // Track current video element

// Audio context and sounds
let audioContext = null
let audioBuffers = {}

// GIF files (channel1 knob controls these)
const channelGifs = [
  './assets/gifs/channel0.gif', // Default channel
  './assets/gifs/channel6.gif',
]

// MP4 files with audio (channel2 knob controls these) - ONLY MP4s
const channelVideos = [
  './assets/videos/channel0.mp4', // Start with actual video
]

// Sound file paths
const soundFiles = {
  knobClick: './assets/sounds/knob_click.mp3',
  tvOn: './assets/sounds/tv_on.mp3',
  tvOff: './assets/sounds/tv_off.mp3',
}

// Initialize audio context and load sounds
async function initAudio() {
  try {
    audioContext = new (window.AudioContext || window.webkitAudioContext)()

    // Try to load external sound files (optional)
    for (const [soundName, soundPath] of Object.entries(soundFiles)) {
      try {
        const response = await fetch(soundPath)
        const arrayBuffer = await response.arrayBuffer()
        const audioBuffer = await audioContext.decodeAudioData(arrayBuffer)
        audioBuffers[soundName] = audioBuffer
        console.log(`Loaded external sound: ${soundName}`)
      } catch (error) {
        // Silently fail - we'll use procedural sounds instead
      }
    }

    console.log(
      'Audio system initialized - using procedural sounds for missing files'
    )
  } catch (error) {
    console.warn('Audio initialization failed:', error)
  }
}

// Play sound function
function playSound(soundName, volume = 0.5) {
  if (!audioContext) {
    return
  }

  // Use external sound if available, otherwise use procedural sound
  if (audioBuffers[soundName]) {
    try {
      // Resume audio context if suspended (browser autoplay policy)
      if (audioContext.state === 'suspended') {
        audioContext.resume()
      }

      const source = audioContext.createBufferSource()
      const gainNode = audioContext.createGain()

      source.buffer = audioBuffers[soundName]
      gainNode.gain.value = volume

      source.connect(gainNode)
      gainNode.connect(audioContext.destination)

      source.start(0)
    } catch (error) {
      console.warn(`Failed to play sound: ${soundName}`, error)
    }
  }
}

// Helper function to clear media container
function clearMediaContainer() {
  // Stop and remove any existing video
  if (currentVideoElement) {
    currentVideoElement.pause()
    currentVideoElement.remove()
    currentVideoElement = null
  }

  // Don't remove the main container - just clear video elements we created
  return getMediaContainer()
}

// Helper function to get media container
function getMediaContainer() {
  return (
    document.querySelector('.profile-image') ||
    document.querySelector('.media-container') ||
    document.querySelector('[class*="media"]') ||
    document.querySelector('[class*="image"]')
  )
}

// Channel 1 switching function (GIFs)
function switchGifChannel() {
  currentChannel1 = (currentChannel1 + 1) % channelGifs.length
  currentMediaType = 'gif'

  // Play knob sound
  playSound('knobClick', 0.4)

  // Calculate rotation for channel 1 knob
  const rotationStep = 360 / channelGifs.length
  channel1Rotation = currentChannel1 * rotationStep

  const channel1Knob = document.querySelector('img[src*="channel1.png"]')
  if (channel1Knob) {
    updateKnobRotation(channel1Knob, channel1Rotation)
  }

  updateGifDisplay()
  console.log(`GIF Channel: ${currentChannel1 + 1}/${channelGifs.length}`)
}

// Channel 2 switching function (MP4s with audio)
function switchVideoChannel() {
  currentChannel2 = (currentChannel2 + 1) % channelVideos.length
  currentMediaType = 'video'

  // Play knob sound
  playSound('knobClick', 0.4)

  // Calculate rotation for channel 2 knob
  const rotationStep = 360 / channelVideos.length
  channel2Rotation = currentChannel2 * rotationStep

  const channel2Knob = document.querySelector('img[src*="channel2.png"]')
  if (channel2Knob) {
    updateKnobRotation(channel2Knob, channel2Rotation)
  }

  updateVideoDisplay()
  console.log(`Video Channel: ${currentChannel2 + 1}/${channelVideos.length}`)
}

// Volume control function
function adjustVolume() {
  currentVolumeIndex = (currentVolumeIndex + 1) % volumeLevels.length
  currentVolume = volumeLevels[currentVolumeIndex]

  // Play knob sound (quieter for volume knob)
  playSound('knobClick', 0.2)

  // Calculate rotation based on volume level (0-270 degrees for full range)
  const rotationStep = 270 / (volumeLevels.length - 1)
  volumeRotation = currentVolumeIndex * rotationStep

  const volumeKnob = document.querySelector('img[src*="volume.png"]')
  if (volumeKnob) {
    updateKnobRotation(volumeKnob, volumeRotation)
  }

  // Update video volume if currently playing video
  if (currentVideoElement && currentMediaType === 'video') {
    currentVideoElement.volume = Math.min(currentVolume, 1.0) // Clamp to 1.0 max
  }

  console.log(`Volume: ${Math.round(currentVolume * 100)}%`)
}

// Adjust contrast
function adjustContrast() {
  currentContrastIndex = (currentContrastIndex + 1) % contrastLevels.length
  currentContrast = contrastLevels[currentContrastIndex]

  // Play knob sound
  playSound('knobClick', 0.3)

  // Calculate rotation based on contrast level (0-300 degrees for full range)
  const rotationStep = 300 / (contrastLevels.length - 1)
  contrastRotation = currentContrastIndex * rotationStep

  const contrastKnob = document.querySelector('img[src*="contrast.png"]')

  // Check if contrast is 0 (TV should turn off)
  if (currentContrast === 0.0) {
    if (isTVOn) {
      isTVOn = false
      playSound('tvOff', 0.5)

      if (currentVideoElement) {
        currentVideoElement.pause()
      }

      const displayElement =
        currentVideoElement ||
        document.querySelector('.profile-image') ||
        document.querySelector('.media-container img')

      if (displayElement) {
        displayElement.classList.add('powering-off')
        setTimeout(() => {
          displayElement.style.display = 'none'
          displayElement.classList.remove('powering-off')
        }, 500)
      }
    } else {
      // TV is already off, turn it back on with next contrast level
      currentContrastIndex = 1 // Skip to 0.5 contrast
      currentContrast = contrastLevels[currentContrastIndex]
      contrastRotation = currentContrastIndex * rotationStep

      isTVOn = true
      playSound('tvOn', 0.5)

      const displayElement =
        currentVideoElement ||
        document.querySelector('.profile-image') ||
        document.querySelector('.media-container img')

      if (displayElement) {
        displayElement.style.display = 'block'
        displayElement.style.filter = `contrast(${currentContrast})`
        displayElement.classList.add('powering-on')

        if (currentVideoElement) {
          currentVideoElement.play()
        }

        setTimeout(() => {
          displayElement.classList.remove('powering-on')
        }, 800)
      }
    }
  } else {
    // Normal contrast adjustment
    const mediaElement =
      currentVideoElement ||
      document.querySelector('.profile-image') ||
      document.querySelector('.media-container img')

    if (mediaElement && isTVOn) {
      mediaElement.style.filter = `contrast(${currentContrast})`
    }
  }

  if (contrastKnob) {
    updateKnobRotation(contrastKnob, contrastRotation)
  }

  console.log(`Contrast: ${Math.round(currentContrast * 100)}%`)
}

// TV Power control
function toggleTVPower() {
  isTVOn = !isTVOn
  const displayElement =
    currentVideoElement ||
    document.querySelector('.profile-image') ||
    document.querySelector('.media-container img')

  if (isTVOn) {
    // Turn TV on
    playSound('tvOn', 0.5)

    if (displayElement) {
      displayElement.style.display = 'block'
      displayElement.style.filter = `contrast(${currentContrast})`
      displayElement.classList.add('powering-on')

      if (currentVideoElement && currentMediaType === 'video') {
        currentVideoElement.play()
      }

      setTimeout(() => {
        displayElement.classList.remove('powering-on')
      }, 800)
    }
  } else {
    // Turn TV off
    playSound('tvOff', 0.5)

    if (currentVideoElement) {
      currentVideoElement.pause()
    }

    if (displayElement) {
      displayElement.classList.add('powering-off')
      setTimeout(() => {
        displayElement.style.display = 'none'
        displayElement.classList.remove('powering-off')
      }, 500)
    }
  }
}

// Generic knob rotation update function
function updateKnobRotation(knobElement, rotation) {
  const originalTransform = knobElement.style.transform
  const baseTransform = originalTransform.replace(/rotate\([^)]*\)/g, '').trim()

  knobElement.style.transform = `${baseTransform} rotate(${rotation}deg)`

  // Add rotation animation class
  knobElement.classList.add('rotating')
  setTimeout(() => {
    knobElement.classList.remove('rotating')
  }, 300)
}

// Update GIF display - FIXED VERSION
function updateGifDisplay() {
  if (!isTVOn) return // Don't update if TV is off

  const mediaContainer = getMediaContainer()
  if (!mediaContainer || !channelGifs[currentChannel1]) return

  // Clear only video elements, not the main container
  clearMediaContainer()

  // Add static effect to container
  mediaContainer.style.filter = 'brightness(1.8) contrast(3) saturate(0)'
  mediaContainer.classList.add('switching')

  setTimeout(() => {
    // Handle different container types
    if (mediaContainer.tagName === 'IMG') {
      // If container is itself an img, just update its src and show it
      mediaContainer.src = channelGifs[currentChannel1]
      mediaContainer.style.width = '100%'
      mediaContainer.style.height = '100%'
      mediaContainer.style.objectFit = 'cover'
      mediaContainer.style.display = 'block'

      // Apply current contrast level
      if (isTVOn) {
        mediaContainer.style.filter = `contrast(${currentContrast})`
      }
    } else {
      // Look for existing img in container first
      let imgElement = mediaContainer.querySelector('img')

      if (!imgElement) {
        // Create new img element if none exists
        imgElement = document.createElement('img')
        imgElement.className = 'profile-image'
        mediaContainer.appendChild(imgElement)
      }

      // Show the img element (in case it was hidden for video)
      imgElement.style.display = 'block'

      // Set image properties
      imgElement.src = channelGifs[currentChannel1]
      imgElement.style.width = '100%'
      imgElement.style.height = '100%'
      imgElement.style.objectFit = 'cover'

      // Apply current contrast level
      if (isTVOn) {
        imgElement.style.filter = `contrast(${currentContrast})`
      }
    }

    // Remove switching effect
    mediaContainer.classList.remove('switching')

    // Reset container filter if it's not the display element
    if (mediaContainer.tagName !== 'IMG') {
      mediaContainer.style.filter = ''
    }
  }, 150)
}

// Update video display - DEBUGGED VERSION
function updateVideoDisplay() {
  if (!isTVOn) {
    console.log('TV is off, not updating video display')
    return
  }

  const mediaContainer = getMediaContainer()
  console.log('Media container found:', mediaContainer)

  if (!mediaContainer || !channelVideos[currentChannel2]) {
    console.log('No container or video file:', {
      container: !!mediaContainer,
      videoFile: channelVideos[currentChannel2],
    })
    return
  }

  console.log(
    'Switching to video channel:',
    currentChannel2,
    'File:',
    channelVideos[currentChannel2]
  )

  // Clear only video elements, keep container intact
  clearMediaContainer()

  // Add static effect
  mediaContainer.style.filter = 'brightness(1.8) contrast(3) saturate(0)'
  mediaContainer.classList.add('switching')

  setTimeout(() => {
    // Create new video element
    currentVideoElement = document.createElement('video')
    currentVideoElement.className = 'profile-video'
    currentVideoElement.src = channelVideos[currentChannel2]

    console.log('Created video element:', currentVideoElement)

    // Set video properties
    currentVideoElement.style.width = '63%'
    currentVideoElement.style.height = '63%'
    currentVideoElement.style.position = 'absolute'
    currentVideoElement.style.left = '22%'
    currentVideoElement.style.top = '8%'
    currentVideoElement.style.objectFit = 'cover'
    currentVideoElement.style.display = 'block'
    currentVideoElement.style.zIndex = '1'

    // Video settings
    currentVideoElement.autoplay = true
    currentVideoElement.loop = true
    currentVideoElement.muted = false
    currentVideoElement.volume = Math.min(currentVolume, 1.0)
    currentVideoElement.controls = false // Remove controls for cleaner look

    // Apply contrast filter
    if (isTVOn) {
      currentVideoElement.style.filter = `contrast(${currentContrast})`
    }

    console.log('Media container tag:', mediaContainer.tagName)

    // Add video to container
    if (mediaContainer.tagName === 'IMG') {
      // Hide the img element and add video to its parent
      mediaContainer.style.display = 'none'
      const parent = mediaContainer.parentNode
      if (parent) {
        parent.appendChild(currentVideoElement)
        console.log('Added video to parent of IMG container')
      }
    } else {
      // Hide any existing img in container
      const existingImg = mediaContainer.querySelector('img')
      if (existingImg) {
        existingImg.style.display = 'none'
        console.log('Hid existing image')
      }
      mediaContainer.appendChild(currentVideoElement)
      console.log('Added video to container')
    }

    // Remove switching effect
    mediaContainer.classList.remove('switching')
    mediaContainer.style.filter = ''

    console.log('Video element added to DOM, waiting for load...')

    // Handle video events with detailed logging
    currentVideoElement.addEventListener('loadstart', () => {
      console.log('Video loading started')
    })

    currentVideoElement.addEventListener('loadedmetadata', () => {
      console.log('Video metadata loaded')
    })

    currentVideoElement.addEventListener('loadeddata', () => {
      console.log('Video data loaded, attempting to play')
      if (isTVOn) {
        currentVideoElement
          .play()
          .then(() => console.log('Video playing successfully'))
          .catch((e) => console.warn('Video autoplay failed:', e))
      }
    })

    currentVideoElement.addEventListener('canplay', () => {
      console.log('Video can play')
    })

    currentVideoElement.addEventListener('playing', () => {
      console.log('Video is playing')
    })

    currentVideoElement.addEventListener('error', (e) => {
      console.error('Video loading error:', e)
      console.error('Error details:', {
        error: e.target.error,
        src: currentVideoElement.src,
        networkState: currentVideoElement.networkState,
        readyState: currentVideoElement.readyState,
      })

      // Try next video
      currentChannel2 = (currentChannel2 + 1) % channelVideos.length
      console.log('Trying next video channel:', currentChannel2)
      setTimeout(() => updateVideoDisplay(), 500)
    })

    // Force a load attempt
    currentVideoElement.load()
  }, 150)
}

// Setup individual channel knob interactions
function setupChannelKnobs() {
  // Find knob images by their src attributes
  const channel1Knob = document.querySelector('img[src*="channel1.png"]')
  const channel2Knob = document.querySelector('img[src*="channel2.png"]')
  const contrastKnob = document.querySelector('img[src*="contrast.png"]')
  const volumeKnob = document.querySelector('img[src*="volume.png"]')
  const powerButton =
    document.querySelector('img[src*="power.png"]') ||
    document.querySelector('.power-button')

  // Configure channel 1 knob (GIF channels)
  if (channel1Knob) {
    setupKnob(channel1Knob, 'GIF CHANNELS', switchGifChannel)
  }

  // Configure channel 2 knob (Video channels)
  if (channel2Knob) {
    setupKnob(channel2Knob, 'VIDEO CHANNELS', switchVideoChannel)
  }

  // Configure contrast knob
  if (contrastKnob) {
    setupKnob(contrastKnob, 'CONTRAST', adjustContrast)
  }

  // Configure volume knob
  if (volumeKnob) {
    setupKnob(volumeKnob, 'VOLUME', adjustVolume)
  }

  // Configure power button if it exists
  if (powerButton) {
    setupKnob(powerButton, 'POWER', toggleTVPower)
  }
}

// Generic knob setup function
function setupKnob(knobElement, knobName, clickAction) {
  // Make knob interactive
  knobElement.style.cursor = 'pointer'
  knobElement.style.userSelect = 'none'
  knobElement.style.transition = 'all 0.2s ease'

  // Identify knob type
  const isContrastKnob =
    knobElement.src && knobElement.src.includes('contrast.png')
  const isChannelKnob =
    knobElement.src &&
    (knobElement.src.includes('channel1.png') ||
      knobElement.src.includes('channel2.png'))
  const isVolumeKnob = knobElement.src && knobElement.src.includes('volume.png')
  const isPowerButton =
    (knobElement.src && knobElement.src.includes('power.png')) ||
    knobElement.classList.contains('power-button')

  // Click handler
  knobElement.addEventListener('click', function (event) {
    event.stopPropagation()

    // Initialize audio on first user interaction if needed
    if (!audioContext) {
      initAudio()
    }

    // Execute the action
    clickAction()

    // Visual feedback
    if (isPowerButton) {
      // Power button gets special feedback
      knobElement.style.filter = 'brightness(1.5) drop-shadow(0 0 10px #ff6600)'
      setTimeout(() => {
        knobElement.style.filter = 'none'
      }, 300)
    } else if (isVolumeKnob) {
      // Volume knob gets blue feedback
      knobElement.style.filter = 'brightness(1.3) drop-shadow(0 0 8px #0088ff)'
      setTimeout(() => {
        knobElement.style.filter = 'none'
      }, 300)
    } else if (isContrastKnob) {
      // Contrast knob gets rotation feedback only
      knobElement.style.filter = 'brightness(1.3) drop-shadow(0 0 8px #00ff00)'
      setTimeout(() => {
        knobElement.style.filter = 'none'
      }, 300)
    } else if (isChannelKnob) {
      // Channel knobs get both scale and rotation feedback
      const originalTransform = knobElement.style.transform
      const tempScale = originalTransform.replace('scale(0.1)', 'scale(0.09)')
      knobElement.style.transform = tempScale
      knobElement.style.filter = 'brightness(1.3) drop-shadow(0 0 8px #00ff00)'

      setTimeout(() => {
        // Restore scale but keep rotation
        const currentTransform = knobElement.style.transform
        const restoredScale = currentTransform.replace(
          'scale(0.09)',
          'scale(0.1)'
        )
        knobElement.style.transform = restoredScale
        knobElement.style.filter = 'none'
      }, 150)
    }
  })

  // Hover effects
  knobElement.addEventListener('mouseenter', function () {
    if (isPowerButton) {
      knobElement.style.filter =
        'brightness(1.2) drop-shadow(0 0 5px rgba(255, 102, 0, 0.7))'
    } else if (isVolumeKnob) {
      knobElement.style.filter =
        'brightness(1.2) drop-shadow(0 0 5px rgba(0, 136, 255, 0.7))'
    } else {
      knobElement.style.filter =
        'brightness(1.2) drop-shadow(0 0 5px rgba(0, 255, 0, 0.7))'
    }

    if (isChannelKnob) {
      const originalTransform = knobElement.style.transform
      knobElement.style.transform = originalTransform.replace(
        'scale(0.1)',
        'scale(0.11)'
      )
    }
  })

  knobElement.addEventListener('mouseleave', function () {
    knobElement.style.filter = 'none'

    if (isChannelKnob) {
      const originalTransform = knobElement.style.transform
      knobElement.style.transform = originalTransform.replace(
        'scale(0.11)',
        'scale(0.1)'
      )
    }
  })
}

// Add CSS animations
function addChannelStyles() {
  if (document.querySelector('#channel-styles')) return

  const style = document.createElement('style')
  style.id = 'channel-styles'
  style.textContent = `
    @keyframes channelFade {
      0% { opacity: 0; transform: translateX(100px) scale(0.8); }
      15% { opacity: 1; transform: translateX(0) scale(1); }
      85% { opacity: 1; transform: translateX(0) scale(1); }
      100% { opacity: 0; transform: translateX(-20px) scale(0.9); }
    }
    
    .profile-image.switching,
    .media-container.switching {
      animation: staticNoise 0.15s infinite;
    }
    
    .profile-image.powering-on,
    video.powering-on {
      animation: tvTurnOn 0.8s ease-out;
    }
    
    .profile-image.powering-off,
    video.powering-off {
      animation: tvTurnOff 0.5s ease-in;
    }
    
    @keyframes staticNoise {
      0% { filter: brightness(1.8) contrast(3) saturate(0) hue-rotate(0deg); }
      25% { filter: brightness(2.2) contrast(4) saturate(0) hue-rotate(90deg); }
      50% { filter: brightness(0.8) contrast(5) saturate(0) hue-rotate(180deg); }
      75% { filter: brightness(2.0) contrast(3.5) saturate(0) hue-rotate(270deg); }
      100% { filter: brightness(1.8) contrast(3) saturate(0) hue-rotate(360deg); }
    }
    
    @keyframes tvTurnOn {
      0% { 
        opacity: 0;
        transform: scaleY(0.1) scaleX(0.65);
        filter: brightness(3) contrast(0);
      }
      66% {
        opacity: 1;
        transform: scaleY(0.7) scaleX(0.65);
        filter: brightness(1.2) contrast(1.2);
      }
      100% { 
        opacity: 1;
        transform: scaleY(0.65) scaleX(0.65);
        filter: contrast(1);
      }
    }
    
    @keyframes tvTurnOff {
      0% { 
        opacity: 1;
        transform: scaleY(0.75) scaleX(0.65);
        filter: brightness(1) contrast(1);
      }
      66% {
        opacity: 0.3;
        transform: scaleY(0.1) scaleX(0.65);
        filter: brightness(3) contrast(0);
      }
      100% { 
        opacity: 0;
        transform: scaleY(0) scaleX(0.65);
        filter: brightness(0) contrast(0);
      }
    }
    
    /* All knob rotation animations */
    img[src*="contrast.png"],
    img[src*="channel1.png"], 
    img[src*="channel2.png"],
    img[src*="volume.png"] {
      transition: transform 0.3s ease-out !important;
    }
    
    .rotating {
      animation: knobTurn 0.3s ease-out;
    }
    
    @keyframes knobTurn {
      0% { 
        filter: brightness(1) drop-shadow(0 0 0px rgba(0, 255, 0, 0));
      }
      50% { 
        filter: brightness(1.4) drop-shadow(0 0 10px rgba(0, 255, 0, 0.8));
      }
      100% { 
        filter: brightness(1) drop-shadow(0 0 0px rgba(0, 255, 0, 0));
      }
    }
    
    /* Enhanced knob hover states */
    img[src*="contrast.png"]:hover,
    img[src*="channel1.png"]:hover, 
    img[src*="channel2.png"]:hover {
      filter: brightness(1.2) drop-shadow(0 0 6px rgba(0, 255, 0, 0.6)) !important;
    }
    
    img[src*="volume.png"]:hover {
      filter: brightness(1.2) drop-shadow(0 0 6px rgba(0, 136, 255, 0.6)) !important;
    }
    
    img[src*="power.png"]:hover,
    .power-button:hover {
      filter: brightness(1.2) drop-shadow(0 0 6px rgba(255, 102, 0, 0.6)) !important;
    }
    
    /* Position indicators for knobs */
    img[src*="contrast.png"]::before,
    img[src*="channel1.png"]::before,
    img[src*="channel2.png"]::before,
    img[src*="volume.png"]::before {
      content: '';
      position: absolute;
      width: 2px;
      height: 6px;
      background: #00ff00;
      top: 1px;
      left: 50%;
      transform: translateX(-50%);
      border-radius: 1px;
      opacity: 0.8;
      pointer-events: none;
    }
    
    img[src*="volume.png"]::before {
      background: #0088ff;
    }
  `
  document.head.appendChild(style)
}

// Initialize when DOM loads
document.addEventListener('DOMContentLoaded', function () {
  addChannelStyles()

  // Set up channel knob controls
  setupChannelKnobs()

  // Initialize all knob positions
  const channel1Knob = document.querySelector('img[src*="channel1.png"]')
  const channel2Knob = document.querySelector('img[src*="channel2.png"]')
  const contrastKnob = document.querySelector('img[src*="contrast.png"]')
  const volumeKnob = document.querySelector('img[src*="volume.png"]')

  if (channel1Knob) {
    updateKnobRotation(channel1Knob, channel1Rotation)
  }
  if (channel2Knob) {
    updateKnobRotation(channel2Knob, channel2Rotation)
  }
  if (contrastKnob) {
    updateKnobRotation(contrastKnob, contrastRotation)
  }
  if (volumeKnob) {
    updateKnobRotation(volumeKnob, volumeRotation)
  }

  // Initialize with GIF display
  updateGifDisplay()

  // Initialize audio on first user interaction
  document.addEventListener(
    'click',
    function initAudioOnFirstClick() {
      if (!audioContext) {
        initAudio()
      }
      document.removeEventListener('click', initAudioOnFirstClick)
    },
    { once: true }
  )
})

// Keyboard shortcuts for testing
document.addEventListener('keydown', function (event) {
  if (!audioContext) {
    initAudio()
  }

  switch (event.key.toLowerCase()) {
    case '1':
      event.preventDefault()
      switchGifChannel()
      break
    case '2':
      event.preventDefault()
      switchVideoChannel()
      break
    case 'arrowup':
      event.preventDefault()
      adjustVolume()
      break
    case 'arrowdown':
      event.preventDefault()
      adjustContrast()
      break
    case ' ':
    case 'enter':
      event.preventDefault()
      toggleTVPower()
      break
  }
})
