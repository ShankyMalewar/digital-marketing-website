import Link from "next/link";
import Navbar from "@/components/Navbar";
import styles from "./about.module.css";

const masteryPoints = [
  "Brand Development",
  "Creative Copy",
  "Custom Illustration",
  "Identity Design",
  "Video Editing",
  "Creative Strategy",
];

const servicePillars = [
  {
    number: "01",
    title: "Digital Marketing",
    text: "Visibility systems for social, influencers, media planning, e-commerce, email, websites, and search.",
    items: ["Social media", "Influencer marketing", "SEO", "Website development"],
  },
  {
    number: "02",
    title: "Creative Services",
    text: "Brand assets that make the message sharper across packaging, posters, stalls, hoardings, brochures, and banners.",
    items: ["Packaging", "Posters", "Stall design", "Brochures"],
  },
  {
    number: "03",
    title: "Photo & Video",
    text: "Campaign-ready visuals for TVCs, events, products, recipes, corporate stories, and detailed product explainers.",
    items: ["TVC", "Events", "Product shoot", "Corporate shoots"],
  },
  {
    number: "04",
    title: "Support Services",
    text: "Practical business support through consultation, FGD/CLT, registrations, and aggregator platform services.",
    items: ["Consultation", "FGD / CLT", "Registration", "Aggregator support"],
  },
];

const teamMembers = [
  { name: "Aarav Mehta", role: "Creative Director", experience: "8+ years", tone: "blue" },
  { name: "Riya Sharma", role: "Brand Strategist", experience: "6+ years", tone: "yellow" },
  { name: "Kabir Joshi", role: "Performance Marketer", experience: "7+ years", tone: "green" },
  { name: "Naina Kapoor", role: "Social Media Lead", experience: "5+ years", tone: "paper" },
  { name: "Vivaan Rao", role: "Video Producer", experience: "9+ years", tone: "blue" },
  { name: "Isha Verma", role: "Graphic Designer", experience: "5+ years", tone: "yellow" },
  { name: "Rehan Khan", role: "SEO Specialist", experience: "6+ years", tone: "green" },
  { name: "Meera Iyer", role: "Copywriter", experience: "4+ years", tone: "paper" },
  { name: "Arjun Sen", role: "Client Success Lead", experience: "7+ years", tone: "blue" },
];

export const metadata = {
  title: "About AR Digitals | Creative Digital Marketing Agency",
  description:
    "Meet AR Digitals, a creative digital marketing agency built for brand visibility, digital growth, creative strategy, and production.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>
              <span /> About AR Digitals
            </p>
            <h1>
              A compact creative team for brands that need to be seen.
            </h1>
            <p>
              We build visibility with strategy, design, content, media, and
              production working together. Clearer branding, sharper campaigns,
              and practical execution without overcomplicating the process.
            </p>
            <div className={styles.actions}>
              <Link href="/#services" className={`${styles.button} ${styles.buttonPrimary}`}>
                Explore Services
                <span aria-hidden="true">-&gt;</span>
              </Link>
              <Link href="/portfolio" className={`${styles.button} ${styles.buttonGhost}`}>
                View Work
              </Link>
            </div>
          </div>

          <div className={styles.heroBoard} aria-label="Agency strengths">
            <div className={styles.boardStatement}>
              <span>Dikhega Tabhi Toh, Bikega</span>
              <strong>Marketing that makes the brand easier to notice, trust, and choose.</strong>
            </div>
            <ul className={styles.heroSkillList}>
              {masteryPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className={styles.snapshot} aria-label="Our service ecosystem">
          <div className={`${styles.sectionHead} ${styles.sectionHeadSplit}`}>
            <div>
              <p className={styles.eyebrow}>
                <span /> What we handle
              </p>
              <h2>Four focused pillars, one clear growth direction.</h2>
            </div>
            <p>
              We keep the system lean: digital visibility, creative assets,
              production, and support. Enough structure to move fast, enough
              craft to look premium.
            </p>
          </div>

          <div className={styles.snapshotGrid}>
            {servicePillars.map((pillar) => (
              <article key={pillar.title} className={styles.snapshotCard}>
                <span>{pillar.number}</span>
                <h3>{pillar.title}</h3>
                <p>{pillar.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.team} aria-label="Know the team">
          <div className={styles.sectionHead}>
            <p className={styles.eyebrow}>
              <span /> Know the team
            </p>
            <h2>The people shaping every campaign, creative, and customer touchpoint.</h2>
          </div>

          <div className={styles.teamGrid}>
            {teamMembers.map((member, index) => (
              <article key={member.name} className={`${styles.teamCard} ${styles[`teamCard${member.tone[0].toUpperCase()}${member.tone.slice(1)}`]}`}>
                <div className={styles.teamPhoto} aria-label={`${member.name} photo placeholder`}>
                  <span>{member.name.split(" ").map((part) => part[0]).join("")}</span>
                  <i aria-hidden="true" />
                </div>
                <div className={styles.teamBody}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{member.name}</h3>
                  <p>{member.role}</p>
                  <strong>{member.experience} experience</strong>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.cta}>
          <div>
            <p className={styles.eyebrow}>
              <span /> Work with us
            </p>
            <h2>Ready to make your brand visible before your competitor is noticed?</h2>
          </div>
          <Link href="/contact" className={`${styles.button} ${styles.buttonLight}`}>
            Get Quote
            <span aria-hidden="true">-&gt;</span>
          </Link>
        </section>
      </main>
    </>
  );
}
