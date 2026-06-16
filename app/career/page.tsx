import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import styles from "./career.module.css";

const openings = [
  {
    role: "Jobs",
    label: "Employment application",
    detail: "Currently hiring for Video Editor and Graphic Designer.",
    href: "/career/apply?type=employment",
  },
  {
    role: "Internship",
    label: "Internship form",
    detail: "For students and freshers ready to learn design, editing, social media, and branding.",
    href: "/career/apply?type=internship",
  },
];

export const metadata: Metadata = {
  title: "Careers | AR Digitals",
  description:
    "Apply for employment and internship opportunities at AR Digitals for video editing, graphic design, and creative digital marketing roles.",
};

export default function CareerPage() {
  return (
    <>
      <Navbar />
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>
              <span /> Careers at AR Digitals
            </p>
            <h1>Join the team behind sharper brand visibility.</h1>
            <p>
              Work on reels, campaigns, design systems, branding, websites, and growth assets for
              businesses that want to be seen and remembered.
            </p>
            <div className={styles.heroActions}>
              <Link href="#current-openings">View openings</Link>
              <Link href="/career/apply?type=internship">Apply for internship</Link>
            </div>
          </div>

          <div className={styles.heroPanel} aria-label="Current hiring summary">
            <span>Now hiring</span>
            <strong>2 open roles</strong>
            <div>
              <p>Video Editor</p>
              <p>Graphic Designer</p>
            </div>
            <small>Remote and onsite preferences available in the application form.</small>
          </div>
        </section>

        <section className={styles.openings} aria-labelledby="current-openings">
          <div className={styles.openingsHeader}>
            <span>Career opportunities</span>
            <h2 id="current-openings">Choose how you want to apply.</h2>
          </div>
          <div className={styles.openingGrid}>
            {openings.map((opening) => (
              <article className={styles.openingCard} key={opening.role}>
                <span>{opening.label}</span>
                <h3>{opening.role}</h3>
                <p>{opening.detail}</p>
                <Link href={opening.href}>
                  Apply now -&gt;
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
