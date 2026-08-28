import { useState } from 'react'
import { site } from '../siteConfig'

// A separate, single-purpose lead form for sellers. Asking for just the
// property address (instead of a generic message box) is what makes this
// convert better than the general contact form — it promises something
// specific back. Same mailto: approach as ContactForm — see note there.

export default function HomeValueForm() {
  const [form, setForm] = useState({ address: '', name: '', email: '', phone: '' })
  const [sent, setSent] = useState(false)

  function update(field) {
    return (e) => setForm((f) => ({ ...f, [field]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    const subject = encodeURIComponent(`Home value request: ${form.address}`)
    const body = encodeURIComponent(
      `Property address: ${form.address}\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}`,
    )
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <section id="home-value" className="section home-value">
      <div className="container home-value-inner">
        <div className="home-value-copy">
          <span className="eyebrow">For Sellers</span>
          <h2>What's Your Home Worth?</h2>
          <p>
            Get a free, no-obligation estimate based on recent sales in your area — like the
            5 bed / 2 bath home {site.brand} recently closed in Beltsville for $549,900.
          </p>
        </div>

        <form className="home-value-form" onSubmit={handleSubmit}>
          <label>
            Property Address
            <input
              type="text"
              required
              placeholder="123 Main St, City, MD"
              value={form.address}
              onChange={update('address')}
            />
          </label>
          <div className="home-value-row">
            <label>
              Your Name
              <input type="text" required value={form.name} onChange={update('name')} />
            </label>
            <label>
              Your Email
              <input type="email" required value={form.email} onChange={update('email')} />
            </label>
          </div>
          <label>
            Your Phone
            <input type="tel" value={form.phone} onChange={update('phone')} />
          </label>
          <button className="btn btn-gold" type="submit">
            Get My Free Home Value
          </button>
          {sent && <p className="form-note">Opening your email app to send this request…</p>}
        </form>
      </div>
    </section>
  )
}
