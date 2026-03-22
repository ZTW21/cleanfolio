import { skills } from '../../portfolio'
import './Skills.css'

const Skills = () => {
  if (!skills.length) return null

  const doubled = [...skills, ...skills]

  return (
    <section className='skills-marquee' id='skills'>
      <div className='marquee'>
        <div className='marquee__track'>
          {doubled.map((skill, i) => (
            <span key={`a-${i}`} className='marquee__item'>
              {skill}
            </span>
          ))}
        </div>
      </div>
      <div className='marquee marquee--reverse'>
        <div className='marquee__track'>
          {doubled.map((skill, i) => (
            <span key={`b-${i}`} className='marquee__item'>
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
