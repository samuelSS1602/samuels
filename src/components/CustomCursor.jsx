import React, { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [enabled, setEnabled] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [cursorText, setCursorText] = useState("");

  useEffect(() => {
    // Only enable on devices with a precise, hover-capable pointer
    const query = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setEnabled(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    document.documentElement.classList.add("has-custom-cursor");

    const mouse = { x: -100, y: -100 };
    const ring = { x: -100, y: -100 };
    let frame;
    let lastTarget = null;

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      const target = e.target.closest?.("a, button, .project-card, [data-cursor]") || null;
      if (target !== lastTarget) {
        lastTarget = target;
        setHovered(Boolean(target));
        setCursorText(target?.getAttribute("data-cursor") || "");
      }
    };

    const tick = () => {
      // Ring trails the pointer for a smooth, elastic feel
      ring.x += (mouse.x - ring.x) * 0.18;
      ring.y += (mouse.y - ring.y) * 0.18;
      if (dotRef.current) dotRef.current.style.transform = `translate3d(${mouse.x}px, ${mouse.y}px, 0)`;
      if (ringRef.current) ringRef.current.style.transform = `translate3d(${ring.x}px, ${ring.y}px, 0)`;
      frame = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    frame = requestAnimationFrame(tick);
    return () => {
      document.documentElement.classList.remove("has-custom-cursor");
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(frame);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      {/* Small Precision Dot */}
      <div ref={dotRef} className="custom-cursor-dot">
        <span className={hovered ? "is-hidden" : ""} />
      </div>
      {/* Outer Glow Ring */}
      <div ref={ringRef} className="custom-cursor-ring">
        <span className={`cursor-ring-inner ${hovered ? "is-hovered" : ""}`}>
          {cursorText && <span className="cursor-label">{cursorText}</span>}
        </span>
      </div>
    </>
  );
}
