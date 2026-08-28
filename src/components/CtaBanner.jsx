import { site } from '../siteConfig'

export default function CtaBanner() {
  return (
    <section className="cta-banner">
      <div className="container cta-banner-inner">
        <h2>Ready to find your next home?</h2>
        <p>Reach out today — no pressure, just honest guidance.</p>
        <div className="hero-actions">
          <a className="btn btn-gold" href={site.phoneHref}>
            <svg className="icon" aria-hidden="true"><use href="/icons.svg#icon-phone" /></svg>
            Call {site.phoneDisplay}
          </a>
          <a className="btn btn-outline" href={site.smsHref}>
            <svg className="icon" aria-hidden="true"><use href="/icons.svg#icon-chat" /></svg>
            Text Me
          </a>
          <a className="btn btn-outline" href="#contact">
            Send a Message
          </a>
        </div>
      </div>
    </section>
  )
}
