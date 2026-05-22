"use client";

import { useEffect, useRef, useState } from "react";
import SectionHeader from "@/components/SectionHeader";
import { services } from "@/constants/site";

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const [preview, setPreview] = useState({
    active: false,
    x: 0,
    y: 0,
    title: "",
    metric: "",
  });

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const rows = section.querySelectorAll<HTMLElement>(".service-row");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    rows.forEach((row) => observer.observe(row));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="section services-section" ref={sectionRef}>
      <SectionHeader
        eyebrow="What we do"
        title="Strategy, creative, and media working as one growth system."
        text="Bold motion gets attention. The system behind it turns that attention into enquiries, bookings, and sales."
      />

      <div className="service-list">
        {services.map((service) => (
          <article
            key={service.title}
            className="service-row"
            onMouseMove={(event) =>
              setPreview({
                active: true,
                x: event.clientX,
                y: event.clientY,
                title: service.title,
                metric: service.metric,
              })
            }
            onMouseLeave={() => setPreview((value) => ({ ...value, active: false }))}
          >
            <span className="service-number">{service.number}</span>
            <div className="service-main">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
            <div className="service-side">
              <strong>{service.metric}</strong>
              <div className="service-tags">
                {service.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      <div
        className={`service-cursor-preview ${preview.active ? "is-active" : ""}`}
        style={{
          transform: `translate3d(${preview.x + 18}px, ${preview.y + 18}px, 0)`,
        }}
        aria-hidden="true"
      >
        <span>{preview.title}</span>
        <strong>{preview.metric}</strong>
      </div>
    </section>
  );
}
