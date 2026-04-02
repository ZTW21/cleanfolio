import { useRef } from 'react'
import './Zone.css'

const Zone = ({ id, title, subtitle, number, gridArea, onClick, badge, children }) => {
  const zoneRef = useRef(null)

  const handleClick = () => {
    if (onClick) {
      const rect = zoneRef.current.getBoundingClientRect()
      onClick(id, rect)
    }
  }

  return (
    <button
      ref={zoneRef}
      className='zone'
      style={{ gridArea }}
      onClick={handleClick}
      aria-label={`Navigate to ${title}`}
      data-zone-id={id}
    >
      {badge && (
        <span className='zone__badge' aria-hidden='true'>{badge}</span>
      )}
      {number && (
        <span className='zone__ghost-number' aria-hidden='true'>{number}</span>
      )}
      <div className='zone__content'>
        {title && <h2 className='zone__title'>{title}</h2>}
        {subtitle && <p className='zone__subtitle'>{subtitle}</p>}
        {children}
      </div>
      <div className='zone__indicator' aria-hidden='true' />
    </button>
  )
}

export default Zone
