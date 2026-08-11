const API_BASE = import.meta.env.VITE_API_URL ?? 'http://localhost:8000'

export interface ContactPayload {
  name: string
  email: string
  businessType: string
  language: string
}

export function trackContact(data: ContactPayload): void {
  const body = JSON.stringify({
    name: data.name,
    email: data.email,
    business_type: data.businessType,
    language: data.language,
    referrer: document.referrer || null,
    landing_path: window.location.pathname,
  })

  const url = `${API_BASE}/api/v1/contact`

  if (navigator.sendBeacon) {
    navigator.sendBeacon(url, new Blob([body], { type: 'application/json' }))
    return
  }

  fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body,
    keepalive: true,
  }).catch(() => {
    /* tracking must never break the UX */
  })
}
