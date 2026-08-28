import { recentSales } from '../siteConfig'

export default function RecentSales() {
  if (recentSales.length === 0) return null

  return (
    <section className="section recent-sales">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Track Record</span>
          <h2>Recently Sold</h2>
          <p>A look at homes recently closed in Maryland.</p>
        </div>

        <div className="sales-grid">
          {recentSales.map((sale) => (
            <div className="sale-card" key={sale.address}>
              <div className="sale-photo">
                {sale.photo ? (
                  <img src={sale.photo} alt={`${sale.address}, ${sale.cityStateZip}`} />
                ) : (
                  <svg className="icon" aria-hidden="true"><use href="/icons.svg#icon-house" /></svg>
                )}
                <span className="sold-badge">Sold</span>
              </div>
              <div className="sale-body">
                <p className="sale-address">{sale.address}</p>
                <p className="sale-location">{sale.cityStateZip}</p>
                <p className="sale-price">{sale.price}</p>
                <p className="sale-stats">
                  {sale.beds} bed · {sale.baths} bath · {sale.sqft.toLocaleString()} sq ft
                </p>
                <p className="sale-date">Sold {sale.soldDate}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
