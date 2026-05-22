"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navLinks } from "@/constants/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled || open ? "site-header--solid" : ""}`}>
      <nav className="site-nav">
        <Link href="/" className="site-logo anim-0" onClick={() => setOpen(false)}>
          AR Digitals
        </Link>

        <ul className="desktop-nav">
          {navLinks.map((link, index) => (
            <li key={link.label} className={`anim-${Math.min(index, 4)}`}>
              <Link href={link.href} className="nav-link">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link href="/#contact" className="desktop-cta anim-4">
          Get quote
        </Link>

        <button
          className={`menu-button ${open ? "menu-button--open" : ""}`}
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div className={`mobile-drawer ${open ? "mobile-drawer--open" : ""}`}>
        <ul>
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/#contact" onClick={() => setOpen(false)} className="mobile-cta">
              Get quote
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
