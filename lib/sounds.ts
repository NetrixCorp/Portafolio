// Client-only: guarded by typeof window check before any call.
// Lazy-loads Tone.js (heavy ~300KB) only on first hover.

type ToneSynth = import('tone').Synth

let synthInstance: ToneSynth | null = null

export async function playButtonHover(): Promise<void> {
  if (typeof window === 'undefined') return
  try {
    const Tone = await import('tone')
    await Tone.start()
    if (!synthInstance) {
      synthInstance = new Tone.Synth({
        oscillator: { type: 'sine' },
        envelope: {
          attack:  0.01,  // 10ms
          decay:   0.11,  // 110ms
          sustain: 0,
          release: 0.01,
        },
        volume: -16,      // ≈ 0.15 linear gain
      }).toDestination()
    }
    synthInstance.triggerAttackRelease('A4', 0.12)
  } catch {
    // Audio is a progressive enhancement — silently ignore any errors
  }
}
