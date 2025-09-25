import { motion } from 'framer-motion'

export default function LampElement() {
  return (
    <div style={{ position: 'absolute', inset: 0, display: 'grid', placeItems: 'center' }}>
      <motion.div
        initial={{ scale: 1, opacity: 1, filter: 'drop-shadow(0 0 30px rgba(255,200,120,0.9))' }}
        animate={{ scale: 0.9, opacity: 0.1, filter: 'drop-shadow(0 0 5px rgba(255,200,120,0.3))' }}
        transition={{ duration: 2, ease: 'easeInOut', delay: 1.5 }}
        style={{
          width: 120,
          height: 120,
          borderRadius: '50%',
          background: 'radial-gradient(circle at 50% 40%, #ffd88a 0%, #ffb74d 50%, #ff8f00 80%, rgba(0,0,0,0) 100%)',
        }}
      />
    </div>
  )
}


