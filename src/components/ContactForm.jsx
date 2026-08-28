import { useState } from 'react'
import { site } from '../siteConfig'

// Submits straight to Formspree so the message lands in the inbox above
// without depending on the visitor having a mail client configured. Falls
// back to a mailto: link if the request itself fails (e.g. offline).

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  function update(field) {
    return (e) => setForm((f) => ({ ...f, [field]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(site.formspreeEndpoint, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          message: form.message,
          _subject: `New inquiry from ${form.name || 'website visitor'}`,
        }),
      })
      if (!res.ok) throw new Error('submit failed')
      setStatus('sent')
    } catch {
      setStatus('error')
    }
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
          <button className="btn btn-gold" type="submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending…' : 'Send Message'}
          </button>
          {status === 'sent' && <p className="form-note">Message sent — I'll get back to you soon!</p>}
          {status === 'error' && (
            <p className="form-note">
              Something went wrong. Please call/text {site.phoneDisplay} or{' '}
              <a href={`mailto:${site.email}`}>email me directly</a>.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
