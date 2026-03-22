import './Footer.css'

const Footer = () => (
  <footer className='footer'>
    <a
      href='https://github.com/ZTW21/cleanfolio'
      className='link footer__link'
      target='_blank'
      rel='noopener noreferrer'
    >
      &copy; {new Date().getFullYear()} Zack Wilson
    </a>
  </footer>
)

export default Footer
