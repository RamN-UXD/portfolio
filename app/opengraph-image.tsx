import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Ramamoorthy Narayanan — UX Designer & Product Specialist";
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
          background: "#0d0d1f",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Outer ambient glow — left blue */}
        <div
          style={{
            position: "absolute",
            left: "-120px",
            top: "50%",
            transform: "translateY(-50%)",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(79,70,229,0.45) 0%, rgba(99,102,241,0.2) 40%, transparent 70%)",
            filter: "blur(60px)",
            display: "flex",
          }}
        />
        {/* Outer ambient glow — right pink/purple */}
        <div
          style={{
            position: "absolute",
            right: "-120px",
            top: "50%",
            transform: "translateY(-50%)",
            width: "600px",
            height: "500px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(168,85,247,0.4) 0%, rgba(236,72,153,0.25) 40%, transparent 70%)",
            filter: "blur(70px)",
            display: "flex",
          }}
        />

        {/* Card */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "580px",
            background: "#161625",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "28px",
            overflow: "hidden",
            boxShadow: "0 24px 80px rgba(0,0,0,0.6)",
          }}
        >
          {/* Card top area: portrait + gradient bar */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-end",
              height: "140px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Gradient bar background (vertical stripes — blue to pink) */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                display: "flex",
                flexDirection: "row",
                gap: "0px",
              }}
            >
              {/* Generate vertical gradient stripes */}
              {Array.from({ length: 60 }).map((_, i) => {
                const t = i / 59;
                // interpolate hue: blue (240) → purple (280) → pink/red (340)
                const hue = 240 + t * 100;
                const saturation = 70 + t * 20;
                const lightness = 45 + Math.sin(t * Math.PI) * 10;
                // vary height for waveform effect
                const heightPct =
                  40 + Math.sin(i * 0.6 + 1) * 20 + Math.sin(i * 0.3) * 15;
                return (
                  <div
                    key={i}
                    style={{
                      flex: 1,
                      display: "flex",
                      alignItems: "flex-end",
                      height: "100%",
                    }}
                  >
                    <div
                      style={{
                        width: "100%",
                        height: `${Math.max(20, heightPct)}%`,
                        background: `hsl(${hue}, ${saturation}%, ${lightness}%)`,
                        opacity: 0.85,
                        borderRadius: "2px 2px 0 0",
                      }}
                    />
                  </div>
                );
              })}
            </div>

            {/* Dark fade overlay at bottom of bar */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: "60px",
                background:
                  "linear-gradient(to bottom, transparent, #161625)",
                display: "flex",
              }}
            />

            {/* Portrait circle — overlapping bottom edge */}
            <div
              style={{
                position: "absolute",
                bottom: "-32px",
                left: "36px",
                width: "90px",
                height: "90px",
                borderRadius: "50%",
                overflow: "hidden",
                border: "3px solid #161625",
                display: "flex",
                background: "#1a1a2e",
                zIndex: 10,
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://ramn-portfolio.vercel.app/designer_portrait.jpg"
                alt="Ramamoorthy Narayanan"
                width={90}
                height={90}
                style={{
                  objectFit: "cover",
                  width: "90px",
                  height: "90px",
                }}
              />
            </div>
          </div>

          {/* Card body */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "44px 36px 36px 36px",
              gap: "0px",
            }}
          >
            {/* Name + verified badge */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <span
                style={{
                  color: "#ffffff",
                  fontSize: "26px",
                  fontWeight: 700,
                  letterSpacing: "-0.5px",
                }}
              >
                Ramamoorthy Narayanan
              </span>
              {/* Verified badge */}
              <div
                style={{
                  width: "24px",
                  height: "24px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #4f46e5, #7c3aed)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <span
                  style={{
                    color: "white",
                    fontSize: "13px",
                    fontWeight: 700,
                    lineHeight: 1,
                  }}
                >
                  ✓
                </span>
              </div>
            </div>

            {/* Role */}
            <span
              style={{
                color: "#9e9eb4",
                fontSize: "15px",
                fontWeight: 400,
                marginTop: "6px",
              }}
            >
              UX Designer &amp; Product Specialist
            </span>

            {/* Open to work status */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                marginTop: "14px",
              }}
            >
              <div
                style={{
                  width: "9px",
                  height: "9px",
                  borderRadius: "50%",
                  background: "#4ade80",
                  display: "flex",
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  color: "#4ade80",
                  fontSize: "14px",
                  fontWeight: 500,
                }}
              >
                Open to senior UX &amp; PM roles
              </span>
            </div>

            {/* Stats row */}
            <div
              style={{
                display: "flex",
                marginTop: "20px",
                background: "#1e1e30",
                borderRadius: "14px",
                overflow: "hidden",
              }}
            >
              {[
                { value: "300+", label: "screens designed" },
                { value: "7", label: "products" },
                { value: "~30%", label: "simpler workflows" },
              ].map((stat, i) => (
                <div
                  key={i}
                  style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "16px 8px",
                    borderRight:
                      i < 2 ? "1px solid rgba(255,255,255,0.07)" : "none",
                    gap: "4px",
                  }}
                >
                  <span
                    style={{
                      color: "#ffffff",
                      fontSize: "20px",
                      fontWeight: 700,
                      letterSpacing: "-0.3px",
                    }}
                  >
                    {stat.value}
                  </span>
                  <span
                    style={{
                      color: "#9e9eb4",
                      fontSize: "12px",
                      fontWeight: 400,
                      textAlign: "center",
                    }}
                  >
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
                marginTop: "16px",
                background: "#ffffff",
                borderRadius: "12px",
                padding: "16px 0",
                color: "#0d0d1f",
                fontSize: "16px",
                fontWeight: 700,
              }}
            >
              View case studies
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
