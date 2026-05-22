import Image from "next/image";
import Link from "next/link";
import InnerMenuDrawer from "@/components/InnerMenuDrawer";
import SpeakFab from "@/components/SpeakFab";
import styles from "./page.module.css";

type HeroLink = { href: string; label: string };

const HERO_LINKS: HeroLink[] = [
  { href: "/about", label: "About" },
  { href: "/why", label: "Why Chrysalis" },
  { href: "/admission", label: "Admission" },
  { href: "/curriculum", label: "Curriculum" },
  { href: "/parent-resources", label: "Parent Resources" },
];

export const metadata = {
  title: "Chrysalis School — Built for learning.",
  description:
    "Designed for online learning — not adapted to it. We built the online experience first, then built the school around it.",
};

export default function SchoolPage() {
  return (
    <div className={styles.body}>
      <section className={styles.hero}>
        <div className={styles.heroFrame}>
          <header className={styles.topbar}>
            <InnerMenuDrawer />

            <Link href="/" className={styles.brand}>
              <span className={styles.brandMark}>
                <Image
                  src="/chrysalis-logo.png"
                  alt="Chrysalis"
                  width={44}
                  height={44}
                />
              </span>
              <span className={styles.brandText}>
                <span>Chrysalis</span>
                <span className={styles.b2}>School</span>
              </span>
            </Link>

            <nav className={styles.navRight}>
              <a href="#login" className={styles.navLogin}>
                Student Login
              </a>
              <a href="#admissions" className={styles.navReg}>
                <span className={styles.regDot} aria-hidden="true" />
                <span className={styles.regText}>
                  Registration open · <strong>Sep 2026</strong>
                </span>
              </a>
            </nav>
          </header>

          <h1 className={styles.heroHeadline}>
            <div className={styles.row}><span>BUILT FOR</span></div>
            <div className={styles.row}><span><em>learning</em>.</span></div>
          </h1>

          <p className={styles.heroSub}>
            <em>Designed</em> for online learning — not adapted to it. We built
            the online experience first, then built the school around it.
          </p>

          <div className={styles.heroLinks}>
            {HERO_LINKS.map((l) => (
              <Link key={l.href} href={l.href} className={styles.heroLink}>
                <span className={styles.hlLabel}>{l.label}</span>
                <svg
                  className={styles.hlArr}
                  viewBox="0 0 14 14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                >
                  <path d="M3 11 L11 3 M5 3 L11 3 L11 9" />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SpeakFab />
    </div>
  );
}
