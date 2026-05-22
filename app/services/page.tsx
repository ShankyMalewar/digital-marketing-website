import Link from "next/link";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Services | AR Digitals",
  description:
    "AR Digitals services page for social media marketing, Google Ads, branding, website design, and SEO.",
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="services-placeholder">
        <section>
          <p className="about-page__eyebrow">Services</p>
          <h1>Services page coming next.</h1>
          <p>
            This route is ready so the About page can lead to a dedicated
            services experience. We can design the full page in the next step.
          </p>
          <Link href="/about">Back to about</Link>
        </section>
      </main>
    </>
  );
}
