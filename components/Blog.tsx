import Image from 'next/image'
import Carousel from './Carousel'
import { ForwardArrowIcon } from './icons'

type Article = {
  title: string
  url: string
  image: string
  category: string
  readTime: string
}

const articles: Article[] = [
  {
    title: 'How to Improve SEO: A Practical Action Plan for 2025',
    url: 'https://fueint.com/blog/how-to-improve-seo',
    image: '/images/blog/how-to-Improve-seo.webp',
    category: 'SEO',
    readTime: '14 min',
  },
  {
    title: 'Perfmatters WordPress Plugin – Speed Up Your Site',
    url: 'https://fueint.com/blog/perfmatters-wordpress-plugin',
    image: '/images/blog/perfmatters-wordpress.webp',
    category: 'WordPress',
    readTime: '8 min',
  },
  {
    title: 'WordPress Plugins 2025 – Must-Have Tools for Developers',
    url: 'https://fueint.com/blog/must-have-wordpress-plugins',
    image: '/images/blog/wordpress-plugins-2025.webp',
    category: 'WordPress',
    readTime: '9 min',
  },
  {
    title: 'How to Install LAMP Stack on Ubuntu with Virtual Hosts',
    url: 'https://fueint.com/blog/how-to-install-lamp-stack-on-ubuntu',
    image: '/images/blog/install-lamp-stack-on-ubuntu.webp',
    category: 'DevOps',
    readTime: '9 min',
  },
  {
    title: 'JavaScript Learning Roadmap (Beginner to Mastery Guide)',
    url: 'https://fueint.com/blog/javascript-learning-roadmap',
    image: '/images/blog/javascript-learning-roadmap-og.webp',
    category: 'JavaScript',
    readTime: '11 min',
  },
  {
    title: 'Pantheon: Managed Hosting for WordPress & Drupal Sites',
    url: 'https://fueint.com/blog/what-is-pantheon',
    image: '/images/blog/pantheon-hosting.webp',
    category: 'WordPress',
    readTime: '9 min',
  },
  {
    title: 'WordPress.org vs WordPress.com: Key Differences, Pros',
    url: 'https://fueint.com/blog/wordpress-org-vs-wordpress-com',
    image: '/images/blog/wordpress-org-vs-wordpress-com.webp',
    category: 'WordPress',
    readTime: '10 min',
  },
  {
    title: 'Best A/B Testing WordPress Plugins for 2025',
    url: 'https://fueint.com/blog/best-ab-testing-plugins-wordpress',
    image: '/images/blog/ab-testing-plugins-wordpress.jpg',
    category: 'WordPress',
    readTime: '12 min',
  },
  {
    title: 'Pagination vs Load More vs Infinite Scroll 2025',
    url: 'https://fueint.com/blog/pagination-vs-load-more-vs-infinite-scroll',
    image: '/images/blog/pagination-vs-load-more-vs-infinite-scroll.webp',
    category: 'Tech',
    readTime: '16 min',
  },
]

export default function Blog() {
  return (
    <section id="blog" className="bg-accent text-ink py-16 md:py-24 border-b border-ink/15">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between md:items-end mb-10 gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-ink/80 mb-2">
              Publications
            </p>
            <h2 className="font-display font-normal text-3xl sm:text-4xl md:text-5xl text-ink leading-tight">
              Articles &amp; technical guides.
            </h2>
          </div>

          <a
            href="https://fueint.com/authors/abinesh-s"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="group inline-flex items-center gap-1.5 text-sm font-semibold text-ink hover:text-ink-deep border-b border-ink/30 hover:border-ink transition-colors pb-0.5"
          >
            View all articles
            <ForwardArrowIcon className="w-4 h-4" />
          </a>
        </div>

        <Carousel label="Published technical articles">
          {articles.map((article) => (
            <a
              key={article.title}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="group flex flex-col h-full rounded-xl border border-ink/15 bg-surface overflow-hidden shadow-sm hover:shadow-lg hover:border-ink/40 transition-all"
              draggable={false}
            >
              <div className="relative aspect-[16/9] w-full bg-canvas overflow-hidden border-b border-ink/10">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                  draggable={false}
                />
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-ink/10 text-ink">
                      {article.category}
                    </span>
                    <span className="text-xs text-mist">
                      {article.readTime} read
                    </span>
                  </div>

                  <h3 className="font-display font-normal text-xl text-ink leading-snug group-hover:text-forest transition-colors">
                    {article.title}
                  </h3>
                </div>

                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-ink group-hover:text-forest">
                  Read article
                  <ForwardArrowIcon className="w-3.5 h-3.5" />
                </span>
              </div>
            </a>
          ))}
        </Carousel>
      </div>
    </section>
  )
}
