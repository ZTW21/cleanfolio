import { projects } from '../../portfolio'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import useInView from '../../hooks/useInView'
import './Projects.css'

const Projects = () => {
  const [ref, isVisible] = useInView(0.05)

  if (!projects.length) return null

  return (
    <section
      id='projects'
      className={`section projects ${isVisible ? 'projects--visible' : ''}`}
      ref={ref}
    >
      <h2 className='section__title'>Projects</h2>

      <div className='projects__grid'>
        {projects.map((project, index) => (
          <ProjectContainer
            key={project.name}
            project={project}
            index={index}
          />
        ))}
      </div>
    </section>
  )
}

export default Projects
