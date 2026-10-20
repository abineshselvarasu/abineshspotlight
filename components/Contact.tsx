import Link from 'next/link'
import ShootingStarsGrid from './ShootingStarsGrid'
import AskAI from './AskAI'
import { GitHubIcon, LinkedInIcon, WhatsAppIcon, WordPressIcon } from './icons'

const navLinks = [
  { label: 'Home',       href: '#hero' },
  { label: 'About',      href: '#about' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Blog',       href: '#blog' },
]

const socials = [
  { label: 'LinkedIn',      href: 'https://linkedin.com/in/abineshselvarasu/',         Icon: LinkedInIcon },
  { label: 'GitHub',        href: 'https://github.com/abineshselvarasu',               Icon: GitHubIcon },
  { label: 'WordPress.org', href: 'https://profiles.wordpress.org/abineshselvarasu/', Icon: WordPressIcon },
  { label: 'WhatsApp',      href: 'https://wa.me/919042972156',                        Icon: WhatsAppIcon },
]

const staggerDelays = ['delay-200', 'delay-300', 'delay-400', 'delay-500', 'delay-600']

export default function Contact() {
  return (
    <footer id="contact" className="relative bg-ink border-t border-canvas/10">
      <ShootingStarsGrid />
      {/* Main Footer Grid */}
      <div className="relative z-10 container mx-auto px-6 py-14 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12">

          {/* ── Column 1: Identity & Address ── */}
          <div className="space-y-6 md:col-span-5">
            <div>
              <p className="reveal-text text-sm font-mono text-accent uppercase tracking-widest font-bold mb-6">Open to Work</p>
              <h3 className="reveal-text font-display text-2xl sm:text-3xl text-canvas font-normal mb-1 delay-100">Abinesh Selvarasu</h3>
              <p className="reveal-text text-sm font-mono text-canvas/70 uppercase tracking-widest delay-200">
                Senior WordPress Developer &amp; Full Stack Engineer
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="mailto:mailtoabineshselva@gmail.com"
                className="reveal-text delay-300 group flex items-center gap-3 text-base sm:text-lg text-canvas/80 hover:text-accent transition-colors"
                aria-label="Email Abinesh Selvarasu"
              >
                <svg className="w-4 h-4 shrink-0 text-accent/80 group-hover:text-accent transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M2 7l10 7 10-7" />
                </svg>
                <span>mailtoabineshselva&#64;gmail&#46;com</span>
              </a>
              <a
                href="tel:+919042972156"
                className="reveal-text delay-400 group flex items-center gap-3 text-base sm:text-lg text-canvas/80 hover:text-accent transition-colors"
              >
                <svg className="w-4 h-4 shrink-0 text-accent/80 group-hover:text-accent transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 11a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
                +91 90429 72156
              </a>
              <div
                className="reveal-text delay-500 flex items-center gap-2 text-base sm:text-lg text-canvas/80 font-mono"
              >
                <svg className="w-4 h-4 shrink-0 text-accent/80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                  <circle cx="12" cy="9" r="2.5" />
                </svg>
                <span>Coimbatore, Tamil Nadu, India</span>
              </div>

              {/* Resume CTA */}
              <Link
                href="/resume"
                prefetch={true}
                className="reveal-text delay-600 group inline-flex items-center gap-2 mt-10 p-3.5 border border-accent/30 text-accent text-sm font-mono uppercase font-bold tracking-widest hover:bg-accent/10 transition-all rounded-full"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
                View Resume
              </Link>
            </div>
          </div>

          {/* ── Column 2: Quick Nav ── */}
          <div className="md:col-span-3 lg:col-span-3 lg:pl-6">
            <p className="reveal-text text-sm font-mono text-accent font-bold uppercase tracking-widest mb-6 delay-100">Quick Links</p>
            <nav className="space-y-3.5">
              {navLinks.map((link, idx) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`reveal-text ${staggerDelays[idx] ?? 'delay-200'} group flex items-center gap-2 text-base sm:text-lg text-canvas/80 hover:text-accent transition-colors font-mono`}
                >
                  <svg className="w-3.5 h-3.5 text-accent/30 group-hover:text-accent transition-all group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* ── Column 3: Socials + CTA ── */}
          <div className="md:col-span-4 lg:col-span-4 lg:pl-10">
            <p className="reveal-text text-sm font-mono text-accent font-bold uppercase tracking-widest mb-6 delay-100">Connect</p>

            <div className="space-y-3.5 mb-8">
              {socials.map(({ label, href, Icon }, idx) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`reveal-text ${staggerDelays[idx] ?? 'delay-200'} group flex items-center gap-3 text-base sm:text-lg text-canvas/80 hover:text-accent transition-colors`}
                >
                  <span className="w-9 h-9 rounded-full border border-canvas/10 group-hover:border-accent/40 bg-canvas/5 group-hover:bg-accent/5 flex items-center justify-center transition-all">
                    <Icon className="w-5 h-5" />
                  </span>
                  <span className="text-base sm:text-lg font-mono group-hover:text-accent transition-colors">{label}</span>
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="relative z-10 border-t border-canvas/10">
        <div className="container mx-auto px-6 py-5 flex flex-col-reverse sm:flex-row items-center justify-between gap-4">
          <p className="reveal-text delay-100 text-sm sm:text-base font-mono text-canvas/90 text-center sm:text-left">
            © {new Date().getFullYear()} <span className="text-canvas hover:text-accent transition-colors"><a href="#hero">abineshspotlight.online</a></span> · All rights reserved.
          </p>
          <div className="reveal-text delay-200 flex items-center gap-6 flex-wrap justify-center">
            <AskAI />
            <a
              href="#hero"
              className="group flex items-center gap-1.5 py-1.5 -my-1.5 text-sm sm:text-base font-mono font-medium text-canvas hover:text-accent transition-colors"
            >
              Back to top
              <svg className="w-4 h-4 text-accent transition-transform group-hover:-translate-y-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 19V5M5 12l7-7 7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>

    </footer>
  )
}
