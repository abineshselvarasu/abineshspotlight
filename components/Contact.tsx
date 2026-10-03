'use client'
import Link from 'next/link'
import ShootingStarsGrid from './ShootingStarsGrid'
import AskAI from './AskAI'

export default function Contact() {
  const navLinks = [
    { label: 'Home',       href: '#hero' },
    { label: 'About',      href: '#about' },
    { label: 'Skills',     href: '#skills' },
    { label: 'Projects',   href: '#projects' },
    { label: 'Resume',     href: '/resume' },
    { label: 'Blog',       href: '#blog' },
  ]

  const currentYear = new Date().getFullYear()

  const socials = [
    {
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/abineshselvarasu/',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      label: 'GitHub',
      href: 'https://github.com/abineshselvarasu',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
        </svg>
      ),
    },
    {
      label: 'WordPress.org',
      href: 'https://profiles.wordpress.org/abineshselvarasu/',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 28 28" fill="currentColor">
          <path d="M13.6052 0.923525C16.1432 0.923525 18.6137 1.67953 20.7062 3.09703C22.7447 4.47403 24.3512 6.41803 25.3097 8.68603C26.9837 12.6415 26.5382 17.164 24.1352 20.7145C22.7582 22.753 20.8142 24.3595 18.5462 25.318C14.5907 26.992 10.0682 26.5465 6.51772 24.1435C4.47922 22.7665 2.87272 20.8225 1.91422 18.5545C0.240225 14.599 0.685725 10.0765 3.08872 6.52603C4.46572 4.48753 6.40973 2.88103 8.67772 1.92253C10.2302 1.26103 11.9177 0.923525 13.6052 0.923525ZM13.6052 0.113525C6.15322 0.113525 0.105225 6.16153 0.105225 13.6135C0.105225 21.0655 6.15322 27.1135 13.6052 27.1135C21.0572 27.1135 27.1052 21.0655 27.1052 13.6135C27.1052 6.16153 21.0572 0.113525 13.6052 0.113525Z" />
          <path d="M2.36011 13.6133C2.36011 17.9198 4.81711 21.8618 8.70511 23.7383L3.33211 9.03684C2.68411 10.4813 2.36011 12.0338 2.36011 13.6133ZM21.2061 13.0463C21.2061 11.6558 20.7066 10.6973 20.2746 9.94134C19.8426 9.18534 19.1676 8.22684 19.1676 7.30884C19.1676 6.39084 19.9506 5.31084 21.0576 5.31084H21.2061C16.6296 1.11234 9.51511 1.42284 5.31661 6.01284C4.91161 6.45834 4.53361 6.93084 4.20961 7.43034H4.93861C6.11311 7.43034 7.93561 7.28184 7.93561 7.28184C8.54311 7.24134 8.61061 8.13234 8.00311 8.21334C8.00311 8.21334 7.39561 8.28084 6.72061 8.32134L10.8111 20.5118L13.2681 13.1273L11.5131 8.32134C10.9056 8.28084 10.3386 8.21334 10.3386 8.21334C9.73111 8.17284 9.79861 7.25484 10.4061 7.28184C10.4061 7.28184 12.2691 7.43034 13.3626 7.43034C14.4561 7.43034 16.3596 7.28184 16.3596 7.28184C16.9671 7.24134 17.0346 8.13234 16.4271 8.21334C16.4271 8.21334 15.8196 8.28084 15.1446 8.32134L19.2081 20.4173L20.3691 16.7453C20.8821 15.1388 21.1926 14.0048 21.1926 13.0328L21.2061 13.0463ZM13.7946 14.5853L10.4196 24.3998C12.6876 25.0613 15.1041 25.0073 17.3316 24.2243L17.2506 24.0758L13.7946 14.5853ZM23.4741 8.21334C23.5281 8.59134 23.5551 8.98284 23.5551 9.37434C23.5551 10.5218 23.3391 11.8043 22.7046 13.3973L19.2621 23.3333C24.5271 20.2688 26.4036 13.5593 23.4741 8.21334Z" />
        </svg>
      ),
    },
    {
      label: 'WhatsApp',
      href: 'https://wa.me/919042972156',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      ),
    },
  ]

  return (
    <footer id="contact" className="relative bg-ink border-t border-canvas/10">
      <ShootingStarsGrid />
      {/* Main Footer Grid */}
      <div className="relative z-10 container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12">

          {/* ── Column 1: Identity & Address ── */}
          <div className="space-y-6 md:col-span-5 reveal-text" itemScope itemType="https://schema.org/ProfessionalService">
            <div>
              <p className="text-sm font-mono text-accent uppercase tracking-widest font-bold mb-6">Open to Work</p>
              <h3 className="font-display text-2xl sm:text-3xl text-canvas font-normal mb-1" itemProp="name">Abinesh Selvarasu</h3>
              <p className="text-sm font-mono text-canvas/70 uppercase tracking-widest" itemProp="jobTitle">
                Senior WordPress Developer &amp; Full Stack Engineer
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="mailto:mailtoabineshselva@gmail.com"
                className="group flex items-center gap-3 text-base sm:text-lg text-canvas/80 hover:text-accent transition-colors"
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
                className="group flex items-center gap-3 text-base sm:text-lg text-canvas/80 hover:text-accent transition-colors"
                itemProp="telephone"
              >
                <svg className="w-4 h-4 shrink-0 text-accent/80 group-hover:text-accent transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 11a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
                +91 90429 72156
              </a>
              <div
                className="flex items-center gap-2 text-base sm:text-lg text-canvas/80 font-mono"
                itemProp="address"
                itemScope
                itemType="https://schema.org/PostalAddress"
              >
                <svg className="w-4 h-4 shrink-0 text-accent/80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                  <circle cx="12" cy="9" r="2.5" />
                </svg>
                <span itemProp="streetAddress">Coimbatore,</span>
                <span itemProp="addressRegion">Tamil Nadu,</span>
                <span itemProp="addressCountry">India</span>
              </div>

              {/* Resume CTA */}
              <Link
                href="/resume"
                prefetch={true}
                className="group inline-flex items-center gap-2 mt-10 p-3.5 border border-accent/30 text-accent text-sm font-mono uppercase font-bold tracking-widest hover:bg-accent/10 transition-all rounded-full"
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
          <div className="md:col-span-3 lg:col-span-3 lg:pl-6 reveal-text">
            <p className="text-sm font-mono text-accent font-bold uppercase tracking-widest mb-6">Quick Links</p>
            <nav className="space-y-3.5">
              {navLinks.map((link) => (
                link.href.startsWith('/') ? (
                  <Link
                    key={link.label}
                    href={link.href}
                    prefetch={true}
                    className="group flex items-center gap-2 text-base sm:text-lg text-canvas/80 hover:text-accent transition-colors font-mono"
                  >
                    <svg className="w-3.5 h-3.5 text-accent/30 group-hover:text-accent transition-all group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    className="group flex items-center gap-2 text-base sm:text-lg text-canvas/80 hover:text-accent transition-colors font-mono"
                  >
                    <svg className="w-3.5 h-3.5 text-accent/30 group-hover:text-accent transition-all group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                    {link.label}
                  </a>
                )
              ))}
            </nav>
          </div>

          {/* ── Column 3: Socials + CTA ── */}
          <div className="md:col-span-4 lg:col-span-4 lg:pl-10 reveal-text">
            <p className="text-sm font-mono text-accent font-bold uppercase tracking-widest mb-6">Connect</p>

            <div className="space-y-3.5 mb-8">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-base sm:text-lg text-canvas/80 hover:text-accent transition-colors"
                >
                  <span className="w-9 h-9 rounded-full border border-canvas/10 group-hover:border-accent/40 bg-canvas/5 group-hover:bg-accent/5 flex items-center justify-center transition-all">
                    {s.icon}
                  </span>
                  <span className="text-base sm:text-lg font-mono group-hover:text-accent transition-colors">{s.label}</span>
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="relative z-10 border-t border-canvas/10">
        <div className="container mx-auto px-6 py-5 flex flex-col-reverse sm:flex-row items-center justify-between gap-4">
          <p className="text-sm sm:text-base font-mono text-canvas/90 text-center sm:text-left">
            © {new Date().getFullYear()} <span className="text-canvas hover:text-accent transition-colors"><a href="#hero">abineshspotlight.online</a></span> · All rights reserved.
          </p>
          <div className="flex items-center gap-6 flex-wrap justify-center">
            <AskAI />
            <a
              href="#hero"
              className="group flex items-center gap-1.5 text-sm sm:text-base font-mono font-medium text-canvas hover:text-accent transition-colors"
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
