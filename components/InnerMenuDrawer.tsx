"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./InnerMenuDrawer.module.css";

type SubLink = { href: string; label: string };
type Section =
  | { kind: "collapsible"; label: string; children: SubLink[] }
  | { kind: "flat"; label: string; href: string };

const SECTIONS: Section[] = [
  {
    kind: "collapsible",
    label: "About",
    children: [
      { href: "/about#welcome", label: "Welcome Message from Principal" },
      { href: "/about#vision", label: "Vision and Mission" },
      { href: "/about#team", label: "Our Team" },
      { href: "/about#documents", label: "Key Documents and Policies" },
    ],
  },
  {
    kind: "collapsible",
    label: "Why Chrysalis School",
    children: [
      { href: "/why#innovation", label: "Innovation" },
      { href: "/why#life", label: "Life at Chrysalis" },
      { href: "/concierge", label: "Education Concierge" },
      { href: "/why#promise", label: "Our Promise" },
    ],
  },
  {
    kind: "collapsible",
    label: "Admission",
    children: [
      { href: "/admission#process", label: "Process" },
      { href: "/admission#fee", label: "Fee" },
      { href: "/admission#register", label: "Register" },
    ],
  },
  {
    kind: "collapsible",
    label: "Curriculum",
    children: [
      { href: "/curriculum#overview", label: "Overview" },
      { href: "/curriculum#secondary", label: "Secondary" },
      { href: "/curriculum#approaches", label: "Learning Approaches" },
    ],
  },
  {
    kind: "collapsible",
    label: "Dexter",
    children: [
      { href: "/dexter/solutions", label: "Overview" },
      { href: "/dexter/dexter-vs", label: "10 Reasons" },
      { href: "/dexter/a-day-with-dexter", label: "A Day with Dexter" },
      { href: "/dexter/behind-dexter", label: "Behind Dexter" },
    ],
  },
  {
    kind: "collapsible",
    label: "Parent Resources",
    children: [
      { href: "/parent-resources#news", label: "News" },
      { href: "/parent-resources#calendar", label: "Calendar" },
      { href: "/parent-resources#portal", label: "Parent Portal" },
      { href: "/library", label: "Knowledge Library" },
      { href: "/community", label: "Community" },
    ],
  },
  { kind: "flat", label: "Careers", href: "/careers" },
  {
    kind: "collapsible",
    label: "Support Center",
    children: [
      { href: "/support#chat", label: "Chat" },
      { href: "/support#faqs", label: "FAQs" },
    ],
  },
];

type Props = {
  /** Trigger button rendered by the page itself — when null, the drawer
   * provides its own default pill trigger. */
  trigger?: (props: { onClick: () => void; open: boolean }) => React.ReactNode;
  eyebrow?: string;
};

export default function InnerMenuDrawer({
  trigger,
  eyebrow = "// Explore the school",
}: Props) {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

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
      {trigger ? (
        trigger({ onClick: () => setOpen((v) => !v), open })
      ) : (
        <button
          className={styles.defaultTrigger}
          type="button"
          aria-label="Explore"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={styles.ham}>
            <span /><span /><span />
          </span>
          <span className={styles.pillText}>Explore the school</span>
        </button>
      )}

      <div
        className={`${styles.backdrop} ${open ? styles.backdropOpen : ""}`}
        aria-hidden="true"
        onClick={() => setOpen(false)}
      />

      <div className={`${styles.overlay} ${open ? styles.overlayOpen : ""}`}>
        <div className={styles.inner}>
          <div className={styles.eyebrow}>{eyebrow}</div>
          <nav className={styles.links}>
            {SECTIONS.map((s) => {
              if (s.kind === "flat") {
                return (
                  <div key={s.label} className={styles.section}>
                    <Link
                      href={s.href}
                      className={`${styles.head} ${styles.headFlat}`}
                      onClick={() => setOpen(false)}
                    >
                      <span>{s.label}</span>
                    </Link>
                  </div>
                );
              }
              const isOpen = !!expanded[s.label];
              return (
                <div
                  key={s.label}
                  className={`${styles.section} ${isOpen ? styles.sectionOpen : ""}`}
                >
                  <button
                    className={styles.head}
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() =>
                      setExpanded((prev) => ({ ...prev, [s.label]: !prev[s.label] }))
                    }
                  >
                    <span>{s.label}</span>
                    <svg
                      className={styles.chev}
                      viewBox="0 0 12 12"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    >
                      <path d="M2 4 L6 8 L10 4" />
                    </svg>
                  </button>
                  <div className={styles.sub}>
                    {s.children.map((c) => (
                      <Link
                        key={c.href + c.label}
                        href={c.href}
                        onClick={() => setOpen(false)}
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </nav>
          <div className={styles.foot}>
            <Link href="/" className={styles.footLink}>↗ Back to Chrysalis</Link>
            <Link href="/concierge" className={styles.footLink}>↗ EDU Concierge</Link>
            <Link href="/dexter/solutions" className={styles.footLink}>↗ Dexter</Link>
            <a href="mailto:hello@chrysalis.education" className={styles.footEmail}>
              hello@chrysalis.education
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
