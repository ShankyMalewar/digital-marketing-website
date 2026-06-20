import type { Metadata } from "next";
import Image from "next/image";
import LeadForm from "@/components/LeadForm";
import Navbar from "@/components/Navbar";
import SocialIcon from "@/components/SocialIcon";
import styles from "./contact.module.css";

const address =
  "L-10, Nari Rd, near Buddha Vihar, Sugat Nagar, LIG Colony, Nari Village, Nagpur, Maharashtra 440014";
const mapQuery = encodeURIComponent(address);

const contactItems = [
  {
    label: "Call",
    value: "+91 81493 67027",
    href: "tel:+918149367027",
  },
  {
    label: "Call",
    value: "+91 72180 04929",
    href: "tel:+917218004929",
  },
  {
    label: "Email",
    value: "ardigitalbranding@gmail.com",
    href: "mailto:ardigitalbranding@gmail.com",
  },
  {
    label: "Website",
    value: "www.ardigitals.co.in",
    href: "https://www.ardigitals.co.in",
  },
];

const socials = [
  { label: "Facebook", icon: "facebook", href: "https://www.facebook.com" },
  { label: "Instagram", icon: "instagram", href: "https://www.instagram.com/ardigitals.in/" },
  { label: "YouTube", icon: "youtube", href: "https://www.youtube.com" },
  { label: "WhatsApp", icon: "whatsapp", href: "https://wa.me/918149367027" },
  { label: "LinkedIn", icon: "linkedin", href: "https://www.linkedin.com/company/ardigitals-in/" },
  { label: "X", icon: "x", href: "https://x.com" },
];

export const metadata: Metadata = {
  title: "Contact | AR Digitals",
  description:
    "Contact AR Digitals in Nagpur for digital marketing, branding, creative, website, SEO, and growth campaigns.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className={styles.page}>
        <section className={styles.shell} id="contact">
          <div className={styles.hero}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>
                <span /> Contact AR Digitals
              </p>
              <h1>Let&apos;s make your brand easier to find.</h1>
              <p>
                Reach us for digital marketing, branding, content, websites, SEO,
                campaigns, and creative production.
              </p>
            </div>
            <div className={styles.heroMedia}>
              <Image
                src="/portfolio/vc/vc ar_page-0001.jpg"
                alt="AR Digitals visiting card with phone numbers, email, website, and social links"
                fill
                priority
                sizes="(max-width: 900px) 100vw, 42vw"
              />
            </div>
          </div>

          <div className={styles.layout}>
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <span>Quick connect</span>
                <strong>One place for every conversation.</strong>
              </div>

              <div className={styles.contactList}>
                {contactItems.map((item) => (
                  <a href={item.href} className={styles.contactItem} key={item.value}>
                    <span>{item.label}</span>
                    <strong>{item.value}</strong>
                  </a>
                ))}
              </div>

              <div className={styles.address}>
                <span>Visit us</span>
                <p>{address}</p>
              </div>

              <div className={styles.socials} aria-label="Social links">
                {socials.map((social) => (
                  <a
                    href={social.href}
                    aria-label={social.label}
                    className={styles.social}
                    key={social.label}
                  >
                    <SocialIcon icon={social.icon} />
                  </a>
                ))}
              </div>
            </div>

            <LeadForm
              className={styles.leadForm}
              formHeaderClassName={styles.formHeader}
              redirectPath="/contact?submitted=true#contact"
              showHeader
              successClassName={styles.success}
            />

            <div className={styles.mapPanel}>
              <iframe
                title="AR Digitals address map"
                src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
                target="_blank"
                rel="noreferrer"
              >
                Open in Google Maps -&gt;
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
