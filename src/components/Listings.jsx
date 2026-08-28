import { useState } from 'react'
import { site } from '../siteConfig'

// Placeholder featured-listings grid. Swap each card's contents for a real
// property once you have photos/details, or wire this section up to your
// MLS/IDX feed if your brokerage provides one.
const placeholders = Array.from({ length: 3 })

export default function Listings() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  function handleNotify(e) {
    e.preventDefault()
    const subject = encodeURIComponent('Notify me about new listings')
    const body = encodeURIComponent(`Please notify me about new listings.\nEmail: ${email}`)
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <section id="listings" className="section listings">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Featured Listings</span>
          <h2>Find Your Perfect Home</h2>
          <p>Property photos and details coming soon — check back or call for current listings.</p>
        </div>

        <div className="listings-grid">
          {placeholders.map((_, i) => (
            <div className="listing-card is-placeholder" key={i}>
              <div className="listing-photo">
                <svg className="icon" aria-hidden="true"><use href="/icons.svg#icon-house" /></svg>
              </div>
              <div className="listing-body">
                <p className="listing-status">Listing photos coming soon</p>
                <p className="listing-note">Add your property details here</p>
              </div>
            </div>
          ))}
        </div>

        <form className="notify-form" onSubmit={handleNotify}>
          <div className="notify-text">
            <p className="notify-title">Get notified when new listings hit the market</p>
            <p className="notify-note">One email, right when a new property goes live.</p>
          </div>
          <div className="notify-fields">
            <input
              type="email"
              required
              placeholder="you@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="btn btn-gold" type="submit">
              Notify Me
            </button>
          </div>
          {sent && <p className="form-note">Opening your email app to send this request…</p>}
        </form>
      </div>
    </section>
  )
}
