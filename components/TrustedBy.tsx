"use client";

import Image from "next/image";
import "./TrustedBy.css";

type Logo = {
  src: string;
  alt: string;
  width: number;
  height: number;
  variant?: "default" | "tall";
};

const TrustedBy = () => {
  const logos: Logo[] = [
    { src: "/assets/trustedby/AWS-Logo.png", alt: "Amazon Web Services", width: 280, height: 85 },
    { src: "/assets/trustedby/HubSpot-Logo.png", alt: "HubSpot", width: 280, height: 85 },
    { src: "/assets/trustedby/GoogleWorkspace-Logo.png", alt: "Google Workspace", width: 380, height: 115, variant: "tall" },
    { src: "/assets/trustedby/ClickUp-Logo.svg", alt: "ClickUp", width: 380, height: 115, variant: "tall" },
    { src: "/assets/trustedby/ef-Logo.svg", alt: "Eficiens Systems", width: 380, height: 115, variant: "tall" },
  ];

  // Duplicate list so the scroll loops seamlessly
  const track = [...logos, ...logos];

  return (
    <section className="trustedby-section">
      <div className="trustedby-overlay" />

      <div className="trustedby-container">
        <h2 className="trustedby-title">Trusted By:</h2>

        <div className="trustedby-card">
          {/* left/right fade edges */}
          <div className="trustedby-fade trustedby-fade--left" />
          <div className="trustedby-fade trustedby-fade--right" />

          <div className="trustedby-marquee" aria-label="Trusted by logos">
            <div className="trustedby-track">
              {track.map((logo, idx) => (
                <div className="trustedby-logo" key={`${logo.alt}-${idx}`}>
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.width}
                    height={logo.height}
                    className={
                      logo.variant === "tall"
                        ? "trustedby-img trustedby-img--tall"
                        : "trustedby-img"
                    }
                    priority={false}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
