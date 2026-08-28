import { useState } from 'react'
import { site, navLinks } from '../siteConfig'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="container site-header-inner">
        <a href="#top" className="brand">
          <svg className="icon" aria-hidden="true"><use href="/icons.svg#icon-house" /></svg>
          {site.brand}
        </a>

        <nav className={`main-nav ${open ? 'is-open' : ''}`}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a className="btn btn-gold nav-cta" href={site.phoneHref}>
            <svg className="icon" aria-hidden="true"><use href="/icons.svg#icon-phone" /></svg>
            {site.phoneDisplay}
          </a>
        </nav>

        <button
          className="nav-toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg className="icon" aria-hidden="true">
            <use href={`/icons.svg#icon-${open ? 'close' : 'menu'}`} />
          </svg>
        </button>
      </div>
    </header>
  )
}
