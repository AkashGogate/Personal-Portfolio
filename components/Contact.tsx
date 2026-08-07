import SectionLabel from "./SectionLabel";

const links = [
  { label: "Email", value: "akash.gogate@gmail.com", href: "mailto:akash.gogate@gmail.com" },
  { label: "UW–Madison", value: "agogate@wisc.edu", href: "mailto:agogate@wisc.edu" },
  { label: "GitHub", value: "AkashGogate", href: "https://github.com/AkashGogate" },
  { label: "LinkedIn", value: "akashgogate", href: "https://www.linkedin.com/in/akash-gogate" },
];

export default function Contact() {
  return (
    <section id="contact" style={{ background: "var(--bg)", paddingTop: "clamp(3rem, 6vh, 6rem)", paddingBottom: "clamp(3rem, 6vh, 6rem)" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div style={{ borderTop: "1px solid var(--border)", marginBottom: "4rem" }} />
        <SectionLabel number="08" label="Contact" className="mb-4" />
        <h2 className="font-display mb-6" style={{ fontSize: "clamp(2.1rem, 3.5vw, 3.2rem)", fontWeight: 400, color: "var(--primary)" }}>
          Get in touch
        </h2>
        <p className="font-body mb-8 max-w-xl" style={{ fontSize: "1rem", color: "var(--secondary)", lineHeight: 1.8 }}>
          Open to Summer 2027 internships and co-ops in software engineering, AI/ML, data science, biotech, and
          computational biology research. Available May 15 – Sep 1. Email is the best way to reach me.
        </p>

        <div className="flex flex-col gap-6">
          {links.map((l) => (
            <div key={l.label}>
              <div className="section-label mb-1">{l.label}</div>
              <a
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="font-body hover-mint"
                style={{ fontSize: "1.1rem", color: "var(--primary)", textDecoration: "underline", textDecorationColor: "var(--border)" }}
              >
                {l.value}
              </a>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8" style={{ borderTop: "1px solid var(--border)" }}>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-body" style={{ fontSize: "0.85rem", color: "var(--secondary)" }}>
            <span suppressHydrationWarning>Akash Gogate — {new Date().getFullYear()}</span>
            <span>Built with Next.js · Tailwind CSS</span>
          </div>
        </div>
      </div>
    </section>
  );
}
