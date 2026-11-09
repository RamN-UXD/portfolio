import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Ramamoorthy N — UX Designer & Product Specialist";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#080810",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background glow blobs */}
        <div
          style={{
            position: "absolute",
            right: "-60px",
            top: "-80px",
            width: "520px",
            height: "520px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(168,85,247,0.35) 0%, rgba(236,72,153,0.18) 50%, transparent 70%)",
            filter: "blur(40px)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: "-100px",
            bottom: "-100px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(99,102,241,0.25) 0%, transparent 70%)",
            filter: "blur(50px)",
            display: "flex",
          }}
        />

        {/* Card container */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "520px",
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.10)",
            borderRadius: "24px",
            padding: "40px",
            backdropFilter: "blur(12px)",
          }}
        >
          {/* Top: avatar + online */}
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
            {/* Avatar circle */}
            <div
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                overflow: "hidden",
                border: "2px solid rgba(168,85,247,0.6)",
                display: "flex",
                background: "#1a1a2e",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://ramn-portfolio.vercel.app/designer_portrait.jpg"
                alt="Ramamoorthy N"
                width={80}
                height={80}
                style={{ objectFit: "cover", width: "80px", height: "80px" }}
              />
            </div>

            {/* Online badge */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                background: "rgba(255,255,255,0.06)",
                borderRadius: "20px",
                padding: "6px 14px",
              }}
            >
              <div
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: "#4ade80",
                  display: "flex",
                }}
              />
              <span style={{ color: "#4ade80", fontSize: "13px", fontWeight: 500 }}>
                Available
              </span>
            </div>
          </div>

          {/* Name & Role */}
          <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginTop: "20px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span style={{ color: "#ffffff", fontSize: "28px", fontWeight: 700, letterSpacing: "-0.5px" }}>
                Ramamoorthy N
              </span>
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #a855f7, #ec4899)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span style={{ color: "white", fontSize: "13px", fontWeight: 700 }}>✓</span>
              </div>
            </div>
            <span style={{ color: "#9e9eb4", fontSize: "15px", fontWeight: 400 }}>
              UX Designer &amp; Product Specialist
            </span>
          </div>

          {/* Stats row */}
          <div
            style={{
              display: "flex",
              gap: "0px",
              marginTop: "28px",
              borderTop: "1px solid rgba(255,255,255,0.08)",
              borderBottom: "1px solid rgba(255,255,255,0.08)",
              paddingTop: "20px",
              paddingBottom: "20px",
            }}
          >
            {[
              { value: "300+", label: "screens designed" },
              { value: "7", label: "products shipped" },
              { value: "4+", label: "years experience" },
            ].map((stat, i) => (
              <div
                key={i}
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  borderRight: i < 2 ? "1px solid rgba(255,255,255,0.08)" : "none",
                  gap: "4px",
                }}
              >
                <span style={{ color: "#ffffff", fontSize: "22px", fontWeight: 700 }}>
                  {stat.value}
                </span>
                <span style={{ color: "#9e9eb4", fontSize: "12px", fontWeight: 400 }}>
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* CTA button */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "24px",
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: "12px",
              padding: "14px 0",
              color: "#ffffff",
              fontSize: "15px",
              fontWeight: 600,
            }}
          >
            View Portfolio →
          </div>
        </div>

        {/* Right side — headline text */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            marginLeft: "72px",
            maxWidth: "480px",
          }}
        >
          <span style={{ color: "#9e9eb4", fontSize: "13px", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase" }}>
            UX / Product Design Portfolio
          </span>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ color: "#ffffff", fontSize: "42px", fontWeight: 700, lineHeight: 1.15, letterSpacing: "-1px" }}>
              I turn ambiguous
            </span>
            <span
              style={{
                fontSize: "42px",
                fontWeight: 700,
                lineHeight: 1.15,
                letterSpacing: "-1px",
                background: "linear-gradient(90deg, #22d3ee, #818cf8)",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              problems into
            </span>
            <span style={{ color: "#ffffff", fontSize: "42px", fontWeight: 700, lineHeight: 1.15, letterSpacing: "-1px" }}>
              products users
            </span>
            <span style={{ color: "#4ade80", fontSize: "42px", fontWeight: 700, lineHeight: 1.15, letterSpacing: "-1px" }}>
              can trust.
            </span>
          </div>
          <span style={{ color: "#9e9eb4", fontSize: "15px", fontWeight: 400, lineHeight: 1.6 }}>
            ramn-portfolio.vercel.app
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
