import { useState, useEffect, useCallback } from 'react'
import { AnimatePresence } from 'framer-motion'
import SlideWrapper from './components/SlideWrapper'
import Navigation from './components/Navigation'
import './index.css'

import S01 from './slides/S01_Portada'
import S02 from './slides/S02_Objetivo'
import S02b from './slides/S02b_Pregunta1'
import S02c from './slides/S02c_Pregunta2'
import S02d from './slides/S02d_DatosDuros'
import S02e from './slides/S02e_CasosDebate'
import S02f from './slides/S02c_Etimologia'
import S03 from './slides/S03_OchoMalentendidos'
import S04 from './slides/S04_Video'
import S05 from './slides/S05_FraseJimRohn'
import S06 from './slides/S06_PorQueImportante'
import S07 from './slides/S07_Definicion'
import S08 from './slides/S08_TiposComunicacion'
import S09 from './slides/S09_ElementosEsenciales'
import S10 from './slides/S10_ActividadFraseologia'
import S11 from './slides/S11_TipsTitle'
import S12 from './slides/S12_Postura'
import S13 from './slides/S13_ExpresionClara'
import S14 from './slides/S14_EmpatiaRespeto'
import S15 from './slides/S15_CapacitacionContinua'
import S16 from './slides/S16_PronunciacionTono'
import S17 from './slides/S17_Tecnicas'
import S18 from './slides/S18_TensionHablar'
import S19 from './slides/S19_FraseCovey'
import S20 from './slides/S20_Recuerda'
import S21 from './slides/S21_ActividadMensaje'
import S22 from './slides/S22_EjemplosTitle'
import S23 from './slides/S23_Ejemplo1'
import S24 from './slides/S24_Ejemplo2'
import S25 from './slides/S25_Ejemplo3'
import S26 from './slides/S26_FraseNishan'
import S27 from './slides/S27_FormulaDRPR'
import S28 from './slides/S28_CajaTitle'
import S29 from './slides/S29_ActividadCaja'
import S30 from './slides/S30_EjemploCaja'
import S31 from './slides/S31_PortadaCierre'
import S32 from './slides/S32_ABCFrases'

const slides = [
  // BLOQUE 1 — Enganche + Fundamento (slides 1-8)
  S01, S02, S02b, S02f, S07, S06, S02d, S08,
  // EJERCICIO 1 — Casos debate (slide 9) · Hoja A
  S02e,
  // EJERCICIO 2 parte 1 — Elementos + termómetro (slide 10) · Hoja B
  S09,
  // BLOQUE 2 — Comprensión + Herramientas (slides 11-21)
  S03, S02c, S04, S05, S11, S12, S13, S14, S16, S17, S18, S32,
  // EJERCICIO 2 — Fraseología (~slide 22)
  S10,
  // BLOQUE 3 — DRPR + Ejemplos (slides 23-28)
  S27, S19, S22, S23, S24, S25,
  // EJERCICIO CIERRE — Mensajes + Caja (slides 29-32)
  S21, S28, S30, S29,
  // Cierre (slides 33-36)
  S26, S15, S20, S31,
]

export default function App() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)

  const goNext = useCallback(() => {
    if (current < slides.length - 1) { setDirection(1); setCurrent(c => c + 1) }
  }, [current])

  const goPrev = useCallback(() => {
    if (current > 0) { setDirection(-1); setCurrent(c => c - 1) }
  }, [current])

  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') { e.preventDefault(); goNext() }
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') { e.preventDefault(); goPrev() }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [goNext, goPrev])

  const SlideComponent = slides[current]

  return (
    <div style={{ width:'100vw', height:'100vh', overflow:'hidden', position:'relative', background:'#0C2D4E' }}>
      <AnimatePresence mode="wait" custom={direction}>
        <SlideWrapper key={current} direction={direction}>
          <SlideComponent />
        </SlideWrapper>
      </AnimatePresence>
      <Navigation current={current} total={slides.length} onPrev={goPrev} onNext={goNext} />
    </div>
  )
}
