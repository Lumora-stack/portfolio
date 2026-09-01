import profile from '../data/profile.js'
import './Process.css'

function Process() {
  return (
    <section id="process" className="section">
      <div className="container">
        <div className="section-heading">
          <span className="index" aria-hidden="true">05</span>
          <h2>How We'll Work Together</h2>
        </div>
        <p className="section-lede">A simple, transparent process from the first message to final delivery.</p>

        <ol className="process-list">
          {profile.process.map((item) => (
            <li key={item.step} className="process-item">
              <span className="process-item__step">{item.step}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default Process
