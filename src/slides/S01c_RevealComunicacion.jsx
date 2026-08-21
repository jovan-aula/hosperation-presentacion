import { motion } from 'framer-motion'

const fade = (d=0) => ({ initial:{opacity:0,x:-20}, animate:{opacity:1,x:0}, transition:{duration:0.6,delay:d} })

export default function S01c_RevealComunicacion() {
  return (
    <div style={{ width:'100vw', height:'100vh', display:'grid', gridTemplateColumns:'1fr 1fr', overflow:'hidden' }}>

      {/* Left — definición */}
      <div style={{ background:'#EEF2F7', display:'flex', flexDirection:'column', justifyContent:'center', padding:'60px 64px', gap:'1.4rem', position:'relative' }}>
        <div className="corner-accent" style={{ opacity:0.6 }} />

        <motion.div {...fade(0.1)} style={{
          display:'inline-flex', alignSelf:'flex-start',
          background:'rgba(69,197,190,0.12)',
          border:'1px solid rgba(69,197,190,0.3)',
          borderRadius:'100px', padding:'4px 14px',
          fontSize:'0.65rem', fontWeight:800,
          color:'#2BA8A2', letterSpacing:'0.12em', textTransform:'uppercase',
        }}>
          Definición
        </motion.div>

        <motion.h2 {...fade(0.2)} style={{
          fontFamily:'DM Serif Display,serif',
          fontSize:'clamp(2rem,3.5vw,2.8rem)',
          color:'#0C2D4E', lineHeight:1.15, margin:0,
        }}>
          Comunicación
        </motion.h2>

        <motion.p {...fade(0.35)} style={{ fontSize:'clamp(0.9rem,1.4vw,1.05rem)', color:'#4A5568', lineHeight:1.8 }}>
          Proceso mediante el cual dos o más personas intercambian información, ideas, sentimientos o significados a través de un sistema compartido de signos y normas.
        </motion.p>

        <motion.div {...fade(0.5)} style={{ display:'flex', gap:'1rem', flexWrap:'wrap' }}>
          {['Emisor','Mensaje','Canal','Receptor','Retroalimentación'].map(tag => (
            <span key={tag} style={{
              padding:'4px 12px', borderRadius:'100px',
              border:'1px solid rgba(12,45,78,0.15)',
              fontSize:'0.72rem', fontWeight:600,
              color:'rgba(12,45,78,0.55)', letterSpacing:'0.04em',
            }}>{tag}</span>
          ))}
        </motion.div>
      </div>

      {/* Right — visual */}
      <motion.div
        initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ duration:0.9, delay:0.1 }}
        style={{ position:'relative', overflow:'hidden', background:'#0C2D4E', display:'flex', alignItems:'center', justifyContent:'center' }}
      >
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&auto=format&fit=crop"
          alt="Comunicación"
          style={{ width:'100%', height:'100%', objectFit:'cover', opacity:0.35 }}
        />
        <div style={{ position:'absolute', inset:0, background:'linear-gradient(135deg,rgba(12,45,78,0.6) 0%,rgba(69,197,190,0.15) 100%)' }} />
        <motion.blockquote
          initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.7, delay:0.5 }}
          style={{
            position:'absolute', textAlign:'center', padding:'0 48px',
            fontFamily:'DM Serif Display,serif', fontSize:'clamp(1.1rem,2vw,1.5rem)',
            fontStyle:'italic', color:'white', lineHeight:1.55,
          }}
        >
          "El mayor problema de la comunicación es la ilusión de que ha tenido lugar."
          <div style={{ fontSize:'0.7rem', fontWeight:700, color:'#45C5BE', marginTop:'1rem', letterSpacing:'0.08em', textTransform:'uppercase', fontStyle:'normal' }}>
            George Bernard Shaw
          </div>
        </motion.blockquote>
      </motion.div>

    </div>
  )
}
