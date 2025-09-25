import { useCallback, useEffect, useRef, useState } from 'react'

export function useLaunchAnimation() {
  const [progress, setProgress] = useState(0)
  const rafRef = useRef<number | null>(null)
  const startTimeRef = useRef<number | null>(null)

  const tick = useCallback((t: number) => {
    if (startTimeRef.current == null) startTimeRef.current = t
    const elapsed = t - startTimeRef.current
    const ratio = Math.min(1, elapsed / 6000)
    setProgress(ratio)
    if (ratio < 1) rafRef.current = requestAnimationFrame(tick)
  }, [])

  useEffect(() => {
    rafRef.current = requestAnimationFrame(tick)
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [tick])

  return { progress }
}

export default useLaunchAnimation


