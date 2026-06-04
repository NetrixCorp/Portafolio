'use client'

// Pre-warms the WebAudio AudioContext on the first user gesture.
//
// Dynamic import keeps Tone.js (~335 KB) out of the initial bundle.
// import('tone') is fired eagerly on mount so the module is cached
// before the user interacts — the .then() in the handler resolves as
// a microtask within the gesture's task, satisfying iOS Safari's
// requirement that AudioContext.resume() is initiated during a trusted event.

import { useEffect } from 'react'

export function AudioInit() {
  useEffect(() => {
    // Pre-load into module cache (lazy — does NOT add to initial bundle)
    import('tone')

    let started = false

    const handler = () => {
      if (started) return   // prevents double-fire: touchstart + synthetic click on mobile
      started = true
      import('tone').then(T => { void T.start() })
    }

    document.addEventListener('touchstart', handler, { once: true, passive: true })
    document.addEventListener('click',      handler, { once: true })

    return () => {
      document.removeEventListener('touchstart', handler)
      document.removeEventListener('click',      handler)
    }
  }, [])

  return null
}
