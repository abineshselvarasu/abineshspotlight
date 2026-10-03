'use client';
import React from 'react';

// Fixed, static star configs along 40px grid lines with staggered delays.
// Zero React re-renders, zero DOM insertions/deletions, 100% GPU compositor execution.
const STARS = [
  { id: 1, dir: 'lr', pos: '80px', delay: '0s', duration: '3.6s' },
  { id: 2, dir: 'rl', pos: '160px', delay: '1.2s', duration: '4.2s' },
  { id: 3, dir: 'tb', pos: '15%', delay: '0.5s', duration: '3.8s' },
  { id: 4, dir: 'bt', pos: '35%', delay: '2.0s', duration: '4.5s' },
  { id: 5, dir: 'lr', pos: '280px', delay: '2.5s', duration: '3.9s' },
  { id: 6, dir: 'rl', pos: '400px', delay: '0.8s', duration: '4.1s' },
  { id: 7, dir: 'tb', pos: '65%', delay: '1.7s', duration: '4.4s' },
  { id: 8, dir: 'bt', pos: '85%', delay: '3.1s', duration: '3.7s' },
  { id: 9, dir: 'lr', pos: '520px', delay: '1.5s', duration: '4.0s' },
  { id: 10, dir: 'rl', pos: '640px', delay: '2.8s', duration: '3.5s' },
];

export default function ShootingStarsGrid() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none will-change-transform">
      {/* Faint Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #F5F1EC 1px, transparent 1px),
            linear-gradient(to bottom, #F5F1EC 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />
      
      {/* Top and Bottom Fade to blend with other sections */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-transparent to-ink" />

      {/* Shooting Stars - purely CSS animated, 0% main thread CPU overhead */}
      {STARS.map((star) => {
        const style: React.CSSProperties = {
          animationDuration: star.duration,
          animationDelay: star.delay,
        };
        let wrapperClass = '';
        let gradientStyle = '';
        let tipClass = '';

        if (star.dir === 'lr') {
          wrapperClass = 'absolute h-[1px] w-[150px] animate-shooting-star-lr';
          style.top = star.pos;
          style.left = '-150px';
          gradientStyle = 'linear-gradient(to right, transparent, #DCBC7D)';
          tipClass = 'absolute right-0 top-1/2 -translate-y-1/2 w-[2px] h-[2px] bg-white rounded-full shadow-[0_0_8px_2px_#DCBC7D]';
        } else if (star.dir === 'rl') {
          wrapperClass = 'absolute h-[1px] w-[150px] animate-shooting-star-rl';
          style.top = star.pos;
          style.right = '-150px';
          gradientStyle = 'linear-gradient(to left, transparent, #DCBC7D)';
          tipClass = 'absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-[2px] bg-white rounded-full shadow-[0_0_8px_2px_#DCBC7D]';
        } else if (star.dir === 'tb') {
          wrapperClass = 'absolute w-[1px] h-[150px] animate-shooting-star-tb';
          style.left = star.pos;
          style.top = '-150px';
          gradientStyle = 'linear-gradient(to bottom, transparent, #DCBC7D)';
          tipClass = 'absolute bottom-0 left-1/2 -translate-x-1/2 w-[2px] h-[2px] bg-white rounded-full shadow-[0_0_8px_2px_#DCBC7D]';
        } else if (star.dir === 'bt') {
          wrapperClass = 'absolute w-[1px] h-[150px] animate-shooting-star-bt';
          style.left = star.pos;
          style.bottom = '-150px';
          gradientStyle = 'linear-gradient(to top, transparent, #DCBC7D)';
          tipClass = 'absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-[2px] bg-white rounded-full shadow-[0_0_8px_2px_#DCBC7D]';
        }

        style.background = gradientStyle;

        return (
          <div key={star.id} className={wrapperClass} style={style}>
            <div className={tipClass} />
          </div>
        );
      })}
    </div>
  );
}
