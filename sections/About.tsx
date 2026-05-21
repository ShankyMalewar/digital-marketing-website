import MagneticButton from "@/components/MagneticButton";

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="about-kicker">AR Digitals</div>
      <div className="about-copy">
        <h2>
          We make growth campaigns feel less like ads and more like brand
          experiences people remember.
        </h2>
        <p>
          The visual language can be bold and motion-led, but the work stays
          practical: a clear offer, strong creative, clean landing pages, reliable
          tracking, and weekly improvement.
        </p>
        <div className="about-proof">
          <span>Strategy</span>
          <span>Creative</span>
          <span>Paid media</span>
          <span>Conversion</span>
        </div>
        <MagneticButton href="#contact" variant="light">
          Start a project
        </MagneticButton>
      </div>
    </section>
  );
}
