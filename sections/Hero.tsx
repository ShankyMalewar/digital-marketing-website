"use client";

import { useEffect } from "react";
import MagneticButton from "@/components/MagneticButton";
import { stats } from "@/constants/site";

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
            Digital Marketing Agency
          </span>

          <h1 className="anim-1">Marketing that looks good and performs.</h1>

          <p className="anim-2">
            AR Digitals builds brand systems, campaigns, landing pages, and paid
            media loops for businesses that want attention to turn into action.
          </p>

          <div className="hero-actions anim-3">
            <MagneticButton href="#work">View our work</MagneticButton>
            <MagneticButton href="#contact" variant="light">
              Get in touch
            </MagneticButton>
          </div>
        </div>

        <div id="hero-media" className="hero-media anim-scale">
          <div className="hero-video-note">
            <span>Motion slot</span>
            <p>Drop your AR Digitals reel, 3D loop, or ad animation here.</p>
          </div>
          <div className="media-card media-card--main hero-showreel">
            <div className="showreel-top">
              <span>AR Digitals showreel</span>
              <strong>2026</strong>
            </div>
            <div className="showreel-orbit" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <div className="showreel-window showreel-window--one">
              <span>Strategy</span>
              <strong>01</strong>
            </div>
            <div className="showreel-window showreel-window--two">
              <span>Creative</span>
              <strong>02</strong>
            </div>
            <button className="showreel-play" aria-label="Play showreel" type="button">
              Play
            </button>
          </div>
          <div className="media-card media-card--float reel-stat">
            <span>Motion slot</span>
            <strong>MP4</strong>
          </div>
        </div>
      </div>

      <div className="hero-stats anim-4">
        {stats.map(({ value, label }) => (
          <div key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
