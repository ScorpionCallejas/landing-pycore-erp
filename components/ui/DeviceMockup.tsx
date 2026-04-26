"use client";
import Image from "next/image";

export function DeviceMockup() {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "560px",
        paddingRight: "12%",
        paddingBottom: "14%",
      }}
    >
      {/* ── Desktop / Browser frame ── */}
      <div
        style={{
          borderRadius: "14px",
          overflow: "hidden",
          border: "1px solid rgba(122,224,195,0.18)",
          boxShadow:
            "0 0 0 1px rgba(0,0,0,0.4), 0 24px 64px rgba(0,0,0,0.55), 0 0 48px rgba(14,124,102,0.28)",
          animation: "dashFloat 4s ease-in-out infinite",
        }}
      >
        {/* Browser chrome */}
        <div
          style={{
            background: "#0B1914",
            padding: "9px 12px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            borderBottom: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          <div style={{ display: "flex", gap: "5px", flexShrink: 0 }}>
            <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#FF5F57", display: "block" }} />
            <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#FEBC2E", display: "block" }} />
            <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#28C840", display: "block" }} />
          </div>
          <div
            style={{
              flex: 1,
              background: "rgba(255,255,255,0.06)",
              borderRadius: "5px",
              padding: "3px 10px",
              fontSize: "10px",
              color: "#7AE0C3",
              fontFamily: "monospace",
              letterSpacing: "0.02em",
            }}
          >
            app.pycore.app/dashboard
          </div>
        </div>

        {/* Screenshot */}
        <div style={{ lineHeight: 0, background: "#0F1E1A" }}>
          <Image
            src="/dashboard-desktop.png"
            alt="PyCore ERP — Dashboard en escritorio"
            width={1280}
            height={748}
            style={{ width: "100%", height: "auto", display: "block" }}
            priority
          />
        </div>
      </div>

      {/* ── Phone frame ── */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          width: "32%",
          borderRadius: "24px",
          overflow: "hidden",
          border: "1.5px solid rgba(122,224,195,0.28)",
          boxShadow:
            "0 0 0 1px rgba(0,0,0,0.5), 0 16px 48px rgba(0,0,0,0.65), 0 0 32px rgba(14,124,102,0.4)",
          animation: "dashFloat 4s ease-in-out infinite",
          animationDelay: "1s",
          zIndex: 10,
          background: "#0B1914",
        }}
      >
        {/* Status bar / pill notch */}
        <div
          style={{
            background: "#0B1914",
            height: "18px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "44px",
              height: "5px",
              background: "rgba(255,255,255,0.18)",
              borderRadius: "3px",
            }}
          />
        </div>

        {/* Screenshot */}
        <div style={{ lineHeight: 0 }}>
          <Image
            src="/dashboard-mobile.png"
            alt="PyCore ERP — Dashboard en móvil"
            width={1080}
            height={2307}
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </div>
      </div>
    </div>
  );
}
