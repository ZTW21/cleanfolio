import { useEffect, useRef } from 'react'
import { about, projects, skills, contact } from '../../portfolio'
import { GitHubIcon, LinkedInIcon, ExternalLinkIcon } from '../Icons'
import './FocusedView.css'

const FocusedView = ({ zoneId, onBack }) => {
  const backRef = useRef(null)

  // Move focus to the back button when the view mounts (for keyboard users)
  // Use focusVisible: false to avoid showing the outline on programmatic focus
  useEffect(() => {
    if (backRef.current) {
      backRef.current.focus({ preventScroll: true })
    }
  }, [zoneId])

  const handleBack = () => {
    onBack()
  }

  const renderContent = () => {
    if (zoneId === 'about') {
      return (
        <div className='focused__inner focused__inner--about'>
          <div className='focused__animate'>
            <span className='focused__label'>About</span>
          </div>
          <h1 className='focused__hero-name focused__animate'>
            {about.name}
          </h1>
          <p className='focused__role focused__animate'>{about.role}</p>
          <p className='focused__description focused__animate'>
            {about.description}
          </p>
          <div className='focused__actions focused__animate'>
            {about.resume && (
              <a
                href={about.resume}
                target='_blank'
                rel='noopener noreferrer'
                className='trigger'
              >
                Resume
              </a>
            )}
            {about.social?.github && (
              <a
                href={about.social.github}
                target='_blank'
                rel='noopener noreferrer'
                className='link focused__social-link'
                aria-label='GitHub profile'
              >
                <GitHubIcon aria-hidden='true' focusable='false' />
              </a>
            )}
            {about.social?.linkedin && (
              <a
                href={about.social.linkedin}
                target='_blank'
                rel='noopener noreferrer'
                className='link focused__social-link'
                aria-label='LinkedIn profile'
              >
                <LinkedInIcon aria-hidden='true' focusable='false' />
              </a>
            )}
          </div>
        </div>
      )
    }

    if (zoneId.startsWith('project-')) {
      const index = parseInt(zoneId.split('-')[1], 10)
      const project = projects[index]
      if (!project) return null

      return (
        <div className='focused__inner focused__inner--project'>
          <div className='focused__animate'>
            <span className='focused__label'>
              Project {String(index + 1).padStart(2, '0')}
            </span>
          </div>
          <h1 className='focused__project-name focused__animate'>
            {project.name}
          </h1>
          <p className='focused__description focused__animate'>
            {project.description}
          </p>
          {project.screenshots && project.screenshots.length > 0 ? (
            <div className='focused__screenshots focused__animate'>
              {project.screenshots.map((src, i) => (
                <div key={i} className='focused__screenshot-frame'>
                  <img
                    src={src}
                    alt={`${project.name} screenshot ${i + 1}`}
                    className='focused__screenshot-img'
                    loading='lazy'
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className='focused__screenshots focused__animate'>
              <div className='focused__screenshot-placeholder'>
                <span>Screenshots Coming Soon</span>
              </div>
            </div>
          )}
          {project.stack && (
            <div className='focused__stack focused__animate'>
              {project.stack.map((tech) => (
                <span key={tech} className='focused__stack-item'>
                  {tech}
                </span>
              ))}
            </div>
          )}
          <div className='focused__actions focused__animate'>
            {project.sourceCode && (
              <a
                href={project.sourceCode}
                target='_blank'
                rel='noopener noreferrer'
                className='trigger'
                aria-label={`View source code for ${project.name}`}
              >
                <GitHubIcon aria-hidden='true' focusable='false' style={{ marginRight: '8px' }} />
                Source
              </a>
            )}
            {project.livePreview && (
              <a
                href={project.livePreview}
                target='_blank'
                rel='noopener noreferrer'
                className='trigger'
                aria-label={`View live demo of ${project.name}`}
              >
                <ExternalLinkIcon aria-hidden='true' focusable='false' style={{ marginRight: '8px' }} />
                Demo
              </a>
            )}
          </div>
        </div>
      )
    }

    if (zoneId === 'skills') {
      return (
        <div className='focused__inner focused__inner--skills'>
          <div className='focused__animate'>
            <span className='focused__label'>Skills</span>
          </div>
          <h1 className='sr-only'>Skills</h1>
          <div className='focused__skills-grid'>
            {skills.map((skill, i) => (
              <span
                key={skill}
                className='focused__skill-item focused__skill-cascade'
                style={{ animationDelay: `${0.4 + i * 0.06}s` }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )
    }

    if (zoneId === 'contact') {
      return (
        <div className='focused__inner focused__inner--contact'>
          <div className='focused__animate'>
            <span className='focused__label'>Contact</span>
          </div>
          <h1 className='focused__contact-heading focused__animate'>
            Let&apos;s Build<br />Something Great
          </h1>
          <div className='focused__animate'>
            <a
              href={`mailto:${contact.email}`}
              className='trigger'
            >
              Get In Touch
            </a>
          </div>
        </div>
      )
    }

    return null
  }

  return (
    <div className='focused'>
      {/* Back button */}
      <button
        ref={backRef}
        type='button'
        className='focused__back'
        onClick={handleBack}
        aria-label='Back to portfolio overview'
      >
        <span className='focused__back-arrow' aria-hidden='true'>&larr;</span>
        <span className='focused__back-label'>ZW</span>
      </button>

      {/* Noise overlay (decorative) */}
      <div className='focused__noise' aria-hidden='true' />

      {/* Content */}
      <div className='focused__content'>
        {renderContent()}
      </div>
    </div>
  )
}

export default FocusedView
