// Placeholder testimonial slots. Replace each with a real quote from a past
// client once you have one — don't publish text attributed to people who
// didn't say it.
const placeholders = Array.from({ length: 3 })

export default function Testimonials() {
  return (
    <section id="reviews" className="section testimonials">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Client Reviews</span>
          <h2>What Clients Say</h2>
          <p>Reviews from past clients will appear here.</p>
        </div>

        <div className="testimonials-grid">
          {placeholders.map((_, i) => (
            <div className="testimonial-card is-placeholder" key={i}>
              <div className="stars" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, s) => (
                  <svg className="icon" key={s}><use href="/icons.svg#icon-star" /></svg>
                ))}
              </div>
              <p className="testimonial-quote">
                “Add a quote from a happy buyer or seller here.”
              </p>
              <p className="testimonial-name">— Client name, City</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
