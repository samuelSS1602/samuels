import React, { useEffect, useState } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hovered, setHovered] = useState(false);
  const [cursorText, setCursorText] = useState("");

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });

      const target = e.target.closest("a, button, .hero-3d-canvas, .project-card, [data-cursor]");
      if (target) {
        setHovered(true);
        const text = target.getAttribute("data-cursor") || "";
        setCursorText(text);
      } else {
        setHovered(false);
        setCursorText("");
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {/* Small Precision Dot */}
      <div
        className="custom-cursor-dot"
        style={{ transform: `translate3d(${pos.x - 4}px, ${pos.y - 4}px, 0) scale(${hovered ? 0 : 1})` }}
      />
      {/* Outer Glow Ring */}
      <div
        className={`custom-cursor-ring ${hovered ? "is-hovered" : ""}`}
        style={{ transform: `translate3d(${pos.x - (hovered ? 28 : 18)}px, ${pos.y - (hovered ? 28 : 18)}px, 0) scale(${hovered ? 1.4 : 1})` }}
      >
        {cursorText && <span className="cursor-label">{cursorText}</span>}
      </div>
    </>
  );
}
