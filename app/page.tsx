import Image from "next/image";
import Link from "next/link";
import HomeMenuDrawer from "@/components/HomeMenuDrawer";
import SpeakFab from "@/components/SpeakFab";
import styles from "./page.module.css";

const MARQUEE_ITEMS = [
  "British Curriculum",
  "Real Teachers",
  "Personalised Learning",
  "All Major Curriculums",
  "Lower Cost",
  "Less Complexity",
];

function MarqueeLoop() {
  return (
    <span>
      {MARQUEE_ITEMS.map((item) => (
        <span key={item}>
          {item} <span className={styles.dot} />
        </span>
      ))}
    </span>
  );
}

export default function HomePage() {
  return (
    <div className={styles.body}>
      <div className={styles.heroWrap}>
        <section className={styles.hero}>
          <div className={styles.topbar}>
            <Link href="/" className={styles.brand}>
              <span className={styles.brandMark}>
                <Image
                  src="/chrysalis-logo.png"
                  alt="Chrysalis Education"
                  width={48}
                  height={48}
                />
              </span>
              <span className={styles.brandText}>
                <span className={styles.b1}>chrysalis</span>
                <span className={styles.b2}>EDUCATION</span>
              </span>
            </Link>
            <div className={styles.topbarRight}>
              <HomeMenuDrawer />
            </div>
          </div>

          <div className={styles.heroBody}>
            <div>
              <h1 className={styles.heroTitle}>
                <span className={styles.row}><span>Education built</span></span>
                <span className={styles.row}><span>around <em>you</em>.</span></span>
              </h1>
            </div>
            <div className={styles.heroAside}>
              <p>
                An online British curriculum school, and EDU Concierge — a
                monthly programme that pairs every family with a dedicated
                Education Manager. Both designed to remove the complexity, the
                cost, and the one-size-fits-all that has held education back
                for too long.
              </p>
            </div>
          </div>

          <div className={styles.tiles}>
            <Link href="/school" className={`${styles.tile} ${styles.tileSchool}`}>
              <div className={styles.orbit} />
              <div className={styles.orbit2} />
              <span className={`${styles.star} ${styles.s1}`} />
              <span className={`${styles.star} ${styles.s2}`} />
              <span className={`${styles.star} ${styles.s3}`} />

              <div className={styles.tileText}>
                <span className={styles.tileEyebrow}>Looking for a school?</span>
                <h2 className={styles.tilePrompt}>
                  Quality <em>online schooling</em>.
                </h2>
                <div className={styles.tileContent}>
                  <div className={styles.meetLine}>
                    Meet <strong>Chrysalis Online School</strong>
                  </div>
                  <div className={styles.sub}>
                    British curriculum · Online · Real teachers
                  </div>
                  <p>
                    A full British curriculum school, delivered online with real
                    teachers, small classes, and an intelligent layer that
                    treats every student as the individual they are.
                  </p>
                </div>
              </div>

              <div className={styles.productLockup}>
                <div className={styles.lockName}>
                  <div className={styles.shield}>
                    <svg viewBox="0 0 56 64" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M4 6 L52 6 L52 38 Q52 56 28 62 Q4 56 4 38 Z"
                        fill="rgba(255,255,255,0.06)"
                        stroke="rgba(255,255,255,0.85)"
                        strokeWidth="1.6"
                        strokeLinejoin="round"
                      />
                      <line x1="28" y1="14" x2="28" y2="52" stroke="rgba(255,255,255,0.7)" strokeWidth="1" strokeLinecap="round" />
                      <path d="M28 16 Q14 16 10 26 Q8 32 14 36 Q22 36 27 30 Z" fill="#F5D88A" />
                      <path d="M28 32 Q16 36 14 44 Q14 50 22 50 Q27 46 28 38 Z" fill="#F0A875" />
                      <path d="M28 16 Q42 16 46 26 Q48 32 42 36 Q34 36 29 30 Z" fill="#8E5A8F" />
                      <path d="M28 32 Q40 36 42 44 Q42 50 34 50 Q29 46 28 38 Z" fill="#6BA3C7" />
                      <circle cx="28" cy="13" r="1.8" fill="#E07358" />
                      <circle cx="28" cy="52" r="1.4" fill="#7A9472" />
                    </svg>
                  </div>
                  <div className={styles.nameText}>
                    <div className={styles.n1}>Chrysalis</div>
                    <div className={styles.n2}>Online School</div>
                  </div>
                </div>
                <span className={styles.ctaLine}>Register for Sep 2026</span>
              </div>

              <span className={styles.tileArrow}>
                <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M3 11 L11 3 M5 3 L11 3 L11 9" />
                </svg>
              </span>
            </Link>

            <Link href="/concierge" className={`${styles.tile} ${styles.tileConcierge}`}>
              <div className={styles.orbit} />
              <div className={styles.orbit2} />
              <span className={`${styles.pathwayDot} ${styles.pdCenter}`} />
              <span className={`${styles.pathwayDot} ${styles.pd1}`} />
              <span className={`${styles.pathwayDot} ${styles.pd2}`} />
              <span className={`${styles.pathwayDot} ${styles.pd3}`} />

              <div className={styles.tileText}>
                <span className={styles.tileEyebrow}>Already in school?</span>
                <h2 className={styles.tilePrompt}>
                  A dedicated <em>Education Manager</em>.
                </h2>
                <div className={styles.tileContent}>
                  <div className={styles.meetLine}>
                    Meet <strong>EDU Concierge</strong>
                  </div>
                  <div className={styles.sub}>
                    Any curriculum · Anywhere in the world · Online
                  </div>
                  <p>
                    <strong>Outsource your child&apos;s education to the experts.</strong>{" "}
                    One affordable plan, support at every step.
                  </p>
                  <div className={styles.helpChips}>
                    <span className={styles.chip}>Live classes</span>
                    <span className={styles.chip}>Mentoring</span>
                    <span className={styles.chip}>Exam help</span>
                    <span className={styles.chip}>Proactive follow-ups</span>
                    <span className={styles.chip}>Learning resources</span>
                    <span className={`${styles.chip} ${styles.chipMore}`}>
                      + more
                    </span>
                  </div>
                </div>
              </div>

              <div className={styles.productLockup}>
                <div className={styles.lockName}>
                  <div className={styles.eduMark}>EDU</div>
                  <div className={styles.nameText}>
                    <div className={styles.n1}>EDU</div>
                    <div className={styles.n2}>Concierge</div>
                  </div>
                </div>
                <span className={styles.ctaLine}>Try for free · no obligation</span>
              </div>

              <span className={styles.tileArrow}>
                <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M3 11 L11 3 M5 3 L11 3 L11 9" />
                </svg>
              </span>
            </Link>
          </div>
        </section>
      </div>

      <div className={styles.marquee}>
        <div className={styles.marqueeTrack}>
          <MarqueeLoop />
          <MarqueeLoop />
        </div>
      </div>

      <SpeakFab />
    </div>
  );
}
