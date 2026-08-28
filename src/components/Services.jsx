const services = [
  {
    title: 'Buying a Home',
    description:
      'From your first search to the closing table, get a partner who knows the Maryland inventory and negotiates in your corner.',
    href: '#contact',
    cta: 'Book a free consultation →',
  },
  {
    title: 'Selling a Home',
    description:
      'Pricing strategy, staging guidance, and marketing that gets your property in front of serious buyers fast.',
    href: '#home-value',
    cta: 'Get your home value →',
  },
  {
    title: 'Free Home Evaluation',
    description:
      'Curious what your home is worth in today’s market? Get a no-obligation, data-driven estimate.',
    href: '#home-value',
    cta: 'Get your home value →',
  },
]

export default function Services() {
  return (
    <section id="services" className="section services">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">What I Do</span>
          <h2>Find Your Dream Home</h2>
          <p>Straightforward, personal service for every stage of buying or selling.</p>
        </div>

        <div className="services-grid">
          {services.map((s) => (
            <div className="service-card" key={s.title}>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
              <a className="service-link" href={s.href}>
                {s.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
