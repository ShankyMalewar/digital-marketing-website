'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'Work',     href: '#work'     },
  { label: 'Services', href: '#services' },
  { label: 'About',    href: '#about'    },
  { label: 'Contact',  href: '#contact'  },
];

export default function Navbar() {
  const [open,      setOpen]      = useState(false);
  const [scrolled,  setScrolled]  = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 100,
        backgroundColor: scrolled ? 'rgba(255,255,255,0.94)' : 'rgba(255,255,255,0.0)',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(0,0,0,0.06)' : '1px solid transparent',
        transition: 'background-color 0.4s ease, border-color 0.4s ease, backdrop-filter 0.4s ease',
      }}
    >
      <nav
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '72px',
          padding: '0 48px',
          maxWidth: '1440px',
          margin: '0 auto',
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 800,
            fontSize: '18px',
            color: '#0a0a0a',
            textDecoration: 'none',
            letterSpacing: '-0.04em',
          }}
          className="anim-0"
        >
          AR Digitals
        </Link>

        {/* Desktop links */}
        <ul
          style={{ display: 'flex', alignItems: 'center', gap: '40px', listStyle: 'none' }}
          className="hidden md:flex"
        >
          {navLinks.map((link, i) => (
            <li key={link.label} className={`anim-${i}`}>
              <Link
                href={link.href}
                className="nav-link"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 500,
                  fontSize: '14px',
                  color: '#0a0a0a',
                  textDecoration: 'none',
                  letterSpacing: '-0.01em',
                }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA button */}
        <a
          href="#contact"
          className="hidden md:inline-flex anim-4"
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 600,
            fontSize: '13px',
            color: '#ffffff',
            backgroundColor: '#0a0a0a',
            padding: '10px 22px',
            borderRadius: '100px',
            textDecoration: 'none',
            letterSpacing: '-0.01em',
            transition: 'opacity 0.2s, transform 0.2s',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.opacity = '0.8';
            e.currentTarget.style.transform = 'scale(0.97)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.opacity = '1';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          Let&apos;s talk
        </a>

        {/* Hamburger */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          style={{
            background: 'none', border: 'none', cursor: 'pointer',
            padding: '4px', display: 'flex', flexDirection: 'column', gap: '5px',
          }}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map(i => (
            <span key={i} style={{
              display: 'block',
              width: '22px',
              height: '1.5px',
              backgroundColor: '#0a0a0a',
              transition: 'all 0.3s ease',
              transform:
                i === 0 && open ? 'rotate(45deg) translateY(6.5px)' :
                i === 2 && open ? 'rotate(-45deg) translateY(-6.5px)' : 'none',
              opacity: i === 1 && open ? 0 : 1,
            }} />
          ))}
        </button>
      </nav>

      {/* Mobile drawer */}
      <div style={{
        overflow: 'hidden',
        maxHeight: open ? '300px' : '0',
        transition: 'max-height 0.4s var(--ease-out)',
        backgroundColor: '#fff',
        borderTop: open ? '1px solid rgba(0,0,0,0.06)' : 'none',
      }}>
        <ul style={{ listStyle: 'none', padding: '20px 32px 28px' }}>
          {navLinks.map(link => (
            <li key={link.label} style={{ marginBottom: '20px' }}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: '22px',
                  color: '#0a0a0a',
                  textDecoration: 'none',
                  letterSpacing: '-0.03em',
                }}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li style={{ marginTop: '24px' }}>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 600,
                fontSize: '14px',
                color: '#fff',
                backgroundColor: '#0a0a0a',
                padding: '12px 24px',
                borderRadius: '100px',
                textDecoration: 'none',
                display: 'inline-block',
              }}
            >
              Let&apos;s talk
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}