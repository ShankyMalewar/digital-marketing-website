import SectionHeader from "@/components/SectionHeader";
import { projects } from "@/constants/site";
import type { CSSProperties } from "react";

export default function Work() {
  return (
    <section id="work" className="section work-section">
      <SectionHeader
        eyebrow="Selected work"
        title="Campaign stories with proof, not just pretty layouts."
        text="Use these placeholders now, then replace them with real case studies as soon as you have client results ready."
      />

      <div className="work-grid">
        {projects.map((project, index) => (
          <article key={project.title} className="work-card work-poster-card">
            <div
              className={`work-visual campaign-poster campaign-poster--${project.tone}`}
              style={{ "--accent": project.accent } as CSSProperties}
            >
              <div className="poster-logo">AR DigiTals</div>
              <div className="poster-star poster-star--one" />
              <div className="poster-star poster-star--two" />
              <div className="poster-headline">
                <span>{project.category}</span>
                <strong>{project.headline}</strong>
              </div>
              <div className="poster-object">
                <span>{index === 0 ? "96" : index === 1 ? "AI" : "ROI"}</span>
              </div>
              <div className="poster-bottom">
                <p>{project.result}</p>
                <small>Contact now</small>
              </div>
            </div>
            <div className="work-copy">
              <span>0{index + 1}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
