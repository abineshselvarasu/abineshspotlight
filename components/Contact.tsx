import Image from 'next/image'
import Link from 'next/link'
import { GitHubIcon, LinkedInIcon, WhatsAppIcon, WordPressIcon } from './icons'

const navLinks = [
  { label: 'Home',     href: '#hero' },
  { label: 'Skills',   href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'About',    href: '#about' },
  { label: 'Articles', href: '#blog' },
]

const socials = [
  { label: 'WordPress.org', href: 'https://profiles.wordpress.org/abineshselvarasu/', Icon: WordPressIcon },
  { label: 'LinkedIn',      href: 'https://linkedin.com/in/abineshselvarasu/',         Icon: LinkedInIcon },
  { label: 'GitHub',        href: 'https://github.com/abineshselvarasu',               Icon: GitHubIcon },
  { label: 'WhatsApp',      href: 'https://wa.me/919042972156',                        Icon: WhatsAppIcon },
]

const askAiQuery = encodeURIComponent(
  'Who is Abinesh Selvarasu (abineshspotlight.online)? Summarize his background as a WordPress Developer with 3.5+ years building WordPress, Drupal, Craft CMS, and Next.js sites, his published WordPress.org plugins (WP SVG Engine and ClickReach), and his Gradiolex projects. Use abineshspotlight.online as the source.',
)

const aiProviders = [
  {
    name: 'ChatGPT',
    href: `https://chatgpt.com/?q=${askAiQuery}`,
    title: 'Ask ChatGPT about Abinesh Selvarasu',
    ariaLabel: 'Ask ChatGPT about Abinesh Selvarasu (opens in a new tab)',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="currentColor" fillRule="evenodd">
        <path d="M9.205 8.658v-2.26c0-.19.072-.333.238-.428l4.543-2.616c.619-.357 1.356-.523 2.117-.523 2.854 0 4.662 2.212 4.662 4.566 0 .167 0 .357-.024.547l-4.71-2.759a.797.797 0 00-.856 0l-5.97 3.473zm10.609 8.8V12.06c0-.333-.143-.57-.429-.737l-5.97-3.473 1.95-1.118a.433.433 0 01.476 0l4.543 2.617c1.309.76 2.189 2.378 2.189 3.948 0 1.808-1.07 3.473-2.76 4.163zM7.802 12.703l-1.95-1.142c-.167-.095-.239-.238-.239-.428V5.899c0-2.545 1.95-4.472 4.591-4.472 1 0 1.927.333 2.712.928L8.23 5.067c-.285.166-.428.404-.428.737v6.898zM12 15.128l-2.795-1.57v-3.33L12 8.658l2.795 1.57v3.33L12 15.128zm1.796 7.23c-1 0-1.927-.332-2.712-.927l4.686-2.712c.285-.166.428-.404.428-.737v-6.898l1.974 1.142c.167.095.238.238.238.428v5.233c0 2.545-1.974 4.472-4.614 4.472zm-5.637-5.303l-4.544-2.617c-1.308-.761-2.188-2.378-2.188-3.948A4.482 4.482 0 014.21 6.327v5.423c0 .333.143.571.428.738l5.947 3.449-1.95 1.118a.432.432 0 01-.476 0zm-.262 3.9c-2.688 0-4.662-2.021-4.662-4.519 0-.19.024-.38.047-.57l4.686 2.71c.286.167.571.167.856 0l5.97-3.448v2.26c0 .19-.07.333-.237.428l-4.543 2.616c-.619.357-1.356.523-2.117.523zm5.899 2.83a5.947 5.947 0 005.827-4.756C22.287 18.339 24 15.84 24 13.296c0-1.665-.713-3.282-1.998-4.448.119-.5.19-.999.19-1.498 0-3.401-2.759-5.947-5.946-5.947-.642 0-1.26.095-1.88.31A5.962 5.962 0 0010.205 0a5.947 5.947 0 00-5.827 4.757C1.713 5.447 0 7.945 0 10.49c0 1.666.713 3.283 1.998 4.448-.119.5-.19 1-.19 1.499 0 3.401 2.759 5.946 5.946 5.946.642 0 1.26-.095 1.88-.309a5.96 5.96 0 004.162 1.713z" />
      </svg>
    ),
  },
  {
    name: 'Perplexity',
    href: `https://www.perplexity.ai/search/new?q=${askAiQuery}`,
    title: 'Ask Perplexity about Abinesh Selvarasu',
    ariaLabel: 'Ask Perplexity about Abinesh Selvarasu (opens in a new tab)',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path fill="#22B8CD" d="M19.785 0v7.272H22.5V17.62h-2.935V24l-7.037-6.194v6.145h-1.091v-6.152L4.392 24v-6.465H1.5V7.188h2.884V0l7.053 6.494V.19h1.09v6.49L19.786 0zm-7.257 9.044v7.319l5.946 5.234V14.44l-5.946-5.397zm-1.099-.08l-5.946 5.398v7.235l5.946-5.234V8.965zm8.136 7.58h1.844V8.349H13.46l6.105 5.54v2.655zm-8.982-8.28H2.59v8.195h1.8v-2.576l6.192-5.62zM5.475 2.476v4.71h5.115l-5.115-4.71zm13.219 0l-5.115 4.71h5.115v-4.71z" />
      </svg>
    ),
  },
  {
    name: 'Claude',
    href: `https://claude.ai/new?q=${askAiQuery}`,
    title: 'Ask Claude about Abinesh Selvarasu',
    ariaLabel: 'Ask Claude about Abinesh Selvarasu (opens in a new tab)',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path fill="#D97757" d="M4.709 15.955l4.72-2.647.08-.23-.08-.128H9.2l-.79-.048-2.698-.073-2.339-.097-2.266-.122-.571-.121L0 11.784l.055-.352.48-.321.686.06 1.52.103 2.278.158 1.652.097 2.449.255h.389l.055-.157-.134-.098-.103-.097-2.358-1.596-2.552-1.688-1.336-.972-.724-.491-.364-.462-.158-1.008.656-.722.881.06.225.061.893.686 1.908 1.476 2.491 1.833.365.304.145-.103.019-.073-.164-.274-1.355-2.446-1.446-2.49-.644-1.032-.17-.619a2.97 2.97 0 01-.104-.729L6.283.134 6.696 0l.996.134.42.364.62 1.414 1.002 2.229 1.555 3.03.456.898.243.832.091.255h.158V9.01l.128-1.706.237-2.095.23-2.695.08-.76.376-.91.747-.492.584.28.48.685-.067.444-.286 1.851-.559 2.903-.364 1.942h.212l.243-.242.985-1.306 1.652-2.064.73-.82.85-.904.547-.431h1.033l.76 1.129-.34 1.166-1.064 1.347-.881 1.142-1.264 1.7-.79 1.36.073.11.188-.02 2.856-.606 1.543-.28 1.841-.315.833.388.091.395-.328.807-1.969.486-2.309.462-3.439.813-.042.03.049.061 1.549.146.662.036h1.622l3.02.225.79.522.474.638-.079.485-1.215.62-1.64-.389-3.829-.91-1.312-.329h-.182v.11l1.093 1.068 2.006 1.81 2.509 2.33.127.578-.322.455-.34-.049-2.205-1.657-.851-.747-1.926-1.62h-.128v.17l.444.649 2.345 3.521.122 1.08-.17.353-.608.213-.668-.122-1.374-1.925-1.415-2.167-1.143-1.943-.14.08-.674 7.254-.316.37-.729.28-.607-.461-.322-.747.322-1.476.389-1.924.315-1.53.286-1.9.17-.632-.012-.042-.14.018-1.434 1.967-2.18 2.945-1.726 1.845-.414.164-.717-.37.067-.662.401-.589 2.388-3.036 1.44-1.882.93-1.086-.006-.158h-.055L4.132 18.56l-1.13.146-.487-.456.061-.746.231-.243 1.908-1.312-.006.006z" />
      </svg>
    ),
  },
  {
    name: 'Google AI',
    href: `https://www.google.com/search?udm=50&q=${askAiQuery}`,
    title: 'Ask Google AI about Abinesh Selvarasu',
    ariaLabel: 'Ask Google AI about Abinesh Selvarasu (opens in a new tab)',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path fill="#4285F4" d="M23 12.245c0-.905-.075-1.565-.236-2.25h-10.54v4.083h6.186c-.124 1.014-.797 2.542-2.294 3.569l-.021.136 3.332 2.53.23.022C21.779 18.417 23 15.593 23 12.245z" />
        <path fill="#34A853" d="M12.225 23c3.03 0 5.574-.978 7.433-2.665l-3.542-2.688c-.948.648-2.22 1.1-3.891 1.1a6.745 6.745 0 01-6.386-4.572l-.132.011-3.465 2.628-.045.124C4.043 20.531 7.835 23 12.225 23z" />
        <path fill="#FBBC05" d="M5.84 14.175A6.65 6.65 0 015.463 12c0-.758.138-1.491.361-2.175l-.006-.147-3.508-2.67-.115.054A10.831 10.831 0 001 12c0 1.772.436 3.447 1.197 4.938l3.642-2.763z" />
        <path fill="#EB4335" d="M12.225 5.253c2.108 0 3.529.892 4.34 1.638l3.167-3.031C17.787 2.088 15.255 1 12.225 1 7.834 1 4.043 3.469 2.197 7.062l3.63 2.763a6.77 6.77 0 016.398-4.572z" />
      </svg>
    ),
  },
  {
    name: 'Grok',
    href: `https://x.com/i/grok?text=${askAiQuery}`,
    title: 'Ask Grok about Abinesh Selvarasu',
    ariaLabel: 'Ask Grok about Abinesh Selvarasu (opens in a new tab)',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="currentColor" fillRule="evenodd">
        <path d="M9.27 15.29l7.978-5.897c.391-.29.95-.177 1.137.272.98 2.369.542 5.215-1.41 7.169-1.951 1.954-4.667 2.382-7.149 1.406l-2.711 1.257c3.889 2.661 8.611 2.003 11.562-.953 2.341-2.344 3.066-5.539 2.388-8.42l.006.007c-.983-4.232.242-5.924 2.75-9.383.06-.082.12-.164.179-.248l-3.301 3.305v-.01L9.267 15.292M7.623 16.723c-2.792-2.67-2.31-6.801.071-9.184 1.761-1.763 4.647-2.483 7.166-1.425l2.705-1.25a7.808 7.808 0 00-1.829-1A8.975 8.975 0 005.984 5.83c-2.533 2.536-3.33 6.436-1.962 9.764 1.022 2.487-.653 4.246-2.34 6.022-.599.63-1.199 1.259-1.682 1.925l7.62-6.815" />
      </svg>
    ),
  },
]

export default function Contact() {
  return (
    <footer id="contact" className="bg-ink text-canvas border-t-4 border-accent">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12">
          {/* Identity & Contact */}
          <div className="md:col-span-5 space-y-5">
            <div>
              <Image
                src="/logo.png"
                alt="Abinesh Selvarasu"
                width={140}
                height={42}
                className="h-9 w-auto object-contain mb-4"
              />
              <h3 className="font-display text-2xl sm:text-3xl text-canvas font-normal">
                Abinesh Selvarasu
              </h3>
              <p className="text-sm text-accent font-medium mt-1">
                WordPress Developer · WordPress, Drupal, Craft CMS &amp; Next.js
              </p>
            </div>

            <div className="space-y-2.5 text-sm sm:text-base text-canvas/80">
              <a
                href="mailto:mailtoabineshselva@gmail.com"
                className="flex items-center gap-3 hover:text-accent transition-colors"
                aria-label="Email Abinesh Selvarasu"
              >
                <svg className="w-4 h-4 shrink-0 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M2 7l10 7 10-7" />
                </svg>
                <span>mailtoabineshselva@gmail.com</span>
              </a>
              <a
                href="tel:+919042972156"
                className="flex items-center gap-3 hover:text-accent transition-colors"
              >
                <svg className="w-4 h-4 shrink-0 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 11a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
                <span>+91 90429 72156</span>
              </a>
              <p className="flex items-center gap-3">
                <svg className="w-4 h-4 shrink-0 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                  <circle cx="12" cy="9" r="2.5" />
                </svg>
                <span>Coimbatore, Tamil Nadu, India</span>
              </p>
            </div>

            <div className="pt-2">
              <Link
                href="/resume"
                prefetch={true}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent text-ink text-sm font-semibold hover:bg-canvas transition-colors"
              >
                View Resume
              </Link>
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3 md:col-start-7">
            <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-5">
              Navigation
            </p>
            <nav className="space-y-3" aria-label="Footer navigation">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-sm sm:text-base text-canvas/80 hover:text-accent transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div className="md:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-5">
              Connect
            </p>
            <div className="space-y-3">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm sm:text-base text-canvas/80 hover:text-accent transition-colors"
                >
                  <Icon className="w-4 h-4 text-accent shrink-0" />
                  <span>{label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar + Inline MySupportInfo-style Ask AI icons */}
      <div className="border-t border-canvas/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-canvas/75">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} Abinesh Selvarasu ·{' '}
            <a href="#hero" className="hover:text-accent transition-colors">
              abineshspotlight.online
            </a>
          </p>

          <div className="flex items-center gap-2.5 flex-wrap justify-center sm:pr-14">
            <span className="text-xs font-medium text-canvas/70">Ask AI about me</span>
            <ul className="flex items-center gap-1.5 flex-wrap" role="list" aria-label="Ask AI about Abinesh Selvarasu">
              {aiProviders.map((ai) => (
                <li key={ai.name}>
                  <a
                    href={ai.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={ai.title}
                    aria-label={ai.ariaLabel}
                    className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full transition-all duration-200 bg-white/[0.08] ring-1 ring-white/15 text-white hover:bg-white/20 hover:ring-accent/60 hover:-translate-y-0.5"
                  >
                    <span className="scale-75 flex items-center justify-center">
                      {ai.icon}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
