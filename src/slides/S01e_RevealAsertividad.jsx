import { motion } from 'framer-motion'

const fade = (d=0) => ({ initial:{opacity:0,x:-20}, animate:{opacity:1,x:0}, transition:{duration:0.6,delay:d} })

export default function S01e_RevealAsertividad() {
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
          Asertividad
        </motion.h2>

        <motion.p {...fade(0.35)} style={{ fontSize:'clamp(0.9rem,1.4vw,1.05rem)', color:'#4A5568', lineHeight:1.8 }}>
          Habilidad social que permite expresar pensamientos, sentimientos y necesidades de manera directa, honesta y respetuosa — sin agredir a los demás ni someterse a sus deseos.
        </motion.p>

        <motion.div {...fade(0.5)} style={{ display:'flex', flexDirection:'column', gap:'0.6rem' }}>
          {[
            { label:'Pasivo', desc:'Evita expresar lo que piensa o siente' },
            { label:'Asertivo', desc:'Expresa con claridad y respeto' },
            { label:'Agresivo', desc:'Impone su punto de vista sin considerar al otro' },
          ].map(({ label, desc }) => (
            <div key={label} style={{ display:'flex', gap:'0.8rem', alignItems:'center' }}>
              <span style={{
                minWidth:'70px', padding:'3px 10px', borderRadius:'100px',
                background: label==='Asertivo' ? '#45C5BE' : 'rgba(12,45,78,0.08)',
                color: label==='Asertivo' ? 'white' : 'rgba(12,45,78,0.5)',
                fontSize:'0.68rem', fontWeight:700, textAlign:'center',
              }}>{label}</span>
              <span style={{ fontSize:'0.8rem', color:'rgba(12,45,78,0.6)' }}>{desc}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Right — visual */}
      <motion.div
        initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ duration:0.9, delay:0.1 }}
        style={{ position:'relative', overflow:'hidden', background:'#0C2D4E', display:'flex', alignItems:'center', justifyContent:'center' }}
      >
        <img
          src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop"
          alt="Asertividad"
          style={{ width:'100%', height:'100%', objectFit:'cover', opacity:0.3 }}
        />
        <div style={{ position:'absolute', inset:0, background:'linear-gradient(135deg,rgba(12,45,78,0.65) 0%,rgba(69,197,190,0.12) 100%)' }} />
        <motion.blockquote
          initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.7, delay:0.5 }}
          style={{
            position:'absolute', textAlign:'center', padding:'0 48px',
            fontFamily:'DM Serif Display,serif', fontSize:'clamp(1.1rem,2vw,1.45rem)',
            fontStyle:'italic', color:'white', lineHeight:1.55,
          }}
        >
          "Ser asertivo significa tener la confianza de pedir lo que necesitas y decir lo que piensas."
          <div style={{ fontSize:'0.7rem', fontWeight:700, color:'#45C5BE', marginTop:'1rem', letterSpacing:'0.08em', textTransform:'uppercase', fontStyle:'normal' }}>
            Sharon Anthony Bower
          </div>
        </motion.blockquote>
      </motion.div>

    </div>
  )
}
