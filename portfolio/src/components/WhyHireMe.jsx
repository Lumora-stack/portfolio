import profile from '../data/profile.js'
import './WhyHireMe.css'

function WhyHireMe() {
  return (
    <section id="why-hire-me" className="section">
      <div className="container">
        <div className="section-heading">
          <span className="index" aria-hidden="true">06</span>
          <h2>Why Hire Me</h2>
        </div>
        <p className="section-lede">
          I'm early in my freelance journey, so here's what I bring instead of a long client list.
        </p>

        <ul className="why-grid">
          {profile.whyHireMe.map((item) => (
            <li key={item.title} className="why-item">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default WhyHireMe
