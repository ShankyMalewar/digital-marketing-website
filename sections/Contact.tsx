import MagneticButton from "@/components/MagneticButton";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-inner">
        <div>
          <p className="section-eyebrow">Have an idea?</p>
          <h2>Tell us what you are trying to grow.</h2>
        </div>
        <div className="contact-panel">
          <p>
            Send the offer, audience, city or market, and the result you want.
            We will shape the first growth direction from there.
          </p>
          <div className="contact-actions">
            <MagneticButton href="mailto:hello@ardigitals.com" variant="light">
              hello@ardigitals.com
            </MagneticButton>
            <a href="tel:+910000000000" className="contact-phone">
              +91 00000 00000
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
