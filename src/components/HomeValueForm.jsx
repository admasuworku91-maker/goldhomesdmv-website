import { site } from '../siteConfig'

export default function HomeValueForm() {
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

        <div className="home-value-form">
          <h3>Start with the buyer-and-seller consultation form</h3>
          <p>
            Select “Selling” and share your property details. Your response will be added
            to the Gold Homes DMV lead system for follow-up.
          </p>
          <a
            className="btn btn-gold"
            href={site.leadFormUrl}
            target="_blank"
            rel="noreferrer"
          >
            Request My Free Home Value
          </a>
          <p className="form-note">Free consultation. No obligation.</p>
        </div>
      </div>
    </section>
  )
}
