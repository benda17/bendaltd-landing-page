"use client"

import { useState } from "react"
import { Play } from "lucide-react"
import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"
import Image from "next/image"

interface VideoTestimonialProps {
  videoId: string
}

export default function VideoTestimonial({ videoId }: VideoTestimonialProps) {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <Card className="border-white/15 card-modern overflow-hidden cursor-pointer hover:border-[#0000ee]/30 transition-all duration-300 h-full group">
      <div 
        className="relative w-full aspect-video bg-[#1a1a1f] flex items-center justify-center overflow-hidden"
        onClick={() => setIsPlaying(true)}
      >
        {!isPlaying ? (
          <>
            <Image 
              src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
              alt="Video thumbnail"
              fill
              className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="absolute z-10 w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#0000ee] flex items-center justify-center shadow-lg shadow-[#0000ee]/20 transition-transform"
            >
              <Play className="h-8 w-8 md:h-10 md:w-10 text-white ml-1" fill="currentColor" />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 via-transparent to-transparent pointer-events-none"></div>
          </>
        ) : (
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          ></iframe>
        )}
      </div>
    </Card>
  )
}

