import { site } from '../siteConfig'
import headshot from '../assets/agent-headshot.jpg'

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container about-inner">
        <div className="about-photo">
          <img src={headshot} alt={`${site.agentName}, agent at ${site.brand}`} width="800" height="800" />
        </div>

        <div className="about-copy">
          <span className="eyebrow">About Your Agent</span>
          <h2>{site.agentName}</h2>
          <p className="about-role">Your Trusted Guide to the Maryland Market</p>
          <p>
            With deep local knowledge across Maryland, {site.brand} takes a
            hands-on, no-pressure approach — helping buyers find the right
            home and sellers get the best result, every step of the way.
          </p>
          <ul className="about-points">
            <li>
              <svg className="icon" aria-hidden="true"><use href="/icons.svg#icon-check" /></svg>
              Licensed REALTOR® serving Maryland
            </li>
            <li>
              <svg className="icon" aria-hidden="true"><use href="/icons.svg#icon-check" /></svg>
              Personalized guidance for buyers and sellers
            </li>
            <li>
              <svg className="icon" aria-hidden="true"><use href="/icons.svg#icon-check" /></svg>
              Local market expertise across Maryland
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
