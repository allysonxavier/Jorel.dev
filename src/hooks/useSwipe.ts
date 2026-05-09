import { useRef } from 'react'

type SwipeHandlers = {
  onTouchStart: (e: React.TouchEvent) => void
  onTouchEnd: (e: React.TouchEvent) => void
}

const useSwipe = (onPrev: () => void, onNext: () => void): SwipeHandlers => {
  const startX = useRef<number | null>(null)

  const onTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX
  }

  const onTouchEnd = (e: React.TouchEvent) => {
    if (startX.current === null) return
    const diff = startX.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 50) {
      diff > 0 ? onNext() : onPrev()
    }
    startX.current = null
  }

  return { onTouchStart, onTouchEnd }
}

export default useSwipe
