import { motion } from 'framer-motion'

export default function MoonlightEffect() {
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: 'easeOut' }}
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at 50% 40%, rgba(180,210,255,0.7) 0%, rgba(120,170,240,0.4) 25%, rgba(10,27,46,1) 70%)'
        }}
      />
      <div style={{ position: 'absolute', inset: 0 }}>
        {Array.from({ length: 40 }).map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: 2,
              height: 2,
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.6)'
            }}
          />
        ))}
      </div>
    </div>
  )
}


