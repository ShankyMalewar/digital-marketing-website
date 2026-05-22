"use client";

import { useEffect } from "react";
import { projects } from "@/constants/site";
import type { CSSProperties } from "react";

function ProjectArtwork({ index }: { index: number }) {
  return (
    <div className={`featured-art featured-art--${index % 5}`}>
      <div className="featured-art__parallax featured-art__parallax--back">
        <div className="featured-art__grain" />
        <div className="featured-art__orb featured-art__orb--one" />
        <div className="featured-art__orb featured-art__orb--two" />
      </div>
      <div className="featured-art__parallax featured-art__parallax--mid">
        <div className="featured-art__panel featured-art__panel--main">
        <span>{String(index + 1).padStart(2, "0")}</span>
        <strong>
          {index === 0 ? "ROAS" : index === 1 ? "Reels" : index === 2 ? "Leads" : index === 3 ? "CRO" : "Reach"}
        </strong>
        </div>
      </div>
      <div className="featured-art__parallax featured-art__parallax--front">
        <div className="featured-art__panel featured-art__panel--float">
        {index === 0 ? "4.8x" : index === 1 ? "+182%" : index === 2 ? "612" : index === 3 ? "+38%" : "2.1M"}
        </div>
      </div>
    </div>
  );
}

export default function Work() {
  useEffect(() => {
    const cards = document.querySelectorAll<HTMLElement>(".featured-card");
    const heading = document.querySelector<HTMLElement>(".featured-work h2");
    const mediaItems = document.querySelectorAll<HTMLElement>(".featured-art");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.classList.contains("featured-card")) {
              const index = Array.from(cards).indexOf(entry.target as HTMLElement);
              (entry.target as HTMLElement).style.transitionDelay = `${index * 0.09}s`;
            }
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18 }
    );

    const updateParallax = () => {
      mediaItems.forEach((item) => {
        const rect = item.getBoundingClientRect();
        const progress =
          (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
        const clamped = Math.min(Math.max(progress, 0), 1) - 0.5;
        item.style.setProperty("--parallax", `${clamped * 52}px`);
      });
    };

    if (heading) observer.observe(heading);
    cards.forEach((card) => observer.observe(card));
    updateParallax();
    window.addEventListener("scroll", updateParallax, { passive: true });
    window.addEventListener("resize", updateParallax);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateParallax);
      window.removeEventListener("resize", updateParallax);
    };
  }, []);

  const leftProjects = projects.filter((_, index) => index % 2 === 0);
  const rightProjects = projects.filter((_, index) => index % 2 === 1);

  return (
    <section id="work" className="featured-work">
      <div className="featured-work__inner">
        <h2>Campaign ideas built for visibility, trust, and growth.</h2>

        <div className="featured-grid">
          <div className="featured-column featured-column--left">
            {leftProjects.map((project) => {
              const index = projects.indexOf(project);
              return (
            <article
              key={project.title}
              className="featured-card"
              style={{ "--accent": project.accent } as CSSProperties}
            >
              <div className="featured-card__media">
                <ProjectArtwork index={index} />
              </div>
              <h3>
                <strong>{project.title}</strong> - {project.description}
              </h3>
            </article>
              );
            })}
          </div>

          <div className="featured-column featured-column--right">
            {rightProjects.map((project) => {
              const index = projects.indexOf(project);
              return (
                <article
                  key={project.title}
                className="featured-card"
                style={{ "--accent": project.accent } as CSSProperties}
              >
                  <div className="featured-card__media">
                    <ProjectArtwork index={index} />
                  </div>
                  <h3>
                    <strong>{project.title}</strong> - {project.description}
                  </h3>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
