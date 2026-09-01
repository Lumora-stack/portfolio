import profile from '../data/profile.js'
import './Skills.css'

function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-heading">
          <span className="index" aria-hidden="true">03</span>
          <h2>Skills</h2>
        </div>
        <p className="section-lede">
          A practical mix of writing and technical office skills, built through practice projects and everyday use.
        </p>

        <ul className="skills-list">
          {profile.skills.map((skill) => (
            <li key={skill.name} className="skill-row">
              <div className="skill-row__labels">
                <span>{skill.name}</span>
              </div>
              <div
                className="skill-row__track"
                role="img"
                aria-label={`${skill.name} proficiency: ${skill.level} percent`}
              >
                <div className="skill-row__fill" style={{ width: `${skill.level}%` }} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Skills
