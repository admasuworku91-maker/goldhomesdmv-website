import { site } from '../siteConfig'

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero-inner">
        <div className="hero-copy">
          <span className="eyebrow">Maryland Real Estate Experts</span>
          <h1>{site.tagline}</h1>
          <p>
            Whether you're searching for a home in Howard County, exploring a Montgomery
            County listing, or ready to sell, {site.brand} guides you through every step —
            from the first tour to closing day.
          </p>
          <div className="hero-actions">
            <a className="btn btn-gold" href={site.leadFormUrl} target="_blank" rel="noreferrer">
              Start Your Consultation
            </a>
            <a className="btn btn-outline" href={site.phoneHref}>
              <svg className="icon" aria-hidden="true"><use href="/icons.svg#icon-phone" /></svg>
              Call {site.phoneDisplay}
            </a>
          </div>
        </div>

        <div className="hero-art" aria-hidden="true">
          <HeroIllustration />
        </div>
      </div>
    </section>
  )
}

function HeroIllustration() {
  return (
    <svg viewBox="0 0 420 340" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="210" cy="170" r="150" fill="var(--gold-soft)" />
      <path d="M70 220 L210 110 L350 220" stroke="var(--gold)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M100 200 V270 H320 V200" stroke="var(--gold)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="185" y="215" width="50" height="55" rx="2" stroke="var(--gold)" strokeWidth="3" />
      <rect x="120" y="215" width="34" height="34" rx="2" stroke="var(--gold)" strokeWidth="2.5" />
      <rect x="266" y="215" width="34" height="34" rx="2" stroke="var(--gold)" strokeWidth="2.5" />
      <path d="M180 110 V80 H205 V95" stroke="var(--gold)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
