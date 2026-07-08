import { motion } from 'framer-motion'

export default function ProgressBar({ current, total }) {
  const progress = ((current + 1) / total) * 100

  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0,
      width: '100%',
      height: '3px',
      background: 'rgba(12, 45, 78, 0.15)',
      zIndex: 1000,
    }}>
      <motion.div
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
        style={{
          height: '100%',
          background: 'linear-gradient(90deg, #45C5BE, #2BA8A2)',
          borderRadius: '0 2px 2px 0',
          boxShadow: '0 0 8px rgba(69, 197, 190, 0.6)',
        }}
      />
    </div>
  )
}
