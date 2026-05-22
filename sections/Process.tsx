"use client";

import { useEffect, useRef } from "react";
import SectionHeader from "@/components/SectionHeader";
import { processSteps } from "@/constants/site";

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const cards = section.querySelectorAll<HTMLElement>(".process-step");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const index = Array.from(cards).indexOf(entry.target as HTMLElement);
          (entry.target as HTMLElement).style.transitionDelay = `${index * 0.08}s`;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.22 }
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="process" className="section process-section" ref={sectionRef}>
      <SectionHeader
        eyebrow="How we work"
        title="Describe the goal. Target the audience. Create the story. Grow the business."
      />

      <div className="process-grid">
        {processSteps.map((step, index) => (
          <article key={step.title} className="process-step">
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
