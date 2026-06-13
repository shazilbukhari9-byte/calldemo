import { useEffect, useState } from 'react'

const SWATCHES = ['#1B99F9', '#2563EB', '#0EA5E9', '#7C3AED', '#059669', '#E11D48', '#F59E0B', '#161616']

const DEFAULTS = {
  brand: '#00aeff',
  heroVariant: 'default',
  labelStyle: 'soft',
}

export default function Tweaks() {
  const [visible, setVisible] = useState(false)
  const [state, setState] = useState(DEFAULTS)

  useEffect(() => {
    function onMsg(e) {
      const d = e.data || {}
      if (d.type === '__activate_edit_mode') setVisible(true)
      if (d.type === '__deactivate_edit_mode') setVisible(false)
    }
    window.addEventListener('message', onMsg)
    try { window.parent.postMessage({ type: '__edit_mode_available' }, '*') } catch (e) { /* noop */ }
    return () => window.removeEventListener('message', onMsg)
  }, [])

  useEffect(() => {
    const b = state.brand
    document.documentElement.style.setProperty('--brand', b)
    document.documentElement.style.setProperty('--brand-ink', `color-mix(in oklab, ${b} 70%, #000 30%)`)
    document.documentElement.style.setProperty('--brand-soft', `color-mix(in oklab, ${b} 10%, #fff 90%)`)
    document.documentElement.style.setProperty('--brand-softer', `color-mix(in oklab, ${b} 5%, #fff 95%)`)

    const labels = document.querySelectorAll('.section-label')
    labels.forEach((l) => {
      if (state.labelStyle === 'neutral') {
        l.style.background = '#F2F4F7'; l.style.color = '#3A3A3A'; l.style.borderColor = '#E6E8EC'
      } else if (state.labelStyle === 'dark') {
        l.style.background = '#161616'; l.style.color = '#fff'; l.style.borderColor = '#161616'
      } else {
        l.style.background = ''; l.style.color = ''; l.style.borderColor = ''
      }
    })
  }, [state])

  const saveKeys = (edits) => {
    try { window.parent.postMessage({ type: '__edit_mode_set_keys', edits }, '*') } catch (e) { /* noop */ }
  }

  const setBrand = (b) => { setState((s) => ({ ...s, brand: b })); saveKeys({ brand: b }) }
  const setHero = (v) => { setState((s) => ({ ...s, heroVariant: v })); saveKeys({ heroVariant: v }) }
  const setLabel = (v) => { setState((s) => ({ ...s, labelStyle: v })); saveKeys({ labelStyle: v }) }

  return (
    <div className={`tweak${visible ? ' on' : ''}`}>
      <h6>Tweaks</h6>
      <label>
        Brand color
        <input type="color" value={state.brand} onChange={(e) => setBrand(e.target.value)} />
      </label>
      <label>
        Quick swatches
        <div className="swatches">
          {SWATCHES.map((c) => (
            <span
              key={c}
              className={`sw${c === state.brand ? ' active' : ''}`}
              style={{ background: c }}
              onClick={() => setBrand(c)}
            />
          ))}
        </div>
      </label>
      <label>
        Hero variant
        <select
          value={state.heroVariant}
          onChange={(e) => setHero(e.target.value)}
          style={{ border: '1px solid var(--line)', borderRadius: 8, padding: '4px 8px', fontSize: 13, background: '#fff' }}
        >
          <option value="default">Phone center</option>
          <option value="dense">Dense cards</option>
          <option value="calm">Calm (fewer cards)</option>
        </select>
      </label>
      <label>
        Section label style
        <select
          value={state.labelStyle}
          onChange={(e) => setLabel(e.target.value)}
          style={{ border: '1px solid var(--line)', borderRadius: 8, padding: '4px 8px', fontSize: 13, background: '#fff' }}
        >
          <option value="soft">Blue soft</option>
          <option value="neutral">Neutral gray</option>
          <option value="dark">Dark chip</option>
        </select>
      </label>
    </div>
  )
}
