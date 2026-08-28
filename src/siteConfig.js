// Central place to edit the site's real business info.
// Update these values, then every section of the site updates automatically.

export const site = {
  brand: 'Gold Homes DMV',
  agentName: 'Worku Admasu',
  tagline: 'Expert Real Estate Services in Maryland',
  phoneDisplay: '202-390-6053',
  phoneHref: 'tel:12023906053',
  smsHref: 'sms:12023906053',
  email: 'admasuworku91@gmail.com',
  serviceAreas: ['Montgomery County, MD', 'Howard County, MD', "Prince George's County, MD"],
  social: {
    facebook: 'https://www.facebook.com/profile.php?id=61571965382964',
    instagram: 'https://www.instagram.com/goldhomesdmv',
    tiktok: 'https://www.tiktok.com/@goldhomesdmv',
  },
};

// Broker disclosure — most states (including MD/DC/VA) legally require an
// agent's marketing to name their broker.
export const broker = {
  name: 'Globex Realty',
  address: '3915 National Dr Suite 100, Burtonsville, MD 20866',
  phoneDisplay: '301-388-2600',
  phoneHref: 'tel:13013882600',
};

// Track record of closed sales. Add a new entry each time you close a deal.
// No listing photo is included by default — MLS photos belong to the
// listing brokerage/photographer, so drop in your own photo (if you have
// rights to it) via src/assets and reference it here as `photo`.
export const recentSales = [
  {
    address: '4708 Sellman Rd',
    cityStateZip: 'Beltsville, MD 20705',
    price: '$549,900',
    beds: 5,
    baths: 2,
    sqft: 2488,
    soldDate: 'March 2026',
    photo: null,
  },
];

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Listings', href: '#listings' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
];
