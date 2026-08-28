import { useState } from 'react'
import { site } from '../siteConfig'

// NOTE: This form currently opens the visitor's email app with a pre-filled
// message (via a mailto: link) — no backend required, but it depends on the
// visitor having a mail client configured. For a more reliable inbox, wire
// this up to a form service (e.g. Netlify Forms, Formspree) before launch.

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [sent, setSent] = useState(false)

  function update(field) {
    return (e) => setForm((f) => ({ ...f, [field]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    const subject = encodeURIComponent(`New inquiry from ${form.name || 'website visitor'}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\n${form.message}`,
    )
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <section id="contact" className="section contact">
      <div className="container contact-inner">
        <div className="contact-info">
          <span className="eyebrow">Get In Touch</span>
          <h2>Connect with {site.brand}</h2>
          <p>Have a question or ready to get started? Send a message or give a call.</p>

          <a className="contact-line" href={site.phoneHref}>
            <svg className="icon" aria-hidden="true"><use href="/icons.svg#icon-phone" /></svg>
            {site.phoneDisplay}
          </a>
          <a className="contact-line" href={site.smsHref}>
            <svg className="icon" aria-hidden="true"><use href="/icons.svg#icon-chat" /></svg>
            Text {site.phoneDisplay}
          </a>
          <a className="contact-line" href={`mailto:${site.email}`}>
            <svg className="icon" aria-hidden="true"><use href="/icons.svg#icon-mail" /></svg>
            {site.email}
          </a>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Your Full Name
            <input type="text" required value={form.name} onChange={update('name')} />
          </label>
          <label>
            Your Email *
            <input type="email" required value={form.email} onChange={update('email')} />
          </label>
          <label>
            Your Phone
            <input type="tel" value={form.phone} onChange={update('phone')} />
          </label>
          <label>
            Your Message
            <textarea rows={5} required value={form.message} onChange={update('message')} />
          </label>
          <button className="btn btn-gold" type="submit">
            Send Message
          </button>
          {sent && <p className="form-note">Opening your email app to send this message…</p>}
        </form>
      </div>
    </section>
  )
}
