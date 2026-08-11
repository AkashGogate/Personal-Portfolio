import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found — Akash Gogate",
  description: "The page you're looking for doesn't exist. Head back to the homepage.",
  alternates: {
    canonical: "/404",
  },
};

export default function NotFound() {
  return (
    <main
      style={{
        background: "var(--bg)",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <p
        className="font-display"
        style={{ fontSize: "clamp(3rem, 10vw, 6rem)", fontWeight: 400, color: "var(--primary)", lineHeight: 1 }}
      >
        404
      </p>
      <h1
        className="font-display"
        style={{ fontSize: "clamp(1.5rem, 4vw, 2.2rem)", fontWeight: 400, color: "var(--primary)", marginTop: "1rem" }}
      >
        Page not found
      </h1>
      <p
        className="font-body"
        style={{ fontSize: "1rem", color: "var(--secondary)", lineHeight: 1.75, maxWidth: "32rem", marginTop: "1rem" }}
      >
        The page you're looking for doesn't exist or moved. Let's get you back on track.
      </p>
      <Link
        href="/"
        className="font-body hover-mint"
        style={{
          marginTop: "2rem",
          fontSize: "0.9rem",
          color: "var(--primary)",
          textDecoration: "underline",
          textDecorationColor: "var(--border)",
        }}
      >
        Back to homepage
      </Link>
    </main>
  );
}
