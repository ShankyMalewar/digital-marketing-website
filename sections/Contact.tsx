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
        <div className="reveal-item">
          <p className="section-eyebrow">Let&apos;s collaborate</p>
          <h2>Ready to switch your brand to serious digital growth?</h2>
        </div>
        <div className="contact-panel reveal-item">
          <p>
            Describe your business, goal, target audience, and the service you
            need. We will help you shape the next step with branding, ads,
            content, website, SEO, or a complete growth plan.
          </p>
          <div className="contact-actions">
            <MagneticButton href="mailto:ardigitalbranding@gmail.com" variant="light">
              ardigitalbranding@gmail.com
            </MagneticButton>
            <a href="https://ardigitals.co.in" className="contact-phone">
              ardigitals.co.in
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
