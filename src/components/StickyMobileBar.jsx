import { site } from '../siteConfig'

// Mobile-only fixed bar so a call or text is always one tap away. Hidden on
// desktop (see .sticky-mobile-bar in App.css) where the header CTA covers it.
export default function StickyMobileBar() {
  return (
    <div className="sticky-mobile-bar">
      <a className="sticky-bar-btn call" href={site.phoneHref}>
        <svg className="icon" aria-hidden="true"><use href="/icons.svg#icon-phone" /></svg>
        Call
      </a>
      <a className="sticky-bar-btn text" href={site.smsHref}>
        <svg className="icon" aria-hidden="true"><use href="/icons.svg#icon-chat" /></svg>
        Text
      </a>
    </div>
  )
}
