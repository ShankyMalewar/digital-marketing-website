"use client";

import { useEffect, useRef } from "react";
import MagneticButton from "@/components/MagneticButton";

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const items = section.querySelectorAll<HTMLElement>(".reveal-item");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;

        items.forEach((item, index) => {
          item.style.transitionDelay = `${index * 0.08}s`;
          item.classList.add("is-visible");
        });
        observer.disconnect();
      },
      { threshold: 0.28 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" className="contact-section" ref={sectionRef}>
      <div className="contact-inner">
        <div className="contact-copy reveal-item">
          <p className="section-eyebrow">
            <span>Open for new projects</span>
            Let&apos;s collaborate
          </p>
          <h2>
            Make your next move <span>impossible to ignore.</span>
          </h2>
          <p className="contact-intro">
            Strategy, campaigns, branding, content, and digital experiences built
            as one clear growth system.
          </p>
          <div className="contact-cta-row reveal-item">
            <MagneticButton href="/contact" className="contact-page-cta">
              Start your project
            </MagneticButton>
          </div>
        </div>

        <div className="contact-signal reveal-item" aria-label="AR Digitals capabilities">
          <div className="contact-signal__top">
            <span>AR / 2026</span>
            <strong>Built for visibility</strong>
          </div>
          <div className="contact-signal__rows">
            <div><span>01</span><strong>Brand identity</strong><i /></div>
            <div><span>02</span><strong>Social campaigns</strong><i /></div>
            <div><span>03</span><strong>Web and growth</strong><i /></div>
          </div>
          <div className="contact-signal__foot">
            <span>Nagpur</span>
            <span>Working across India</span>
          </div>
        </div>
      </div>
    </section>
  );
}
