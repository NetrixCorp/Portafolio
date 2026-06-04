'use client'

// Pre-warms the WebAudio AudioContext on the first user gesture.
// Must be synchronous within the gesture call stack to satisfy iOS Safari's
// requirement that AudioContext.resume() is initiated within a trusted event.
// Static import ensures Tone is loaded before the first interaction.

import { useEffect } from 'react'
import * as Tone from 'tone'

export function AudioInit() {
  useEffect(() => {
    const handler = () => { Tone.start() }
    document.addEventListener('touchstart', handler, { once: true, passive: true })
    document.addEventListener('click',      handler, { once: true })
    return () => {
      document.removeEventListener('touchstart', handler)
      document.removeEventListener('click',      handler)
    }
  }, [])
  return null
}
