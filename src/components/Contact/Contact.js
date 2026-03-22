import { contact } from '../../portfolio'
import useInView from '../../hooks/useInView'
import './Contact.css'

const Contact = () => {
  const [ref, isVisible] = useInView()

  if (!contact.email) return null

  return (
    <section
      className={`section contact ${isVisible ? 'contact--visible' : ''}`}
      id='contact'
      ref={ref}
    >
      <h2 className='contact__title'>
        Let&apos;s Build
        <br />
        Something <span className='contact__highlight'>Great</span>
      </h2>
      <a href={`mailto:${contact.email}`} className='btn btn--primary'>
        Get In Touch
      </a>
    </section>
  )
}

export default Contact
