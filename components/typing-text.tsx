"use client"

import { useState, useEffect } from "react"

interface TypingTextProps {
  text: string
  delay?: number
  className?: string
  onComplete?: () => void
}

export function TypingText({ text, delay = 50, className = "", onComplete }: TypingTextProps) {
  const [displayedText, setDisplayedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, delay)

      return () => clearTimeout(timeout)
    } else if (onComplete) {
      onComplete()
    }
  }, [currentIndex, text, delay, onComplete])

  return (
    <span className={className}>
      {displayedText}
      {currentIndex < text.length && (
        <span className="cursor-blink ml-0.5 inline-block w-2 h-5 bg-primary align-middle" />
      )}
    </span>
  )
}
