import { motion } from 'framer-motion'

const fade = (d = 0) => ({ initial: { opacity: 0, y: 16 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: d } })

export default function S10_ActividadFraseologia() {
  var url = 'https://hosperation-presentacion.vercel.app/fraseologia-input.html'
  var qr = 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&color=45C5BE&bgcolor=081e35&data=' + encodeURIComponent(url)

  return (
    <div style={{
      width: '100vw', height: '100vh',
      background: 'linear-gradient(160deg, #081e35 0%, #0C2D4E 100%)',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      padding: '60px 80px',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(69,197,190,0.05) 1px, transparent 1px)', backgroundSize: '32px 32px', pointerEvents: 'none' }} />

      <div style={{ position: 'relative', maxWidth: '900px', width: '100%', display: 'flex', alignItems: 'center', gap: '72px' }}>

        {/* Izquierda */}
        <motion.div {...fade(0.1)} style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div style={{ background: 'rgba(69,197,190,0.12)', border: '1px solid rgba(69,197,190,0.3)', borderRadius: '100px', padding: '0.3rem 1.2rem', fontSize: '0.72rem', fontWeight: 700, color: '#45C5BE', letterSpacing: '0.12em', textTransform: 'uppercase', width: 'fit-content' }}>
            Actividad en equipos — 10 min
          </div>

          <h2 style={{ fontFamily: 'DM Serif Display, serif', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 400, color: 'white', lineHeight: 1.2, margin: 0 }}>
            Construyan la fraseologia de su area
          </h2>

          <div style={{ width: '48px', height: '3px', background: '#45C5BE', borderRadius: '2px' }} />

          <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, margin: 0 }}>
            En equipos, creen frases estandarizadas de <strong style={{ color: 'white' }}>bienvenida, despedida y como contestar el telefono</strong> para su area.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            {['Un representante escanea el QR', 'Escriben sus 3 frases juntos', 'Aparecen en pantalla al enviar'].map((paso, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '26px', height: '26px', borderRadius: '50%', background: 'rgba(69,197,190,0.15)', border: '1.5px solid rgba(69,197,190,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#45C5BE' }}>{i + 1}</span>
                </div>
                <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.65)', margin: 0 }}>{paso}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Derecha — QR */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.3 }}
          style={{ flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}
        >
          <div style={{ background: 'rgba(255,255,255,0.04)', border: '1.5px solid rgba(69,197,190,0.25)', borderRadius: '20px', padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '14px' }}>
            <img src={qr} alt="QR Fraseologia" width={200} height={200} style={{ borderRadius: '8px', display: 'block' }} />
            <p style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.06em', textTransform: 'uppercase', margin: 0, textAlign: 'center' }}>
              hosperation-presentacion.vercel.app
            </p>
          </div>
        </motion.div>

      </div>
    </div>
  )
}
