import { useState, useEffect, useCallback } from 'react'
import { AnimatePresence } from 'framer-motion'
import SlideWrapper from './components/SlideWrapper'
import Navigation from './components/Navigation'
import './index.css'

import S01 from './slides/S01_Portada'
import S01b from './slides/S01b_PreguntaComunicacion'
import S01c from './slides/S01c_RevealComunicacion'
import S01d from './slides/S01d_PreguntaAsertividad'
import S01e from './slides/S01e_RevealAsertividad'
import S01f from './slides/S01f_PreguntaComunAsertiva'
import S01g from './slides/S01g_LluviaQR'
import S01h from './slides/S01h_LluviaDisplay'
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
import SToolkit from './slides/S_Toolkit'
import SFraseologiaContexto from './slides/S_FraseologiaContexto'
import S10b from './slides/S10b_FraseologiaDisplay'
import S33 from './slides/S33_Encuesta'

const slides = [
  // APERTURA — Ellos hablan primero
  S01, S01b, S01c, S01d, S01e, S01f, S01g, S01h, S07,
  // GANCHO — ¿Por qué importa en tu trabajo?
  S02d, S03, S06,
  // FUNDAMENTO — Base teórica compacta
  S02, S08, S09,
  // EJERCICIO 1 — Aplica lo aprendido
  S02b, S02e, S04,
  // PAUSA REFLEXIVA
  S02c, S05,
  // HERRAMIENTAS — El toolkit
  SToolkit, S12, S13, S14, S16, S17, S18, S32,
  // EJERCICIO 2
  SFraseologiaContexto, S10, S10b,
  // FÓRMULA DRPR + EJEMPLOS
  S27, S19, S23, S24, S25,
  // EJERCICIO CIERRE
  S21, S28, S30, S29,
  // CIERRE
  S26, S20, S15, S31,
  // Encuesta
  S33,
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
