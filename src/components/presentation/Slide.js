import React from "react";

export default function Slide({ children }) {
  return (
    <div
      style={{
        backgroundColor: "green",
        borderRadius: "2px",
        color: "#fff",
        padding: "0.2rem",
        width: "100%",
        height: "calc(100vh - var(--ifm-navbar-height))",
      }}
    >
      {children}
    </div>
  );
}
