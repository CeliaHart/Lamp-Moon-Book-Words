import { motion } from 'framer-motion'
import LampElement from './LampElement.tsx'
import MoonlightEffect from './MoonlightEffect.tsx'
import PoemText from './PoemText.tsx'

export default function LaunchAnimation() {
  return (
    <div style={{ 
      position: 'fixed',
      inset: 0,
      width: '100%',
      height: '100%',
      overflow: 'hidden',
      zIndex: 0
    }}>
      {/* 基础背景（兜底，防止白屏） */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(180deg, #0b0f1a 0%, #0a1b2e 100%)'
      }} />

      {/* 第一阶段：灯光场景 (0-3秒) */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 1, delay: 2.5 }}
        style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}
      >
        <div className="lmk-fade-out" style={{ position: 'absolute', inset: 0 }}>
          <LampElement />
          <PoemText phase="first" text="吹灭读书灯" />
        </div>
      </motion.div>

      {/* 第二阶段：月光场景 (3-6秒) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
        style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}
      >
        <div className="lmk-fade-in" style={{ position: 'absolute', inset: 0 }}>
          <MoonlightEffect />
          <PoemText phase="second" text="一身都是月" />
        </div>
      </motion.div>
    </div>
  )
}


