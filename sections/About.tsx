"use client";

import { useEffect, useRef } from "react";
import MagneticButton from "@/components/MagneticButton";

const headlineLines = [
  "We make growth",
  "campaigns feel",
  "less like ads and",
  "more like brand",
  "experiences people",
  "remember.",
];

const proofCards = [
  { value: "4.8x", label: "best ROAS lift" },
  { value: "612", label: "booked enquiries" },
  { value: "+182%", label: "profile actions" },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const revealItems = section.querySelectorAll<HTMLElement>(".about-reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.25 }
    );

    revealItems.forEach((item) => observer.observe(item));

    const move = (event: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      section.style.setProperty("--about-x", `${x * 28}px`);
      section.style.setProperty("--about-y", `${y * 28}px`);
    };

    section.addEventListener("mousemove", move);

    return () => {
      observer.disconnect();
      section.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <section id="about" className="section about-section" ref={sectionRef}>
      <div className="about-bg-ring" />
      <div className="about-kicker about-reveal">AR Digitals</div>

      <div className="about-copy">
        <h2 aria-label={headlineLines.join(" ")}>
          {headlineLines.map((line, index) => (
            <span
              key={line}
              className="about-reveal"
              style={{ transitionDelay: `${index * 0.07}s` }}
            >
              {line}
            </span>
          ))}
        </h2>

        <div className="about-bottom about-reveal">
          <p>
            The visual language can be bold and motion-led, but the work stays
            practical: a clear offer, strong creative, clean landing pages,
            reliable tracking, and weekly improvement.
          </p>
          <div className="about-proof">
            <span>Strategy</span>
            <span>Creative</span>
            <span>Paid media</span>
            <span>Conversion</span>
          </div>
          <MagneticButton href="#contact" variant="light">
            Start a project
          </MagneticButton>
        </div>
      </div>

      <div className="about-metrics" aria-hidden="true">
        {proofCards.map((card, index) => (
          <div key={card.label} className={`about-metric about-metric--${index + 1}`}>
            <strong>{card.value}</strong>
            <span>{card.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
