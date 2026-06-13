import { testimonials } from '../data/testimonials.js'

function TestimonialCard({ t }) {
  return (
    <div className="t-card">
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
  )
}

function Column({ arr, dir }) {
  return (
    <div className={`tcol ${dir}`}>
      {arr.map((t, i) => <TestimonialCard key={`a-${i}`} t={t} />)}
      {arr.map((t, i) => <TestimonialCard key={`b-${i}`} t={t} />)}
    </div>
  )
}

export default function Testimonials({ label = '05 — WHAT CUSTOMERS ARE SAYING', inner = false } = {}) {
  const perCol = Math.ceil(testimonials.length / 3)
  const col1 = testimonials.slice(0, perCol)
  const col2 = testimonials.slice(perCol, perCol * 2)
  const col3 = testimonials.slice(perCol * 2)

  return (
    <section style={{ paddingTop: '40px' }}>
      <div className="wrap" style={{ textAlign: 'center' }}>
        <span className="section-label">{label}</span>
        <h2 className={`sh${inner ? ' sh-inner' : ''}`} style={{ marginInline: 'auto' }}>
          People actually use it<br />to call their <span className="serif-grad">actual clients.</span>
        </h2>
        <div className="tgrid">
          <Column arr={col1} dir="up" />
          <Column arr={col2} dir="down" />
          <Column arr={col3} dir="up" />
        </div>
      </div>
    </section>
  )
}
