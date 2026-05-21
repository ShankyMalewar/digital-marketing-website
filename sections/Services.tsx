import SectionHeader from "@/components/SectionHeader";
import { services } from "@/constants/site";

export default function Services() {
  return (
    <section id="services" className="section services-section">
      <SectionHeader
        eyebrow="What we do"
        title="Strategy, creative, and media working as one growth system."
        text="Bold motion gets attention. The system behind it turns that attention into enquiries, bookings, and sales."
      />

      <div className="service-list">
        {services.map((service) => (
          <article key={service.title} className="service-row">
            <span className="service-number">{service.number}</span>
            <div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
            <div className="service-tags">
              {service.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
