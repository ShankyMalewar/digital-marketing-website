"use client";

import Image from "next/image";
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
            Creative Digital Marketing Agency
          </span>

          <h1 className="anim-1">Dikhega tabhi bikega. Be the brand customers choose.</h1>

          <p className="anim-2">
            AR Digitals bridges the gap between your business and your customers
            with social media marketing, Google Ads, branding, content, websites,
            and SEO built to grow your business fast.
          </p>

          <div className="hero-actions anim-3">
            <MagneticButton href="#work">See campaigns</MagneticButton>
            <MagneticButton href="#contact" variant="light">
              Get quote
            </MagneticButton>
          </div>
        </div>

        <div id="hero-media" className="hero-media anim-scale" aria-label="AR Digitals campaign showreel preview">
          <div className="hero-showreel">
            <div className="showreel-top">
              <div className="showreel-brand">
                <Image src="/ar-logo.png" alt="" width={34} height={34} />
                <span>AR Digitals Studio</span>
              </div>
              <strong>One step growth</strong>
            </div>

            <div className="showreel-stage">
              <div className="showreel-panel showreel-panel--dashboard">
                <div className="panel-kicker">Growth dashboard</div>
                <div className="dashboard-head">
                  <span>Business lift</span>
                  <strong>4.8x</strong>
                </div>
                <div className="dashboard-chart" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
                <div className="dashboard-metrics">
                  <span>ROAS</span>
                  <span>CAC</span>
                  <span>Leads</span>
                </div>
              </div>

              <div className="showreel-panel showreel-panel--social">
                <div className="social-preview">
                  <span>Brand story</span>
                  <strong>Visible everywhere</strong>
                </div>
                <div className="social-caption">
                  <span>Social media</span>
                  <strong>+182%</strong>
                </div>
              </div>

              <div className="showreel-panel showreel-panel--landing">
                <div className="landing-nav">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="landing-hero">
                  <strong>Bridge the gap</strong>
                  <span>Business to customers</span>
                </div>
                <div className="landing-cta">Enquire now</div>
              </div>

              <div className="showreel-panel showreel-panel--creative">
                <span>Creative team</span>
                <strong>Advanced designs</strong>
                <div className="creative-bars" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            </div>
          </div>

          <div className="media-card media-card--float reel-stat">
            <span>You relax</span>
            <strong>We grow</strong>
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
