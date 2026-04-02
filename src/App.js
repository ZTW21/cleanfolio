import { useState, useCallback, useEffect, useRef } from 'react'
import Landing from './components/Landing/Landing'
import FocusedView from './components/FocusedView/FocusedView'
import { about } from './portfolio'
import './App.css'

const TRANSITION_MS = 400

const App = () => {
  const [activeZone, setActiveZone] = useState(null)
  const [pendingZone, setPendingZone] = useState(null)
  const [phase, setPhase] = useState('idle')
  const lastFocusedZone = useRef(null)

  useEffect(() => {
    if (phase !== 'frost') return
    const timer = setTimeout(() => {
      setActiveZone(pendingZone)
      setPhase('clear')
    }, TRANSITION_MS)
    return () => clearTimeout(timer)
  }, [phase, pendingZone])

  useEffect(() => {
    if (phase !== 'clear') return
    const timer = setTimeout(() => {
      setPhase('idle')
      setPendingZone(null)
    }, TRANSITION_MS)
    return () => clearTimeout(timer)
  }, [phase])

  // Update document title based on active zone
  useEffect(() => {
    if (!activeZone) {
      document.title = `${about.name} — Portfolio`
    } else if (activeZone === 'about') {
      document.title = `About — ${about.name}`
    } else if (activeZone === 'skills') {
      document.title = `Skills — ${about.name}`
    } else if (activeZone === 'contact') {
      document.title = `Contact — ${about.name}`
    } else if (activeZone.startsWith('project-')) {
      const idx = parseInt(activeZone.split('-')[1], 10)
      const { projects } = require('./portfolio')
      const project = projects[idx]
      document.title = project ? `${project.name} — ${about.name}` : `Project — ${about.name}`
    }
  }, [activeZone])

  const handleZoneClick = useCallback((zoneId) => {
    lastFocusedZone.current = zoneId
    setPendingZone(zoneId)
    setPhase('frost')
  }, [])

  const handleBack = useCallback(() => {
    setPendingZone(null)
    setPhase('frost')
  }, [])

  return (
    <div className='dark app'>
      {/* Skip to content link */}
      <a href='#main-content' className='skip-link'>
        Skip to content
      </a>

      {/* Header with logo — only on landing */}
      {!activeZone && (
        <header className='app__header'>
          <span className='app__logo' aria-hidden='true'>ZW</span>
        </header>
      )}

      {/* Main content */}
      <main id='main-content'>
        {!activeZone && (
          <Landing
            onZoneClick={handleZoneClick}
            isVisible={!activeZone}
            restoreFocusId={lastFocusedZone.current}
          />
        )}

        {activeZone && (
          <FocusedView zoneId={activeZone} onBack={handleBack} />
        )}
      </main>

      {/* Transition overlay */}
      <div
        className={`app__overlay ${phase === 'frost' ? 'app__overlay--frost' : ''} ${phase === 'clear' ? 'app__overlay--clear' : ''}`}
        aria-hidden='true'
      />
    </div>
  )
}

export default App
