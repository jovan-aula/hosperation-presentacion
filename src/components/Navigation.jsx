import { motion } from 'framer-motion'

export default function Navigation({ current, total, onPrev, onNext }) {
  return (
    <>
      {/* Prev arrow — subtle, appears on hover near left edge */}
      <motion.button
        onClick={onPrev}
        disabled={current === 0}
        whileHover={{ scale: 1.08, x: -2, opacity: 1 }}
        whileTap={{ scale: 0.96 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: current === 0 ? 0 : 0.35 }}
        style={{
          position: 'fixed',
          left: '20px',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 999,
          background: 'rgba(255,255,255,0.85)',
          border: '1px solid rgba(12,45,78,0.12)',
          borderRadius: '50%',
          width: '44px',
          height: '44px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: current === 0 ? 'not-allowed' : 'pointer',
          boxShadow: '0 2px 12px rgba(12,45,78,0.1)',
          backdropFilter: 'blur(8px)',
          transition: 'opacity 0.2s',
        }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M15 18l-6-6 6-6" stroke="#0C2D4E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </motion.button>

      {/* Next arrow */}
      <motion.button
        onClick={onNext}
        disabled={current === total - 1}
        whileHover={{ scale: 1.08, x: 2, opacity: 1 }}
        whileTap={{ scale: 0.96 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: current === total - 1 ? 0 : 0.35 }}
        style={{
          position: 'fixed',
          right: '20px',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 999,
          background: 'rgba(255,255,255,0.85)',
          border: '1px solid rgba(12,45,78,0.12)',
          borderRadius: '50%',
          width: '44px',
          height: '44px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: current === total - 1 ? 'not-allowed' : 'pointer',
          boxShadow: '0 2px 12px rgba(12,45,78,0.1)',
          backdropFilter: 'blur(8px)',
          transition: 'opacity 0.2s',
        }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M9 18l6-6-6-6" stroke="#0C2D4E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </motion.button>
    </>
  )
}
