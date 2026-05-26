"use client";

import Image from "next/image";
import { useEffect } from "react";
import MagneticButton from "@/components/MagneticButton";

export default function Hero() {
  useEffect(() => {
    const media = document.getElementById("hero-media");
    if (!media) return;

    const onMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 18;
      const y = (event.clientY / window.innerHeight - 0.5) * 18;
      media.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-grid">
        <div className="hero-copy">
          <span className="hero-eyebrow anim-0">
            <span />
            Creative Digital Marketing Agency
          </span>

          <h1 className="hero-title hero-title--tagline anim-1">
            <span>Dikhega Tabhi</span>
            <span>
              <strong>Bikega.</strong>
            </span>
            <span className="hero-title__support">
              Make your brand impossible to ignore.
            </span>
          </h1>

          <div className="hero-impact anim-2">
            <div className="hero-impact__lead">
              <span>Visibility engine</span>
              <strong>Seen. Trusted. Chosen.</strong>
            </div>

            <div className="hero-impact__body">
              <div className="hero-signal-grid" aria-label="Why choose AR Digitals">
                <div className="hero-signal-card hero-signal-card--primary">
                  <span>100+</span>
                  <strong>Businesses</strong>
                </div>
                <div className="hero-signal-card">
                  <span>Meta</span>
                  <strong>Ads</strong>
                </div>
                <div className="hero-signal-card">
                  <span>Google</span>
                  <strong>Leads</strong>
                </div>
                <div className="hero-signal-card">
                  <span>Web</span>
                  <strong>Sales</strong>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="hero-media" className="hero-media hero-media--image anim-scale" aria-label="Online world illustration">
          <Image
            src="/online-world-cuate.png"
            alt="People connecting across the online world"
            width={1600}
            height={1200}
            priority
            className="hero-storyset-image"
          />

          <div className="hero-media-actions">
            <MagneticButton href="#contact">Book Free Consultation</MagneticButton>
            <MagneticButton href="#contact" variant="light">
              WhatsApp Us
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
}
