import { site } from '../siteConfig'

export default function ContactForm() {
  return (
    <section id="contact" className="section contact">
      <div className="container contact-inner">
        <div className="contact-info">
          <span className="eyebrow">Get In Touch</span>
          <h2>Connect with {site.brand}</h2>
          <p>Have a question or ready to get started? Choose the option that works best for you.</p>

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

        <div className="contact-form">
          <span className="eyebrow">Buyer &amp; Seller Consultation</span>
          <h3>Tell me about your real-estate goals</h3>
          <p>
            Complete one short form so I can understand whether you are buying, selling,
            or both and recommend the right next step.
          </p>
          <a
            className="btn btn-gold"
            href={site.leadFormUrl}
            target="_blank"
            rel="noreferrer"
          >
            Open Buyer &amp; Seller Form
          </a>
          <p className="form-note">No pressure. Completing the form does not create an agency agreement.</p>
        </div>
      </div>
    </section>
  )
}
