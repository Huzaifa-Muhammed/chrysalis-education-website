import styles from "./SpeakFab.module.css";

type Props = {
  /** Mailto subject — defaults to a generic speak-to-us subject. */
  subject?: string;
  /** Optional class for theme overrides (per-page accent color). */
  className?: string;
};

export default function SpeakFab({
  subject = "I'd like to speak with you",
  className,
}: Props) {
  const href = `mailto:hello@chrysalis.education?subject=${encodeURIComponent(subject)}`;
  return (
    <a
      href={href}
      className={`${styles.fab} ${className ?? ""}`}
      aria-label="Speak to us now"
    >
      <span className={styles.pulse} aria-hidden="true" />
      <span className={styles.icon}>
        <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M3 4 Q3 2.5 4.5 2.5 L9.5 2.5 Q11 2.5 11 4 L11 8 Q11 9.5 9.5 9.5 L7 9.5 L4.5 11.5 L4.5 9.5 Q3 9.5 3 8 Z" />
          <circle cx="5.5" cy="6" r="0.6" fill="currentColor" />
          <circle cx="7" cy="6" r="0.6" fill="currentColor" />
          <circle cx="8.5" cy="6" r="0.6" fill="currentColor" />
        </svg>
      </span>
      <span className={styles.text}>Speak to us</span>
    </a>
  );
}
