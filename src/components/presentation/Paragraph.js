import React from "react";

export default function Paragraph({ children }) {
  return (
    <h3
      style={{ textTransform: "uppercase", color: "var(--ifm-color-gray-800)" }}
    >
      {children}
    </h3>
  );
}
