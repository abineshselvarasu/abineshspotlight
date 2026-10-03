import type { Metadata } from 'next'
import Link from 'next/link'
import ResumeActions from '@/components/ResumeActions'
import ShootingStarsGrid from '@/components/ShootingStarsGrid'

export const metadata: Metadata = {
  title: 'Resume | Abinesh Selvarasu — Senior WordPress Developer & Full Stack Engineer',
  description:
    'Official digital resume of Abinesh Selvarasu, Senior WordPress Developer & Full Stack Engineer with 3+ years architecting enterprise CMS solutions, custom WordPress plugins, and Next.js applications.',
  alternates: {
    canonical: 'https://www.abineshspotlight.online/resume',
  },
  openGraph: {
    title: 'Resume | Abinesh Selvarasu — Senior WordPress Developer & Full Stack Engineer',
    description:
      'Senior WordPress Developer & Full Stack Engineer with 3+ years delivering production-grade enterprise platforms for Unbounce, OGP, ElasticPath, and Premier Boxing Champions.',
    url: 'https://www.abineshspotlight.online/resume',
    siteName: 'Abinesh Selvarasu Portfolio',
    type: 'profile',
  },
}

const skills = [
  {
    category: 'Languages & Frameworks',
    items: ['PHP (OOP / MVC)', 'JavaScript (ES6+)', 'TypeScript', 'React.js', 'Next.js 15', 'Dart / Flutter', 'Node.js', 'HTML5', 'CSS3 / SCSS', 'Tailwind CSS'],
  },
  {
    category: 'WordPress & CMS Architecture',
    items: ['Custom Themes & Plugins', 'Gutenberg Blocks (React & PHP)', 'ACF Pro (Modular Layouts)', 'Custom Post Types & Taxonomies', 'Hooks & Filters', 'REST API & WPGraphQL', 'WooCommerce', 'Multisite', 'Craft CMS', 'Drupal 7/9/10'],
  },
  {
    category: 'SEO & Performance Engineering',
    items: ['Core Web Vitals (LCP / CLS / INP)', 'Technical SEO', 'JSON-LD Structured Data', 'Sitemap Optimisation', 'PageSpeed Insights', 'Asset & Cache Optimisation', 'WCAG Accessibility'],
  },
  {
    category: 'DevOps & Hosting Environments',
    items: ['Git', 'GitHub Actions CI/CD', 'SSH Multi-Key Configs', 'Docker', 'Pantheon', 'WP Engine', 'Kinsta', 'Servd', 'Vercel', 'Staging-to-Production Deployments'],
  },
  {
    category: 'Backend, Databases & APIs',
    items: ['MySQL', 'REST API Design & Integration', 'Node.js', 'Nodemailer', 'Razorpay Integration', 'Firebase Auth', 'Supabase'],
  },
  {
    category: 'Design & Prototyping Tools',
    items: ['Figma to Pixel-Perfect Code', 'Responsive UI Prototyping', 'Photoshop', 'GIMP'],
  },
]

const plugins = [
  {
    name: 'WP SVG Engine',
    slug: 'svigent-tools',
    tagline: 'Secure SVG & SVGZ Upload, Preview, Dimension & Inlining',
    description: 'Enables safe SVG & SVGZ uploads with automated DOM sanitization, Media Library preview fixes, dimension detection, and fast client-side inlining.',
    stack: ['PHP', 'WordPress', 'DOM Sanitization', 'SVG'],
    url: 'https://wordpress.org/plugins/svigent-tools/',
  },
  {
    name: 'ClickReach – Social Share Buttons & Counter',
    slug: 'clickreach-social-share-buttons',
    tagline: 'Lightweight, Privacy-Friendly Social Sharing & Live Click Counter',
    description: 'Zero-bloat social sharing buttons with live click counters, pure inline SVGs, and Core Web Vitals friendly performance without third-party tracking scripts.',
    stack: ['WordPress', 'PHP', 'JavaScript', 'REST API'],
    url: 'https://wordpress.org/plugins/clickreach-social-share-buttons/',
  },
]

const enterpriseProjects = [
  { name: 'Unbounce.com', role: 'WordPress Developer', highlight: 'ACF architecture overhaul, CPT development, custom Gutenberg block suite, and performance tuning for SaaS platform used by 120k+ marketers.' },
  { name: 'OpenGovernmentPartnership.org', role: 'WordPress Developer', highlight: 'Large-scale CMS and Custom Post Type architecture for an international initiative spanning 75+ national governments.' },
  { name: 'TractionComplete.com', role: 'WordPress Developer', highlight: 'ACF architecture, performance improvements, and custom plugin development for Salesforce-native data management SaaS.' },
  { name: 'PPIC.org', role: 'WordPress Developer', highlight: 'Custom theme development, complex Gutenberg block architectures, and content migrations for leading policy research center.' },
  { name: 'ElasticPath.com', role: 'Craft CMS Developer', highlight: 'Full WCAG accessibility compliance and Core Web Vitals optimisation for enterprise headless commerce platform.' },
  { name: 'PremierBoxingChampions.com', role: 'Drupal Developer', highlight: 'Security hardening, module upgrades, and live fight-night concurrency optimisation for major US boxing promoter.' },
  { name: 'Intiveo.com', role: 'WordPress Developer', highlight: 'Custom WordPress components, interactive element integrations, and conversion flow optimisation for patient communication SaaS.' },
  { name: 'Loopio.com', role: 'WordPress Developer', highlight: 'Marketing website architecture, ACF modular layouts, and performance tuning for leading RFP response software platform.' },
]

export default function ResumePage() {
  const resumeSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    mainEntity: {
      '@type': 'Person',
      name: 'Abinesh Selvarasu',
      alternateName: 'Abinesh S',
      jobTitle: 'Senior WordPress Developer & Full Stack Engineer',
      description: 'Senior WordPress Developer and Full Stack Engineer with 3+ years delivering production-grade web platforms for global enterprise clients.',
      url: 'https://www.abineshspotlight.online/resume',
      email: 'mailtoabineshselva@gmail.com',
      telephone: '+919042972156',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Coimbatore',
        addressRegion: 'Tamil Nadu',
        addressCountry: 'India',
      },
      sameAs: [
        'https://linkedin.com/in/abineshselvarasu',
        'https://github.com/abineshselvarasu',
        'https://profiles.wordpress.org/abineshselvarasu/',
      ],
      alumniOf: {
        '@type': 'EducationalOrganization',
        name: 'Vidyaa Vikas College of Engineering (Anna University)',
      },
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(resumeSchema) }}
      />

      <div className="relative min-h-screen bg-ink text-canvas py-6 sm:py-10 lg:py-12 px-3 sm:px-6 lg:px-8 overflow-x-hidden selection:bg-accent selection:text-ink">
        
        {/* Signature Interactive Background Grid with Shooting Stars */}
        <div className="print:hidden">
          <ShootingStarsGrid />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-5xl mx-auto">
          
          {/* Floating Action Bar */}
          <ResumeActions />

          {/* Main Resume Sheet */}
          <main className="bg-canvas/5 border border-canvas/15 rounded-2xl sm:rounded-3xl p-4 sm:p-8 lg:p-12 shadow-2xl backdrop-blur-sm print:bg-white print:text-black print:border-none print:p-0 print:shadow-none">
            
            {/* ── HEADER ── */}
            <header className="border-b border-canvas/15 pb-6 sm:pb-8 mb-6 sm:mb-8 print:border-neutral-300 print:pb-6">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 sm:gap-6">
                <div>
                  <span className="text-xs font-mono uppercase tracking-[0.2em] text-accent font-semibold block mb-1.5 print:text-neutral-700">
                    Curriculum Vitae
                  </span>
                  <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-normal text-canvas tracking-tight print:text-black">
                    Abinesh <span className="text-accent print:text-black font-semibold">S</span>
                  </h1>
                  <p className="font-mono text-sm sm:text-base lg:text-lg text-canvas/80 mt-1.5 font-medium print:text-neutral-800">
                    Senior WordPress Developer &amp; Full Stack Engineer
                  </p>
                </div>

                {/* Contact Details */}
                <div className="text-xs sm:text-sm font-mono space-y-1.5 text-canvas/70 md:text-right print:text-neutral-700">
                  <p>Coimbatore, Tamil Nadu, India</p>
                  <p>
                    <a href="tel:+919042972156" className="hover:text-accent transition-colors print:text-black">
                      +91 90429 72156
                    </a>
                  </p>
                  <p className="break-all sm:break-normal">
                    <a href="mailto:mailtoabineshselva@gmail.com" className="hover:text-accent transition-colors print:text-black">
                      mailtoabineshselva@gmail.com
                    </a>
                  </p>
                  <div className="flex flex-wrap md:justify-end items-center gap-2 sm:gap-3 pt-1">
                    <a href="https://linkedin.com/in/abineshselvarasu/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-semibold print:text-black">
                      LinkedIn
                    </a>
                    <span>·</span>
                    <a href="https://github.com/abineshselvarasu" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-semibold print:text-black">
                      GitHub
                    </a>
                    <span>·</span>
                    <a href="https://profiles.wordpress.org/abineshselvarasu/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-semibold print:text-black">
                      WordPress.org
                    </a>
                    <span>·</span>
                    <Link href="/" className="text-accent hover:underline font-semibold print:text-black">
                      Portfolio
                    </Link>
                  </div>
                </div>
              </div>
            </header>

            {/* ── PROFESSIONAL SUMMARY ── */}
            <section className="mb-8 sm:mb-10">
              <h2 className="text-xs sm:text-sm font-mono uppercase tracking-widest text-accent font-bold mb-3 print:text-black">
                Professional Summary
              </h2>
              <p className="text-canvas/80 text-sm sm:text-base lg:text-lg leading-relaxed font-sans print:text-neutral-800">
                Senior WordPress Developer &amp; Full Stack Engineer with <strong>3+ years</strong> delivering production-grade websites for global enterprise clients via <strong>Dialed In Design (Canada)</strong>, including <em>Unbounce, Open Government Partnership, TractionComplete, Intiveo, PPIC,</em> and <em>Premier Boxing Champions</em>. Expert in custom PHP development, WordPress theme and plugin architecture, Gutenberg block systems, and ACF-driven CMS builds across WordPress, Drupal, and Craft CMS. Proven measurable impact: <strong>+15% organic traffic</strong>, <strong>−30% LCP</strong>, resolved critical sitemap indexing issues across <strong>1,700+ URLs</strong>, and scaled integration interfaces from 16 to 57+ items with zero regressions. Extends into React/Next.js frontends, Flutter mobile apps, and AI/LLM integration — CI/CD-disciplined with multi-platform hosting expertise across Pantheon, WP Engine, Kinsta, and Servd.
              </p>
            </section>

            {/* ── PUBLISHED WORDPRESS PLUGINS ── */}
            <section className="mb-8 sm:mb-10">
              <div className="flex items-center justify-between mb-3.5">
                <h2 className="text-xs sm:text-sm font-mono uppercase tracking-widest text-accent font-bold print:text-black">
                  Published WordPress.org Plugins
                </h2>
                <span className="text-xs font-mono text-canvas/50 hidden xs:inline print:hidden">Official Plugin Author</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4">
                {plugins.map((plugin) => (
                  <div key={plugin.name} className="border border-canvas/15 rounded-xl sm:rounded-2xl p-4 sm:p-5 bg-canvas/[0.03] hover:border-accent/50 transition-colors print:border-neutral-300 print:bg-neutral-50">
                    <div className="flex flex-col xs:flex-row xs:items-start justify-between gap-1.5 xs:gap-2 mb-2">
                      <h3 className="font-display text-lg sm:text-xl text-canvas font-normal print:text-black">
                        {plugin.name}
                      </h3>
                      <span className="self-start text-[10px] sm:text-[11px] font-mono px-2 py-0.5 rounded-full border border-accent/40 text-accent bg-accent/10 whitespace-nowrap print:border-neutral-400 print:text-neutral-800">
                        Live on WP.org
                      </span>
                    </div>
                    <p className="text-xs font-mono text-accent/90 mb-2 leading-snug print:text-neutral-700">{plugin.tagline}</p>
                    <p className="text-xs sm:text-sm text-canvas/70 leading-relaxed mb-4 print:text-neutral-700">{plugin.description}</p>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-2 border-t border-canvas/10 print:border-neutral-200">
                      <div className="flex flex-wrap gap-1">
                        {plugin.stack.map((tag) => (
                          <span key={tag} className="text-[10px] sm:text-[11px] font-mono px-2 py-0.5 rounded bg-canvas/5 border border-canvas/10 text-canvas/60 print:bg-neutral-200 print:text-black">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <a
                        href={plugin.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-mono font-semibold text-accent hover:underline inline-flex items-center gap-1 self-start sm:self-auto print:text-black"
                      >
                        View on WP.org ↗
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ── TECHNICAL SKILLS ── */}
            <section className="mb-8 sm:mb-10">
              <h2 className="text-xs sm:text-sm font-mono uppercase tracking-widest text-accent font-bold mb-3.5 print:text-black">
                Technical Competencies
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                {skills.map((group) => (
                  <div key={group.category} className="border border-canvas/10 rounded-xl p-3.5 sm:p-4 bg-canvas/[0.02] print:border-neutral-300 print:p-2.5">
                    <h3 className="text-xs font-mono uppercase tracking-wider text-accent font-semibold mb-2 print:text-black">
                      {group.category}
                    </h3>
                    <div className="flex flex-wrap gap-1 sm:gap-1.5">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="text-[11px] sm:text-xs font-mono px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md bg-canvas/5 border border-canvas/10 text-canvas/80 print:bg-neutral-100 print:border-neutral-300 print:text-black"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ── PROFESSIONAL WORK EXPERIENCE ── */}
            <section className="mb-8 sm:mb-10">
              <h2 className="text-xs sm:text-sm font-mono uppercase tracking-widest text-accent font-bold mb-5 sm:mb-6 print:text-black">
                Work Experience
              </h2>

              <div className="space-y-6 sm:space-y-8">
                {/* FueInt Technologies */}
                <div className="border-l-2 border-accent/40 pl-4 sm:pl-6 relative print:border-neutral-400">
                  <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-accent print:bg-black" />
                  
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1.5">
                    <h3 className="font-display text-xl sm:text-2xl text-canvas font-normal print:text-black">
                      Web Developer <span className="text-accent print:text-black">→</span> Senior WordPress Developer
                    </h3>
                    <span className="text-xs font-mono text-accent font-semibold print:text-neutral-700">
                      July 2022 – May 2026 (Full-time)
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm font-mono text-canvas/60 mb-3.5 print:text-neutral-600">
                    FueInt Technologies · Coimbatore, Tamil Nadu, India (Delivered via Dialed In Design, Canada)
                  </p>

                  <ul className="space-y-2 text-xs sm:text-sm lg:text-base text-canvas/80 leading-relaxed font-sans list-disc list-outside ml-4 print:text-neutral-800">
                    <li>
                      Built custom WordPress themes and plugins from Figma across <strong>20+ international client sites</strong> in Agile/Scrum teams; engineered reusable Gutenberg blocks and ACF Pro flexible content components, reducing repeat-project delivery time by ~25%.
                    </li>
                    <li>
                      Developed a bespoke <strong>Gutenberg block suite for Unbounce</strong> (including Data, CTA, Expand Text, FAQ, and Video Popup blocks) utilizing React and native WordPress APIs for enterprise marketing teams.
                    </li>
                    <li>
                      Implemented comprehensive <strong>JSON-LD structured data schemas</strong> (FAQ, Product, Breadcrumb, ProfessionalService, Organisation), increasing search Rich Results eligibility and lifting organic search CTRs by ~15%.
                    </li>
                    <li>
                      Optimised Core Web Vitals via deep caching hierarchies, asset minimization, and render pipeline refactoring — <strong>reduced LCP by ~30%</strong>, improved CLS by 0.05, and resolved a complex URL-encoding issue in sitemap generation affecting <strong>1,700+ indexed URLs</strong>.
                    </li>
                    <li>
                      Spearheaded <strong>PHP 7.4 → 8.x upgrades</strong> across large-scale platforms including Open Government Partnership, Premier Boxing Champions, and ElasticPath; managed monthly vulnerability patching and dependency governance.
                    </li>
                    <li>
                      Managed multi-SSH key configurations, Git branch workflows, and staging-to-production deployment pipelines across <strong>Pantheon, WP Engine, Kinsta, and Servd</strong>, troubleshooting critical runtime regressions under peak traffic constraints.
                    </li>
                  </ul>
                </div>

                {/* Freelance / Gradiolex */}
                <div className="border-l-2 border-accent/40 pl-4 sm:pl-6 relative print:border-neutral-400">
                  <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-accent print:bg-black" />
                  
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1.5">
                    <h3 className="font-display text-xl sm:text-2xl text-canvas font-normal print:text-black">
                      Freelance Full Stack Developer
                    </h3>
                    <span className="text-xs font-mono text-accent font-semibold print:text-neutral-700">
                      May 2025 – Present
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm font-mono text-canvas/60 mb-2.5 print:text-neutral-600">
                    Gradiolex · Independent Client &amp; Utility Engineering
                  </p>

                  <p className="text-xs sm:text-sm lg:text-base text-canvas/80 leading-relaxed font-sans mb-2.5 print:text-neutral-800">
                    Independently designs, scopes, and builds web applications and custom digital platforms for businesses:
                  </p>

                  <ul className="space-y-1.5 text-xs sm:text-sm lg:text-base text-canvas/80 leading-relaxed font-sans list-disc list-outside ml-4 print:text-neutral-800">
                    <li><strong>Parithadam:</strong> E-commerce web platform for organic agricultural goods built with Next.js 15, React, Tailwind CSS, Razorpay payment processing, and automated Nodemailer notification pipelines.</li>
                    <li><strong>NaviCakes:</strong> Custom bakery ordering and brand identity portal built with Next.js and Tailwind CSS — pixel-perfect from Figma to production.</li>
                    <li><strong>Sri Dhanamoorthy Traders:</strong> B2B wholesale cement and steel distributor platform with custom product catalogues and digital trade inquiry flows.</li>
                    <li><strong>MySupportInfo:</strong> Centralised customer support and ticketing knowledge base portal built on modern React.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* ── ENTERPRISE CLIENT DELIVERIES ── */}
            <section className="mb-8 sm:mb-10">
              <h2 className="text-xs sm:text-sm font-mono uppercase tracking-widest text-accent font-bold mb-3.5 print:text-black">
                Selected Enterprise Client Platforms
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {enterpriseProjects.map((p) => (
                  <div key={p.name} className="border border-canvas/10 rounded-xl p-3 sm:p-3.5 bg-canvas/[0.02] print:border-neutral-300 print:p-2.5">
                    <div className="flex items-baseline justify-between gap-1 mb-1">
                      <span className="font-mono text-xs sm:text-sm font-bold text-accent print:text-black">{p.name}</span>
                      <span className="text-[10px] sm:text-[11px] font-mono text-canvas/50 shrink-0 print:text-neutral-600">{p.role}</span>
                    </div>
                    <p className="text-xs text-canvas/70 leading-relaxed print:text-neutral-700">{p.highlight}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* ── EDUCATION ── */}
            <section className="border-t border-canvas/15 pt-6 sm:pt-8 print:border-neutral-300">
              <h2 className="text-xs sm:text-sm font-mono uppercase tracking-widest text-accent font-bold mb-3 print:text-black">
                Education
              </h2>
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <div>
                  <h3 className="font-display text-lg sm:text-xl text-canvas font-normal print:text-black">
                    Bachelor of Engineering (B.E.) — Computer Science &amp; Engineering
                  </h3>
                  <p className="text-xs sm:text-sm font-mono text-canvas/70 print:text-neutral-700">
                    Vidyaa Vikas College of Engineering · Anna University, Tamil Nadu
                  </p>
                </div>
                <div className="text-xs sm:text-sm font-mono text-accent font-semibold sm:text-right print:text-black">
                  2016 – 2020 · CGPA: 7.04 / 10
                </div>
              </div>
            </section>

          </main>
        </div>
      </div>
    </>
  )
}
