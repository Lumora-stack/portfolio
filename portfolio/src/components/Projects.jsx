import profile from '../data/profile.js'
import './Projects.css'

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-heading">
          <span className="index" aria-hidden="true">04</span>
          <h2>Sample Projects</h2>
        </div>
        <p className="section-lede">
          These are practice pieces I've created to demonstrate my skills — not past client work. They show the
          quality and style you can expect.
        </p>

        <ul className="projects-grid">
          {profile.projects.map((project) => (
            <li key={project.title} className="project-card card">
              <span className="project-card__category">{project.category}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-card__tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="project-card__tag">
                    {tag}
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Projects
