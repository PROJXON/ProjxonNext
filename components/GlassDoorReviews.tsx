import { JSX } from "react";

export default function GlassDoorReviews(): JSX.Element {
  return (
    <div
      className="positions-item p-4 p-lg-5 d-flex flex-column justify-content-center align-items-center"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(/assets/careers/glassdoor-bg.webp)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "500px",
        borderRadius: 0,
        margin: 0,
      }}
    >
      <h2
        className="text-yellow fw-bold mb-3 text-center"
        style={{ fontSize: '3rem', marginBottom: "2rem" }}
      >
        PROJXON Reviews on Glassdoor
      </h2>
      <p
        className="text-gray mb-4 text-center"
        style={{ fontSize: '1.6rem', marginBottom: "2.5rem", maxWidth: "800px" }}
      >
        See what our team members have to say about working at PROJXON. Discover
        real feedback and experiences on Glassdoor.
      </p>
      <a
        href="https://www.glassdoor.com/Reviews/PROJXON-Reviews-E10296590.htm"
        target="_blank"
        rel="noopener noreferrer"
        className="text-yellow fw-bold text-decoration-underline text-center"
        style={{
          fontSize: '1.6rem',
          background: "none",
          border: "none",
          padding: 0,
          display: "inline-block",
        }}
      >
        Read Reviews
      </a>
    </div>
  );
}
