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

          <h1 className="hero-title anim-1">
            <span>Make your brand</span>
            <span>visible, memorable,</span>
            <span>
              and <strong>chosen.</strong>
            </span>
          </h1>

          <div className="hero-actions hero-actions--premium anim-2">
            <MagneticButton href="#work">See campaigns</MagneticButton>
            <MagneticButton href="#contact" variant="light">
              Get quote
            </MagneticButton>
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
        </div>
      </div>
    </section>
  );
}
