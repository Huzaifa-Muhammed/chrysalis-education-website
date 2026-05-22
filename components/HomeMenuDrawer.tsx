"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./HomeMenuDrawer.module.css";

type LinkItem = { href: string; label: string; emphasis?: boolean };

const DEFAULT_LINKS: LinkItem[] = [
  { href: "/", label: "Home", emphasis: true },
  { href: "/school", label: "Chrysalis School" },
  { href: "/concierge", label: "EDU Concierge" },
  { href: "/dexter/solutions", label: "Dexter" },
  { href: "/about", label: "About" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

type Props = {
  links?: LinkItem[];
  eyebrow?: string;
};

export default function HomeMenuDrawer({
  links = DEFAULT_LINKS,
  eyebrow = "// Navigate Chrysalis",
}: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <button
        className={`${styles.menuBtn} ${open ? styles.open : ""}`}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        type="button"
      >
        <span />
        <span />
        <span />
      </button>

      <div
        className={`${styles.backdrop} ${open ? styles.backdropOpen : ""}`}
        aria-hidden="true"
        onClick={() => setOpen(false)}
      />

      <div className={`${styles.overlay} ${open ? styles.overlayOpen : ""}`}>
        <div className={styles.inner}>
          <div className={styles.eyebrow}>{eyebrow}</div>
          <nav className={styles.links}>
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
              >
                {l.emphasis ? <em>{l.label}</em> : l.label}
              </Link>
            ))}
          </nav>
          <div className={styles.foot}>
            <a href="mailto:hello@chrysalis.education">
              hello@chrysalis.education
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
