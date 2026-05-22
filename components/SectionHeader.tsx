"use client";

import { useEffect, useRef } from "react";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  text?: string;
};

export default function SectionHeader({ eyebrow, title, text }: SectionHeaderProps) {
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const items = header.querySelectorAll<HTMLElement>(".reveal-item");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;

        items.forEach((item, index) => {
          item.style.transitionDelay = `${index * 0.09}s`;
          item.classList.add("is-visible");
        });
        observer.disconnect();
      },
      { threshold: 0.35 }
    );

    observer.observe(header);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="section-header" ref={headerRef}>
      <p className="section-eyebrow reveal-item">{eyebrow}</p>
      <h2 className="reveal-item">{title}</h2>
      {text ? <p className="section-intro reveal-item">{text}</p> : null}
    </div>
  );
}
