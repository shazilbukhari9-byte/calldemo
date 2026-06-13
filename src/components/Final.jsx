import React from "react";
import { FaApple, FaGooglePlay } from 'react-icons/fa'
import { Link } from 'react-router-dom'


export default function Final() {
  return (
    <section className="final">
      <div className="final-inner">
        <h2>
          Pick up where you<br /><span className="serif-grad">left off.</span>
        </h2>
        <p>One tap to install. One more to call. It really is that simple.</p>
        <div className="final-cta">
          <a
            className="store-btn"
            href="https://apps.apple.com/us/app/callmama-numbers-calls-sms/id6752691983"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaApple className="store-icon" aria-hidden="true" />
            <div className="t"><small>Download on the</small><strong>App Store</strong></div>
          </a>
          <a
            className="store-btn"
            href="https://play.google.com/store/apps/details?id=com.callmama"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGooglePlay className="store-icon" aria-hidden="true" />
            <div className="t"><small>Get it on</small><strong>Google Play</strong></div>
          </a>
        </div>
      </div>

      <div className="footer">
        <div className="footer-brand">
          <Link className="brand" to="/" aria-label="Callmama home">
            <img src="/assets/callmama-white-logo.webp?v=3" alt="Callmama" className="brand-logo" width="138" height="31" />
          </Link>
          <p className="about" style={{ marginTop: '18px' }}>
            Stay Connected Anytime, Anywhere,<br />Talk Freely Globally.
          </p>
          <div className="footer-social" aria-label="Social media">
            <a href="https://in.pinterest.com/callmama_/" target="_blank" rel="noopener noreferrer" aria-label="Pinterest">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.04 2C6.5 2 3.5 5.72 3.5 9.78c0 1.89 1 4.24 2.62 4.99.25.12.39.07.45-.17.05-.18.27-1.06.36-1.46.03-.13.02-.25-.09-.38-.55-.66-.99-1.87-.99-3 0-2.9 2.2-5.71 5.94-5.71 3.23 0 5.49 2.2 5.49 5.36 0 3.57-1.8 6.04-4.14 6.04-1.29 0-2.26-1.07-1.95-2.39.37-1.57 1.09-3.27 1.09-4.41 0-1.02-.55-1.86-1.68-1.86-1.33 0-2.41 1.38-2.41 3.22 0 1.18.4 1.97.4 1.97s-1.34 5.66-1.58 6.7c-.47 2 .07 5.24.12 5.52.03.16.21.21.3.08.13-.18 1.81-2.69 2.32-4.64.18-.71 1.09-4.27 1.09-4.27.54 1.04 2.13 1.93 3.81 1.93 5.01 0 8.41-4.57 8.41-10.69C20.99 5.86 17.16 2 12.04 2z"/></svg>
            </a>
            <a href="https://www.youtube.com/@CallmamaApp" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23.5 6.5a3 3 0 0 0-2.1-2.13C19.5 3.85 12 3.85 12 3.85s-7.5 0-9.4.52A3 3 0 0 0 .5 6.5C0 8.4 0 12 0 12s0 3.6.5 5.5a3 3 0 0 0 2.1 2.13c1.9.52 9.4.52 9.4.52s7.5 0 9.4-.52a3 3 0 0 0 2.1-2.13c.5-1.9.5-5.5.5-5.5s0-3.6-.5-5.5zM9.6 15.6V8.4l6.2 3.6-6.2 3.6z"/></svg>
            </a>
            <a href="https://www.linkedin.com/company/callmama/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z"/></svg>
            </a>
            <a href="https://x.com/callmama_info" target="_blank" rel="noopener noreferrer" aria-label="X">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/></svg>
            </a>
            <a href="https://www.facebook.com/callmama1" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M24 12c0-6.63-5.37-12-12-12S0 5.37 0 12c0 5.99 4.39 10.95 10.13 11.85V15.47H7.08V12h3.05V9.36c0-3.01 1.79-4.67 4.53-4.67 1.31 0 2.69.23 2.69.23v2.96h-1.52c-1.49 0-1.95.93-1.95 1.88V12h3.32l-.53 3.47h-2.79v8.38C19.61 22.95 24 17.99 24 12z"/></svg>
            </a>
            <a href="https://instagram.com/callmama_" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63a5.86 5.86 0 0 0-2.13 1.38A5.86 5.86 0 0 0 .63 4.14C.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.31.79.73 1.46 1.38 2.13a5.86 5.86 0 0 0 2.13 1.38c.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.86 5.86 0 0 0 2.13-1.38 5.86 5.86 0 0 0 1.38-2.13c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.86 5.86 0 0 0-1.38-2.13A5.86 5.86 0 0 0 19.86.63C19.1.33 18.22.13 16.95.07 15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zm0 10.16A4 4 0 1 1 12 8a4 4 0 0 1 0 8zm6.41-11.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/></svg>
            </a>
          </div>
        </div>
        <div>
          <h5>Products</h5>
          <ul>
            <li><Link to="/virtual-phone-number/">Virtual Phone Number</Link></li>
            <li><Link to="/international-calling/">International Calling</Link></li>
            <li><Link to="/send-and-receive-sms/">Send &amp; Receive SMS</Link></li>
            <li><Link to="/download-callmama-app/">Download App</Link></li>
          </ul>
        </div>
        <div>
          <h5>Features</h5>
          <ul>
            <li><Link to="/features/">All Features</Link></li>
            <li><Link to="/features/call-recording/">Call Recording</Link></li>
            <li><Link to="/features/caller-id/">Caller ID</Link></li>
            <li><Link to="/features/call-forwarding/">Call Forwarding</Link></li>
            <li><Link to="/features/voicemail/">Voicemail</Link></li>
          </ul>
        </div>
        <div>
          <h5>Company</h5>
          <ul>
            <li><Link to="/about-us/">About Us</Link></li>
            <li><Link to="/blog/">Blog</Link></li>
            <li><Link to="/how-to-use-callmama-app/">How to Use CallMama</Link></li>
            <li><Link to="/help-and-support/">Help &amp; Support</Link></li>
            <li><Link to="/contact-us/">Contact Us</Link></li>
          </ul>
        </div>
        <div>
          <h5>Legal</h5>
          <ul>
            <li><Link to="/acceptable-use-policy/">Acceptable Use Policy</Link></li>
            <li><Link to="/call-recording-notice/">Call Recording Notice</Link></li>
            <li><Link to="/refund-and-cancellation-policy/">Refund &amp; Cancellation Policy</Link></li>
            <li><Link to="/subprocessors/">Sub-processor List</Link></li>
            <li><Link to="/accessibility-statement/">Accessibility Statement</Link></li>
            <li><Link to="/dpa/">Data Processing Agreement</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-bot">
        <span className="footer-legal">
          <Link to="/terms-and-conditions/">Terms of Service</Link>
          <span className="sep" aria-hidden="true">|</span>
          <Link to="/privacy-policy/">Privacy Policy</Link>
          <span className="sep" aria-hidden="true">|</span>
          <Link to="/cookie-policy/">Cookie Policy</Link>
          <span className="sep" aria-hidden="true">|</span>
          <button
            type="button"
            className="footer-cookie-btn"
            onClick={() => window.dispatchEvent(new CustomEvent('cookieconsentopen'))}
          >
            Cookie preferences
          </button>
        </span>
        <span>Copyright © 2026 CallMama Limited, All Rights Reserved</span>
      </div>
    </section>
  )
}
