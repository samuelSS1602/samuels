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

function FadeIn({ children, delay = 0, y = 35, x = 0, className = "" }) {
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

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`nav-header ${scrolled ? "is-scrolled" : ""}`}>
      <nav className="nav-container">
        <a href="#home" className="brand-logo" data-cursor="SAMUEL">
          SAMUEL<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#about" data-cursor="VIEW">ABOUT</a>
          <a href="#skills" data-cursor="VIEW">SKILLS</a>
          <a href="#projects" data-cursor="VIEW">PROJECTS</a>
          <a href="#contact" data-cursor="HELLO">CONTACT</a>
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
        </div>
      </nav>
    </header>
  );
}

function Portrait3D() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handlePointerMove = (event) => {
    const x = event.clientX / window.innerWidth - 0.5;
    const y = event.clientY / window.innerHeight - 0.5;
    setTilt({ x: y * -12, y: x * 16 });
  };

  return (
    <div
      className="hero-portrait-stage hero-portrait-float"
      onPointerMove={handlePointerMove}
      onPointerLeave={() => setTilt({ x: 0, y: 0 })}
    >
      <div
        className="hero-portrait-depth"
        style={{ transform: `perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
      >
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
        <div className="floating-pill pill-top-left hero-reveal hero-reveal-left hero-reveal-delay-1">
          <Code2 size={14} className="pill-icon" /> REACT &amp; WEB DEVELOPMENT
        </div>

        <div className="floating-pill pill-top-right hero-reveal hero-reveal-right hero-reveal-delay-2">
          <Sparkles size={14} className="pill-icon text-red" /> AI &amp; MULTILINGUAL NLP
        </div>

        <div className="floating-pill pill-bottom-left hero-reveal hero-reveal-up hero-reveal-delay-3">
          <Cpu size={14} className="pill-icon text-blue" /> IOT &amp; SMART SYSTEMS
        </div>
      </div>

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
    <section className="marquee-wrapper">
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

function Word({ word }) {
  return <span className="about-word">{word} </span>;
}

function About() {
  const bioText = "I am a software developer focused on building useful digital products across web development, AI and connected systems. I enjoy turning ideas into responsive interfaces, practical APIs and real-world solutions.";
  const words = bioText.split(" ");

  return (
    <section id="about" className="about-section">
      <div className="ambient-icon icon-top-left"><Globe2 size={120} /></div>
      <div className="ambient-icon icon-top-right"><BrainCircuit size={110} /></div>
      <div className="ambient-icon icon-bottom-left"><Cpu size={115} /></div>

      <FadeIn><span className="section-eyebrow">ABOUT SAMUEL SANTHARAJ S</span></FadeIn>
      <FadeIn delay={0.1}><h2 className="section-heading text-center">ABOUT ME</h2></FadeIn>

      <div className="about-content-box">
        <p className="about-reveal-paragraph">
          {words.map((w, i) => {
            return <Word key={i} word={w} />;
          })}
        </p>

        {/* Stats Grid */}
        <div className="stats-grid">
          {stats.map((st, idx) => (
            <FadeIn key={st.label} delay={0.15 + idx * 0.08} className="stat-card">
              <span className="stat-value">{st.value}</span>
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
        <FadeIn delay={0.1}><h2 className="section-heading text-dark text-center">SKILLS &amp; STACK</h2></FadeIn>

        <div className="skills-grid">
          {skills.map(([no, title, desc], i) => (
            <FadeIn key={no} delay={i * 0.08} className="skill-card-row">
              <div className="skill-num">{no}</div>
              <div className="skill-body">
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  return (
    <div className="project-sticky-wrap" style={{ top: `${index * 32 + 100}px` }}>
      <article className="project-card" data-cursor="PROJECT">
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
      <FadeIn delay={0.1}><h2 className="section-heading text-center mb-12">PROJECTS</h2></FadeIn>

      <div className="projects-stack-container">
        {projects.map((p, i) => <ProjectCard key={p.no} project={p} index={i} />)}
      </div>
    </section>
  );
}

function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section id="contact" className="contact-fullbleed">
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
        <FadeIn delay={0.25}>
          <button onClick={handleCopyEmail} className="email-copy-btn" data-cursor="COPY">
            <span>{profile.email}</span>
            {copied ? <CheckCircle2 className="text-green-400" size={24} /> : <Copy size={22} />}
          </button>
          {copied && <span className="copy-toast">Copied to clipboard!</span>}
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

function App() {
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
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
