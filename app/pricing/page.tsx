import Link from "next/link";
import Navbar from "@/components/Navbar";

const plans = [
  {
    id: "starter",
    name: "Starter Visibility",
    price: "Custom",
    note: "For brands that need a clean digital start.",
    description:
      "A focused setup for social presence, basic creative direction, and clear campaign messaging.",
    features: ["Social media direction", "Starter creatives", "Brand message cleanup"],
  },
  {
    id: "growth",
    name: "Growth System",
    price: "Custom",
    note: "For businesses ready to generate enquiries.",
    description:
      "A stronger monthly growth setup with content, ads, landing direction, and performance tracking.",
    features: ["Social + Google Ads", "Lead campaign setup", "Monthly improvement plan"],
    featured: true,
  },
  {
    id: "premium",
    name: "Premium Brand Engine",
    price: "Custom",
    note: "For brands that want a complete premium presence.",
    description:
      "A complete digital growth system across brand story, design, campaigns, website, and SEO direction.",
    features: ["Brand strategy", "Website + SEO direction", "Campaign creative system"],
  },
];

export const metadata = {
  title: "Pricing | AR Digitals",
  description:
    "Explore AR Digitals pricing levels for brand visibility, growth campaigns, and premium digital marketing systems.",
};

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main className="pricing-page">
        <section className="pricing-cards" aria-label="Pricing plans">
          {plans.map((plan) => (
            <article
              key={plan.id}
              className={`pricing-card ${plan.featured ? "pricing-card--featured" : ""}`}
            >
              <div>
                <span>{plan.note}</span>
                <h2>{plan.name}</h2>
                <strong>{plan.price}</strong>
                <p>{plan.description}</p>
              </div>
              <ul>
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <a href={`#${plan.id}-details`} className="pricing-card__button">
                Explore
                <span aria-hidden="true">-&gt;</span>
              </a>
            </article>
          ))}
        </section>

        <section className="pricing-details" aria-label="Plan details">
          {plans.map((plan, index) => (
            <article key={plan.id} id={`${plan.id}-details`} className="pricing-detail">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h2>{plan.name}</h2>
                <p>
                  This space is reserved for deeper information about the plan:
                  deliverables, timeline, revision limits, add-ons, reporting,
                  and what the client should prepare before starting.
                </p>
              </div>
              <Link href="/#contact">Discuss this plan</Link>
            </article>
          ))}
        </section>
      </main>
    </>
  );
}
