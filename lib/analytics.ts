export function trackEvent(eventName: string, eventParams?: Record<string, unknown>) {
  if (typeof window !== 'undefined') {
    const gtag = (window as any).gtag
    if (gtag) {
      gtag('event', eventName, eventParams)
    }
  }
}
