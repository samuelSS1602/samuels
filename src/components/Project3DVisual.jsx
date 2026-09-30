import React from "react";
import Globe2 from "lucide-react/dist/esm/icons/globe-2.js";
import BrainCircuit from "lucide-react/dist/esm/icons/brain-circuit.js";
import Cpu from "lucide-react/dist/esm/icons/cpu.js";
import Utensils from "lucide-react/dist/esm/icons/utensils.js";
import ShoppingCart from "lucide-react/dist/esm/icons/shopping-cart.js";
import ShieldCheck from "lucide-react/dist/esm/icons/shield-check.js";
import Sparkles from "lucide-react/dist/esm/icons/sparkles.js";
import Mic from "lucide-react/dist/esm/icons/mic.js";

export default function Project3DVisual({ type }) {
  const images = {
    speakup: "/assets/projects/speakup.webp",
    spp: "/assets/projects/Sri.png",
    hotel: "/assets/projects/lodge.png",
    ai: "/assets/projects/agri.png",
    iot: "/assets/projects/iot.png",
    food: "/assets/projects/nutri.png",
    pricewatch: "/assets/projects/ecom.png",
    crime: "/assets/projects/crime.png"
  };

  const labels = {
    speakup: "NICE SPEAKUP — AI SPEAKING COACH FOR KIDS",
    spp: "SRI PADMAVATI PLEASANTS — WEB PLATFORM",
    hotel: "LODGE MANAGEMENT — GUEST CRM DASHBOARD",
    ai: "AGRI-AI — MULTILINGUAL VOICE & VISION",
    iot: "SMART GARBAGE — IOT TELEMETRY NETWORK",
    food: "NUTRIEATS — AI FOOD RECOMMENDATIONS",
    pricewatch: "PRICEWATCH — CROSS-STORE PRICE TRACKING",
    crime: "CRIMEREGISTRY — DIGITAL COMPLAINT MANAGEMENT"
  };

  const icons = {
    speakup: Mic,
    hotel: Globe2,
    ai: BrainCircuit,
    iot: Cpu,
    food: Utensils,
    pricewatch: ShoppingCart,
    crime: ShieldCheck
  };

  const imgSrc = images[type] || "/assets/projects/lodge.png";
  const labelText = labels[type] || "FEATURED PROJECT";
  const Icon = icons[type] || Sparkles;

  return (
    <div className={`project-image-visual visual-${type}`}>
      <div className="visual-image-container">
        <img
          src={imgSrc}
          alt={labelText}
          className="visual-project-img"
          loading="lazy"
        />
        <div className="visual-gradient-glow" />
        <div className="visual-grid-pattern" />
      </div>

      <div className="visual-overlay">
        <div className="visual-top-icon">
          <Icon size={24} className="visual-icon-glow" />
        </div>
        <div className="visual-badge-wrap">
          <span className="visual-badge">
            <span className="badge-dot" />
            {labelText}
          </span>
        </div>
      </div>
    </div>
  );
}
