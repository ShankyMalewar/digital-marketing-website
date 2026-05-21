'use client';

import { useEffect, useRef } from 'react';

const stats = [
  { value: '120+', label: 'Projects' },
  { value: '8+',   label: 'Years'    },
  { value: '98%',  label: 'Retention'},
  { value: '40+',  label: 'Brands'   },
];

export default function Hero() {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Parallax blob
  useEffect(() => {
    const blob = document.getElementById('hero-blob');
    if (!blob) return;
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth  - 0.5) * 40;
      const y = (e.clientY / window.innerHeight - 0.5) * 40;
      blob.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <section
      style={{
        minHeight: '100svh',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '72px',
        backgroundColor: '#fff',
      }}
    >
      {/* Decorative blob */}
      <div
        id="hero-blob"
        style={{
          position: 'absolute',
          top: '40%',
          left: '60%',
          width: 'clamp(320px, 40vw, 600px)',
          height: 'clamp(320px, 40vw, 600px)',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,0,0,0.035) 0%, transparent 68%)',
          transform: 'translate(-50%, -50%)',
          transition: 'transform 0.8s ease',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* ── Main Copy ── */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: 'clamp(72px, 10vw, 130px) 24px clamp(48px, 6vw, 80px)',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Eyebrow */}
        <span
          className="anim-0"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            fontFamily: 'var(--font-display)',
            fontWeight: 500,
            fontSize: '11px',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: '#999',
            marginBottom: '28px',
          }}
        >
          <span
            style={{
              width: '6px', height: '6px', borderRadius: '50%',
              backgroundColor: '#0a0a0a', display: 'inline-block',
              animation: 'fadeIn 0.4s ease 0.8s both',
            }}
          />
          Digital Marketing Agency
        </span>

        {/* H1 */}
        <h1
          className="anim-1"
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 800,
            fontSize: 'clamp(48px, 8.5vw, 110px)',
            lineHeight: 1.02,
            letterSpacing: '-0.04em',
            color: '#0a0a0a',
            maxWidth: '920px',
            marginBottom: '0',
          }}
        >
          We grow<br />
          brands in the<br />
          <em style={{ fontStyle: 'normal', color: '#0a0a0a' }}>digital age.</em>
        </h1>

        {/* Subtext */}
        <p
          className="anim-2"
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(15px, 1.4vw, 18px)',
            fontWeight: 300,
            color: '#6b6b6b',
            lineHeight: 1.65,
            maxWidth: '480px',
            marginTop: 'clamp(24px, 3vw, 36px)',
          }}
        >
          AR Digitals is a modern digital marketing studio helping brands grow
          through performance marketing, social strategy, branding, and
          premium digital experiences.
        </p>

        {/* CTAs */}
        <div
          className="anim-3"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginTop: 'clamp(32px, 4vw, 48px)',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          <a
            href="#work"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontFamily: 'var(--font-display)',
              fontWeight: 600,
              fontSize: '14px',
              color: '#ffffff',
              backgroundColor: '#0a0a0a',
              padding: '14px 28px',
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
            View our work
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>

          <a
            href="#contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              fontFamily: 'var(--font-display)',
              fontWeight: 600,
              fontSize: '14px',
              color: '#0a0a0a',
              backgroundColor: 'transparent',
              padding: '13px 28px',
              borderRadius: '100px',
              border: '1.5px solid rgba(10,10,10,0.15)',
              textDecoration: 'none',
              letterSpacing: '-0.01em',
              transition: 'border-color 0.2s, background 0.2s, transform 0.2s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = '#0a0a0a';
              e.currentTarget.style.background = '#f5f4f0';
              e.currentTarget.style.transform = 'scale(0.97)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'rgba(10,10,10,0.15)';
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            Get in touch
          </a>
        </div>
      </div>

      {/* ── Stats bar ── */}
      <div
        className="anim-4"
        style={{
          position: 'relative',
          zIndex: 1,
          borderTop: '1px solid rgba(0,0,0,0.08)',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          maxWidth: '1440px',
          width: '100%',
          margin: '0 auto',
          padding: '0 clamp(24px, 6vw, 80px)',
        }}
      >
        {stats.map(({ value, label }, i) => (
          <div
            key={label}
            style={{
              padding: 'clamp(24px, 4vw, 40px) 0',
              borderRight: i < stats.length - 1 ? '1px solid rgba(0,0,0,0.08)' : 'none',
              paddingLeft: i === 0 ? '0' : 'clamp(24px, 3vw, 40px)',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: 'clamp(28px, 4vw, 52px)',
                letterSpacing: '-0.05em',
                lineHeight: 1,
                color: '#0a0a0a',
              }}
            >
              {value}
            </p>
            <p
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 400,
                fontSize: '13px',
                color: '#999',
                marginTop: '6px',
                letterSpacing: '0.01em',
              }}
            >
              {label}
            </p>
          </div>
        ))}
      </div>

      {/* Scroll indicator */}
      <div
        className="anim-5"
        style={{
          position: 'absolute',
          bottom: '140px',
          right: 'clamp(24px, 4vw, 60px)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          zIndex: 1,
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '10px',
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: '#bbb',
            writingMode: 'vertical-rl',
          }}
        >
          Scroll
        </span>
        <div
          style={{
            width: '1px',
            height: '48px',
            background: 'linear-gradient(to bottom, #bbb, transparent)',
          }}
        />
      </div>
    </section>
  );
}