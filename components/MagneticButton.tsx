"use client";

import type { MouseEvent, ReactNode } from "react";
import { useRef } from "react";

type MagneticButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "dark" | "light";
  className?: string;
};

export default function MagneticButton({
  href,
  children,
  variant = "dark",
  className = "",
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);

  const move = (event: MouseEvent<HTMLAnchorElement>) => {
    const element = ref.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    element.style.transform = `translate(${x * 0.18}px, ${y * 0.18}px)`;
  };

  const reset = () => {
    if (!ref.current) return;
    ref.current.style.transform = "translate(0, 0)";
  };

  return (
    <a
      ref={ref}
      href={href}
      className={`magnetic-button magnetic-button--${variant} ${className}`}
      onMouseMove={move}
      onMouseLeave={reset}
    >
      <span>{children}</span>
      <span aria-hidden="true" className="button-arrow">
        -&gt;
      </span>
    </a>
  );
}

