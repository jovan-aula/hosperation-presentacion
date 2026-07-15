import { useState, useEffect, useCallback } from 'react'
import { AnimatePresence } from 'framer-motion'
import SlideWrapper from './components/SlideWrapper'
import Navigation from './components/Navigation'
import './index.css'

import S01 from './slides/S01_Portada'
import S02 from './slides/S02_QuienesSomos'
import S03 from './slides/S03_Bio'
import S04 from './slides/S04_PropositoGeneral'
import S05 from './slides/S05_DatosDuros'
import S06 from './slides/S06_Objetivos'
import S07 from './slides/S07_ReglasDelJuego'
import S07b from './slides/S07b_DinamicaApertura'
import S08 from './slides/S08_PreguntaApertura'
import S09 from './slides/S09_QueesProfesional'
import S09b from './slides/S09b_ProfesionistaVsProfesional'
import S10 from './slides/S10_CumplirVsProfesionalizar'
import S11 from './slides/S11_QueesProfesionalizar'
import S12 from './slides/S12_PorQueImportaHospital'
import S13 from './slides/S13_ElPacienteDeHoy'
import S13b from './slides/S13b_VozDelPaciente'
import S14 from './slides/S14_FraseERMI'
import S15 from './slides/S15_OchoPasos'
import S16 from './slides/S16_HospitalAcronimo'
import S17 from './slides/S17_QueEsHospitalidad'
import S18 from './slides/S18_ComoSeIntegra'
import S19 from './slides/S19_AQuienAtendemos'
import S20 from './slides/S20_ActividadOrquesta'
import S21 from './slides/S21_MomentosDeVerdad'
import S21b from './slides/S21b_PatientJourneyMap'
import S22 from './slides/S22_ComunicacionProfesional'
import S23 from './slides/S23_CostoDeComunicar'
import S24 from './slides/S24_EmpatiaProf'
import S25 from './slides/S25_EmpatiaYAdherencia'
import S25b from './slides/S25b_JornadaEmocional'
import S26 from './slides/S26_ConductasConfianza'
import S26b from './slides/S26b_MetodoPECP'
import S27 from './slides/S27_ConductasDestruyen'
import S28 from './slides/S28_PequenosDetalles'
import S28b from './slides/S28b_PoderDelNombre'
import S29 from './slides/S29_ModeloFlorence'
import S30 from './slides/S30_EstandaresFlorence'
import S31 from './slides/S31_EjercicioPractico'
import S32 from './slides/S32_MiCompromiso'
import S33 from './slides/S33_FraseCierre'
import S34 from './slides/S34_Referencias'
import S35 from './slides/S35_Portada_Cierre'

// 42 slides total
const slides = [
  S01, S02, S03, S04, S05, S06, S07, S07b,
  S08, S09, S09b, S10, S11, S12, S13, S13b, S14,
  S15, S16, S17, S18, S19, S20, S21, S21b,
  S22, S23, S24, S25, S25b, S26, S26b, S27,
  S28, S28b, S29, S30, S31, S32, S33, S34, S35,
]

export default function App() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)

  const goNext = useCallback(() => {
    if (current < slides.length - 1) {
      setDirection(1)
      setCurrent(c => c + 1)
    }
  }, [current])

  const goPrev = useCallback(() => {
    if (current > 0) {
      setDirection(-1)
      setCurrent(c => c - 1)
    }
  }, [current])

  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') {
        e.preventDefault()
        goNext()
      }
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault()
        goPrev()
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [goNext, goPrev])

  const SlideComponent = slides[current]

  return (
    <div style={{ width: '100vw', height: '100vh', overflow: 'hidden', position: 'relative', background: '#0C2D4E' }}>
      <AnimatePresence mode="wait" custom={direction}>
        <SlideWrapper key={current} direction={direction}>
          <SlideComponent />
        </SlideWrapper>
      </AnimatePresence>

      <Navigation
        current={current}
        total={slides.length}
        onPrev={goPrev}
        onNext={goNext}
      />
    </div>
  )
}
