import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Globe, Star, Phone, MessageSquare, Voicemail,
  Mic, PhoneForwarded, BadgeCheck, ShieldCheck, Sparkles, Download, UserPlus,
  Wallet, PhoneCall, Plus, Check, ArrowRight, Zap, Layers, Cloud,
} from 'lucide-react'
import { FaApple, FaGooglePlay } from 'react-icons/fa'
import Nav from '../components/Nav.jsx'
import Final from '../components/Final.jsx'
import Testimonials from '../components/Testimonials.jsx'
import Tweaks from '../components/Tweaks.jsx'
import Seo, { faqSchema, breadcrumbSchema, mobileAppSchema } from '../components/Seo.jsx'
import { Globe as CobeGlobe } from "@/components/ui/cobe-globe"
import ThreePart from '../components/ui/ThreePart.jsx'
//nextgen


//data of world
const markers = [
  { id: "sf", location: [37.7595, -122.4367], label: "San Francisco" },
  { id: "nyc", location: [40.7128, -74.006], label: "New York" },
  { id: "tokyo", location: [35.6762, 139.6503], label: "Tokyo" },
  { id: "london", location: [51.5074, -0.1278], label: "London" },
  { id: "sydney", location: [-33.8688, 151.2093], label: "Sydney" },
  { id: "capetown", location: [-33.9249, 18.4241], label: "Cape Town" },
  { id: "dubai", location: [25.2048, 55.2708], label: "Dubai" },
  { id: "paris", location: [48.8566, 2.3522], label: "Paris" },
  { id: "saopaulo", location: [-23.5505, -46.6333], label: "São Paulo" },
];

const arcs = [
  {
    id: "sf-tokyo",
    from: [37.7595, -122.4367],
    to: [35.6762, 139.6503],
    label: "SF → Tokyo",
  },
  {
    id: "nyc-london",
    from: [40.7128, -74.006],
    to: [51.5074, -0.1278],
    label: "NYC → London",
  },
];



/* ---------- DATA ---------- */
const platforms = [
  {
    Icon: FaApple,
    name: 'iOS',
    sub: 'iPhone & iPad',
    desc: 'Native background calls, push notifications, system caller ID integration.',
    cta: 'App Store',
    accent: 'dark',
    href: 'https://apps.apple.com/us/app/callmama-numbers-calls-sms/id6752691983',
  },
  {
    Icon: FaGooglePlay,
    name: 'Android',
    sub: 'Phones & tablets',
    desc: 'Full feature parity with iOS. Optimized for current Android versions.',
    cta: 'Google Play',
    accent: 'green',
    href: 'https://play.google.com/store/apps/details?id=com.callmama',
  },
  {
    Icon: Globe,
    name: 'Web',
    sub: 'Any browser',
    desc: 'No download. Open app.callmama.com on Mac, Windows, or Chromebook.',
    cta: 'Open web app',
    accent: 'blue',
    href: 'https://app.callmama.com',
  },
]

// const dayOneFeatures = [
//   { icon: Phone, label: 'International calls to 200+ countries' },
//   { icon: PhoneCall, label: 'Virtual numbers across 60+ markets' },
//   { icon: MessageSquare, label: 'Two-way SMS on every number' },
//   { icon: Voicemail, label: 'Voicemail for every number' },
//   { icon: PhoneForwarded, label: 'Call forwarding to any country' },
//   { icon: Mic, label: 'Call recording via web portal' },
//   { icon: BadgeCheck, label: 'Caller ID — inbound + outbound' },
//   { icon: ShieldCheck, label: 'Spam call blocking' },
// ]

const quickStart = [
  { n: '01', icon: Download, title: 'Install', desc: 'iOS, Android, or open the web app at app.callmama.com.' },
  { n: '02', icon: UserPlus, title: 'Sign up', desc: 'Email + password. Verify the link. About 90 seconds.' },
  { n: '03', icon: Wallet, title: 'Add credit', desc: 'Top up in your wallet — pay-as-you-go or pick a plan.' },
  { n: '04', icon: PhoneCall, title: 'Call', desc: 'Open the dial pad. Enter the number. CallMama routes the rest.' },
]

const ratingBars = [
  { stars: 5, percent: 78 },
  { stars: 4, percent: 16 },
  { stars: 3, percent: 4 },
  { stars: 2, percent: 1 },
  { stars: 1, percent: 1 },
]

const dlTestimonials = [
  {
    who: 'Diego', loc: 'Mexico City → Madrid', av: 'D', color: '#1FB46A',
    body: "Downloaded the app at lunch, had a Spanish number ringing on my phone before I'd finished coffee. Then I added a UK number — same app, same account. I was expecting friction; there genuinely wasn't any.",
    pin: 'Same app, two countries',
  },
  {
    who: 'Olivia', loc: 'Auckland → Sydney', av: 'O', color: '#161616',
    body: "I move between my laptop and my phone all day for client work. Whatever I do on one shows up on the other in seconds — call history, messages, settings. The web app does everything the iPhone app does. That's the part that surprised me.",
    pin: 'Web matches mobile',
  },
]

const dlFaqs = [
  {
    q: 'Is CallMama free to download?',
    a: 'Yes. CallMama is free to download on the App Store and Google Play, and the web app at app.callmama.com requires no install. Calls and SMS use credit; per-destination rates are published at callmama.com.',
  },
  {
    q: 'Do I need a credit card to download the app?',
    a: 'No. Downloading and creating an account is completely free. A payment method is only required when you add calling credit or pick a plan.',
  },
  {
    q: 'Does the web app have the same features as the mobile app?',
    a: 'Yes. The CallMama web app at app.callmama.com includes calling, SMS, voicemail, call recordings, settings, and forwarding rules — fully synced with your mobile app in real time.',
  },
  {
    q: 'Which iOS and Android versions are supported?',
    a: 'CallMama supports all current and recent iOS and Android versions. For specific minimum-version requirements, check the app listing in the App Store or Google Play.',
  },
  {
    q: 'Can I use one CallMama account on multiple devices?',
    a: 'Yes. One account works simultaneously on iOS, Android, and the web app. Calls, messages, settings, and recordings sync across all of them in real time.',
  },
  {
    q: 'How long does setup take after downloading?',
    a: 'Most users are making their first call within 3–5 minutes of downloading the app. The fastest path: install, sign up, add credit, dial.',
  },
]

const trustBadges = ['FREE DOWNLOAD', 'iOS · ANDROID · WEB', 'ALL FEATURES']

/* ---------- HERO ANIM ---------- */
function HeroAnim() {
  return (
    <div className="dl-hero-anim" aria-hidden="true">
      <span className="dl-hero-glow dl-hero-glow-1" />
      <span className="dl-hero-glow dl-hero-glow-2" />

      <div className="dl-hero-phone">
        <div className="dl-hero-phone-notch" />
        <div className="dl-hero-phone-screen">
          <div className="dl-hero-phone-time">9:41</div>
          <div className="dl-hero-phone-app">
            <span className="dl-hero-phone-app-icon">
              <Phone size={14} strokeWidth={2.4} />
            </span>
            <span className="dl-hero-phone-app-text">
              <strong>CallMama</strong>
              <span>Active call · 04:18</span>
            </span>
          </div>
          <div className="dl-hero-phone-controls">
            <span><Mic size={12} strokeWidth={2.2} /></span>
            <span className="is-active"><Voicemail size={12} strokeWidth={2.2} /></span>
            <span><MessageSquare size={12} strokeWidth={2.2} /></span>
          </div>
        </div>
      </div>

      <div className="dl-hero-laptop">
        <div className="dl-hero-laptop-screen">
          <div className="dl-hero-laptop-bar">
            <span /><span /><span />
            <span className="dl-hero-laptop-url">app.callmama.com</span>
          </div>
          <div className="dl-hero-laptop-body">
            <span className="dl-hero-laptop-line dl-hero-laptop-line-w" />
            <span className="dl-hero-laptop-line" />
            <span className="dl-hero-laptop-line" />
          </div>
        </div>
        <div className="dl-hero-laptop-base" />
      </div>

      <div className="dl-hero-rating">
        <div className="dl-hero-rating-num">
          4.5
          <span className="dl-hero-rating-out">/ 5</span>
        </div>
        <div className="dl-hero-rating-stars">
          <Star size={11} fill="currentColor" strokeWidth={0} />
          <Star size={11} fill="currentColor" strokeWidth={0} />
          <Star size={11} fill="currentColor" strokeWidth={0} />
          <Star size={11} fill="currentColor" strokeWidth={0} />
          <Star size={11} fill="currentColor" strokeWidth={0} />
        </div>
        <div className="dl-hero-rating-lbl">App Store</div>
      </div>

      <span className="dl-hero-pill dl-hero-pill-sync">
        <Cloud size={11} strokeWidth={2.4} /> Real-time sync
      </span>
      <span className="dl-hero-pill dl-hero-pill-free">
        <Zap size={11} strokeWidth={2.4} /> Free download
      </span>
    </div>
  )
}

/* ---------- HERO ---------- */
function DlHero() {
  return (
    <section className="vpn-hero dl-hero">
      <div className="wrap">
        <div className="vpn-hero-grid">
          <div className="vpn-hero-content">
            <span className="section-label">01 — DOWNLOAD CALLMAMA</span>
            <h1 className="vpn-h1">
              Download free.<br />
              <span className="serif-grad">Call the world.</span>
            </h1>
            <p className="vpn-hero-sub">
              Available on iOS, Android, and the web. One account, every feature, free to
              download — set up in minutes, no credit card required.
            </p>

            <div className="vpn-trust">
              {trustBadges.map((t) => (
                <span className="vpn-trust-chip" key={t}>{t}</span>
              ))}
            </div>

            <div className="dl-hero-stores">
              <a
                className="store-btn store-apple"
                href="https://apps.apple.com/us/app/callmama-numbers-calls-sms/id6752691983"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaApple className="store-icon" />
                <div className="t"><small>Download on the</small><strong>App Store</strong></div>
              </a>
              <a
                className="store-btn store-play"
                href="https://play.google.com/store/apps/details?id=com.callmama"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGooglePlay className="store-icon" />
                <div className="t"><small>Get it on</small><strong>Google Play</strong></div>
              </a>
            </div>

            <div className="vpn-hero-tinyline">
              <Check size={14} strokeWidth={2.6} /> No credit card to install
              <span className="vpn-hero-dot" />
              <Check size={14} strokeWidth={2.6} /> 60s setup
              <span className="vpn-hero-dot" />
              <Check size={14} strokeWidth={2.6} /> All features included
            </div>
          </div>

          <div className="flex items-center justify-center w-full min-h-screen bg-white p-8 overflow-hidden">
            <div className="w-full max-w-lg">
              <CobeGlobe
                markers={markers}
                arcs={arcs}
                markerColor={[0.3, 0.45, 0.85]}
                baseColor={[1, 1, 1]}
                arcColor={[0.3, 0.45, 0.85]}
                glowColor={[0.94, 0.93, 0.91]}
                dark={0}
                mapBrightness={10}
                markerSize={0.025}
                markerElevation={0.01}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

/* ---------- PLATFORMS ---------- */
function PlatformsSection() {
  return (
    <section className="vpn-section dl-platforms">
      <div className="wrap">
        <div className="vpn-what-head">
          <span className="section-label">02 — THREE WAYS TO USE IT</span>
          <h2 className="vpn-h2">
            One account.{' '}
            <span className="serif-grad">Three doors in.</span>
          </h2>
          <p className="vpn-h2-sub">
            Pick whichever device you have. Everything syncs in real time — your call history,
            settings, recordings, and forwarding rules follow you.
          </p>
        </div>

        <div className="dl-platforms-grid">
          {platforms.map(({ Icon, name, sub, desc, cta, accent, href }) => (
            <article className={`dl-platform dl-platform-${accent}`} key={name}>
              <span className="dl-platform-icon">
                <Icon size={26} />
              </span>
              <h3 className="dl-platform-name">{name}</h3>
              <span className="dl-platform-sub">{sub}</span>
              <p className="dl-platform-desc">{desc}</p>
              <a
                className="dl-platform-cta"
                href={href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {cta}
                <ArrowRight size={13} strokeWidth={2.6} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------- DAY-1 FEATURES ---------- */
function DayOneSection() {
  return (
    <section className="vpn-section dl-day1">
      <div className="wrap">
        <div className="dl-day1-head">
          <span className="section-label">03 — DAY ONE</span>
          <h2 className="vpn-h2">
            Everything active{' '}
            <span className="serif-grad">from the first sign-in.</span>
          </h2>
          {/* <p className="vpn-h2-sub" style={{ maxWidth: '60ch' }}>
            No upgrade tier, no add-on, no waiting list. Every CallMama feature ships unlocked
            on your account the moment you finish setup.
          </p> */}
        </div>

        <ul className="dl-day1-grid">
          {/* {dayOneFeatures.map(({ icon: Icon, label }) => (
            <li className="dl-day1-item" key={label}>
              <span className="dl-day1-check"><Check size={11} strokeWidth={3} /></span>
              <span className="dl-day1-icon">
                <Icon size={16} strokeWidth={2.2} />
              </span>
              <span className="dl-day1-label">{label}</span>
            </li>
          ))} */}
        </ul>

        <ThreePart/>
      </div>
    </section>
  )
}

/* ---------- QUICK START ---------- */
function QuickStartAnim() {
  return (
    <div className="dl-qs-anim" aria-hidden="true">
      <span className="dl-qs-spine" aria-hidden="true" />
      {quickStart.map(({ n, icon: Icon, title, desc }, i) => (
        <div className={`dl-qs-step dl-qs-step-${i + 1}`} key={n} style={{ '--i': i }}>
          <span className="dl-qs-no">{n}</span>
          <span className="dl-qs-icon">
            <Icon size={16} strokeWidth={2.2} />
          </span>
          <div className="dl-qs-text">
            <strong>{title}</strong>
            <span>{desc}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

function QuickStartSection() {
  return (
    <section className="vpn-section dl-qs">
      <div className="wrap">
        <div className="vpn-incl-grid">
          <QuickStartAnim />

          <div className="vpn-incl-content">
            <span className="section-label">04 — UP IN 5 MINUTES</span>
            <h2 className="vpn-h2">
              Four steps,{' '}
              <span className="serif-grad">one cup of coffee.</span>
            </h2>
            <p className="vpn-h2-sub">
              Most people are making their first international call within five minutes of
              opening the App Store. The slow part is choosing what to call your account —
              not the technology.
            </p>

            <ul className="dl-qs-bullets">
              <li>
                <span className="dl-qs-check"><Check size={12} strokeWidth={2.8} /></span>
                <strong>No paperwork.</strong> No carrier visit. No SIM card.
              </li>
              <li>
                <span className="dl-qs-check"><Check size={12} strokeWidth={2.8} /></span>
                <strong>Cancel any time.</strong> No contract, no auto-renew lock.
              </li>
              <li>
                <span className="dl-qs-check"><Check size={12} strokeWidth={2.8} /></span>
                <strong>Need help?</strong> Live chat is in the app once you sign in.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------- RATING ---------- */
// function RatingSection() {
//   return (
//     <section className="vpn-section dl-rate">
//       <div className="wrap">
//         <div className="dl-rate-head">
//           <span className="section-label">05 — APP STORE RATING</span>
//           <h2 className="vpn-h2">
//             Rated <span className="serif-grad">4.5 out of 5</span> by people who actually call.
//           </h2>
//         </div>

//         <div className="dl-rate-grid">
//           <div className="dl-rate-score">
//             <div className="dl-rate-num">4.5</div>
//             <div className="dl-rate-stars">
//               <Star size={20} fill="currentColor" strokeWidth={0} />
//               <Star size={20} fill="currentColor" strokeWidth={0} />
//               <Star size={20} fill="currentColor" strokeWidth={0} />
//               <Star size={20} fill="currentColor" strokeWidth={0} />
//               <Star size={20} fill="currentColor" strokeWidth={0} className="dl-rate-half" />
//             </div>
//             <div className="dl-rate-meta">App Store · Google Play average</div>
//           </div>

//           <div className="dl-rate-bars">
//             {ratingBars.map(({ stars, percent }) => (
//               <div className="dl-rate-row" key={stars}>
//                 <span className="dl-rate-row-stars">
//                   {stars}
//                   <Star size={11} fill="currentColor" strokeWidth={0} />
//                 </span>
//                 <span className="dl-rate-row-track">
//                   <span className="dl-rate-row-fill" style={{ width: `${percent}%` }} />
//                 </span>
//                 <span className="dl-rate-row-pct">{percent}%</span>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="dl-rate-tags">
//           <span className="dl-rate-tag"><Sparkles size={12} strokeWidth={2.4} /> "Easiest setup of any calling app I've tried"</span>
//           <span className="dl-rate-tag"><Sparkles size={12} strokeWidth={2.4} /> "Web app does everything the phone does"</span>
//           <span className="dl-rate-tag"><Sparkles size={12} strokeWidth={2.4} /> "Got my UK number active in literal minutes"</span>
//         </div>
//       </div>
//     </section>
//   )
// }

/* ---------- TESTIMONIALS ---------- */
function DlTestimonials() {
  return (
    <section className="vpn-section vpn-testi">
      <div className="wrap" style={{ textAlign: 'center' }}>
        <span className="section-label">5 — WHAT CUSTOMERS ARE SAYING</span>
        <h2 className="sh sh-inner" style={{ marginInline: 'auto' }}>
          Downloaded once.<br />
          <span className="serif-grad">Useful immediately.</span>
        </h2>
        <div className="vpn-testi-grid">
          {dlTestimonials.map((t) => (
            <div className="t-card vpn-testi-card" key={t.who}>
              <div className="t-top">
                <div className="t-av" style={{ background: t.color }}>{t.av}</div>
                <div className="t-who"><b>{t.who}</b><span>{t.loc}</span></div>
              </div>
              <div className="t-body">"{t.body}"</div>
              <div className="t-meta">
                <span className="t-pin">{t.pin}</span>
                <span className="dot"></span>
                <span>Verified caller</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------- FAQ ---------- */
function DlFAQ() {
  const [openIdx, setOpenIdx] = useState(0)
  return (
    <section id="faq">
      <div className="wrap" style={{ textAlign: 'center' }}>
        <span className="section-label">06 — ANSWERS</span>
        <h2 className="sh sh-inner" style={{ marginInline: 'auto' }}>
          Frequently <span className="serif-grad">asked.</span>
        </h2>
        <div className="faq">
          {dlFaqs.map((f, i) => (
            <div key={i} className={`faq-item${openIdx === i ? ' open' : ''}`}>
              <div
                className="faq-q"
                onClick={() => setOpenIdx(openIdx === i ? -1 : i)}
              >
                <span>{f.q}</span>
                <span className="faq-plus">
                  <Plus size={14} strokeWidth={2.5} />
                </span>
              </div>
              <div className="faq-a">
                <div>{f.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------- PAGE ---------- */
export default function DownloadApp() {
  return (
    <>
      <Seo
        title="Download CallMama Free — iOS, Android & Web App"
        description="Download CallMama free on iOS or Android. HD international calling, virtual phone numbers, two-way SMS — all in one free app. 4.5★ App Store rating."
        path="/download-callmama-app/"
        keywords="download callmama, callmama app download, free calling app, install callmama, ios android calling app"
        schema={[
          mobileAppSchema,
          faqSchema(dlFaqs),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Download App', path: '/download-callmama-app/' },
          ]),
        ]}
      />
      <Nav />
      <DlHero />
      <PlatformsSection />
      <DayOneSection />
      <QuickStartSection />

      <Testimonials inner />
      <DlFAQ />
      <Final />
      <Tweaks />
    </>
  )
}
