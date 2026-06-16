"use client";

/* eslint-disable @next/next/no-img-element */
import { useState, useRef, useEffect } from "react";
import type { CSSProperties, MouseEvent, ReactNode } from "react";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import styles from "./portfolio.module.css";

/* ─── Asset helpers ──────────────────────────────────────────────────── */
const asset = (path: string) => encodeURI(`/portfolio/${path}`);

const graphicBase = "Graphic designs Portfolio-20260529T143535Z-3-001/Graphic designs Portfolio";
const logoBase = "Logo-20260529T143626Z-3-001/Logo";
const motionBase = "Motion Graphics Portfolio-20260529T143656Z-3-001/Motion Graphics Portfolio";
const packagingBase = "Portfolio of product packaging -20260529T143713Z-3-001/Portfolio of product packaging";
const moreDataBase = "more data";
const reelBase = "reels";

const graphic = (f: string) => asset(`${graphicBase}/${f}`);
const logo = (f: string) => asset(`${logoBase}/${f}`);
const video = (f: string) => asset(`${motionBase}/${f}`);
const pack = (f: string) => asset(`${packagingBase}/${f}`);
const moreData = (f: string) => asset(`${moreDataBase}/${f}`);
const reelVideo = (f: string) => asset(`${reelBase}/${f}`);

/* ─── Data ───────────────────────────────────────────────────────────── */
const motionCuts = [
  video("1.mp4"),
  video("2.mp4"),
  video("3.mp4"),
  video("4.mp4"),
  video("5.mp4"),
  video("6.mp4"),
  video("7.mp4"),
  video("WhatsApp Video 2024-03-06 at 10.46.52 PM.mp4"),
];

const reelCuts = [
  reelVideo("Green Habit Reel 1 MG (2).mp4"),
  reelVideo("Mini Samosa.mp4"),
  reelVideo("Model Reel 2 Gondia.mp4"),
  reelVideo("VK FEB REEL3 INDIAN DEIVING LICENCE (3).mp4"),
  reelVideo("Vk Singapore Reel.mp4"),
  reelVideo("5.mp4"),
];

const campaignBoards = [
  graphic("02.jpeg"), graphic("06.jpeg"),
  graphic("05.jpeg"), graphic("07.jpeg"),
  graphic("08.jpeg"),
];

const packagingBoards = [
  pack("Larisha 01.jpeg"),
  pack("Larisha 04.jpeg"),
  pack("sanyam foods_.jpg"),
  pack("Screenshot 2026-05-30 230145.png"),
  pack("Screenshot 2026-05-30 230239.png"),
];

const identityBoards = [
  logo("afzal realty.jpeg"), logo("3.jpeg"),
  logo("out of bo.jpeg"), logo("1.jpeg"),
];

const motionReels = [
  { src: reelCuts[0], label: "Green Habit", meta: "Reel 01", desc: "Lifestyle-led reel built for clean product recall and brand warmth" },
  { src: reelCuts[1], label: "Mini Samosa", meta: "Reel 02", desc: "Snackable food reel shaped for instant appetite and fast attention" },
  { src: reelCuts[2], label: "Model Spotlight", meta: "Reel 03", desc: "People-first reel with a polished local campaign rhythm" },
  { src: reelCuts[3], label: "Licence Story", meta: "Reel 04", desc: "Service-focused reel designed to make the offer easy to remember" },
  { src: reelCuts[4], label: "Singapore Trip", meta: "Reel 05", desc: "Travel-led reel edited for aspirational reach and shareability" },
  { src: reelCuts[5], label: "Reel Showcase", meta: "Reel 06", desc: "Short-form reel cut for quick attention and repeat viewing" },
];

const instagramReels = [
  { src: motionCuts[0], handle: "@brand_01", likes: "14.2k", caption: "Product drop" },
  { src: motionCuts[1], handle: "@brand_02", likes: "9.7k",  caption: "New launch reveal" },
  { src: motionCuts[2], handle: "@brand_03", likes: "22.1k", caption: "Festive season vibes" },
  { src: motionCuts[3], handle: "@brand_04", likes: "6.4k",  caption: "Campaign energy" },
];

const brandLogos = [
  {
    name: "Ambikasa",
    field: "Interiors",
    src: logo("Ambikasa Logo (2)_page-0001.jpg"),
    accent: "#00AEEF",
  },
  {
    name: "Freshelo",
    field: "Fresh food",
    src: logo("Screenshot 2026-05-30 224650.png"),
    accent: "#00AEEF",
  },
  {
    name: "Shirpur Farms",
    field: "Agriculture",
    src: logo("5.jpeg"),
    accent: "#00AEEF",
  },
  {
    name: "Blossom Beauty",
    field: "Beauty academy",
    src: logo("7.jpeg"),
    accent: "#00AEEF",
  },
  {
    name: "Afzal Realty",
    field: "Property mark",
    src: logo("afzal realty.jpeg"),
    accent: "#00AEEF",
  },
  {
    name: "Out Of The Box",
    field: "Brand studio",
    src: logo("out of bo.jpeg"),
    accent: "#00AEEF",
  },
  {
    name: "The Inside Story",
    field: "Interiors",
    src: logo("3.jpeg"),
    accent: "#00AEEF",
  },
];

const proofSlides = [
  {
    src: moreData("AR_digitals profile_compressed-4_page-0001.jpg"),
    kicker: "Brand Collateral",
    title: "Identity Systems",
  },
  {
    src: moreData("AR_digitals profile_compressed-5_page-0001.jpg"),
    kicker: "Campaign Direction",
    title: "Social Proof",
  },
  {
    src: moreData("AR_digitals profile_compressed-6_page-0001.jpg"),
    kicker: "Creative Systems",
    title: "Brand Visibility",
  },
];

const campaigns = [
  {
    src: campaignBoards[1], num: "02",
    title: "Travel Desire",
    label: "Destination Creative",
    desc: "A scenic campaign visual shaped to make the offer feel immediate and memorable.",
  },
  {
    src: campaignBoards[4], num: "05",
    title: "Launch Energy",
    label: "Campaign Visual",
    desc: "A high-impact creative built to carry product messaging across feeds.",
  },
  {
    src: campaignBoards[2], num: "03",
    title: "Festive Attention",
    label: "Seasonal Campaign",
    desc: "A festive visual built for instant recognition, high contrast and scroll-stopping seasonal energy.",
  },
  {
    src: graphic("01.jpeg"), num: "06",
    title: "Offer Clarity",
    label: "Festive Offer",
    desc: "A direct offer creative designed to make pricing, product and action instantly readable.",
  },
  {
    src: campaignBoards[3], num: "04",
    title: "Brand Recall",
    label: "Social Creative",
    desc: "A clean digital board designed for quick scanning and sharper recall.",
  },
  {
    src: campaignBoards[0], num: "01",
    title: "Snackable Recall",
    label: "Food Campaign",
    desc: "A clean product-led creative that turns a snack pack into a quick, memorable buying cue.",
  },
];

/* ─── Animation presets ──────────────────────────────────────────────── */
const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.18 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
} as const;

/* ─── Stat counter ───────────────────────────────────────────────────── */
function ParallaxMedia({ children, strength = 16 }: { children: ReactNode; strength?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [strength, -strength]);

  return (
    <motion.div ref={ref} className={styles.parallaxMedia} style={{ y: shouldReduceMotion ? 0 : y }}>
      {children}
    </motion.div>
  );
}

function MagneticCard({
  as = "div",
  children,
  className,
  delay = 0,
  hoverLift = 10,
  hoverScale = 1.025,
  style,
  viewportAmount = 0.2,
}: {
  as?: "article" | "div" | "figure";
  children: ReactNode;
  className?: string;
  delay?: number;
  hoverLift?: number;
  hoverScale?: number;
  style?: CSSProperties;
  viewportAmount?: number;
}) {
  const shouldReduceMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const spring = { stiffness: 180, damping: 18, mass: 0.55 };
  const smoothX = useSpring(x, spring);
  const smoothY = useSpring(y, spring);
  const smoothRotateX = useSpring(rotateX, spring);
  const smoothRotateY = useSpring(rotateY, spring);
  const MotionTag = as === "article" ? motion.article : as === "figure" ? motion.figure : motion.div;

  const handlePointerMove = (event: MouseEvent<HTMLElement>) => {
    if (shouldReduceMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const relX = event.clientX - rect.left - rect.width / 2;
    const relY = event.clientY - rect.top - rect.height / 2;
    x.set(relX * 0.055);
    y.set(relY * 0.055 - hoverLift);
    rotateX.set(relY * -0.012);
    rotateY.set(relX * 0.012);
  };

  const resetMagnet = () => {
    x.set(0);
    y.set(0);
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <MotionTag
      className={`${styles.magneticCard} ${className ?? ""}`}
      initial={{ opacity: 0, filter: "blur(8px)" }}
      onMouseLeave={resetMagnet}
      onMouseMove={handlePointerMove}
      style={{
        ...style,
        x: smoothX,
        y: smoothY,
        rotateX: smoothRotateX,
        rotateY: smoothRotateY,
      }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, amount: viewportAmount }}
      whileHover={shouldReduceMotion ? undefined : { scale: hoverScale }}
      whileInView={{ opacity: 1, filter: "blur(0px)" }}
    >
      {children}
    </MotionTag>
  );
}

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = Date.now();
    const dur = 1600;
    const tick = () => {
      const p = Math.min((Date.now() - start) / dur, 1);
      setVal(Math.round(p * to));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, to]);
  return <span ref={ref}>{val}{suffix}</span>;
}

function ProofSlides() {
  return (
    <section className={styles.proofSlidesSection} data-section-word="Brand Proof">
      <div className={styles.proofSlidesInner}>
        <div className={styles.proofSlidesHeader}>
          <div>
            <motion.div {...fadeUp} className={styles.sectionTag}>
              <span />Brand Proof
            </motion.div>
            <motion.h2 {...fadeUp} className={styles.sectionH2}>
              Strategy decks<br />with <em>proof.</em>
            </motion.h2>
          </div>
          <motion.p {...fadeUp} className={styles.sectionBody}>
            Presentation-ready brand pages that turn campaign logic, service
            value and creative direction into clear visual evidence.
          </motion.p>
        </div>
        <motion.div {...fadeUp} className={styles.sectionMeta}>
          <span>{proofSlides.length} proof slides</span>
          <span>Strategy-led</span>
          <span>Presentation-ready</span>
        </motion.div>

        <motion.div
          {...fadeUp}
          className={styles.proofSlidesTrack}
          onWheel={(event) => {
            if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return;
            event.currentTarget.scrollLeft += event.deltaY;
          }}
        >
          {proofSlides.map((slide, i) => (
            <MagneticCard
              as="article"
              key={slide.src}
              className={styles.proofSlide}
              delay={i * 0.06}
              hoverLift={9}
              hoverScale={1.012}
            >
              <div className={styles.proofSlideImage}>
                <ParallaxMedia strength={14}>
                  <img src={slide.src} alt={slide.title} />
                </ParallaxMedia>
              </div>
              <div className={styles.proofSlideCaption}>
                <span>{slide.kicker}</span>
                <strong>{slide.title}</strong>
              </div>
              <div className={styles.proofSlideIndex}>0{i + 1}</div>
            </MagneticCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Component ──────────────────────────────────────────────────────── */
export default function PortfolioExperience() {
  const [activeReel, setActiveReel] = useState(0);
  const { scrollYProgress } = useScroll();
  const heroParallax = useTransform(scrollYProgress, [0, 0.3], [0, -80]);

  return (
    <main className={styles.page}>

      {/* ── Ambient grid + orbs ── */}
      <div className={styles.gridOverlay} aria-hidden="true" />
      <div className={styles.orb1} aria-hidden="true" />
      <div className={styles.orb2} aria-hidden="true" />
      <div className={styles.orb3} aria-hidden="true" />

      {/* ════════════════════════════════════════════════════
          SECTION 1 — HERO
      ════════════════════════════════════════════════════ */}
      <section className={styles.hero}>
        <div className={styles.heroLeft}>
          <motion.div
            className={styles.heroBadge}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className={styles.heroBadgeDot} />
            AR Digitals - Creative Portfolio
          </motion.div>

          <motion.h1
            className={styles.heroHeading}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            Work that makes brands{" "}
            <em className={styles.heroAccent}>impossible</em>
            {" "}to ignore.
          </motion.h1>

          <motion.p
            className={styles.heroSub}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.38, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            Campaigns - Packaging - Motion - Identity systems - curated for
            brands that need to be noticed before they are compared.
          </motion.p>

          <motion.div
            className={styles.heroStats}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {[
              { n: 120, s: "+", label: "Projects delivered" },
              { n: 4,   s: "+",  label: "Years in market" },
              { n: 98,  s: "%", label: "Client satisfaction" },
            ].map(({ n, s, label }) => (
              <div key={label} className={styles.heroStat}>
                <strong><Counter to={n} suffix={s} /></strong>
                <span>{label}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            className={styles.heroCTAs}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <a href="#motion" className={styles.ctaPrimary}>View Reels</a>
            <Link href="/contact" className={styles.ctaGhost}>Start a Project -&gt;</Link>
          </motion.div>
        </div>

        {/* floating mosaic */}
        <motion.div
          className={styles.heroMosaic}
          style={{ y: heroParallax }}
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className={`${styles.mCard} ${styles.mCardFeature}`}>
            <img src={campaignBoards[0]} alt="Campaign creative" />
            <div className={styles.mCardLabel}>
              <span>Campaign</span>
              <strong>Seen First.</strong>
            </div>
          </div>
          <div className={`${styles.mCard} ${styles.mCardPhone}`}>
            <video src={motionCuts[0]} muted loop playsInline autoPlay />
            <div className={styles.mCardBadge}>Motion</div>
          </div>
          <div className={`${styles.mCard} ${styles.mCardPack}`}>
            <img src={packagingBoards[0]} alt="Packaging" />
          </div>
          <div className={`${styles.mCard} ${styles.mCardLogo}`}>
            <img src={identityBoards[0]} alt="Brand identity" />
          </div>
          <div className={`${styles.mCard} ${styles.mCardAux}`}>
            <img src={campaignBoards[2]} alt="Seasonal campaign" />
          </div>
          {/* decorative chips */}
          <div className={styles.heroChip1}>Motion Graphics</div>
          <div className={styles.heroChip2}>5.0 rated</div>
        </motion.div>
      </section>

      {/* ════════════════════════════════════════════════════
          SECTION 2 — REELS
      ════════════════════════════════════════════════════ */}
      <section id="motion" className={styles.sectionMotion} data-section-word="Reels">
        <div className={styles.sectionInner}>

          <motion.div {...fadeUp} className={styles.sectionTag}>
            <span />Reels
          </motion.div>

          <div className={styles.motionHeader}>
            <div>
              <motion.h2 {...fadeUp} className={styles.sectionH2}>
                Reels made for<br /><em>watch-time.</em>
              </motion.h2>
              <motion.div {...fadeUp} className={styles.sectionMeta}>
                <span>{motionReels.length} featured reels</span>
                <span>Vertical-first</span>
                <span>Platform-ready</span>
              </motion.div>
            </div>
            <motion.p {...fadeUp} className={styles.sectionBody}>
              Short-form reels engineered for maximum watch-time, engagement
              and brand recall across every major platform.
            </motion.p>
          </div>

          <div className={styles.motionLayout}>
            <motion.div {...fadeUp} className={styles.motionLeft}>
              <nav className={styles.reelNav}>
                {motionReels.map((r, i) => (
                  <button
                    key={r.src}
                    type="button"
                    className={`${styles.reelBtn} ${i === activeReel ? styles.reelBtnActive : ""}`}
                    onClick={() => setActiveReel(i)}
                  >
                    <span className={styles.reelNum}>0{i + 1}</span>
                    <span className={styles.reelTitle}>{r.label}</span>
                    <span className={styles.reelArrow}>-&gt;</span>
                  </button>
                ))}
              </nav>
            </motion.div>

            <motion.div {...fadeUp} className={styles.motionRight}>
              <div className={styles.motionScreen}>
                <AnimatePresence mode="wait">
                  <motion.video
                    key={motionReels[activeReel].src}
                    src={motionReels[activeReel].src}
                    muted loop playsInline autoPlay
                    initial={{ opacity: 0, scale: 1.06, filter: "blur(18px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, scale: 0.96, filter: "blur(12px)" }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  />
                </AnimatePresence>
                <div className={styles.motionOverlay}>
                  <span>{motionReels[activeReel].meta}</span>
                  <strong>{motionReels[activeReel].label}</strong>
                  <p>{motionReels[activeReel].desc}</p>
                </div>
                <div className={styles.motionCorner}>
                  <span>{activeReel + 1} / {motionReels.length}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <ProofSlides />

      {/* ════════════════════════════════════════════════════
          SECTION 3 — BRAND LOGOS / IDENTITY
      ════════════════════════════════════════════════════ */}
      <section className={styles.sectionLogos} data-section-word="Identity">
        <div className={styles.sectionInner}>

          <motion.div {...fadeUp} className={styles.sectionTag}>
            <span />Identity Systems
          </motion.div>

          <div className={styles.logosHeader}>
            <div>
              <motion.h2 {...fadeUp} className={styles.sectionH2}>
                Identity systems<br />built to <em>last.</em>
              </motion.h2>
              <motion.div {...fadeUp} className={styles.sectionMeta}>
                <span>{brandLogos.length} logo systems</span>
                <span>Brand marks</span>
                <span>Category-ready</span>
              </motion.div>
            </div>
          </div>

          <motion.div
            {...fadeUp}
            className={styles.logosGrid}
          >
            {brandLogos.map((brand, i) => (
              <MagneticCard
                key={`${brand.name}-${brand.src}`}
                className={styles.logoCard}
                style={{ "--brand-accent": brand.accent } as CSSProperties}
                delay={i * 0.07}
                hoverLift={7}
                hoverScale={1.03}
              >
                <div className={styles.logoCardMark}>
                  <ParallaxMedia strength={10}>
                    <img src={brand.src} alt={`${brand.name} logo`} />
                  </ParallaxMedia>
                </div>
                <div className={styles.logoCardInfo}>
                  <div>
                    <strong>{brand.name}</strong>
                    <span>{brand.field}</span>
                  </div>
                </div>
                <div className={styles.logoCardAccent} />
              </MagneticCard>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          SECTION 4 — PRODUCT PACKAGING
      ════════════════════════════════════════════════════ */}
      <section className={styles.sectionPacking} data-section-word="Packaging">
        <div className={styles.sectionInner}>

          <div className={styles.packHeader}>
            <div>
              <motion.div {...fadeUp} className={styles.sectionTag}>
                <span />Product Presence
              </motion.div>
              <motion.h2 {...fadeUp} className={styles.sectionH2}>
                Packaging that feels<br /><em>shelf-ready</em><br />before launch.
              </motion.h2>
              <motion.div {...fadeUp} className={styles.sectionMeta}>
                <span>{packagingBoards.length} packaging boards</span>
                <span>Mockup systems</span>
                <span>Retail presence</span>
              </motion.div>
            </div>
            <motion.p {...fadeUp} className={`${styles.sectionBody} ${styles.packSubtitle}`}>
              The goal is not just a mockup. It is the feeling that the product
              is real, trusted, and ready for a buyer to pick up.
            </motion.p>
          </div>

          <div className={styles.packGrid}>
            {packagingBoards.map((src, i) => (
              <MagneticCard
                as="figure"
                key={src}
                className={`${styles.packFigure} ${i === 0 ? styles.packFigureLarge : ""}`}
                delay={i * 0.1}
                hoverLift={10}
                hoverScale={1.02}
              >
                <ParallaxMedia strength={i === 0 ? 18 : 12}>
                  <img src={src} alt={`Product packaging ${i + 1}`} />
                </ParallaxMedia>
                <div className={styles.packOverlay}>
                  <span>Packaging 0{i + 1}</span>
                </div>
              </MagneticCard>
            ))}
          </div>

        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          SECTION 5 — SHOWREEL
      ════════════════════════════════════════════════════ */}
      <section className={styles.sectionReels} data-section-word="Motion">
        <div className={styles.sectionInner}>

          <motion.div {...fadeUp} className={styles.sectionTag}>
            <span />Motion Graphics
          </motion.div>

          <div className={styles.reelsHeader}>
            <div>
              <motion.h2 {...fadeUp} className={styles.sectionH2}>
                Motion graphics<br />in <em>motion.</em>
              </motion.h2>
              <motion.div {...fadeUp} className={styles.sectionMeta}>
                <span>{instagramReels.length} motion cuts</span>
                <span>Loop-ready</span>
                <span>Feed motion</span>
              </motion.div>
            </div>
            <motion.p {...fadeUp} className={styles.sectionBody}>
              Campaign motion designed to stop scrolls, increase recall and
              strengthen every creative brief we touch.
            </motion.p>
          </div>

          <div className={styles.reelsGrid}>
            {instagramReels.map((reel, i) => (
              <MagneticCard
                key={reel.src}
                className={styles.reelCard}
                delay={i * 0.09}
                hoverLift={10}
                hoverScale={1.025}
                viewportAmount={0.15}
              >
                <div className={styles.reelPhone}>
                  <div className={styles.reelPhoneTop}>
                    <div className={styles.reelPhoneCamera} />
                  </div>
                  <div className={styles.reelVideoWrap}>
                    <ParallaxMedia strength={12}>
                      <video
                        src={reel.src}
                        muted
                        loop
                        playsInline
                        autoPlay
                        preload="metadata"
                      />
                    </ParallaxMedia>
                  </div>
                  <div className={styles.reelMeta}>
                    <div className={styles.reelMetaRow}>
                      <span className={styles.reelHandle}>{reel.handle}</span>
                      <span className={styles.reelLikes}>{reel.likes} likes</span>
                    </div>
                    <p className={styles.reelCaption}>{reel.caption}</p>
                  </div>
                  <div className={styles.reelActions}>
                    <span>Like</span>
                    <span>Reply</span>
                    <span>Share</span>
                  </div>
                </div>
              </MagneticCard>
            ))}
          </div>

          <motion.div {...fadeUp} className={styles.reelsNote}>
            <span>+{motionCuts.length - instagramReels.length} more reels in our portfolio</span>
            <Link href="/contact">See Full Reel Library -&gt;</Link>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          SECTION 6 — FEATURED CAMPAIGNS
      ════════════════════════════════════════════════════ */}
      <section className={styles.sectionCampaigns} data-section-word="Campaigns">
        <div className={styles.sectionInner}>

          <motion.div {...fadeUp} className={styles.sectionTag}>
            <span />Featured Campaigns
          </motion.div>

          <div className={styles.campaignHeader}>
            <div>
              <motion.h2 {...fadeUp} className={styles.sectionH2}>
                Campaign visuals<br />built for <em>recall.</em>
              </motion.h2>
              <motion.div {...fadeUp} className={styles.sectionMeta}>
                <span>{campaigns.length} selected boards</span>
                <span>Feed-ready</span>
                <span>Fast recognition</span>
              </motion.div>
            </div>
            <motion.p {...fadeUp} className={styles.sectionBody}>
              Selected campaign creatives built for faster recognition, clearer
              product messaging and scroll-stopping feed presence.
            </motion.p>
          </div>

          <div className={styles.campaignsList}>
            {campaigns.map((c, i) => (
              <MagneticCard
                as="article"
                key={c.src}
                className={`${styles.campaignCard} ${i === 0 ? styles.campaignCardFeature : ""}`}
                delay={i * 0.06}
                hoverLift={8}
                hoverScale={1.018}
              >
                <div className={styles.campaignVisual}>
                  <ParallaxMedia strength={i === 0 ? 18 : 12}>
                    <img src={c.src} alt={c.title} />
                  </ParallaxMedia>
                  <div className={styles.campaignVisualBadge}>{c.label}</div>
                </div>
                <div className={styles.campaignText}>
                  <span className={styles.campaignNum}>Campaign {c.num}</span>
                  <h3 className={styles.campaignTitle}>{c.title}</h3>
                  <p className={styles.campaignDesc}>{c.desc}</p>
                </div>
              </MagneticCard>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          CTA CLOSE
      ════════════════════════════════════════════════════ */}
      <section className={styles.ctaClose}>
        <div className={styles.ctaCloseInner}>
          <motion.div {...fadeUp}>
            <p className={styles.ctaTag}>Pitch with better work</p>
            <h2 className={styles.ctaH2}>
              Make the first impression feel{" "}
              <em>premium</em> before you say a word.
            </h2>
            <Link href="/contact" className={styles.ctaBig}>Start a Project</Link>
          </motion.div>
        </div>
        <div className={styles.ctaOrb} aria-hidden="true" />
      </section>

    </main>
  );
}
