import SectionHeader from "@/components/SectionHeader";
import { processSteps } from "@/constants/site";

export default function Process() {
  return (
    <section id="process" className="section process-section">
      <SectionHeader
        eyebrow="How we work"
        title="Fast enough to learn. Careful enough to build trust."
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

