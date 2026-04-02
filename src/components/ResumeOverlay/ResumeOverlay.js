import { useEffect, useRef } from 'react'
import './ResumeOverlay.css'

const ResumeOverlay = ({ onClose }) => {
  const closeRef = useRef(null)

  useEffect(() => {
    if (closeRef.current) {
      closeRef.current.focus({ preventScroll: true })
    }
  }, [])

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [onClose])

  return (
    <div className='resume-overlay' role='dialog' aria-label='Resume' aria-modal='true'>
      <div className='resume-overlay__noise' aria-hidden='true' />

      <div className='resume-overlay__header'>
        <button
          ref={closeRef}
          type='button'
          className='resume-overlay__close'
          onClick={onClose}
          aria-label='Close resume'
        >
          <span className='resume-overlay__close-x' aria-hidden='true'>&times;</span>
          <span className='resume-overlay__close-label'>Close</span>
        </button>

        <a
          href='/resume.pdf'
          download='Zack_Wilson_Resume.pdf'
          className='trigger resume-overlay__download'
          aria-label='Download resume as PDF'
        >
          Download
        </a>
      </div>

      <div className='resume-overlay__frame'>
        <object
          data='/resume.pdf'
          type='application/pdf'
          className='resume-overlay__pdf'
          aria-label='Resume PDF'
        >
          <p className='resume-overlay__fallback'>
            PDF preview unavailable.{' '}
            <a href='/resume.pdf' download='Zack_Wilson_Resume.pdf'>
              Download the resume
            </a>
          </p>
        </object>
      </div>
    </div>
  )
}

export default ResumeOverlay
