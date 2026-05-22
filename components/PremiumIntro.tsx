"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function PremiumIntro() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timer = window.setTimeout(() => setHidden(true), reduceMotion ? 120 : 1250);

    return () => window.clearTimeout(timer);
  }, []);

  if (hidden) return null;

  return (
    <div className="premium-intro" aria-hidden="true">
      <div className="premium-intro__mark">
        <Image src="/ar-logo.png" alt="" width={86} height={86} priority />
      </div>
      <div className="premium-intro__line" />
      <span>Digital growth, designed to be seen.</span>
    </div>
  );
}
