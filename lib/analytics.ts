export function trackEvent(eventName: string, eventParams?: Record<string, unknown>) {
  if (typeof window !== 'undefined') {
    const gtag = (window as any).gtag
    if (typeof gtag === 'function') {
      try {
        gtag('event', eventName, eventParams)
      } catch (error) {
        console.error('trackEvent error:', error)
      }
    }
  }
}
