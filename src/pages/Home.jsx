import ProjectUiUxCard from "../components/ProjectUiUxCard";
import ProjectDevCard from "../components/ProjectDevCard";

import uiuxProjects from "../data/uiuxProjects.json";
import mernProjects from "../data/mernProjects.json";
import shaveenProfile from "../assets/img/MyPicture.png";
import { HugeiconsIcon } from "@hugeicons/react";

import htmlIcon from "../assets/icons/html-icon.svg";
import cssIcon from "../assets/icons/css-icon.svg";
import javaScriptIcon from "../assets/icons/javascipt-icon.svg";
import reactIcon from "../assets/icons/react-icon.svg";
import nodeIcon from "../assets/icons/nodejs.svg";
import expressIcon from "../assets/icons/Express.svg";
import mongoDBIcon from "../assets/icons/MongoDB.svg";
import figmaIcon from "../assets/icons/figma-icon.svg";
import photoshopIcon from "../assets/icons/photoshop-icon.svg";
import illustratorIcon from "../assets/icons/illustrator-icon.svg";

import {
  Mailbox01Icon,
  Download01Icon,
  ArrowUpRight01Icon,
  CallIcon,
  Location01Icon,
  Email,
  GithubIcon,
  Moon02Icon,
  Sun01Icon,
  Behance01Icon,
} from "@hugeicons/core-free-icons";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";

// ── Motion variants ─────────────────────────────────────────────────────────
// Only opacity/transform are ever animated — both are GPU-composited and
// never trigger layout or paint, so these stay cheap no matter how many
// elements are on screen at once.

// Parent container that staggers its direct motion children in.
const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

// Default child: fade + rise.
const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

// Child variant for timeline items: fade + slide from the left,
// matching the existing hover:translate-x-1 direction.
const fadeRight = {
  hidden: { opacity: 0, x: -16 },
  show: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

// Whole-section reveal (About / Skills / Contact headers).
const sectionReveal = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// A single viewport config reused everywhere — "once" means each element
// computes its scroll-trigger a single time, never re-observes after.
const revealOnce = { once: true, amount: 0.2 };

// ── Data ─────────────────────────────────────────────────────────────────────

const skillIcons = [
  { src: htmlIcon, label: "HTML" },
  { src: cssIcon, label: "CSS" },
  { src: javaScriptIcon, label: "JavaScript" },
  { src: reactIcon, label: "React" },
  { src: nodeIcon, label: "Node" },
  { src: expressIcon, label: "Express" },
  { src: mongoDBIcon, label: "MongoDB" },
  { src: figmaIcon, label: "Figma" },
  { src: photoshopIcon, label: "Photoshop" },
  { src: illustratorIcon, label: "Illustrator" },
];

const contactItems = [
  {
    icon: <HugeiconsIcon icon={Email} color="#ea580c" size={20} />,
    title: "Email",
    info: "shaveenkumarpalani@gmail.com",
    href: "mailto:shaveenkumarpalani@gmail.com",
  },
  {
    icon: <HugeiconsIcon icon={CallIcon} color="#ea580c" size={20} />,
    title: "Phone",
    info: "+91 93606 74856",
    href: "tel:+919360674856",
  },
  {
    icon: <HugeiconsIcon icon={Location01Icon} color="#ea580c" size={20} />,
    title: "Location",
    info: "Chennai, Tamil Nadu, India",
    href: null,
  },
  {
    icon: <HugeiconsIcon icon={GithubIcon} color="#ea580c" size={20} />,
    title: "GitHub",
    info: "https://github.com/shaveen08",
    href: "https://github.com/shaveen08",
  },
  {
    icon: <HugeiconsIcon icon={Behance01Icon} color="#ea580c" size={20} />,
    title: "Behance",
    info: "https://www.behance.net/shaveenkumar4",
    href: "https://www.behance.net/shaveenkumar4",
  },
];

const stats = [
  { num: "14+", label: "Months experience" },
  { num: "10+", label: "Projects shipped" },
  { num: "3+", label: "Case studies" },
  { num: "2", label: "Degrees earned" },
];

const timelineItems = [
  {
    emoji: "💼",
    title: "UI/UX Designer — ThirdI Technologies Pvt. Ltd.",
    sub: "Designed web & mobile interfaces, conducted user research, and built wireframes and prototypes in Figma.",
    date: "2024 – 2025",
  },
  {
    emoji: "🎓",
    title: "MCA — University of Madras",
    sub: "Master of Computer Applications. Advanced study in software engineering, databases, and system design.",
    date: "2021 – 2023",
  },
  {
    emoji: "📚",
    title: "MERN Stack Certification — FITA Academy",
    sub: "Hands-on training in MongoDB, Express, React, and Node.js.",
    date: "In Progress",
  },
];

const skillBlocks = [
  {
    category: "Frontend",
    pills: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "React",
      "REST APIs",
      "Fetch API",
    ],
  },
  {
    category: "Backend",
    pills: ["Node.js", "Express.js", "MongoDB", "Mongoose"],
  },
  {
    category: "Design",
    pills: ["Figma", "Photoshop", "Illustrator", "Wireframing", "Prototyping"],
  },
  {
    category: "UX Practice",
    pills: [
      "User Research",
      "Usability Testing",
      "WCAG / A11y",
      "Journey Mapping",
      "Information Architecture",
    ],
  },
  {
    category: "Dev Tools",
    pills: ["Git & GitHub", "GitHub Pages", "VS Code", "npm"],
  },
  {
    category: "Soft Skills",
    pills: [
      "Design thinking",
      "Cross-functional collab",
      "Attention to detail",
      "Communication",
    ],
  },
];

// ── Home Component ────────────────────────────────────────────────────────────

const Home = () => {
  const [activeTab, setActiveTab] = useState("uiux");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [backTopVisible, setBackTopVisible] = useState(false);
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark",
  );

  // Sync theme to <html> and localStorage
  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      darkMode ? "dark" : "light",
    );
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  // Back-to-top visibility (passive listener — doesn't block the scroll thread)
  useEffect(() => {
    const onScroll = () => setBackTopVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll to top button action
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  // GMAIL - Form data handle change
  const handleFormChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // GMAIL - Form data submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    if (!name || !email || !message) {
      alert("Please fill in all required fields.");
      return;
    }
    alert(
      `Thanks ${name}! Your message has been sent. I'll get back to you soon.`,
    );
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-14 px-6 py-8 md:gap-24 md:px-12 md:py-14 lg:px-25 lg:py-18">
      <Helmet>
        <title>Shaveen Kumar | MERN Stack Developer</title>

        <meta
          name="description"
          content="Portfolio showcasing React, Node.js, Express.js and MongoDB projects."
        />
      </Helmet>
      {/* ── HERO ──────────────────────────────────────────────── */}
      <header
        id="home"
        className="relative flex flex-col items-stretch justify-between gap-8 overflow-hidden rounded-3xl border border-border bg-[linear-gradient(135deg,#ea5a0c12_0%,var(--bg)_45%)] transition-colors duration-300 before:pointer-events-none before:absolute before:inset-0 before:bg-[radial-gradient(ellipse_55%_75%_at_5%_100%,#ea580c14,transparent_65%)] before:content-[''] md:flex-row"
      >
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="relative z-10 flex max-w-180 flex-col gap-6 px-6 py-7 md:px-14 md:py-12"
        >
          <motion.div
            variants={fadeUp}
            className="flex w-fit items-center gap-2 rounded-full bg-accent-dim px-3.5 py-1.5 text-[13px] font-semibold text-accent"
          >
            <span className="h-2 w-2 shrink-0 animate-pulse-dot rounded-full bg-accent" />
            Open to work
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-col gap-2.5">
            <h1 className="text-[32px] font-bold leading-[1.3] tracking-[-1px] text-text-primary lg:text-[40px]">
              Hi, I'm Shaveen —{" "}
              <span className="text-accent">UI/UX Designer</span>
              {" & "}
              <span className="text-accent">MERN Stack Dev</span>
            </h1>
            <p className="text-base text-text-secondary">
              1+ year crafting user-centred web &amp; mobile interfaces — from
              wireframes to working code. I bridge the gap between design and
              engineering.
            </p>
          </motion.div>

          {/* Skill icons — hover kept as native CSS, cheaper than JS-driven motion */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-2.5">
            {skillIcons.map(({ src, label }) => (
              <div
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-bg-card transition-[border-color,transform] duration-200 hover:-translate-y-0.5 hover:border-accent"
                key={label}
                title={label}
              >
                <img
                  src={src}
                  alt={label}
                  className="h-7 w-7 max-h-9 max-w-9 object-contain"
                />
              </div>
            ))}
          </motion.div>

          {/* CTA buttons — whileTap only (cheap, transform-only) */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
            <motion.button
              whileTap={{ scale: 0.96 }}
              className="flex h-11.5 items-center justify-center gap-2 rounded-btn bg-accent px-7 text-[15px] font-semibold text-white transition-all duration-200 hover:-translate-y-px hover:bg-accent-hover hover:shadow-[0_6px_24px_#ea580c40] sm:justify-start"
              onClick={() => scrollTo("contact")}
            >
              Hire Me <HugeiconsIcon icon={Mailbox01Icon} size={18} />
            </motion.button>
            <motion.a
              whileTap={{ scale: 0.96 }}
              className="flex h-11.5 items-center justify-center gap-2 rounded-btn border-[1.5px] border-accent bg-transparent px-7 text-[15px] font-semibold text-accent transition-all duration-200 hover:-translate-y-px hover:bg-accent-dim sm:justify-start"
              href="/resume/ShaveenKumar_MERN_Developer_Resume.pdf"
              download="ShaveenKumar_MERN_Developer_Resume.pdf"
              target="_blank"
            >
              Download CV <HugeiconsIcon icon={Download01Icon} size={18} />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Profile image — simple one-shot fade/scale-in, no scroll trigger needed */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex shrink-0 items-end justify-start"
        >
          <img
            src={shaveenProfile}
            alt="Shaveen Kumar"
            className="block w-full max-h-fit object-cover object-top md:w-75 md:max-h-none"
          />
        </motion.div>
      </header>

      {/* ── ABOUT ─────────────────────────────────────────────── */}
      <motion.section
        id="about"
        initial="hidden"
        whileInView="show"
        viewport={revealOnce}
        variants={sectionReveal}
        className="flex flex-col"
      >
        <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-2">
          {/* Left — bio + stats */}
          <div>
            <p className="mb-1.5 text-xs font-bold uppercase tracking-[2px] text-accent">
              About Me
            </p>
            <h2 className="text-[32px] font-bold leading-[1.2] tracking-[-0.5px]">
              Designing with purpose,
              <br />
              building with code
            </h2>
            <p className="mt-4 text-base leading-[1.75] text-text-secondary">
              I'm a UI/UX Designer and Frontend Developer based in Chennai,
              India. With 14 months of professional experience at ThirdI
              Technologies, I specialise in creating user-centred digital
              products that feel as good as they look.
            </p>
            <p className="mt-3 text-base leading-[1.75] text-text-secondary">
              Holding an MCA from the University of Madras and currently
              completing my MERN Stack certification, I love sitting at the
              intersection of design thinking and engineering precision.
            </p>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={revealOnce}
              className="mt-7 grid grid-cols-2 gap-3.5"
            >
              {stats.map(({ num, label }) => (
                <motion.div
                  variants={fadeUp}
                  className="rounded-card border border-border bg-bg-card p-5 transition-[border-color,transform] duration-200 hover:-translate-y-0.5 hover:border-accent"
                  key={label}
                >
                  <div className="text-4xl font-bold leading-none tracking-[-1px] text-accent">
                    {num}
                  </div>
                  <div className="mt-1.5 text-[13px] text-text-secondary">
                    {label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right — timeline */}
          <div>
            <p className="mb-1.5 text-xs font-bold uppercase tracking-[2px] text-accent">
              Experience &amp; Education
            </p>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={revealOnce}
              className="mt-4 flex flex-col gap-3.5"
            >
              {timelineItems.map(({ emoji, title, sub, date }) => (
                <motion.div
                  variants={fadeRight}
                  className="flex gap-4 rounded-[14px] border border-border bg-bg-card p-4 transition-[border-color,transform] duration-200 hover:translate-x-1 hover:border-accent"
                  key={title}
                >
                  <div className="flex h-9.5 w-9.5 shrink-0 items-center justify-center rounded-[10px] bg-accent-dim text-lg">
                    {emoji}
                  </div>
                  <div>
                    <div className="text-sm font-semibold leading-[1.4] text-text-primary">
                      {title}
                    </div>
                    <div className="mt-1 text-[13px] leading-normal text-text-secondary">
                      {sub}
                    </div>
                    <div className="mt-1.5 text-[11px] font-bold uppercase tracking-[0.5px] text-accent">
                      {date}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* ── PROJECTS ──────────────────────────────────────────── */}
      <motion.section
        id="projects"
        initial="hidden"
        whileInView="show"
        viewport={revealOnce}
        variants={sectionReveal}
        className="flex flex-col"
      >
        <header className="mb-7 flex flex-col gap-2">
          <p className="text-xs font-bold uppercase tracking-[2px] text-accent">
            Work
          </p>
          <h3 className="text-[28px] font-semibold leading-[1.2] text-text-primary">
            Projects &amp; Case Studies
          </h3>
          <p className="text-base font-medium leading-normal text-text-secondary">
            Real-world projects showcasing my design process and frontend
            skills.
          </p>
        </header>

        {/* Tab bar */}
        <section className="mb-7 flex gap-1 border-b border-border">
          <div
            className={`cursor-pointer select-none rounded-t-lg border-b-2 px-5 py-2.5 text-[15px] font-medium transition-all duration-200 ${
              activeTab === "uiux"
                ? "border-accent bg-accent-dim font-semibold text-accent"
                : "border-transparent text-text-secondary hover:text-text-primary"
            }`}
            onClick={() => setActiveTab("uiux")}
          >
            UI/UX Design Projects
          </div>
          <div
            className={`cursor-pointer select-none rounded-t-lg border-b-2 px-5 py-2.5 text-[15px] font-medium transition-all duration-200 ${
              activeTab === "mern"
                ? "border-accent bg-accent-dim font-semibold text-accent"
                : "border-transparent text-text-secondary hover:text-text-primary"
            }`}
            onClick={() => setActiveTab("mern")}
          >
            MERN Projects
          </div>
        </section>

        <AnimatePresence mode="wait">
          {activeTab === "uiux" && (
            <motion.div
              key="uiux"
              variants={staggerContainer}
              initial="hidden"
              animate="show"
              exit={{ opacity: 0, transition: { duration: 0.15 } }}
              className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
            >
              {uiuxProjects.map((project) => (
                <ProjectUiUxCard key={project.id} project={project} />
              ))}
            </motion.div>
          )}

          {activeTab === "mern" && (
            <motion.div
              key="mern"
              variants={staggerContainer}
              initial="hidden"
              animate="show"
              exit={{ opacity: 0, transition: { duration: 0.15 } }}
              className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
            >
              {mernProjects.map((project) => (
                <ProjectDevCard key={project.id} project={project} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.section>

      {/* ── SKILLS ────────────────────────────────────────────── */}
      <motion.section
        id="skills"
        initial="hidden"
        whileInView="show"
        viewport={revealOnce}
        variants={sectionReveal}
        className="flex flex-col"
      >
        <p className="mb-1.5 text-xs font-bold uppercase tracking-[2px] text-accent">
          Toolkit
        </p>
        <h3 className="text-[28px] font-semibold leading-[1.2] text-text-primary">
          Skills &amp; Technologies
        </h3>
        <p className="mb-8 text-base font-medium leading-normal text-text-secondary">
          A blend of design tools and frontend technologies I use to bring ideas
          to life.
        </p>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={revealOnce}
          className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          {skillBlocks.map(({ category, pills }) => (
            <motion.div
              variants={fadeUp}
              className="rounded-card border border-border bg-bg-card p-5 transition-[border-color,transform] duration-200 hover:-translate-y-0.5 hover:border-accent"
              key={category}
            >
              <div className="mb-3.5 text-[11px] font-bold uppercase tracking-[1.5px] text-text-muted">
                {category}
              </div>
              <div className="flex flex-wrap gap-2">
                {pills.map((pill) => (
                  <span
                    className="cursor-default rounded-full bg-tag px-3 py-1.5 text-[13px] font-medium text-text-secondary transition-colors duration-200 hover:bg-accent-dim hover:text-accent"
                    key={pill}
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* ── CONTACT ───────────────────────────────────────────── */}
      <motion.section
        id="contact"
        initial="hidden"
        whileInView="show"
        viewport={revealOnce}
        variants={sectionReveal}
        className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1fr_1.2fr]"
      >
        {/* Left — header + quick links */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <p className="text-xs font-bold uppercase tracking-[2px] text-accent">
              Contact
            </p>
            <h3 className="text-[28px] font-semibold leading-[1.2] text-text-primary">
              Get in Touch
            </h3>
            <p className="text-base font-medium leading-normal text-text-secondary">
              Have a project in mind or want to collaborate? I'd love to hear
              from you.
            </p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={revealOnce}
            className="flex flex-col gap-2.5"
          >
            {contactItems.map(({ icon, title, info, href }) => (
              <motion.div
                variants={fadeRight}
                className="flex items-center justify-between gap-3 rounded-xl border border-border bg-bg-card px-3.5 py-3 transition-[border-color,transform] duration-200 hover:translate-x-1 hover:border-accent"
                key={title}
                onClick={() =>
                  href &&
                  window.open(
                    href,
                    href.startsWith("mailto") || href.startsWith("tel")
                      ? "_self"
                      : "_blank",
                  )
                }
                style={{ cursor: href ? "pointer" : "default" }}
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-accent-dim">
                    {icon}
                  </div>
                  <div>
                    <h4 className="text-[11px] font-bold uppercase tracking-[0.5px] text-text-muted">
                      {title}
                    </h4>
                    <p className="mt-0.5 text-sm font-semibold text-text-primary">
                      {info}
                    </p>
                  </div>
                </div>
                {href && (
                  <div className="text-accent opacity-70">
                    <HugeiconsIcon
                      icon={ArrowUpRight01Icon}
                      color="#ea580c"
                      size={20}
                    />
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Right — form */}
        <div className="flex flex-col">
          <div className="rounded-card border border-border bg-bg-card px-8 py-7">
            <h4 className="mb-1 text-xl font-bold text-text-primary">
              Send a Message
            </h4>
            <p className="mb-6 text-sm text-text-secondary">
              I usually respond within 24 hours.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="mb-4 flex flex-col gap-1.5">
                <label
                  htmlFor="name"
                  className="text-[13px] font-semibold text-text-primary"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={handleFormChange}
                  className="w-full rounded-[10px] border border-border bg-bg-card px-3.5 py-2.5 text-sm text-text-primary outline-none transition-[border-color,box-shadow,background] duration-200 placeholder:text-text-muted focus:border-accent focus:shadow-[0_0_0_3px_#ea580c18]"
                />
              </div>
              <div className="mb-4 flex flex-col gap-1.5">
                <label
                  htmlFor="email"
                  className="text-[13px] font-semibold text-text-primary"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleFormChange}
                  className="w-full rounded-[10px] border border-border bg-bg-card px-3.5 py-2.5 text-sm text-text-primary outline-none transition-[border-color,box-shadow,background] duration-200 placeholder:text-text-muted focus:border-accent focus:shadow-[0_0_0_3px_#ea580c18]"
                />
              </div>
              <div className="mb-4 flex flex-col gap-1.5">
                <label
                  htmlFor="subject"
                  className="text-[13px] font-semibold text-text-primary"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="What's this about?"
                  value={formData.subject}
                  onChange={handleFormChange}
                  className="w-full rounded-[10px] border border-border bg-bg-card px-3.5 py-2.5 text-sm text-text-primary outline-none transition-[border-color,box-shadow,background] duration-200 placeholder:text-text-muted focus:border-accent focus:shadow-[0_0_0_3px_#ea580c18]"
                />
              </div>
              <div className="mb-4 flex flex-col gap-1.5">
                <label
                  htmlFor="message"
                  className="text-[13px] font-semibold text-text-primary"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project or opportunity…"
                  value={formData.message}
                  onChange={handleFormChange}
                  className="h-25 w-full resize-none rounded-[10px] border border-border bg-bg-card px-3.5 py-2.5 text-sm text-text-primary outline-none transition-[border-color,box-shadow,background] duration-200 placeholder:text-text-muted focus:border-accent focus:shadow-[0_0_0_3px_#ea580c18]"
                />
              </div>
              <div>
                <motion.button
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="mt-2 h-11.5 w-full rounded-btn bg-accent text-[15px] font-bold text-white transition-all duration-200 hover:-translate-y-px hover:bg-accent-hover hover:shadow-[0_6px_24px_#ea580c40]"
                >
                  Send Message →
                </motion.button>
              </div>
            </form>
          </div>
        </div>
      </motion.section>

      {/* ── BACK TO TOP ───────────────────────────────────────── */}
      <AnimatePresence>
        {backTopVisible && (
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-7 right-7 z-99 flex h-11 w-11 items-center justify-center rounded-full border-none bg-accent text-lg text-white shadow-[0_4px_20px_#ea580c50] transition-colors duration-200 hover:bg-accent-hover"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
          >
            ↑
          </motion.button>
        )}
      </AnimatePresence>

      {/* ── THEME TOGGLE ──────────────────────────────────────── */}
      <button
        className="fixed bottom-7 left-7 z-99 flex h-11 w-11 items-center justify-center rounded-full border border-border bg-bg-card text-xl shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition-[transform,box-shadow,background] duration-200 hover:-translate-y-0.5 hover:shadow-[0_6px_24px_rgba(0,0,0,0.18)]"
        onClick={() => setDarkMode((d) => !d)}
        aria-label="Toggle theme"
        title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
      >
        {darkMode ? (
          <HugeiconsIcon icon={Sun01Icon} color="#fff" />
        ) : (
          <HugeiconsIcon icon={Moon02Icon} />
        )}
      </button>
    </div>
  );
};

export default Home;
