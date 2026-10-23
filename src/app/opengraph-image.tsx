import { ImageResponse } from "next/og";
import fs from "fs";
import path from "path";

export const runtime = "nodejs";
export const dynamic = "force-static";

export const alt = "Dhara Patadia · AI Strategist | Product Owner | AI Operations";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  const fontsDir = path.join(process.cwd(), "src", "app", "fonts");
  const bricolageData = fs.readFileSync(path.join(fontsDir, "BricolageGrotesque.ttf"));
  const dmSansData = fs.readFileSync(path.join(fontsDir, "DMSans.ttf"));

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "70px 80px",
          backgroundColor: "#FCF9F2",
          border: "16px solid #343C2D",
          color: "#343C2D",
          fontFamily: "DM Sans, sans-serif",
        }}
      >
        {/* Top bar with monogram badge & location */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "18px",
            }}
          >
            <div
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "14px",
                backgroundColor: "#B8766A",
                border: "3px solid #343C2D",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "28px",
                fontWeight: 800,
                color: "#FFFFFF",
                boxShadow: "3px 4px 0 0 #343C2D",
                fontFamily: "Bricolage Grotesque, sans-serif",
              }}
            >
              DP
            </div>
            <span
              style={{
                fontSize: "22px",
                fontWeight: 700,
                color: "#4F5349",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              Portfolio
            </span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#FAF7EF",
              border: "2px solid #343C2D",
              padding: "10px 24px",
              borderRadius: "999px",
              fontSize: "20px",
              fontWeight: 700,
              color: "#4F5349",
            }}
          >
            Cambridge, UK
          </div>
        </div>

        {/* Center: Hero Name largest, then Subtitle and Tagline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "14px",
          }}
        >
          <div
            style={{
              fontSize: "92px",
              fontWeight: 800,
              lineHeight: 0.95,
              color: "#343C2D",
              letterSpacing: "-0.04em",
              fontFamily: "Bricolage Grotesque, sans-serif",
            }}
          >
            Dhara Patadia
          </div>
          <div
            style={{
              fontSize: "34px",
              fontWeight: 700,
              color: "#2B3125",
              lineHeight: 1.2,
            }}
          >
            AI Strategist | Product Owner | AI Operations
          </div>
          <div
            style={{
              fontSize: "22px",
              fontWeight: 500,
              color: "#65665F",
              maxWidth: "900px",
              lineHeight: 1.45,
            }}
          >
            Turning complex AI ideas into products people can use.
          </div>
        </div>

        {/* Bottom tags: exactly "MLense", "Amazon", "MSc Research" */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <div
            style={{
              backgroundColor: "#F8DFD6",
              border: "2px solid #343C2D",
              borderRadius: "10px",
              padding: "10px 22px",
              fontSize: "18px",
              fontWeight: 700,
              color: "#343C2D",
              boxShadow: "3px 4px 0 0 #343C2D",
            }}
          >
            MLense
          </div>
          <div
            style={{
              backgroundColor: "#EBEEE0",
              border: "2px solid #343C2D",
              borderRadius: "10px",
              padding: "10px 22px",
              fontSize: "18px",
              fontWeight: 700,
              color: "#343C2D",
              boxShadow: "3px 4px 0 0 #343C2D",
            }}
          >
            Amazon
          </div>
          <div
            style={{
              backgroundColor: "#F1E7DA",
              border: "2px solid #343C2D",
              borderRadius: "10px",
              padding: "10px 22px",
              fontSize: "18px",
              fontWeight: 700,
              color: "#343C2D",
              boxShadow: "3px 4px 0 0 #343C2D",
            }}
          >
            MSc Research
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Bricolage Grotesque",
          data: bricolageData,
          weight: 800,
          style: "normal",
        },
        {
          name: "DM Sans",
          data: dmSansData,
          weight: 700,
          style: "normal",
        },
      ],
    }
  );
}
