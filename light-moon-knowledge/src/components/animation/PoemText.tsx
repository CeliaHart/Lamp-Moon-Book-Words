import { motion } from 'framer-motion'

export default function PoemText({ phase, text }: { phase: 'first' | 'second'; text: string }) {
  return (
    <div style={{ position: 'absolute', inset: 0, display: 'grid', placeItems: 'center' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: phase === 'first' ? 0.8 : 0.5 }}
        style={{
          color: phase === 'first' ? '#ffd88a' : '#b4d4ff',
          fontSize: 'clamp(20px, 4vw, 36px)',
          letterSpacing: '0.15em',
          textAlign: 'center',
          fontWeight: 300,
          textShadow: phase === 'first' 
            ? '0 2px 8px rgba(255, 216, 138, 0.4)' 
            : '0 2px 12px rgba(180, 210, 255, 0.5)',
          marginTop: phase === 'first' ? '200px' : '180px'
        }}
      >
        {text}
      </motion.div>
    </div>
  )
}


