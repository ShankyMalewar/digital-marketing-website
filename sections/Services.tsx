"use client";

import { useEffect, useRef } from "react";
import { services } from "@/constants/site";
import type { CSSProperties } from "react";
import styles from "./Services.module.css";

const cardStyles = [
  { paper: "#fffaf2", band: "#ffe6bd", rotate: "-7deg", x: "7%", y: "23%", z: 3 },
  { paper: "#ffffff", band: "#ffd6ce", rotate: "6deg", x: "29%", y: "7%", z: 7 },
  { paper: "#fffbdf", band: "#fff0a6", rotate: "5deg", x: "54%", y: "13%", z: 5 },
  { paper: "#ffffff", band: "#ffe2c7", rotate: "-6deg", x: "66%", y: "36%", z: 8 },
  { paper: "#f9fbff", band: "#e8edff", rotate: "-5deg", x: "12%", y: "50%", z: 4 },
  { paper: "#ffffff", band: "#e8fff8", rotate: "4deg", x: "38%", y: "38%", z: 9 },
  { paper: "#fff8ff", band: "#f7dcff", rotate: "-3deg", x: "31%", y: "66%", z: 6 },
  { paper: "#ffffff", band: "#ffd7c5", rotate: "7deg", x: "50%", y: "61%", z: 10 },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const cards = section.querySelectorAll<HTMLElement>("[data-service-paper]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Array.from(cards).indexOf(entry.target as HTMLElement);
            (entry.target as HTMLElement).style.transitionDelay = `${index * 0.055}s`;
            entry.target.classList.add(styles.isVisible);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16 }
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className={styles.servicesCollage} ref={sectionRef}>
      <div className={styles.servicesCollageHeader}>
        <p>Our Services</p>
        <h2>
          We Can Offer You
          <span>The Best</span>
        </h2>
      </div>

      <div className={styles.servicesCollageStage} aria-label="AR Digitals services">
        {services.map((service, index) => {
          const style = cardStyles[index % cardStyles.length];

          return (
            <article
              key={service.title}
              className={styles.servicePaper}
              data-service-paper
              style={
                {
                  "--paper": style.paper,
                  "--band": style.band,
                  "--rotate": style.rotate,
                  "--x": style.x,
                  "--y": style.y,
                  "--z": style.z,
                } as CSSProperties
              }
            >
              <div>
                <span>AR Digitals</span>
                <small>{service.tags[0]}</small>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <strong>{service.tags[1] ?? "Growth"}</strong>
            </article>
          );
        })}
      </div>
    </section>
  );
}
