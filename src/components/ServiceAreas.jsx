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
      </div>
    </section>
  )
}
