import profile from '../data/profile.js'
import './Contact.css'

function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="section-heading">
          <span className="index" aria-hidden="true">07</span>
          <h2>Let's Work Together</h2>
        </div>
        <p className="section-lede">
          Have a writing, formatting or data task on your plate? Send me the details and I'll get back to you
          quickly.
        </p>

        <div className="contact-links">
          <a className="contact-link" href={`mailto:${profile.contact.email}`}>
            <span className="contact-link__label">Email</span>
            <span className="contact-link__value">{profile.contact.email}</span>
          </a>
          <a className="contact-link" href={profile.contact.truelancer} target="_blank" rel="noreferrer">
            <span className="contact-link__label">Truelancer</span>
            <span className="contact-link__value">View Profile</span>
          </a>
          <a className="contact-link" href={profile.contact.linkedin} target="_blank" rel="noreferrer">
            <span className="contact-link__label">LinkedIn</span>
            <span className="contact-link__value">Connect</span>
          </a>
          <a className="contact-link" href={profile.contact.github} target="_blank" rel="noreferrer">
            <span className="contact-link__label">GitHub</span>
            <span className="contact-link__value">View Code</span>
          </a>
        </div>

        <a className="btn btn-primary contact-cta" href={`mailto:${profile.contact.email}`}>
          Send me an email
        </a>
      </div>
    </section>
  )
}

export default Contact
