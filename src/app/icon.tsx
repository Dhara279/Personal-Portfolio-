import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#C98478",
          color: "#343C2D",
          fontSize: 17,
          fontWeight: 800,
          borderRadius: 7,
          border: "1.5px solid #343C2D",
          letterSpacing: "-0.04em",
        }}
      >
        DP
      </div>
    ),
    {
      ...size,
    }
  );
}
