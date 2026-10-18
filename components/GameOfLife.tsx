'use client';

import { useEffect, useRef } from 'react';

const CELL_SIZE = 20;
const TICK_MS = 150;
const FILL = 'rgba(15, 55, 40, 0.08)'; // Very faint ink

export default function GameOfLife() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let width = 0;
    let height = 0;
    let cols = 0;
    let rows = 0;
    // Double buffering using typed arrays for ZERO garbage collection pauses
    let currentGrid = new Uint8Array(0);
    let nextGrid = new Uint8Array(0);

    let isVisible = false;
    let animationFrameId = 0;
    let lastTime = 0;
    let needsDraw = true;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = FILL;
      ctx.beginPath();
      const rectSize = CELL_SIZE - 1;
      for (let i = 0; i < cols; i++) {
        const colOffset = i * rows;
        const x = i * CELL_SIZE;
        for (let j = 0; j < rows; j++) {
          if (currentGrid[colOffset + j] === 1) ctx.rect(x, j * CELL_SIZE, rectSize, rectSize);
        }
      }
      // Single batched draw call instead of thousands of individual fillRect calls
      ctx.fill();
    };

    const seed = () => {
      width = container.offsetWidth;
      height = container.offsetHeight;
      canvas.width = width;
      canvas.height = height;
      cols = Math.floor(width / CELL_SIZE);
      rows = Math.floor(height / CELL_SIZE);
      currentGrid = new Uint8Array(cols * rows);
      nextGrid = new Uint8Array(cols * rows);
      for (let i = 0; i < currentGrid.length; i++) {
        currentGrid[i] = Math.random() > 0.85 ? 1 : 0;
      }
      needsDraw = true;
      if (reducedMotion) draw();
    };

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

          if (state === 0 && neighbors === 3) nextGrid[idx] = 1;
          else if (state === 1 && (neighbors < 2 || neighbors > 3)) nextGrid[idx] = 0;
          else nextGrid[idx] = state;
        }
      }

      // Swap buffers: zero allocations!
      const temp = currentGrid;
      currentGrid = nextGrid;
      nextGrid = temp;
    };

    const render = (time: number) => {
      if (!isVisible) {
        animationFrameId = 0;
        return;
      }
      animationFrameId = requestAnimationFrame(render);

      const isTick = time - lastTime > TICK_MS;
      // Only re-draw on a tick or when mouse interaction woke cells
      if (!isTick && !needsDraw) return;

      if (isTick) {
        updateGrid();
        lastTime = time;
      }
      needsDraw = false;
      draw();
    };

    const start = () => {
      if (!reducedMotion && isVisible && !animationFrameId) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    // Re-seed only when the section itself changes size (not on mobile URL-bar viewport resizes)
    let lastSize = '';
    const resizeObserver = new ResizeObserver(() => {
      const size = `${container.offsetWidth}x${container.offsetHeight}`;
      if (size === lastSize) return;
      lastSize = size;
      requestAnimationFrame(seed);
    });
    resizeObserver.observe(container);

    // The loop only runs while this section is in the viewport
    const intersectionObserver = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
      if (isVisible) {
        needsDraw = true;
        start();
      }
    });
    intersectionObserver.observe(container);

    // Throttled mouse interaction: wake up cells under the cursor, one layout read per frame at most
    let mouseQueued = false;
    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible || mouseQueued || reducedMotion) return;
      mouseQueued = true;
      requestAnimationFrame(() => {
        mouseQueued = false;
        const rect = container.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        if (mouseX < 0 || mouseX >= width || mouseY < 0 || mouseY >= height) return;

        const cx = Math.floor(mouseX / CELL_SIZE);
        const cy = Math.floor(mouseY / CELL_SIZE);
        for (let i = -1; i <= 1; i++) {
          for (let j = -1; j <= 1; j++) {
            const x = cx + i;
            const y = cy + j;
            if (x >= 0 && x < cols && y >= 0 && y < rows && currentGrid[x * rows + y] !== 1) {
              currentGrid[x * rows + y] = 1;
              needsDraw = true;
            }
          }
        }
      });
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
}
