import profile from '../data/profile.js'
import './Services.css'

function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <div className="section-heading">
          <span className="index" aria-hidden="true">02</span>
          <h2>What I Can Do For You</h2>
        </div>
        <p className="section-lede">
          A focused set of services covering writing, documents and data — done carefully, and delivered on time.
        </p>

        <ul className="services-grid">
          {profile.services.map((service) => (
            <li key={service.title} className="service-card card">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Services
