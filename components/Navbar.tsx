"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks } from "@/constants/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeHash, setActiveHash] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      const contact = document.getElementById("contact");
      const contactTop = contact?.getBoundingClientRect().top ?? Infinity;
      setScrolled(window.scrollY > 28);
      setScrollProgress(scrollable > 0 ? window.scrollY / scrollable : 0);
      setActiveHash(contactTop < window.innerHeight * 0.5 ? "#contact" : "");
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <header
      className={`site-header ${scrolled || open ? "site-header--solid" : ""} ${
        scrolled ? "site-header--compact" : ""
      }`}
    >
      <nav className="site-nav">
        <Link href="/" className="site-logo anim-0" onClick={() => setOpen(false)}>
          <Image src="/ar-logo.png" alt="AR Digitals" width={86} height={86} priority />
        </Link>

        <ul className="desktop-nav">
          {navLinks.map((link, index) => (
            <li key={link.label} className={`anim-${Math.min(index, 4)}`}>
              <Link
                href={link.href}
                className={`nav-link ${
                  link.href === pathname ||
                  (link.href === "/#contact" && pathname === "/" && activeHash === "#contact")
                    ? "nav-link--active"
                    : ""
                }`}
              >
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
      <span
        className="site-header__progress"
        style={{ transform: `scaleX(${Math.min(Math.max(scrollProgress, 0), 1)})` }}
        aria-hidden="true"
      />
    </header>
  );
}
