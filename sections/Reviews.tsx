"use client";

import { useEffect, useRef, useState } from "react";
import { reviews } from "@/constants/site";

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

export default function Reviews() {
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      const nextProgress = scrollable > 0 ? clamp(-rect.top / scrollable, 0, 1) : 0;
      setProgress(nextProgress);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const active = Math.round(progress * (reviews.length - 1));
  const review = reviews[active];

  return (
    <section
      ref={sectionRef}
      className="review-section review-section--scroll"
      id="reviews"
    >
      <div className="review-sticky">
        <h2>
          Brands that chose <span>growth</span>
        </h2>

        <div className="review-slider-window">
          <div
            className="review-scroll-track"
            style={{
              transform: `translate3d(-${progress * (reviews.length - 1) * 100}%, 0, 0)`,
            }}
          >
            {reviews.map((item, index) => (
              <article
                key={item.name}
                className={`review-slide ${index === active ? "review-slide--active" : ""}`}
              >
                <div className={`review-scroll-card review-scroll-card--${item.tone}`}>
                  <div className="review-name-card">
                    <strong>{item.name}</strong>
                    <span>{item.role}</span>
                  </div>
                  <span>{item.name.charAt(0)}</span>
                </div>
              </article>
            ))}
          </div>
        </div>

        <blockquote>
          <p>{review.quote}</p>
          <cite>{review.metric}</cite>
        </blockquote>

        <div className="review-progress" aria-hidden="true">
          <span style={{ transform: `scaleX(${Math.max(progress, 0.03)})` }} />
        </div>
      </div>
    </section>
  );
}
