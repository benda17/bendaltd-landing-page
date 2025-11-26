"use client"

import { useEffect } from "react"

declare global {
  interface Window {
    fbq: (
      action: string,
      event: string,
      options?: Record<string, unknown>
    ) => void
  }
}

export default function FacebookPixel() {
  useEffect(() => {
    const pixelId = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID

    if (!pixelId) {
      return
    }

    // Initialize fbq function if it doesn't exist
    if (typeof window !== "undefined" && !window.fbq) {
      window.fbq = function () {
        // eslint-disable-next-line prefer-rest-params
        ;(window.fbq.q = window.fbq.q || []).push(arguments)
      }
      window.fbq.l = +new Date()
      window.fbq.q = []
    }

    // Load the Facebook Pixel script
    const script = document.createElement("script")
    script.id = "facebook-pixel"
    script.src = `https://connect.facebook.net/en_US/fbevents.js`
    script.async = true
    document.head.appendChild(script)

    // Initialize pixel
    window.fbq("init", pixelId)
    window.fbq("track", "PageView")

    // Cleanup function
    return () => {
      const existingScript = document.getElementById("facebook-pixel")
      if (existingScript) {
        existingScript.remove()
      }
    }
  }, [])

  return null
}

