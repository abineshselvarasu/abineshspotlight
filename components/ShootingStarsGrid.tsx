import type { CSSProperties } from 'react'

// Fixed, static star configs along 40px grid lines with staggered delays.
// Zero React re-renders, zero DOM insertions/deletions, CSS compositor animations.
const STARS = [
  { id: 1, dir: 'lr', pos: '80px', delay: '0s', duration: '3.6s' },
  { id: 2, dir: 'rl', pos: '160px', delay: '1.2s', duration: '4.2s' },
  { id: 3, dir: 'tb', pos: '15%', delay: '0.5s', duration: '3.8s' },
  { id: 4, dir: 'bt', pos: '35%', delay: '2.0s', duration: '4.5s' },
  { id: 5, dir: 'lr', pos: '280px', delay: '2.5s', duration: '3.9s' },
  { id: 6, dir: 'rl', pos: '400px', delay: '0.8s', duration: '4.1s' },
  { id: 7, dir: 'tb', pos: '65%', delay: '1.7s', duration: '4.4s' },
  { id: 8, dir: 'bt', pos: '85%', delay: '3.1s', duration: '3.7s' },
] as const

const TIP_BASE =
  'absolute w-[2px] h-[2px] bg-white rounded-full shadow-[0_0_8px_2px_#DCBC7D]'

const DIRECTIONS = {
  lr: {
    wrapper: 'h-[1px] w-[150px] animate-shooting-star-lr',
    posProp: 'top',
    startProp: 'left',
    gradient: 'to right',
    tip: 'right-0 top-1/2 -translate-y-1/2',
  },
  rl: {
    wrapper: 'h-[1px] w-[150px] animate-shooting-star-rl',
    posProp: 'top',
    startProp: 'right',
    gradient: 'to left',
    tip: 'left-0 top-1/2 -translate-y-1/2',
  },
  tb: {
    wrapper: 'w-[1px] h-[150px] animate-shooting-star-tb',
    posProp: 'left',
    startProp: 'top',
    gradient: 'to bottom',
    tip: 'bottom-0 left-1/2 -translate-x-1/2',
  },
  bt: {
    wrapper: 'w-[1px] h-[150px] animate-shooting-star-bt',
    posProp: 'left',
    startProp: 'bottom',
    gradient: 'to top',
    tip: 'top-0 left-1/2 -translate-x-1/2',
  },
} as const

export default function ShootingStarsGrid() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 z-0 overflow-hidden pointer-events-none will-change-transform"
    >
      {/* Faint 40px Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #F5F1EC 1px, transparent 1px),
            linear-gradient(to bottom, #F5F1EC 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Edge Fade into Deep Forest Ink */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-transparent to-ink" />

      {/* GPU-composited Gold Shooting Stars */}
      {STARS.map((star) => {
        const d = DIRECTIONS[star.dir]
        const style: CSSProperties = {
          animationDuration: star.duration,
          animationDelay: star.delay,
          [d.posProp]: star.pos,
          [d.startProp]: '-150px',
          background: `linear-gradient(${d.gradient}, transparent, #DCBC7D)`,
        }

        return (
          <div key={star.id} className={`absolute ${d.wrapper}`} style={style}>
            <div className={`${TIP_BASE} ${d.tip}`} />
          </div>
        )
      })}
    </div>
  )
}
