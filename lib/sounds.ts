// Client-only: guarded by typeof window check before any call.
// Lazy-loads Tone.js (heavy ~300KB) only on first hover.
// PolySynth with maxPolyphony:1 prevents retrigger clicks on rapid hover.

type ToneSynth = import('tone').PolySynth<import('tone').Synth>

let synthInstance: ToneSynth | null = null

export async function playButtonHover(): Promise<void> {
  if (typeof window === 'undefined') return
  try {
    const Tone = await import('tone')
    if (Tone.context.state !== 'running') await Tone.start()
    if (!synthInstance) {
      const poly = new Tone.PolySynth(Tone.Synth).toDestination()
      poly.maxPolyphony = 1
      poly.set({
        oscillator: { type: 'sine' as const },
        envelope: {
          attack:  0.01,  // 10ms
          decay:   0.11,  // 110ms
          sustain: 0,
          release: 0.01,
        },
      })
      poly.volume.value = -16  // ≈ 0.15 linear gain
      synthInstance = poly
    }
    synthInstance.triggerAttackRelease('A4', 0.12)
  } catch {
    // Audio is a progressive enhancement — silently ignore any errors
  }
}
