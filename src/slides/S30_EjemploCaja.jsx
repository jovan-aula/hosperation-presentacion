import { motion } from 'framer-motion'
const fade = (d=0) => ({ initial:{opacity:0,y:16}, animate:{opacity:1,y:0}, transition:{duration:0.6,delay:d} })

const cajaEjemplo = [
  { num:'1', title:'Lo que observo', text:'Un familiar llega a recepción exigiendo información sobre el estado de un paciente. Su tono es elevado y hay otras personas en espera.', color:'#0C2D4E', bg:'#f0f6fb', border:'rgba(12,45,78,0.2)' },
  { num:'2', title:'Lo que entiendo', text:'Está angustiado. No saber qué pasa con alguien que quiere genera miedo, y el miedo a veces sale como enojo.', color:'#2BA8A2', bg:'#f0fbfa', border:'rgba(43,168,162,0.3)' },
  { num:'3', title:'Lo que puedo hacer', text:'No puedo compartir información clínica directamente, pero sí puedo orientarle sobre el proceso y canalizarle con quien corresponde.', color:'#d97706', bg:'#fff8f0', border:'rgba(217,119,6,0.25)' },
  { num:'4', title:'Lo que comunico', text:'"Entiendo que la espera es difícil. Por privacidad, esa información la gestiona el médico tratante — déjeme orientarle para que llegue con él de inmediato."', color:'#7c3aed', bg:'#f5f0ff', border:'rgba(124,58,237,0.25)' },
]

export default function S30_EjemploCaja() {
  return (
    <div className="slide" style={{ padding:'44px 72px' }}>
      <div className="corner-accent" />
      <div style={{ width:'100%', maxWidth:'940px', display:'flex', flexDirection:'column', gap:'1.4rem' }}>

        <motion.div {...fade(0.05)} style={{ display:'flex', flexDirection:'column', gap:'0.3rem' }}>
          <div className="pill" style={{ alignSelf:'flex-start' }}>La Caja Asertiva · Ejemplo</div>
          <h2 className="slide-title">Así se aplica</h2>
          <div className="teal-bar" />
        </motion.div>

        {/* Situación */}
        <motion.div {...fade(0.15)} style={{
          background:'#0C2D4E', borderRadius:'14px', padding:'0.9rem 1.6rem',
          display:'flex', gap:'1.2rem', alignItems:'center',
        }}>
          <div style={{ flexShrink:0, width:'6px', height:'40px', borderRadius:'3px', background:'#45C5BE' }} />
          <p style={{ fontSize:'0.88rem', color:'rgba(255,255,255,0.85)', lineHeight:1.6, margin:0 }}>
            <strong style={{ color:'#45C5BE' }}>Situación:</strong> Un familiar exige información sobre el estado de un paciente — con el tono elevado, frente a otras personas.
          </p>
        </motion.div>

        {/* 2×2 grid */}
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'0.85rem' }}>
          {cajaEjemplo.map((c, i) => (
            <motion.div key={i} {...fade(0.3 + i * 0.1)} style={{
              background: c.bg,
              border: `1.5px solid ${c.border}`,
              borderRadius: '14px',
              padding: '0.9rem 1.2rem',
              display: 'flex', flexDirection: 'column', gap: '0.5rem',
            }}>
              <div style={{ display:'flex', alignItems:'center', gap:'0.6rem' }}>
                <div style={{
                  width:'24px', height:'24px', borderRadius:'50%',
                  background: c.color,
                  display:'flex', alignItems:'center', justifyContent:'center',
                  fontSize:'0.65rem', fontWeight:800, color:'white', flexShrink:0,
                }}>{c.num}</div>
                <span style={{ fontSize:'0.82rem', fontWeight:700, color: c.color }}>{c.title}</span>
              </div>
              <p style={{ fontSize:'0.78rem', color:'#4A5568', lineHeight:1.6, margin:0, paddingLeft:'1.8rem', fontStyle: i === 3 ? 'italic' : 'normal' }}>
                {c.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Timer */}
        <motion.div {...fade(0.7)} style={{ display:'flex', justifyContent:'flex-end' }}>
          <svg width="80" height="80" viewBox="0 0 140 140">
            <circle cx="70" cy="75" r="55" fill="none" stroke="#e2e8f0" strokeWidth="3" />
            <path d="M70,20 A55,55 0 0,1 125,75" fill="none" stroke="#93C5D9" strokeWidth="3" strokeLinecap="round" />
            {[0,30,60,90,120,150,180,210,240,270,300,330].map(a => {
              const r=(a*Math.PI)/180, x1=70+50*Math.sin(r), y1=75-50*Math.cos(r), x2=70+55*Math.sin(r), y2=75-55*Math.cos(r)
              return <line key={a} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#0C2D4E" strokeWidth="1.5" opacity="0.3" />
            })}
            <text x="70" y="82" textAnchor="middle" fill="#0C2D4E" fontSize="32" fontWeight="700" fontFamily="DM Sans">10</text>
            <text x="70" y="100" textAnchor="middle" fill="#718096" fontSize="14" fontFamily="DM Sans">min</text>
          </svg>
        </motion.div>
      </div>
    </div>
  )
}
