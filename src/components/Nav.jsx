import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  PhoneCall,
  Globe2,
  MessageSquare,
  Voicemail,
  PhoneForwarded,
  ShieldCheck,
  Mic,
  BadgeCheck,
  Search,
  MapPin,
  BookOpen,
  LifeBuoy,
  FileText,
  Users,
  Hash,
  Sparkles,
  Wifi,
  ChevronDown,
  ArrowRight,
  ArrowUpRight,
  Download,
  Mail,
  Monitor,
} from 'lucide-react'

const menus = {
  products: {
    title: 'Products',
    subtitle: 'Real phone numbers, global calls, and two-way messaging — all in one app.',
    layout: 'cards',
    cards: [
      {
        title: 'Virtual Phone Number',
        desc: 'Local, mobile, and toll-free numbers available in 60+ countries worldwide.',
        image: '/assets/products/virtual-number.jpg',
        href: '/virtual-phone-number/',
      },
      {
        title: 'International Calling',
        desc: 'Make global calls worldwide with crystal-clear voice quality and super low calling rates.',
        image: '/assets/products/international-call.jpg',
        href: '/international-calling/',
      },
      {
        title: 'Send & Receive SMS',
        desc: 'Send & Receive SMS allows international messaging and OTP verification.',
        image: '/assets/products/sms.jpg',
        href: '/send-and-receive-sms/',
      },
    ],
  },
  features: {
    title: 'Features',
    subtitle: 'Smart calling controls built into every CallMama number.',
    layout: 'features',
    cols: [
      {
        heading: '',
        items: [
          { icon: PhoneForwarded, name: 'Call Forwarding', desc: 'Route incoming calls to any number by schedule, caller, or rule.', href: '/features/call-forwarding/' },
          { icon: Voicemail, name: 'Voice Mail', desc: 'Receive voicemails as audio plus a written transcript in your inbox.', href: '/features/voicemail/' },
          { icon: BadgeCheck, name: 'Caller ID', desc: 'Pick which of your virtual numbers shows on every outbound call.', href: '/features/caller-id/' },
        ],
      },
      {
        heading: '',
        items: [
          { icon: MessageSquare, name: 'Send & Receive SMS', desc: 'Two-way SMS from your virtual number, anywhere in the world.', href: '/send-and-receive-sms/' },
          { icon: Mic, name: 'Call Recording', desc: 'Record important calls and replay them anytime from your dashboard.', href: '/features/call-recording/', webOnly: true },
          { icon: Globe2, name: 'International Calling', desc: 'Crystal-clear HD voice to 200+ countries at low per-minute rates.', href: '/international-calling/' },
        ],
      },
    ],
    feature: {
      tag: 'Popular',
      title: 'Built for clarity',
      desc: 'Studio-quality voice, smart routing, and zero spam — every call.',
      cta: 'See all features',
      href: '/features/',
    },
  },
  tools: {
    title: 'Tools',
    subtitle: 'Free utilities to verify, generate, and look up phone numbers and area codes.',
    layout: 'tools',
    cols: [
      {
        heading: 'Most Used Tools',
        items: [
          { icon: Search, name: 'Number Checker', desc: 'Quickly verifies the validity of any number.', href: '/tools/phone-number-checker/' },
          { icon: Sparkles, name: 'Number Generator', desc: 'Quickly produces random or sequential numbers.', href: '/tools/random-phone-number-generator/' },
        ],
      },
      {
        heading: 'Tools',
        items: [
          { icon: Wifi, name: 'Carrier Lookup', desc: 'Identifies the carrier behind any phone number.', href: '/tools/carrier-lookup/' },
          { icon: Globe2, name: 'What is My IP', desc: 'Instantly displays your public IP address.', href: '/tools/what-is-my-ip/' },
          { icon: ShieldCheck, name: 'Number Validator', desc: 'Instantly validates number format and region.', href: '/tools/phone-number-validator/' },
          { icon: PhoneCall, name: 'Reverse Phone Lookup', desc: 'Finds caller details from a phone number.', href: '/tools/reverse-phone-number-lookup/' },
          { icon: MapPin, name: 'UK Area Code Lookup', desc: 'Finds the UK region linked to any area code.', href: '/tools/uk-area-code/' },
          { icon: MapPin, name: 'Area Code Lookup', desc: 'Finds the location behind any area code.', href: '/tools/area-code-lookup-tool/' },
        ],
      },
    ],
  },
  resources: {
    title: 'Resources',
    subtitle: 'Guides, support, and product updates from the CallMama team.',
    cols: [
      {
        heading: 'Learn',
        items: [
          { icon: FileText, name: 'Blog', desc: 'Tips, news, and product stories', href: '/blog/' },
          { icon: BookOpen, name: 'How to Use CallMama', desc: 'Step-by-step setup walkthrough', href: '/how-to-use-callmama-app/' },
          { icon: Download, name: 'Download App', desc: 'Get CallMama on iOS, Android, Web', href: '/download-callmama-app/' },
        ],
      },
      {
        heading: 'Connect',
        items: [
          { icon: LifeBuoy, name: 'Help & Support', desc: '24/7 chat with real humans', href: '/help-and-support/' },
          { icon: Mail, name: 'Contact Us', desc: 'Sales, billing, partnerships', href: '/contact-us/' },
          { icon: Users, name: 'About Us', desc: 'The team behind CallMama', href: '/about-us/' },
        ],
      },
    ],
    feature: {
      tag: 'Guide',
      title: 'Getting started in 5 minutes',
      desc: 'A quick walkthrough for first-time CallMama users.',
      cta: 'Read the guide',
      href: '/how-to-use-callmama-app/',
    },
  },
}

export default function Nav() {
  const [open, setOpen] = useState(null)

  return (
    <nav className="nav" onMouseLeave={() => setOpen(null)}>
      <Link className="brand" to="/" aria-label="Callmama home">
        <img src="/assets/callmama-logo.webp?v=3" alt="Callmama" className="brand-logo" width="138" height="31" />
      </Link>
      <ul className="nav-menu">
        {Object.entries(menus).map(([key, menu]) => (
          <li
            key={key}
            className={`nav-item ${open === key ? 'is-open' : ''}`}
            onMouseEnter={() => setOpen(key)}
          >
            <button
              type="button"
              className="nav-trigger"
              aria-expanded={open === key}
              aria-haspopup="true"
            >
              {menu.title}
              <ChevronDown size={14} className="nav-chev" />
            </button>

            <div className="mega" role="menu">
              {menu.layout === 'cards' ? (
                <div className="mega-inner mega-products">
                  {menu.subtitle && (
                    <div className="mega-intro">
                      <span className="mega-intro-title">{menu.title}</span>
                      <span className="mega-intro-sub">{menu.subtitle}</span>
                    </div>
                  )}
                  {menu.cards.map(({ image, title, desc, href }) => {
                    const isInternal = href && href.startsWith('/')
                    const cardContent = (
                      <>
                        <div className="pcard-head">
                          <h4 className="pcard-title">{title}</h4>
                          <span className="pcard-arrow" aria-hidden>
                            <ArrowUpRight size={16} strokeWidth={2.6} />
                          </span>
                        </div>
                        <p className="pcard-desc">{desc}</p>
                        <div className="pcard-img">
                          <img src={image} alt={title} loading="lazy" />
                        </div>
                      </>
                    )
                    return isInternal ? (
                      <Link to={href} className="pcard" key={title}>
                        {cardContent}
                      </Link>
                    ) : (
                      <a href={href || '#'} className="pcard" key={title}>
                        {cardContent}
                      </a>
                    )
                  })}
                </div>
              ) : (
                <div className={`mega-inner${menu.layout === 'tools' ? ' mega-tools' : ''}${menu.layout === 'features' ? ' mega-features' : ''}`}>
                  {menu.subtitle && (
                    <div className="mega-intro">
                      <span className="mega-intro-title">{menu.title}</span>
                      <span className="mega-intro-sub">{menu.subtitle}</span>
                    </div>
                  )}
                  <div className="mega-cols">
                    {menu.cols.map((col, colIdx) => (
                      <div className="mega-col" key={col.heading || `col-${colIdx}`}>
                        {col.heading && <div className="mega-heading">{col.heading}</div>}
                        <ul className="mega-list">
                          {col.items.map(({ icon: Icon, name, desc, href, popular, webOnly }) => {
                            const isInternal = href && href.startsWith('/')
                            const linkClass = `mega-link${popular ? ' is-popular' : ''}${webOnly ? ' is-webonly' : ''}`
                            const linkContent = (
                              <>
                                <span className="mega-icon">
                                  <Icon size={18} strokeWidth={2} />
                                </span>
                                <span className="mega-text">
                                  <span className="mega-name">
                                    {name}
                                    {popular && <span className="mega-popular"><Sparkles size={9} strokeWidth={2.6} /> Most used</span>}
                                    {webOnly && <span className="mega-weblabel"><Monitor size={9} strokeWidth={2.6} /> Web only</span>}
                                  </span>
                                  <span className="mega-desc">{desc}</span>
                                </span>
                                <span className="mega-arrow" aria-hidden>
                                  <ArrowRight size={14} strokeWidth={2.4} />
                                </span>
                              </>
                            )
                            return (
                              <li key={name}>
                                {isInternal ? (
                                  <Link to={href} className={linkClass}>{linkContent}</Link>
                                ) : (
                                  <a href={href || '#'} className={linkClass}>{linkContent}</a>
                                )}
                              </li>
                            )
                          })}
                        </ul>
                      </div>
                    ))}
                  </div>

                  {menu.feature && (
                    <aside className="mega-feature">
                      <span className="mega-feature-glow" aria-hidden />
                      <span className="mega-tag">
                        <span className="mega-tag-dot" />
                        {menu.feature.tag}
                      </span>
                      <h4 className="mega-feature-title">{menu.feature.title}</h4>
                      <p className="mega-feature-desc">{menu.feature.desc}</p>
                      {menu.feature.href && menu.feature.href.startsWith('/') ? (
                        <Link to={menu.feature.href} className="mega-feature-cta">
                          {menu.feature.cta}
                          <span aria-hidden>→</span>
                        </Link>
                      ) : (
                        <a href={menu.feature.href || '#'} className="mega-feature-cta">
                          {menu.feature.cta}
                          <span aria-hidden>→</span>
                        </a>
                      )}
                    </aside>
                  )}
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
      <div className="cta">
        <a
          className="btn btn-ghost"
          href="https://app.callmama.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sign in
        </a>
        <Link className="btn btn-primary" to="/contact-us/">
          <PhoneCall size={14} strokeWidth={2.5} />
          Contact Us
        </Link>
      </div>
    </nav>
  )
}
