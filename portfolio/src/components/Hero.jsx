import profile from '../data/profile.js'
import './Hero.css'

function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero__inner">
        <div className="hero__mark" aria-hidden="true">
          <svg viewBox="0 0 120 120" width="100%" height="100%">
            <rect x="18" y="14" width="70" height="92" rx="2" fill="var(--color-paper-raised)" stroke="var(--color-ink)" strokeWidth="1.5" />
            <line x1="30" y1="38" x2="76" y2="38" stroke="var(--color-ink)" strokeWidth="1.2" opacity="0.55" />
            <line x1="30" y1="50" x2="76" y2="50" stroke="var(--color-ink)" strokeWidth="1.2" opacity="0.55" />
            <line x1="30" y1="62" x2="66" y2="62" stroke="var(--color-ink)" strokeWidth="1.2" opacity="0.55" />
            <line x1="30" y1="74" x2="70" y2="74" stroke="var(--color-mustard)" strokeWidth="2" />
            <line x1="30" y1="86" x2="58" y2="86" stroke="var(--color-mustard)" strokeWidth="2" />
            <circle cx="90" cy="90" r="20" fill="var(--color-ink)" />
            <path d="M82 90 l6 6 l12 -14" fill="none" stroke="var(--color-paper-raised)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        <p className="hero__eyebrow">{profile.location}</p>
        <h1 className="hero__title">
          {profile.role} for hire.
          <br />
          <span>{profile.name}</span> gets your words and documents in order.
        </h1>
        <p className="hero__tagline">{profile.tagline}</p>

        <div className="hero__actions">
          <a className="btn btn-primary" href="#contact">
            Start a project
          </a>
          <a className="btn btn-outline" href="#projects">
            See sample work
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
