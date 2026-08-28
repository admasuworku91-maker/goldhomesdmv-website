import { site, navLinks, broker } from '../siteConfig'

export default function Footer() {
  const year = new Date().getFullYear()
  const hasSocial = site.social.facebook || site.social.instagram || site.social.tiktok

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <a href="#top" className="brand">
            <svg className="icon" aria-hidden="true"><use href="/icons.svg#icon-house" /></svg>
            {site.brand}
          </a>
          <p>{site.tagline}</p>
        </div>

        <nav className="footer-nav">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="footer-contact">
          <a href={site.phoneHref}>{site.phoneDisplay}</a>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          {hasSocial && (
            <div className="footer-social">
              {site.social.facebook && (
                <a href={site.social.facebook} aria-label="Facebook" target="_blank" rel="noreferrer">
                  <svg className="icon" aria-hidden="true"><use href="/icons.svg#icon-facebook" /></svg>
                </a>
              )}
              {site.social.instagram && (
                <a href={site.social.instagram} aria-label="Instagram" target="_blank" rel="noreferrer">
                  <svg className="icon" aria-hidden="true"><use href="/icons.svg#icon-instagram" /></svg>
                </a>
              )}
              {site.social.tiktok && (
                <a href={site.social.tiktok} aria-label="TikTok" target="_blank" rel="noreferrer">
                  <svg className="icon" aria-hidden="true"><use href="/icons.svg#icon-tiktok" /></svg>
                </a>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="container footer-bottom">
        <p className="broker-line">
          Brokered by {broker.name} · {broker.address} ·{' '}
          <a href={broker.phoneHref}>{broker.phoneDisplay}</a>
        </p>
        <p>© {year} {site.brand}. All rights reserved.</p>
      </div>
    </footer>
  )
}
