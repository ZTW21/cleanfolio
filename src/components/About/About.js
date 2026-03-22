import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { about } from '../../portfolio'
import './About.css'

const About = () => {
  const { name, role, description, resume, social } = about
  const nameParts = name ? name.split(' ') : []
  const firstName = nameParts[0] || ''
  const lastName = nameParts.slice(1).join(' ') || ''

  return (
    <section className='about'>
      <div className='about__content'>
        {name && (
          <div className='about__name'>
            <div className='about__name-line'>
              <span className='about__name-text'>{firstName}</span>
            </div>
            <div className='about__name-line'>
              <span className='about__name-text about__name-text--outline about__name-text--delay'>
                {lastName}
              </span>
            </div>
          </div>
        )}

        {role && (
          <div className='about__role'>
            <span className='about__role-text'>{role}</span>
          </div>
        )}

        <p className='about__desc'>{description}</p>

        <div className='about__actions'>
          {resume && (
            <a
              href={resume}
              target='_blank'
              rel='noopener noreferrer'
              className='btn btn--primary'
            >
              Resume
            </a>
          )}

          {social && (
            <div className='about__social'>
              {social.github && (
                <a
                  href={social.github}
                  aria-label='github'
                  className='about__social-link'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <GitHubIcon />
                </a>
              )}

              {social.linkedin && (
                <a
                  href={social.linkedin}
                  aria-label='linkedin'
                  className='about__social-link'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <LinkedInIcon />
                </a>
              )}
            </div>
          )}
        </div>
      </div>

      <div className='about__scroll-hint'>
        <span className='about__scroll-text'>Scroll</span>
        <div className='about__scroll-line' />
      </div>
    </section>
  )
}

export default About
