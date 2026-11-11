import { ImageResponse } from "next/og";

/* iOS home-screen icon: the ring symbol on blu notte (identity kit §02). */
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0F1B2D",
        }}
      >
        <svg width="132" height="125" viewBox="6 6 93 88" fill="none">
          <path d="M 65.41 75.94 A 30 30 0 1 1 69.83 63.19" stroke="#F1ECE2" strokeWidth="6" />
          <path d="M 39.59 24.06 A 30 30 0 1 1 35.17 36.81" stroke="#D9C3A0" strokeWidth="6" />
        </svg>
      </div>
    ),
    size,
  );
}
