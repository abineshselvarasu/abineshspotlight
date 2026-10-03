'use client';

import React, { useEffect, useRef } from 'react';

export default function GameOfLife() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let isVisible = true;
    let width = container.offsetWidth;
    let height = container.offsetHeight;
    canvas.width = width;
    canvas.height = height;

    const cellSize = 20;
    let cols = Math.floor(width / cellSize);
    let rows = Math.floor(height / cellSize);
    let totalCells = cols * rows;

    // Double buffering using typed arrays for ZERO garbage collection pauses
    let currentGrid = new Uint8Array(totalCells);
    let nextGrid = new Uint8Array(totalCells);

    // Initial seed
    for (let i = 0; i < totalCells; i++) {
      currentGrid[i] = Math.random() > 0.85 ? 1 : 0;
    }

    let needsDraw = true;

    // Observe visibility so it ONLY animates when this section is in viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible) needsDraw = true;
      },
      { threshold: 0 }
    );
    observer.observe(container);

    let cachedRect = container.getBoundingClientRect();
    const updateCachedRect = () => {
      if (!container) return;
      cachedRect = container.getBoundingClientRect();
    };

    const handleResize = () => {
      if (!container) return;
      width = container.offsetWidth;
      height = container.offsetHeight;
      canvas.width = width;
      canvas.height = height;
      cols = Math.floor(width / cellSize);
      rows = Math.floor(height / cellSize);
      totalCells = cols * rows;
      currentGrid = new Uint8Array(totalCells);
      nextGrid = new Uint8Array(totalCells);
      for (let i = 0; i < totalCells; i++) {
        currentGrid[i] = Math.random() > 0.85 ? 1 : 0;
      }
      cachedRect = container.getBoundingClientRect();
      needsDraw = true;
    };

    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('scroll', updateCachedRect, { passive: true });

    // Throttled mouse interaction: wake up cells in this section without layout thrashing
    let mouseQueued = false;
    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible || mouseQueued) return;
      mouseQueued = true;
      requestAnimationFrame(() => {
        mouseQueued = false;
        const mouseX = e.clientX - cachedRect.left;
        const mouseY = e.clientY - cachedRect.top;
        if (mouseX < 0 || mouseX >= width || mouseY < 0 || mouseY >= height) return;

        const cx = Math.floor(mouseX / cellSize);
        const cy = Math.floor(mouseY / cellSize);
        let changed = false;

        for (let i = -1; i <= 1; i++) {
          for (let j = -1; j <= 1; j++) {
            const x = cx + i;
            const y = cy + j;
            if (x >= 0 && x < cols && y >= 0 && y < rows) {
              const idx = x * rows + y;
              if (currentGrid[idx] !== 1) {
                currentGrid[idx] = 1;
                changed = true;
              }
            }
          }
        }
        if (changed) needsDraw = true;
      });
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    let animationFrameId: number;
    let lastTime = 0;

    const updateGrid = () => {
      for (let i = 0; i < cols; i++) {
        const leftCol = ((i - 1 + cols) % cols) * rows;
        const centerCol = i * rows;
        const rightCol = ((i + 1) % cols) * rows;

        for (let j = 0; j < rows; j++) {
          const topRow = (j - 1 + rows) % rows;
          const bottomRow = (j + 1) % rows;

          const neighbors =
            currentGrid[leftCol + topRow] +
            currentGrid[leftCol + j] +
            currentGrid[leftCol + bottomRow] +
            currentGrid[centerCol + topRow] +
            currentGrid[centerCol + bottomRow] +
            currentGrid[rightCol + topRow] +
            currentGrid[rightCol + j] +
            currentGrid[rightCol + bottomRow];

          const idx = centerCol + j;
          const state = currentGrid[idx];

          if (state === 0 && neighbors === 3) {
            nextGrid[idx] = 1;
          } else if (state === 1 && (neighbors < 2 || neighbors > 3)) {
            nextGrid[idx] = 0;
          } else {
            nextGrid[idx] = state;
          }
        }
      }

      // Swap buffers: zero allocations!
      const temp = currentGrid;
      currentGrid = nextGrid;
      nextGrid = temp;
    };

    const render = (time: number) => {
      animationFrameId = requestAnimationFrame(render);
      if (!isVisible) return;

      const elapsed = time - lastTime;
      const isTick = elapsed > 150;

      // Only re-draw if 150ms has elapsed (state changed) or mouse interaction woke cells
      if (!isTick && !needsDraw) return;

      if (isTick) {
        updateGrid();
        lastTime = time;
      }
      needsDraw = false;

      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = 'rgba(15, 55, 40, 0.08)'; // Very faint ink
      ctx.beginPath();

      const rectSize = cellSize - 1;
      for (let i = 0; i < cols; i++) {
        const colOffset = i * rows;
        const x = i * cellSize;
        for (let j = 0; j < rows; j++) {
          if (currentGrid[colOffset + j] === 1) {
            ctx.rect(x, j * cellSize, rectSize, rectSize);
          }
        }
      }
      // Single batched GPU draw call instead of thousands of individual fillRect calls
      ctx.fill();
    };

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      // Draw static grid once and do not animate
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = 'rgba(15, 55, 40, 0.08)';
      ctx.beginPath();
      const rectSize = cellSize - 1;
      for (let i = 0; i < cols; i++) {
        const colOffset = i * rows;
        const x = i * cellSize;
        for (let j = 0; j < rows; j++) {
          if (currentGrid[colOffset + j] === 1) {
            ctx.rect(x, j * cellSize, rectSize, rectSize);
          }
        }
      }
      ctx.fill();
    } else {
      animationFrameId = requestAnimationFrame(render);
    }

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', updateCachedRect);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
}
