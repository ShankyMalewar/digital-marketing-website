import { clients } from "@/constants/site";

export default function ClientMarquee() {
  const repeated = [...clients, ...clients];

  return (
    <section className="client-strip" aria-label="Brand categories we work with">
      <div className="marquee-track">
        {repeated.map((client, index) => (
          <span key={`${client}-${index}`} className="client-pill">
            {client}
          </span>
        ))}
      </div>
    </section>
  );
}

