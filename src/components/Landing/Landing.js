import { useEffect, useRef } from 'react'
import { about, projects, skills, contact } from '../../portfolio'
import Zone from '../Zone/Zone'
import './Landing.css'

const Landing = ({ onZoneClick, isVisible, restoreFocusId }) => {
  const gridRef = useRef(null)

  // Restore focus to previously active zone when returning from focused view
  useEffect(() => {
    if (isVisible && restoreFocusId && gridRef.current) {
      const target = gridRef.current.querySelector(`[data-zone-id="${restoreFocusId}"]`)
      if (target) {
        target.focus()
      }
    }
  }, [isVisible, restoreFocusId])

  return (
    <div className={`landing ${isVisible ? 'landing--visible' : ''}`}>
      {/* Visually hidden h1 for screen readers */}
      <h1 className='sr-only'>{about.name} — Portfolio</h1>

      {/* Ghost initials as background landmark */}
      <span className='landing__ghost-initials' aria-hidden='true'>ZW</span>

      {/* SVG connector lines */}
      <svg
        className='landing__connectors'
        viewBox='0 0 100 100'
        preserveAspectRatio='none'
        aria-hidden='true'
      >
        <line x1='20' y1='35' x2='50' y2='35' />
        <line x1='50' y1='35' x2='80' y2='35' />
        <line x1='50' y1='35' x2='50' y2='65' />
        <line x1='20' y1='65' x2='50' y2='65' />
        <line x1='50' y1='65' x2='80' y2='65' />
        <line x1='20' y1='35' x2='25' y2='65' />
        <line x1='75' y1='35' x2='80' y2='65' />
      </svg>

      {/* Zone Grid as navigation */}
      <nav aria-label='Portfolio sections' ref={gridRef}>
        <div className='landing__grid'>
          <Zone
            id='about'
            title={about.name || 'About'}
            subtitle={about.role}
            gridArea='about'
            onClick={onZoneClick}
          />

          {projects.map((project, index) => (
            <Zone
              key={project.name}
              id={`project-${index}`}
              title={project.name}
              subtitle={project.stack ? project.stack.slice(0, 3).join(' / ') : ''}
              number={String(index + 1).padStart(2, '0')}
              gridArea={`p${index}`}
              badge={project.badge}
              onClick={onZoneClick}
            />
          ))}

          <Zone
            id='skills'
            title='Skills'
            gridArea='skills'
            onClick={onZoneClick}
          >
            <div className='landing__skills-preview'>
              {skills.slice(0, 8).map((skill) => (
                <span key={skill} className='landing__skill-tag' aria-hidden='true'>
                  {skill}
                </span>
              ))}
              {skills.length > 8 && (
                <span className='landing__skill-tag landing__skill-tag--more' aria-hidden='true'>
                  +{skills.length - 8}
                </span>
              )}
            </div>
          </Zone>

          {contact.email && (
            <Zone
              id='contact'
              title='Contact'
              subtitle={contact.email}
              gridArea='contact'
              onClick={onZoneClick}
            />
          )}
        </div>
      </nav>

      {/* Bottom status bar */}
      <div className='landing__status' aria-hidden='true'>
        <span className='landing__status-item'>
          {projects.length} PROJECTS
        </span>
        <span className='landing__status-divider' />
        <span className='landing__status-item'>
          {skills.length} SKILLS
        </span>
        <span className='landing__status-divider' />
        <span className='landing__status-item'>
          CLICK TO EXPLORE
        </span>
      </div>
    </div>
  )
}

export default Landing
