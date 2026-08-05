import { motion } from 'framer-motion'

const fade = (d=0) => ({ initial:{opacity:0,y:20}, animate:{opacity:1,y:0}, transition:{duration:0.7,delay:d,ease:[0.25,0.46,0.45,0.94]} })

export default function S31_PortadaCierre() {
  return (
    <div style={{ width:'100vw', height:'100vh', display:'flex', overflow:'hidden' }}>

      {/* Left panel — dark */}
      <div style={{
        width:'52%', height:'100%',
        background:'linear-gradient(160deg,#081e35 0%,#0C2D4E 100%)',
        display:'flex', flexDirection:'column',
        justifyContent:'center', padding:'64px 56px',
        position:'relative',
      }}>
        <div style={{ position:'absolute', inset:0, backgroundImage:'radial-gradient(circle, rgba(69,197,190,0.05) 1px, transparent 1px)', backgroundSize:'28px 28px', pointerEvents:'none' }} />

        <motion.img
          {...fade(0.1)}
          src="/logo-sin-fondo.png"
          alt="Hosperation"
          style={{ height:'36px', objectFit:'contain', objectPosition:'left', marginBottom:'2.5rem', filter:'brightness(0) invert(1)' }}
        />

        <motion.div {...fade(0.2)} style={{
          display:'inline-flex', alignSelf:'flex-start',
          background:'rgba(69,197,190,0.15)',
          border:'1px solid rgba(69,197,190,0.35)',
          borderRadius:'100px',
          padding:'0.3rem 1rem',
          fontSize:'0.65rem', fontWeight:800,
          color:'#45C5BE', letterSpacing:'0.1em', textTransform:'uppercase',
          marginBottom:'1.4rem',
        }}>
          Módulo 2 · Comunicación Asertiva
        </motion.div>

        <motion.h1 {...fade(0.3)} style={{
          fontFamily:'DM Serif Display, serif',
          fontSize:'clamp(2.4rem,4vw,3.2rem)',
          fontWeight:400, color:'white',
          lineHeight:1.2, letterSpacing:'-0.02em',
          marginBottom:'1rem',
        }}>
          Gracias por<br/>su participación.
        </motion.h1>

        <motion.div {...fade(0.4)} style={{ width:'48px', height:'3px', background:'#45C5BE', borderRadius:'2px', marginBottom:'1.4rem' }} />

        <motion.p {...fade(0.5)} style={{ fontSize:'0.9rem', color:'rgba(255,255,255,0.6)', lineHeight:1.7, marginBottom:'2.5rem' }}>
          La comunicación asertiva no es una habilidad que se enseña una vez.<br/>Es una práctica que se elige cada día.
        </motion.p>

        {/* Facilitator */}
        <motion.div {...fade(0.65)} style={{ display:'flex', alignItems:'center', gap:'0.9rem' }}>
          <div style={{
            width:'42px', height:'42px', borderRadius:'50%',
            background:'rgba(69,197,190,0.15)',
            border:'1.5px solid rgba(69,197,190,0.4)',
            display:'flex', alignItems:'center', justifyContent:'center',
            fontFamily:'DM Serif Display, serif',
            fontSize:'1rem', color:'#45C5BE', fontWeight:400,
          }}>JN</div>
          <div>
            <div style={{ fontSize:'0.82rem', fontWeight:700, color:'white' }}>Mtro. Jován Naranjo</div>
            <div style={{ fontSize:'0.7rem', color:'rgba(255,255,255,0.45)' }}>Aula Consultoría · Hosperation</div>
          </div>
        </motion.div>
      </div>

      {/* Right panel — teal gradient */}
      <div style={{
        width:'48%', height:'100%',
        background:'linear-gradient(160deg,#2BA8A2 0%,#1a7a75 100%)',
        display:'flex', flexDirection:'column',
        justifyContent:'center', alignItems:'center',
        padding:'64px 48px',
        position:'relative', gap:'2rem',
      }}>
        <div style={{ position:'absolute', inset:0, backgroundImage:'radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)', backgroundSize:'24px 24px', pointerEvents:'none' }} />

        {/* Large closing quote */}
        <motion.div
          initial={{ opacity:0, scale:0.92 }}
          animate={{ opacity:1, scale:1 }}
          transition={{ duration:0.8, delay:0.4 }}
          style={{
            background:'rgba(255,255,255,0.12)',
            border:'1px solid rgba(255,255,255,0.2)',
            borderRadius:'20px',
            padding:'2rem 2.2rem',
            maxWidth:'380px',
            textAlign:'center',
          }}
        >
          <p style={{
            fontFamily:'DM Serif Display, serif',
            fontSize:'clamp(1.1rem,1.8vw,1.4rem)',
            fontStyle:'italic',
            color:'white',
            lineHeight:1.65,
            margin:'0 0 1rem',
          }}>
            "La gente olvidará lo que dijiste, olvidará lo que hiciste, pero nunca olvidará cómo la hiciste sentir."
          </p>
          <div style={{ fontSize:'0.72rem', fontWeight:700, color:'rgba(255,255,255,0.75)', letterSpacing:'0.08em', textTransform:'uppercase' }}>
            Maya Angelou
          </div>
        </motion.div>

        {/* 3 takeaways */}
        <motion.div {...fade(0.7)} style={{ display:'flex', flexDirection:'column', gap:'0.7rem', maxWidth:'360px', width:'100%' }}>
          {[
            'Comunicar bien también es cuidar.',
            'Ser directo y ser respetuoso no se contradicen.',
            'La asertividad se practica — empieza hoy.',
          ].map((t,i) => (
            <div key={i} style={{ display:'flex', gap:'0.8rem', alignItems:'flex-start' }}>
              <div style={{ width:'6px', height:'6px', borderRadius:'50%', background:'rgba(255,255,255,0.6)', flexShrink:0, marginTop:'7px' }} />
              <p style={{ fontSize:'0.85rem', color:'rgba(255,255,255,0.85)', lineHeight:1.6, margin:0 }}>{t}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
