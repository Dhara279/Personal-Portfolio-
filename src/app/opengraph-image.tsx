import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const dynamic = "force-static";

export const alt = "Dhara Patadia — AI Product Ownership & Operations";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          backgroundColor: "#FCF9F2",
          border: "16px solid #343C2D",
          color: "#343C2D",
          fontFamily: "sans-serif",
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
              gap: "20px",
            }}
          >
            <div
              style={{
                width: "68px",
                height: "68px",
                borderRadius: "16px",
                backgroundColor: "#C98478",
                border: "3px solid #343C2D",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "32px",
                fontWeight: 800,
                color: "#343C2D",
                boxShadow: "4px 4px 0 0 #343C2D",
              }}
            >
              DP
            </div>
            <span
              style={{
                fontSize: "28px",
                fontWeight: 700,
                color: "#4F5349",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              Dhara Patadia
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
              fontWeight: 600,
              color: "#4F5349",
            }}
          >
            Cambridge, UK
          </div>
        </div>

        {/* Center: Hero Name & Subtitle */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "18px",
          }}
        >
          <div
            style={{
              fontSize: "76px",
              fontWeight: 800,
              lineHeight: 1.05,
              color: "#343C2D",
              letterSpacing: "-0.03em",
            }}
          >
            AI Product Ownership & Operations
          </div>
          <div
            style={{
              fontSize: "30px",
              fontWeight: 500,
              color: "#65665F",
              maxWidth: "960px",
              lineHeight: 1.4,
            }}
          >
            Turning complex AI ideas into products people can use: MLense launch, AI operations at Amazon, MSc Big Data Science (Distinction).
          </div>
        </div>

        {/* Bottom tags */}
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
              borderRadius: "12px",
              padding: "10px 22px",
              fontSize: "18px",
              fontWeight: 700,
              color: "#343C2D",
            }}
          >
            MLense AutoML
          </div>
          <div
            style={{
              backgroundColor: "#EBEEE0",
              border: "2px solid #343C2D",
              borderRadius: "12px",
              padding: "10px 22px",
              fontSize: "18px",
              fontWeight: 700,
              color: "#343C2D",
            }}
          >
            Amazon Multimodal
          </div>
          <div
            style={{
              backgroundColor: "#F1E7DA",
              border: "2px solid #343C2D",
              borderRadius: "12px",
              padding: "10px 22px",
              fontSize: "18px",
              fontWeight: 700,
              color: "#343C2D",
            }}
          >
            MSc Research (Distinction)
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
