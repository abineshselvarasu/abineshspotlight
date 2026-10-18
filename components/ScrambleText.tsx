"use client";

import { useEffect, useState } from "react";

const CHARS = "!<>-_\\\\/[]{}—=+*^?#________";

function useScramble(text: string, trigger: boolean, speed: number) {
  const [displayText, setDisplayText] = useState(text);

  useEffect(() => {
    if (!trigger) {
      setDisplayText(text);
      return;
    }

    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((char, index) =>
            index < Math.floor(iteration) || char === " " || char === "."
              ? char
              : CHARS[Math.floor(Math.random() * CHARS.length)]
          )
          .join("")
      );

      if (iteration >= text.length) clearInterval(interval);
      iteration += speed;
    }, 30);

    return () => clearInterval(interval);
  }, [text, trigger, speed]);

  return displayText;
}

export default function ScrambleText({ text, isHovered, speed = 0.5 }: { text: string; isHovered: boolean; speed?: number }) {
  const displayText = useScramble(text, isHovered, speed);
  return <span>{displayText}</span>;
}
