"use client"

import { useEffect } from "react"

declare global {
  interface Window {
    fbq: {
      (
        action: string,
        event: string,
        options?: Record<string, unknown>
      ): void;
      callMethod?: (...args: any[]) => void;
      push?: (...args: any[]) => void;
      loaded?: boolean;
      version?: string;
      queue?: any[];
      q?: any[];
      l?: number;
    }
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
      const fbq = function () {
        if (fbq.callMethod) {
          // eslint-disable-next-line prefer-rest-params
          fbq.callMethod.apply(fbq, arguments as any)
        } else {
          // eslint-disable-next-line prefer-rest-params
          fbq.queue.push(arguments)
        }
      } as any;

      fbq.push = fbq;
      fbq.loaded = true;
      fbq.version = '2.0';
      fbq.queue = [];
      
      // Use 'q' as well to match the original error context, though usually 'queue' is the standard for FB pixel
      fbq.q = fbq.queue; 

      window.fbq = fbq;
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
