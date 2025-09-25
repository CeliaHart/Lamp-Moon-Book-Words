import { useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import LaunchAnimation from '../components/animation/LaunchAnimation.tsx'

export default function LaunchPage() {
  const navigate = useNavigate()

  useEffect(() => {
    // 6秒后自动跳转到主页
    const timer = setTimeout(() => {
      navigate('/home', { replace: true })
    }, 6000)
    return () => clearTimeout(timer)
  }, [navigate])

  const handleSkip = useCallback(() => {
    navigate('/home', { replace: true })
  }, [navigate])

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <LaunchAnimation />
      <button
        onClick={handleSkip}
        style={{
          position: 'fixed',
          right: 20,
          bottom: 20,
          padding: '10px 16px',
          borderRadius: 20,
          border: '1px solid rgba(255,255,255,0.4)',
          background: 'rgba(0,0,0,0.3)',
          backdropFilter: 'blur(10px)',
          color: '#fff',
          cursor: 'pointer',
          fontSize: 14,
          fontWeight: 500,
          transition: 'all 0.2s ease',
          zIndex: 10
        }}
      >
        跳过
      </button>
    </div>
  )
}


