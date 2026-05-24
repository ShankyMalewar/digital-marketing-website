"use client";

import { useEffect } from "react";

const MOTION_SELECTOR = [
  ".client-strip",
  ".section",
  ".featured-work",
  ".review-sticky",
  ".contact-inner",
].join(",");

export default function PageMotion() {
  useEffect(() => {
    const items = Array.from(document.querySelectorAll<HTMLElement>(MOTION_SELECTOR));
    if (!items.length) return;

    items.forEach((item) => item.classList.add("motion-watch"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("motion-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.12 }
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return null;
}
