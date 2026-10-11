import { site } from '../siteConfig'

export default function ServiceAreas() {
  return (
    <section className="service-areas">
      <div className="container service-areas-inner">
        <span className="eyebrow light">Proudly Serving</span>
        <div className="area-pills">
          {site.serviceAreas.map((area) => (
            <span className="area-pill" key={area}>
              <svg className="icon" aria-hidden="true"><use href="/icons.svg#icon-pin" /></svg>
              {area}
            </span>
          ))}
        </div>
        <nav aria-label="Explore Maryland real estate communities" style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginTop: "1.5rem" }}>
          <a href="/areas/laurel/" style={{ color: '#fff', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Laurel</a>
          <a href="/areas/columbia/" style={{ color: '#fff', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Columbia</a>
          <a href="/areas/bowie/" style={{ color: '#fff', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Bowie</a>
          <a href="/areas/silver-spring/" style={{ color: '#fff', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Silver Spring</a>
          <a href="/areas/howard-county/" style={{ color: '#fff', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Howard County</a>
          <a href="/areas/montgomery-county/" style={{ color: '#fff', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Montgomery County</a>
          <a href="/areas/prince-georges-county/" style={{ color: '#fff', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Prince George's County</a>
        </nav>
      </div>
    </section>
  )
}
