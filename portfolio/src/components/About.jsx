import profile from '../data/profile.js'

function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-heading">
          <span className="index" aria-hidden="true">01</span>
          <h2>{profile.about.heading}</h2>
        </div>
        <div style={{ maxWidth: 'var(--measure)', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {profile.about.paragraphs.map((p, i) => (
            <p key={i} style={{ fontSize: '1.05rem', color: 'var(--color-text)' }}>
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
