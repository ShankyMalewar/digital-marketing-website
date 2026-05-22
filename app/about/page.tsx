import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";

const teamMembers = [
  {
    name: "Creative Lead",
    role: "Brand stories, campaign direction, and visual systems",
    initials: "CL",
  },
  {
    name: "Growth Strategist",
    role: "Google Ads, SEO planning, funnels, and lead quality",
    initials: "GS",
  },
  {
    name: "Design Partner",
    role: "Social creatives, websites, packaging, and brand assets",
    initials: "DP",
  },
];

const capabilities = [
  "Social media marketing",
  "Google Ads campaigns",
  "Branding and graphic design",
  "Website design and SEO",
];

export const metadata = {
  title: "About AR Digitals | Creative Digital Marketing Agency",
  description:
    "Meet AR Digitals, a creative digital marketing agency helping brands become visible, trusted, and chosen.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="about-page">
        <section className="about-hero-page">
          <div className="about-hero-page__grid">
            <div className="about-hero-page__copy">
              <div className="about-page__eyebrow">
                <span />
                About AR Digitals
              </div>
              <h1>
                A premium digital team for brands that need to be seen.
              </h1>
              <p>
                AR Digitals is a creative digital marketing team built for
                businesses that want sharper branding, stronger campaigns, and a
                digital presence customers can instantly understand.
              </p>
              <div className="about-hero-chips" aria-label="Agency strengths">
                <span>Advanced designs</span>
                <span>Creative team</span>
                <span>Quick support</span>
              </div>
            </div>

            <div className="about-studio-card" aria-label="AR Digitals studio preview">
              <div className="about-studio-card__top">
                <div className="about-studio-card__logo">
                  <Image src="/ar-logo.png" alt="" width={52} height={52} />
                </div>
                <span>Growth studio</span>
              </div>

              <div className="about-studio-card__statement">
                <span>Dikhega tabhi bikega</span>
                <strong>Brand visibility with growth discipline.</strong>
              </div>

              <div className="about-studio-card__grid" aria-hidden="true">
                <div>
                  <span>Visibility</span>
                  <strong>4.8x</strong>
                </div>
                <div>
                  <span>Brand stories</span>
                  <strong>40+</strong>
                </div>
              </div>

              <div className="about-studio-card__orbit" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>
        </section>

        <section className="about-capabilities" aria-label="What we do">
          <div>
            <p className="about-page__eyebrow">What we do</p>
            <h2>We bridge the gap between your business and your customers.</h2>
          </div>
          <div className="about-capability-list">
            {capabilities.map((item, index) => (
              <div key={item} className="about-capability">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{item}</strong>
              </div>
            ))}
          </div>
        </section>

        <section className="about-team" aria-label="Our team">
          <div className="about-team__header">
            <p className="about-page__eyebrow">Our team</p>
            <h2>A compact team with creative, growth, and design thinking.</h2>
          </div>

          <div className="about-team__grid">
            {teamMembers.map((member) => (
              <article key={member.name} className="team-card">
                <div className="team-card__avatar">{member.initials}</div>
                <div>
                  <h3>{member.name}</h3>
                  <p>{member.role}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="about-services-cta">
          <div>
            <p className="about-page__eyebrow">Next</p>
            <h2>See how each service turns attention into business growth.</h2>
          </div>
          <Link href="/services" className="about-services-cta__button">
            Explore services
            <span aria-hidden="true">-&gt;</span>
          </Link>
        </section>
      </main>
    </>
  );
}
