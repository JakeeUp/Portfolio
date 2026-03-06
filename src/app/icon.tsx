import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
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
          background: "#04040f",
          borderRadius: "6px",
        }}
      >
        <span
          style={{
            fontSize: 16,
            fontWeight: 700,
            color: "white",
            letterSpacing: "-0.5px",
            fontFamily: "sans-serif",
          }}
        >
          J
        </span>
        <span
          style={{
            fontSize: 16,
            fontWeight: 700,
            color: "#00d4ff",
            letterSpacing: "-0.5px",
            fontFamily: "sans-serif",
          }}
        >
          F
        </span>
      </div>
    ),
    { ...size }
  );
}
