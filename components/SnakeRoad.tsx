import { useId } from 'react'

// Winding "snake" road used by the Career Roadmap.
// The SVGs stretch to their box (preserveAspectRatio="none"); `vector-effect: non-scaling-stroke`
// keeps the line weight constant at any size, so the same curves work on every screen.

const VB_W = 1000 // horizontal viewBox width
const CY = 46 // node centre on the desktop rail (label h-5 + mb-2 + my-1 + half of the 28px node)
const AMP = 22 // peak height of each bend, in px

// Cubic bend from x0 to x1 on the centre line; sign -1 bends up, +1 bends down.
// Control points at 1/4 and 3/4 make adjacent opposite bends meet with matching tangents (a smooth S).
const bend = (x0: number, x1: number, k: number) => {
  const w = x1 - x0
  return `C ${x0 + w / 4} ${CY + k} ${x0 + (3 * w) / 4} ${CY + k} ${x1} ${CY}`
}

// Path from the left edge through every node centre to node `upTo` (inclusive), or to the right edge.
function railPath(count: number, upTo?: number) {
  const xs = Array.from({ length: count }, (_, i) => ((i + 0.5) / count) * VB_W)
  const k = AMP / 0.75 // a bend's peak sits at 0.75 × its control offset
  // Lead-in bend uses half the offset so its end tangent matches the first full bend (and mirrors at the tail)
  const parts = [`M 0 ${CY}`, bend(0, xs[0], k / 2)]
  const last = upTo ?? count - 1
  for (let i = 0; i < last; i++) parts.push(bend(xs[i], xs[i + 1], i % 2 === 0 ? -k : k))
  if (upTo === undefined) parts.push(bend(xs[count - 1], VB_W, ((count - 1) % 2 === 0 ? -k : k) / 2))
  return parts.join(' ')
}

/** Horizontal snake through `count` evenly spaced nodes; the travelled part up to `activeIdx` glows. */
export function SnakeRail({ count, activeIdx }: { count: number; activeIdx: number }) {
  const gradientId = useId()
  const full = railPath(count)
  const travelled = railPath(count, activeIdx)
  return (
    <svg
      aria-hidden="true"
      className="absolute left-4 top-0 h-[92px] w-[calc(100%-2rem)] overflow-visible pointer-events-none"
      viewBox={`0 0 ${VB_W} 92`}
      preserveAspectRatio="none"
      fill="none"
    >
      <defs>
        <linearGradient id={gradientId} x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor="#DCBC7D" stopOpacity="0.35" />
          <stop offset="1" stopColor="#DCBC7D" />
        </linearGradient>
      </defs>
      {/* Road ahead */}
      <path d={full} stroke="#DCBC7D" strokeOpacity="0.22" strokeWidth="2" strokeDasharray="6 6" vectorEffect="non-scaling-stroke" />
      {/* Travelled road: soft glow + solid line */}
      <path d={travelled} stroke="#DCBC7D" strokeOpacity="0.25" strokeWidth="6" vectorEffect="non-scaling-stroke" className="blur-[2px]" />
      <path d={travelled} stroke={`url(#${gradientId})`} strokeWidth="2" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
    </svg>
  )
}

/** Vertical bend between two stacked nodes; alternate `flip` per segment for a snake. Position/size it with className. */
export function SnakeSegment({ flip, travelled, className }: { flip: boolean; travelled: boolean; className: string }) {
  const x = flip ? 3 : 17 // bend out to the left or right of the centre line (x = 10)
  // Wrapper takes the absolute top/bottom box; the SVG fills it (SVGs have no intrinsic height to stretch)
  return (
    <span aria-hidden="true" className={className}>
      <svg className="block w-full h-full" viewBox="0 0 20 100" preserveAspectRatio="none" fill="none">
        <path
          d={`M 10 0 C 10 25 ${x} 25 ${x} 50 S 10 75 10 100`}
          stroke="#DCBC7D"
          strokeOpacity={travelled ? 0.85 : 0.3}
          strokeWidth="2"
          strokeDasharray={travelled ? undefined : '4 4'}
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </span>
  )
}
