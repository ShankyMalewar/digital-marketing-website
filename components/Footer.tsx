import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/constants/site";
import SocialIcon from "@/components/SocialIcon";

const socials = [
  { label: "Facebook", icon: "facebook", href: "https://www.facebook.com" },
  { label: "Instagram", icon: "instagram", href: "https://www.instagram.com/ardigitals.in/" },
  { label: "YouTube", icon: "youtube", href: "https://www.youtube.com" },
  { label: "WhatsApp", icon: "whatsapp", href: "https://wa.me/918149367027" },
  { label: "LinkedIn", icon: "linkedin", href: "https://www.linkedin.com/company/ardigitals-in/" },
  { label: "X", icon: "x", href: "https://x.com" },
];

const address =
  "L-10, Nari Rd, near Buddha Vihar, Sugat Nagar, LIG Colony, Nari Village, Nagpur, Maharashtra 440014";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__main">
          <div className="site-footer__brand">
            <Link href="/" className="site-footer__logo" aria-label="AR Digitals home">
              <Image src="/ar-logo.png" alt="AR Digitals" width={118} height={118} />
            </Link>
            <strong>Dikhega Tabhi Toh, Bikega.</strong>
            <span>Creative digital marketing agency based in Nagpur.</span>
          </div>

          <nav className="site-footer__links" aria-label="Footer navigation">
            <span className="site-footer__label">Explore</span>
            {navLinks.map((link) => (
              <Link href={link.href} key={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="site-footer__contact">
            <span className="site-footer__label">Connect</span>
            <a href="tel:+918149367027">+91 81493 67027</a>
            <a href="tel:+917218004929">+91 72180 04929</a>
            <a href="mailto:ardigitalbranding@gmail.com">ardigitalbranding@gmail.com</a>
          </div>

          <address className="site-footer__address">
            <span className="site-footer__label">Visit</span>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`}
              target="_blank"
              rel="noreferrer"
            >
              {address}
            </a>
          </address>
        </div>

        <div className="site-footer__bottom">
          <p>&copy; {new Date().getFullYear()} AR Digitals. All rights reserved.</p>
          <div className="site-footer__socials" aria-label="Social links">
            {socials.map((social) => (
              <a href={social.href} aria-label={social.label} key={social.label}>
                <SocialIcon icon={social.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
