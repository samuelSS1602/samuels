import React, { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import ArrowUpRight from "lucide-react/dist/esm/icons/arrow-up-right.js";
import Github from "lucide-react/dist/esm/icons/github.js";
import Linkedin from "lucide-react/dist/esm/icons/linkedin.js";
import ExternalLink from "lucide-react/dist/esm/icons/external-link.js";
import Code2 from "lucide-react/dist/esm/icons/code-2.js";
import BrainCircuit from "lucide-react/dist/esm/icons/brain-circuit.js";
import Cpu from "lucide-react/dist/esm/icons/cpu.js";
import Globe2 from "lucide-react/dist/esm/icons/globe-2.js";
import Sparkles from "lucide-react/dist/esm/icons/sparkles.js";
import CheckCircle2 from "lucide-react/dist/esm/icons/check-circle-2.js";
import Copy from "lucide-react/dist/esm/icons/copy.js";
import ArrowUp from "lucide-react/dist/esm/icons/arrow-up.js";
import Menu from "lucide-react/dist/esm/icons/menu.js";
import X from "lucide-react/dist/esm/icons/x.js";
import Mail from "lucide-react/dist/esm/icons/mail.js";
import CustomCursor from "./components/CustomCursor.jsx";
import Project3DVisual from "./components/Project3DVisual.jsx";
import "./styles.css";

const profile = {
  name: "Samuel Santharaj S",
  github: "https://github.com/samuelSS1602",
  linkedin: "https://www.linkedin.com/in/samuel-santharaj-s/",
  email: "samuelsuresh447@gmail.com"
};

const projects = [
  {
    no: "01",
    category: "WEB / BUSINESS",
    title: "Sri Padmavati Pleasants",
    description: "Responsive business website with room listings, booking inquiry and contact flows, built for performance, SEO and cross-device usability.",
    stack: ["React", "Node.js", "Firebase", "GCP"],
    link: "https://www.sripadmavatipleasants.com/",
    repo: "https://github.com/samuelSS1602/SPP",
    visual: "spp"
  },
  {
    no: "02",
    category: "WEB / LODGE MANAGEMENT",
    title: "Lodge Management & Guest CRM",
    description: "Centralized lodge operations dashboard for managing reservations, rooms, guests, check-ins, check-outs, billing and day-to-day operational records.",
    stack: ["React", "Node.js", "Firebase", "GCP"],
    link: "https://spp-admin-alpha.vercel.app/",
    repo: "https://github.com/samuelSS1602/SPP-ADMIN",
    visual: "hotel"
  },
  {
    no: "03",
    category: "AI / AGRITECH",
    title: "AGRI-AI Assistant",
    description: "Voice-enabled agricultural assistant combining speech, text and images with multilingual AI for crop guidance, weather information and plant-disease support.",
    stack: ["React Native", "FastAPI", "MongoDB", "AI4Bharat", "Python"],
    link: "https://github.com/samuelSS1602/AGRI-SMART",
    repo: "https://github.com/samuelSS1602/AGRI-SMART",
    visual: "ai"
  },
  {
    no: "04",
    category: "IOT / SMART CITY",
    title: "Smart Garbage Management",
    description: "IoT-based monitoring and vehicle allocation concept using sensor data, Firebase and a web dashboard to improve waste collection efficiency.",
    stack: ["React", "Python", "Django", "IoT Sensors", "ESP8266"],
    link: profile.github,
    repo: profile.github,
    visual: "iot"
  },
  {
    no: "05",
    category: "AI / HEALTH & NUTRITION",
    title: "NutriEats",
    description: "Nutrition-focused food application designed to help users discover meals and make healthier food choices through a focused, accessible experience.",
    stack: ["React", "AI Recommendations", "Nutrition", "Responsive UI"],
    link: "https://github.com/samuelSS1602/NUTRI-EATS",
    repo: "https://github.com/samuelSS1602/NUTRI-EATS",
    visual: "food"
  },
  {
    no: "06",
    category: "WEB / E-COMMERCE",
    title: "PriceWatch",
    description: "Web-based price comparison and tracking platform that compares products across stores, shows historical price trends and sends alerts when products reach a target price.",
    stack: ["HTML", "CSS", "JavaScript", "PHP", "Node.js"],
    link: "https://github.com/samuelSS1602/PRICE-WATCH",
    repo: "https://github.com/samuelSS1602/PRICE-WATCH",
    visual: "pricewatch"
  },
  {
    no: "07",
    category: "WEB / CIVIC TECH",
    title: "CrimeRegistry",
    description: "Web-based crime reporting and complaint management system for citizen registration, online complaint filing, case tracking and police case administration.",
    stack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    link: "https://github.com/samuelSS1602/CRIME-REPORTING-SYSTEM",
    repo: "https://github.com/samuelSS1602/CRIME-REPORTING-SYSTEM",
    visual: "crime"
  }
];

const skills = [
  ["01", "Frontend Engineering", "React.js, JavaScript, responsive interfaces, Three.js animations, and modern component-driven UI."],
  ["02", "Backend & APIs", "Node.js, Django, Python, FastAPI and REST-oriented application development."],
  ["03", "AI & Automation", "AI assistants, NLP agents, multilingual speech systems and ML-powered workflows."],
  ["04", "IoT & Smart Systems", "ESP8266, sensors, Firebase monitoring and real-time connected applications."],
  ["05", "Data & Cloud", "MongoDB, MySQL, Firebase, GCP and practical deployment workflows."]
];

const marqueeItems = [
  "REACT", "JAVASCRIPT", "NODE.JS", "PYTHON", "DJANGO", "MONGODB",
  "FIREBASE", "IOT", "AI", "THREE.JS", "DOCKER", "FLUTTER"
];

const stats = [
  { value: "07", label: "Featured Projects" },
  { value: "03+", label: "Specializations" },
  { value: "100%", label: "SEO & Usability" },
  { value: "60FPS", label: "WebGL Smoothness" }
];

const isTouchDevice = () => window.matchMedia("(hover: none), (pointer: coarse)").matches;

const haptic = (pattern = 8) => {
  if (isTouchDevice() && navigator.vibrate) navigator.vibrate(pattern);
};

// Adds .in-focus while the element crosses the middle band of the viewport.
// Touch screens have no hover, so this drives the "hover" styles while scrolling.
function useInFocus(ref, enabled = true) {
  useEffect(() => {
    const element = ref.current;
    if (!element || !enabled) return;
    const observer = new IntersectionObserver(([entry]) => {
      element.classList.toggle("in-focus", entry.isIntersecting);
    }, { rootMargin: "-48% 0px -48% 0px" });
    observer.observe(element);
    return () => observer.disconnect();
  }, [ref, enabled]);
}

// Material-style ripple + light haptic on every tap of a link/button (touch only)
function useTapFeedback() {
  useEffect(() => {
    const handleDown = (event) => {
      if (event.pointerType === "mouse") return;
      const target = event.target.closest("a, button");
      if (!target || target.closest(".mobile-menu, .scroll-cue")) return;

      const rect = target.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height) * 2;
      const ripple = document.createElement("span");
      ripple.className = "tap-ripple";
      ripple.style.width = ripple.style.height = `${size}px`;
      ripple.style.left = `${event.clientX - rect.left - size / 2}px`;
      ripple.style.top = `${event.clientY - rect.top - size / 2}px`;
      target.classList.add("has-ripple");
      target.appendChild(ripple);
      ripple.addEventListener("animationend", () => ripple.remove());
      haptic(8);
    };
    document.addEventListener("pointerdown", handleDown, { passive: true });
    return () => document.removeEventListener("pointerdown", handleDown);
  }, []);
}

function CountUp({ value }) {
  const ref = useRef(null);
  const match = value.match(/^(\d+)(.*)$/);
  const [display, setDisplay] = useState(match ? `${"0".repeat(match[1].length)}${match[2]}` : value);

  useEffect(() => {
    if (!match) return;
    const element = ref.current;
    const target = Number(match[1]);
    const digits = match[1].length;
    let frame;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      const start = performance.now();
      const step = (now) => {
        const t = Math.min(1, (now - start) / 1400);
        const eased = 1 - Math.pow(1 - t, 3);
        setDisplay(`${String(Math.round(target * eased)).padStart(digits, "0")}${match[2]}`);
        if (t < 1) frame = requestAnimationFrame(step);
      };
      frame = requestAnimationFrame(step);
    }, { threshold: 0.6 });
    observer.observe(element);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value]);

  return <span ref={ref} className="stat-value">{display}</span>;
}

function FadeIn({ children, delay = 0, y = 35, x = 0, className = "", focus = false }) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        element.classList.add("is-visible");
        observer.disconnect();
      }
    }, { rootMargin: "-60px" });

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useInFocus(ref, focus);

  return (
    <div
      ref={ref}
      className={`fade-in-on-scroll ${className}`}
      style={{ "--fade-y": `${y}px`, "--fade-x": `${x}px`, "--fade-delay": `${delay}s` }}
    >
      {children}
    </div>
  );
}

function Magnetic({ children }) {
  return (
    <div
      className="magnetic-wrap"
    >
      {children}
    </div>
  );
}

const navItems = [
  { id: "about", label: "ABOUT", cursor: "VIEW" },
  { id: "skills", label: "SKILLS", cursor: "VIEW" },
  { id: "projects", label: "PROJECTS", cursor: "VIEW" },
  { id: "contact", label: "CONTACT", cursor: "HELLO" }
];

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");
  const progressRef = useRef(null);

  useEffect(() => {
    let frame = 0;
    const handleScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        setScrolled(window.scrollY > 40);
        if (progressRef.current) {
          progressRef.current.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
        }
      });
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    }, { rootMargin: "-45% 0px -50% 0px" });

    ["home", ...navItems.map((item) => item.id)].forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    const handleKey = (e) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`nav-header ${scrolled ? "is-scrolled" : ""} ${menuOpen ? "is-menu-open" : ""}`}>
      <div className="scroll-progress" ref={progressRef} />
      <nav className="nav-container">
        <a href="#home" className="brand-logo" data-cursor="SAMUEL" onClick={closeMenu}>
          SAMUEL<span>.</span>
        </a>

        <div className="nav-links">
          {navItems.map((item) => (
            <a key={item.id} href={`#${item.id}`} data-cursor={item.cursor} className={active === item.id ? "is-active" : ""}>
              {item.label}
            </a>
          ))}
        </div>

        <div className="nav-right">
          <div className="status-pill hidden-mobile">
            <span className="pulse-dot" />
            <span>AVAILABLE FOR OPPORTUNITIES</span>
          </div>
          <a className="nav-social-icon" href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub profile" data-cursor="GITHUB">
            <Github size={19} />
          </a>
          <a className="nav-social-icon" href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile" data-cursor="LINKEDIN">
            <Linkedin size={19} />
          </a>
          <button
            type="button"
            className="menu-toggle"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <div id="mobile-menu" className={`mobile-menu ${menuOpen ? "is-open" : ""}`} aria-hidden={!menuOpen}>
        {navItems.map((item, i) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={closeMenu}
            tabIndex={menuOpen ? 0 : -1}
            style={{ "--i": i }}
            className={active === item.id ? "is-active" : ""}
          >
            <span className="mobile-menu-no">0{i + 1}</span>
            {item.label}
          </a>
        ))}
        <div className="mobile-menu-status">
          <span className="pulse-dot" />
          AVAILABLE FOR OPPORTUNITIES
        </div>
      </div>
    </header>
  );
}

function Portrait3D() {
  const depthRef = useRef(null);
  const boopRef = useRef(null);
  const [booped, setBooped] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const gyroAsked = useRef(false);

  const applyTilt = (x, y) => {
    if (depthRef.current) {
      depthRef.current.style.transform = `perspective(900px) rotateX(${x}deg) rotateY(${y}deg)`;
    }
  };

  const handlePointerMove = (event) => {
    const x = event.clientX / window.innerWidth - 0.5;
    const y = event.clientY / window.innerHeight - 0.5;
    applyTilt(y * -12, x * 16);
  };

  const listenToGyro = () => {
    const handleOrientation = (event) => {
      if (event.beta == null || event.gamma == null) return;
      // Phone held upright is ~45° beta; clamp so the avatar never flips too far
      const x = Math.max(-14, Math.min(14, (event.beta - 45) * -0.35));
      const y = Math.max(-18, Math.min(18, event.gamma * 0.5));
      applyTilt(x, y);
    };
    window.addEventListener("deviceorientation", handleOrientation, { passive: true });
    return () => window.removeEventListener("deviceorientation", handleOrientation);
  };

  useEffect(() => {
    if (!isTouchDevice()) return;
    setShowHint(true);
    const hintTimer = setTimeout(() => setShowHint(false), 6000);
    // Android exposes orientation without a prompt; iOS needs a tap first (see handleTap)
    const needsPermission = typeof DeviceOrientationEvent !== "undefined" && typeof DeviceOrientationEvent.requestPermission === "function";
    const stop = needsPermission ? undefined : listenToGyro();
    return () => {
      clearTimeout(hintTimer);
      stop?.();
    };
  }, []);

  const handleTap = async () => {
    setBooped((n) => n + 1);
    const boop = boopRef.current;
    if (boop) {
      // Restart the bounce animation on every tap
      boop.classList.remove("is-booped");
      void boop.offsetWidth;
      boop.classList.add("is-booped");
    }
    setShowHint(false);
    haptic([12, 40, 12]);
    if (!gyroAsked.current && typeof DeviceOrientationEvent?.requestPermission === "function") {
      gyroAsked.current = true;
      try {
        if (await DeviceOrientationEvent.requestPermission() === "granted") listenToGyro();
      } catch {
        // Permission denied or unavailable, drag-to-tilt still works
      }
    }
  };

  return (
    <div
      className="hero-portrait-stage hero-portrait-float"
      onPointerMove={handlePointerMove}
      onPointerLeave={() => applyTilt(0, 0)}
      onPointerUp={(event) => event.pointerType !== "mouse" && setTimeout(() => applyTilt(0, 0), 600)}
      onClick={handleTap}
      data-cursor="HI!"
    >
      {booped > 0 && (
        <div key={booped} className="boop-burst" aria-hidden="true">
          {Array.from({ length: 10 }, (_, i) => <span key={i} style={{ "--a": `${i * 36}deg` }} />)}
        </div>
      )}
      {showHint && <span className="portrait-hint">TAP ME · TILT YOUR PHONE</span>}
      <div ref={depthRef} className="hero-portrait-depth">
        <div ref={boopRef} className="portrait-boop">
        <img
          className="hero-main-image"
          src="/assets/branding/3d.webp"
          srcSet="/assets/branding/3d-320.webp 320w, /assets/branding/3d-441.webp 441w, /assets/branding/3d.webp 497w"
          sizes="(max-width: 660px) 75vw, 497px"
          width="497"
          height="502"
          fetchPriority="high"
          loading="eager"
          alt="Samuel 3D avatar"
        />
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-bg-glow" />
      <div className="hero-grid-overlay" />

      {/* Hero Display Heading */}
      <div className="hero-title-container">
        <h1 className="hero-display-heading hero-reveal hero-reveal-heading">
          SAMUEL
        </h1>
      </div>

      {/* 3D Portrait Centerpiece */}
      <div className="hero-3d-wrapper">
        <Portrait3D />

        {/* Floating Glass Badges around 3D Canvas */}
        {/* Outer element handles the entrance reveal, inner pill handles the idle float */}
        <div className="pill-anchor pill-top-left hero-reveal hero-reveal-left hero-reveal-delay-1">
          <div className="floating-pill">
            <Code2 size={14} className="pill-icon" /> REACT &amp; WEB DEVELOPMENT
          </div>
        </div>

        <div className="pill-anchor pill-top-right hero-reveal hero-reveal-right hero-reveal-delay-2">
          <div className="floating-pill">
            <Sparkles size={14} className="pill-icon pill-icon-red" /> AI &amp; MULTILINGUAL NLP
          </div>
        </div>

        <div className="pill-anchor pill-bottom-left hero-reveal hero-reveal-up hero-reveal-delay-3">
          <div className="floating-pill">
            <Cpu size={14} className="pill-icon pill-icon-blue" /> IOT &amp; SMART SYSTEMS
          </div>
        </div>
      </div>

      <a href="#about" className="scroll-cue hero-reveal hero-reveal-up hero-reveal-delay-3" aria-label="Scroll to about section" data-cursor="SCROLL">
        <span className="scroll-cue-mouse"><span /></span>
        <span className="scroll-cue-text">SCROLL</span>
      </a>

      {/* Hero Bottom Bar */}
      <div className="hero-bottom-bar">
        <div className="hero-subtitle-block hero-reveal hero-reveal-up hero-reveal-delay-subtitle">
          <p className="hero-role-tag">SOFTWARE DEVELOPER</p>
          <p className="hero-desc-text">
            BUILDING WEB, AI &amp; IOT PRODUCTS THAT SOLVE REAL-WORLD PROBLEMS
          </p>
        </div>

        <div className="hero-reveal hero-reveal-up hero-reveal-delay-cta">
          <Magnetic>
            <a href="#contact" className="hero-cta-btn" data-cursor="CONNECT">
              <span>CONTACT ME</span>
              <ArrowUpRight size={18} />
            </a>
          </Magnetic>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  return (
    <section
      className="marquee-wrapper"
      aria-label="Technologies (press and hold to pause)"
      onPointerDown={(e) => e.currentTarget.classList.add("is-paused")}
      onPointerUp={(e) => e.currentTarget.classList.remove("is-paused")}
      onPointerLeave={(e) => e.currentTarget.classList.remove("is-paused")}
      onPointerCancel={(e) => e.currentTarget.classList.remove("is-paused")}
    >
      <div className="marquee-track track-forward">
        {[...marqueeItems, ...marqueeItems].map((item, i) => (
          <span key={i} className="marquee-item">
            {item} <b className="marquee-star">✦</b>
          </span>
        ))}
      </div>
      <div className="marquee-track track-reverse">
        {[...marqueeItems.slice().reverse(), ...marqueeItems.slice().reverse(), ...marqueeItems.slice().reverse()].map((item, i) => (
          <span key={i} className="marquee-item text-outlined">
            {item} <b className="marquee-star text-white">✦</b>
          </span>
        ))}
      </div>
    </section>
  );
}

function Word({ word, lit, accent }) {
  return <span className={`about-word ${lit ? "is-lit" : ""} ${accent ? "is-accent" : ""}`}>{word} </span>;
}

const accentWords = new Set(["web", "AI", "connected", "real-world"]);

function About() {
  const bioText = "I am a software developer focused on building useful digital products across web development, AI and connected systems. I enjoy turning ideas into responsive interfaces, practical APIs and real-world solutions.";
  const words = bioText.split(" ");
  const paragraphRef = useRef(null);
  const [litCount, setLitCount] = useState(0);

  useEffect(() => {
    // Light up the paragraph word-by-word as it scrolls through the viewport
    let frame = 0;
    const update = () => {
      const el = paragraphRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const start = window.innerHeight * 0.85;
      const end = window.innerHeight * 0.35;
      const progress = Math.min(1, Math.max(0, (start - rect.top) / (start - end + rect.height * 0.5)));
      setLitCount(Math.round(progress * words.length));
    };
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [words.length]);

  return (
    <section id="about" className="about-section">
      <div className="ambient-icon icon-top-left"><Globe2 size={120} /></div>
      <div className="ambient-icon icon-top-right"><BrainCircuit size={110} /></div>
      <div className="ambient-icon icon-bottom-left"><Cpu size={115} /></div>

      <FadeIn><span className="section-eyebrow">ABOUT SAMUEL SANTHARAJ S</span></FadeIn>
      <FadeIn delay={0.1}><h2 className="section-heading text-center">ABOUT ME<span className="heading-accent">.</span></h2></FadeIn>

      <div className="about-content-box">
        <p className="about-reveal-paragraph" ref={paragraphRef}>
          {words.map((w, i) => (
            <Word key={i} word={w} lit={i < litCount} accent={accentWords.has(w.replace(/[.,]/g, ""))} />
          ))}
        </p>

        {/* Stats Grid */}
        <div className="stats-grid">
          {stats.map((st, idx) => (
            <FadeIn key={st.label} delay={0.15 + idx * 0.08} className="stat-card">
              <CountUp value={st.value} />
              <span className="stat-label">{st.label}</span>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4} className="about-actions-wrap">
          <a href={profile.github} target="_blank" rel="noreferrer" className="pill-btn-outline" data-cursor="GITHUB">
            <Github size={16} /> GITHUB PROFILE
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="pill-btn-outline" data-cursor="LINKEDIN">
            <Linkedin size={16} /> LINKEDIN
          </a>
        </FadeIn>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <FadeIn><span className="section-eyebrow text-dark">TECHNICAL CAPABILITIES</span></FadeIn>
        <FadeIn delay={0.1}><h2 className="section-heading text-dark text-center">SKILLS &amp; STACK<span className="heading-accent">.</span></h2></FadeIn>

        <div className="skills-grid">
          {skills.map(([no, title, desc], i) => (
            <FadeIn key={no} delay={i * 0.08} className="skill-card-row" focus>
              <div className="skill-num">{no}</div>
              <div className="skill-body">
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
              <ArrowUpRight className="skill-arrow" size={34} strokeWidth={1.6} aria-hidden="true" />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  const [isMobile, setIsMobile] = useState(false);
  const cardRef = useRef(null);
  useInFocus(cardRef);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 600);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSpotlight = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--spot-x", `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty("--spot-y", `${event.clientY - rect.top}px`);
  };

  return (
    <div
      className="project-sticky-wrap"
      style={{ top: isMobile ? "auto" : `${index * 32 + 100}px` }}
    >
      <article ref={cardRef} className="project-card" data-cursor="PROJECT" onPointerMove={handleSpotlight}>
        <div className="project-header">
          <span className="project-index">{project.no}</span>
          <div className="project-meta-titles">
            <span className="project-cat">{project.category}</span>
            <h3 className="project-title">{project.title}</h3>
          </div>
          <a href={project.link} target="_blank" rel="noreferrer" className="live-demo-link" data-cursor="VIEW">
            <span>{project.no === "01" || project.no === "02" ? "VIEW LIVE PROJECT" : "VIEW ON GITHUB"}</span> <ExternalLink size={15} />
          </a>
        </div>

        <div className="project-body-grid">
          <div className="project-info-side">
            <p className="project-description">{project.description}</p>
            <div className="tech-tags-list">
              {project.stack.map(s => <span key={s} className="tech-tag">{s}</span>)}
            </div>
            <a href={project.repo} target="_blank" rel="noreferrer" className="repo-code-link" data-cursor="CODE">
              <Github size={16} /> VIEW SOURCE CODE
            </a>
          </div>

          <Project3DVisual type={project.visual} />
        </div>
      </article>
    </div>
  );
}

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <FadeIn><span className="section-eyebrow">FEATURED WORK</span></FadeIn>
      <FadeIn delay={0.1}><h2 className="section-heading text-center mb-12">PROJECTS<span className="heading-accent">.</span></h2></FadeIn>

      <div className="projects-stack-container">
        {projects.map((p, i) => <ProjectCard key={p.no} project={p} index={i} />)}
      </div>
    </section>
  );
}

function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      // navigator.clipboard is undefined on non-HTTPS origins and can reject when permission is denied
      await navigator.clipboard.writeText(profile.email);
    } catch {
      const field = document.createElement("textarea");
      field.value = profile.email;
      field.setAttribute("readonly", "");
      field.style.position = "fixed";
      field.style.opacity = "0";
      document.body.appendChild(field);
      field.select();
      const ok = document.execCommand("copy");
      field.remove();
      if (!ok) {
        window.location.href = `mailto:${profile.email}`;
        return;
      }
    }
    setCopied(true);
    haptic([10, 50, 20]);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section id="contact" className="contact-fullbleed">
      <div className="contact-bg-word" aria-hidden="true">HELLO</div>
      <div className="contact-top-row">
        <FadeIn><span className="contact-eyebrow">LET'S BUILD SOMETHING</span></FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="contact-giant-title">
            HAVE AN IDEA?<br />
            <span className="title-dark-highlight">LET'S MAKE IT REAL.</span>
          </h2>
        </FadeIn>
      </div>

      <div className="contact-middle-row">
        <FadeIn delay={0.25} className="contact-actions">
          <div className="email-copy-wrap">
            <button type="button" onClick={handleCopyEmail} className="email-copy-btn" data-cursor="COPY">
              <span>{profile.email}</span>
              {copied ? <CheckCircle2 className="text-green-300" size={24} /> : <Copy size={22} />}
            </button>
            <span className={`copy-toast ${copied ? "is-shown" : ""}`} role="status">
              {copied ? "Copied to clipboard!" : ""}
            </span>
          </div>
          <a href={`mailto:${profile.email}`} className="mail-cta-btn" data-cursor="MAIL">
            <Mail size={18} />
            <span>SAY HELLO</span>
            <ArrowUpRight size={18} />
          </a>
        </FadeIn>
      </div>

      <div className="contact-bottom-row">
        <div className="copyright-text">
          © {new Date().getFullYear()} SAMUEL SANTHARAJ S. ALL RIGHTS RESERVED.
        </div>

        <div className="contact-social-links">
          <a href={profile.github} target="_blank" rel="noreferrer" data-cursor="GITHUB">GITHUB</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" data-cursor="LINKEDIN">LINKEDIN</a>
          <a href={`mailto:${profile.email}`} data-cursor="MAIL">EMAIL</a>
        </div>

        <button onClick={scrollToTop} className="scroll-top-btn" aria-label="Scroll to top" data-cursor="TOP">
          <ArrowUp size={20} />
        </button>
      </div>
    </section>
  );
}

function FloatingContact() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show after the hero, hide once the contact section is on screen
    let frame = 0;
    const update = () => {
      const contact = document.getElementById("contact");
      const pastHero = window.scrollY > window.innerHeight * 0.8;
      const atContact = contact && contact.getBoundingClientRect().top < window.innerHeight * 0.9;
      setVisible(pastHero && !atContact);
    };
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className={`floating-contact ${visible ? "is-visible" : ""}`} aria-hidden={!visible}>
      <a href="#projects" tabIndex={visible ? 0 : -1}>WORK</a>
      <a href="#contact" className="floating-contact-main" tabIndex={visible ? 0 : -1}>
        <span className="pulse-dot" /> LET'S TALK
      </a>
    </div>
  );
}

function App() {
  useTapFeedback();

  return (
    <div className="jack-portfolio-app">
      <CustomCursor />
      <Header />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <FloatingContact />
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
