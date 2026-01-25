import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "Zexfro - Global Trade Made Simple";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        fontSize: 128,
        background: "linear-gradient(to bottom right, #1e40af, #3b82f6)",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        fontWeight: "bold",
      }}
    >
      <div style={{ fontSize: 80, marginBottom: 20 }}>Zexfro</div>
      <div style={{ fontSize: 36, fontWeight: "normal", color: "#e0e7ff" }}>
        Global Trade Made Simple
      </div>
    </div>,
    {
      ...size,
    },
  );
}
