import profile from '../data/profile.js'
import './Footer.css'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <p>{profile.footerNote}</p>
        <div className="site-footer__meta">
          <span>
            © {year} {profile.name}
          </span>
          <a href="#top">Back to top</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
