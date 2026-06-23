import { useRef, useState, useEffect } from "react";
import { smoothScrollTo } from "../utils/smoothScroll";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Tooltip } from "@material-tailwind/react";
import emailjs from "@emailjs/browser";
import { skills, experiences, projects, socialLinks } from "../constants";
import { arrow } from "../assets/icons";
import Alert from "../components/Alert";
import Typewriter from "../components/Typewriter";
import MetaTagComponent from "../components/MetaTagComponent";
import pdfFile from "../assets/resume/UnmeyMahaddalkarResume.pdf";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const useAlert = () => {
  const [alert, setAlert] = useState({ show: false, text: "", type: "danger" });
  const showAlert = ({ text, type = "danger" }) => setAlert({ show: true, text, type });
  const hideAlert = () => setAlert({ show: false, text: "", type: "danger" });
  return { alert, showAlert, hideAlert };
};

const SinglePage = ({ theme }) => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    const onScroll = () => setAtTop(window.scrollY < 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleScrollToAbout = (e) => {
    e.preventDefault();
    const about = document.getElementById("about");
    if (about) smoothScrollTo(about.offsetTop, 1500);
  };

  const handleChange = ({ target: { name, value } }) => setForm({ ...form, [name]: value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Unmey Mahaddalkar",
          from_email: form.email,
          to_email: "unmey08@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          showAlert({ text: "Thank you for your message!", type: "success" });
          setTimeout(() => {
            hideAlert();
            setForm({ name: "", email: "", message: "" });
          }, 3000);
        },
        (error) => {
          setLoading(false);
          console.error(error);
          showAlert({ text: "I didn't receive your message", type: "danger" });
        }
      );
  };

  return (
    <div>
      <MetaTagComponent content="Unmey Mahaddalkar — Frontend-Focused Full-Stack Engineer based in Vancouver, BC. 6+ years with React, TypeScript, Redux, Next.js, Node.js. Canadian PR, available July 1st, 2026." />

      {/* ── HERO ── */}
      <section
        id="hero"
        className="relative flex w-full min-h-screen items-center justify-center px-8 sm:px-16"
      >
        <div className="hero-glyphs" aria-hidden="true">
          <span className="hero-glyph hero-glyph-1 text-3xl" style={{ "--rot": "-8deg", "--dur": "6.5s", animationDelay: "0s" }}>&lt;/&gt;</span>
          <span className="hero-glyph hero-glyph-2 text-4xl" style={{ "--rot": "6deg", "--dur": "8s", animationDelay: "1.2s" }}>{"{ }"}</span>
          <span className="hero-glyph hero-glyph-3 text-2xl" style={{ "--rot": "5deg", "--dur": "7s", animationDelay: "2.1s" }}>( )</span>
          <span className="hero-glyph hero-glyph-4 text-3xl" style={{ "--rot": "-6deg", "--dur": "9s", animationDelay: "0.6s" }}>=&gt;</span>
          <span className="hero-glyph hero-glyph-5 text-xl" style={{ "--rot": "10deg", "--dur": "5.5s", animationDelay: "3s" }}>;</span>
          <span className="hero-glyph hero-glyph-6 text-2xl" style={{ "--rot": "-10deg", "--dur": "8.5s", animationDelay: "1.8s" }}>[ ]</span>
          <span className="hero-glyph hero-glyph-7 text-xl" style={{ "--rot": "8deg", "--dur": "6s", animationDelay: "2.6s" }}>//</span>
          <span className="hero-glyph hero-glyph-8 text-2xl" style={{ "--rot": "7deg", "--dur": "7.5s", animationDelay: "0.9s" }}>&lt;/&gt;</span>
        </div>
        <div className="flex flex-col text-center items-center max-w-2xl w-full relative z-10">
          {/* Name — the brand */}
          <motion.h1
            className="head-text dark:text-white"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.1, duration: 0.5, ease: "easeOut" } }}
          >
            Unmey{" "}
            <span className="blue-gradient_text font-semibold">Mahaddalkar</span>
          </motion.h1>

          {/* Role */}
          <motion.p
            className="mt-3 text-xl sm:text-2xl text-slate-600 dark:text-gray-300 font-medium"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.25, duration: 0.45, ease: "easeOut" } }}
          >
            Frontend-Focused Full-Stack Engineer
          </motion.p>

          {/* Typewriter — value-oriented */}
          <motion.div
            className="mt-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.4, duration: 0.4 } }}
          >
            <p className="text-lg blue-gradient_text font-semibold min-h-[1.75rem]">
              <Typewriter
                phrases={[
                  "6+ years shipping at scale",
                  "React · TypeScript · Redux",
                  "AI-integrated development",
                ]}
              />
            </p>
          </motion.div>

          <motion.div
            className="flex mt-10 justify-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.55, duration: 0.5, ease: "easeOut" } }}
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              href="#contact"
              onClick={(e) => { e.preventDefault(); const el = document.getElementById("contact"); if (el) smoothScrollTo(el.offsetTop - 80, 900); }}
              className="btn"
            >
              Get In Touch
            </motion.a>
          </motion.div>

          {/* Location / availability — below CTA */}
          <motion.p
            className="mt-6 flex flex-wrap justify-center items-center gap-x-2 gap-y-1 text-base text-slate-500 dark:text-slate-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.75, duration: 0.5 } }}
          >
            <span className="flex items-center gap-2 whitespace-nowrap">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse flex-shrink-0" />
              <span className="font-medium text-slate-700 dark:text-slate-200">Vancouver, BC</span>
            </span>
            <span className="whitespace-nowrap">· Available July 1st, 2026 · Canadian PR</span>
          </motion.p>
        </div>

        <div className="absolute bottom-8 inset-x-0 mx-auto w-fit">
          <motion.a
            href="#about"
            onClick={handleScrollToAbout}
            aria-label="Scroll to About"
            className="flex flex-col items-center gap-2 text-slate-400 dark:text-slate-500 hover:text-[#0055cc] dark:hover:text-[#3b9eff] transition-colors"
            initial={{ opacity: 0 }}
            animate={{ opacity: atTop ? 1 : 0, y: atTop ? 0 : 10 }}
            transition={{ duration: 0.5, delay: atTop ? 0.4 : 0 }}
            style={{ pointerEvents: atTop ? "auto" : "none" }}
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <span className="scroll-mouse">
              <span className="scroll-wheel" />
            </span>
          </motion.a>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="max-w-5xl mx-auto px-6 sm:px-16 py-14 sm:py-24">
        <motion.h2
          className="head-text dark:text-white"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <span className="blue-gradient_text drop-shadow font-semibold">About</span> Me
        </motion.h2>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <motion.p
            className="text-slate-700 dark:text-gray-200 leading-relaxed"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            I'm a Frontend-Focused Full-Stack Engineer based in Vancouver, BC with ~6 years of experience
            shipping production-grade web applications in Agile teams across Canada, the US and India. I specialise
            in React, TypeScript, Next.js, Node.js and Redux — building complex payroll and tax management
            systems, AI-powered chatbots, and PDF annotation tools used by thousands of ADP customers. I
            work daily with Claude and GitHub Copilot to accelerate delivery, write sharper code, and stay
            ahead of the curve.
          </motion.p>

          <motion.div
            className="grid grid-cols-3 md:grid-cols-1 gap-3 md:gap-4"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { value: "6+", label: "Years of experience" },
              { value: "4", label: "Companies & contracts" },
              { value: "1000s", label: "Of enterprise users impacted" },
            ].map(({ value, label }) => (
              <div key={label} className="flex flex-col md:flex-row items-center md:items-center gap-1 md:gap-4 p-3 md:p-4 rounded-xl border border-stone-200 dark:border-stone-700 bg-white/60 dark:bg-[#292524]/60 text-center md:text-left">
                <span className="text-2xl md:text-3xl font-bold blue-gradient_text font-poppins">{value}</span>
                <span className="text-slate-500 dark:text-gray-400 text-xs md:text-sm leading-tight">{label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Skills */}
        <div className="py-10 flex flex-col">
          <motion.h3
            className="subhead-text dark:text-white"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            My <span className="blue-gradient_text font-semibold">Skills</span>
          </motion.h3>
          {["Frontend", "Backend", "Tools"].map((group) => (
            <div key={group} className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-4">{group}</p>
              <div className="flex flex-wrap gap-6 sm:gap-8 justify-center md:justify-start">
                {skills.filter((s) => s.group === group).map((skill, index) => (
                  <div key={skill.name} className="flex flex-col items-center gap-2">
                    <Tooltip
                      content={skill.name}
                      animate={{ mount: { scale: 1, y: 0 }, unmount: { scale: 0, y: 25 } }}
                      className="bg-neutral-500 dark:bg-slate-700 px-3 py-1 shadow-xl shadow-black/10"
                    >
                      <motion.div
                        className="block-container w-14 h-14 sm:w-20 sm:h-20"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                      >
                        <div className={`btn-back rounded-xl ${theme === "dark" ? "dark-mode-btn-back" : ""}`} />
                        <div className="btn-front rounded-xl flex justify-center items-center">
                          <img src={skill.imageUrl} alt={skill.name} loading="lazy" className="w-1/2 h-1/2 object-contain" />
                        </div>
                      </motion.div>
                    </Tooltip>
                    <span className="text-xs text-slate-500 dark:text-gray-400 sm:hidden">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <motion.div
            className="mt-8 flex flex-wrap items-center gap-2"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500 mr-1">AI Tools</span>
            {["Claude (Anthropic)", "GitHub Copilot", "Amazon Q"].map((tool) => (
              <span key={tool} className="px-3 py-1 rounded-full text-xs font-medium border border-[#0055cc]/30 dark:border-[#3b9eff]/30 text-[#0055cc] dark:text-[#3b9eff] bg-[#0055cc]/5 dark:bg-[#3b9eff]/5">
                {tool}
              </span>
            ))}
          </motion.div>
        </div>

        {/* What I Bring */}
        <div className="py-10">
          <motion.h3
            className="subhead-text dark:text-white"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            What I <span className="blue-gradient_text font-semibold">Bring</span>
          </motion.h3>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                icon: "sparkles-outline",
                title: "AI-Integrated Development",
                body: "I ship faster and smarter using Claude, GitHub Copilot, and Amazon Q — compressing multi-week processes into hours.",
              },
              {
                icon: "layers-outline",
                title: "Enterprise Scale",
                body: "6+ years building mission-critical UIs at ADP used by thousands of payroll and benefits customers daily.",
              },
              {
                icon: "code-slash-outline",
                title: "Full-Stack Ownership",
                body: "From React frontends to Node/Express APIs and MongoDB — I own the full delivery cycle end-to-end.",
              },
            ].map(({ icon, title, body }) => (
              <motion.div
                key={title}
                className="p-5 rounded-2xl border border-stone-200 dark:border-stone-700 bg-white/60 dark:bg-[#292524]/60 flex flex-col gap-3"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <ion-icon name={icon} style={{ fontSize: "1.75rem", color: "#0055cc" }} aria-hidden="true" />
                <h4 className="font-semibold text-slate-800 dark:text-white font-poppins">{title}</h4>
                <p className="text-sm text-slate-500 dark:text-gray-400 leading-relaxed">{body}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div id="experience" className="py-16">
          <motion.h3
            className="subhead-text dark:text-white"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Work <span className="blue-gradient_text font-semibold">Experience</span>
          </motion.h3>
          <motion.p
            className="mt-5 text-slate-500 dark:text-gray-200"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            I've worked with cross-functional teams across diverse locations (US, India, and Canada) to deliver
            solutions that empower businesses. Here's the rundown:
          </motion.p>
          <div className="mt-12 flex">
            <VerticalTimeline lineColor={theme === "dark" ? "#44403c" : "#dbe6f5"}>
              {experiences.map((experience) => {
                const accent = theme === "dark" ? "#3b9eff" : "#0055cc";
                const cardBg = theme === "dark" ? "#292524" : "#ffffff";
                return (
                <VerticalTimelineElement
                  key={experience.company_name}
                  date={experience.date}
                  dateClassName="dark:text-white"
                  icon={
                    <div className="flex justify-center items-center w-full h-full">
                      <img src={experience.icon} alt={experience.company_name} className="w-[90%] h-[90%] object-contain" />
                    </div>
                  }
                  iconStyle={{
                    background: "#ffffff",
                    boxShadow: `0 0 0 4px ${accent}, inset 0 1px 2px rgba(0,0,0,0.08)`,
                  }}
                  contentStyle={{
                    borderTop: `4px solid ${accent}`,
                    borderRadius: "10px",
                    boxShadow:
                      theme === "dark"
                        ? "0 4px 16px rgba(0,0,0,0.45)"
                        : "0 4px 16px rgba(0,85,204,0.12)",
                    background: cardBg,
                  }}
                  contentArrowStyle={{
                    borderRight: `7px solid ${cardBg}`,
                  }}
                >
                  <div>
                    <h3 className="text-black dark:text-white text-lg font-poppins font-semibold">
                      {experience.title}
                    </h3>
                    <p className="text-black-500 font-medium text-sm m-0 dark:text-slate-400">
                      {experience.company_name}
                    </p>
                  </div>
                  <ul className="my-4 list-disc ml-5 space-y-2">
                    {experience.points.map((point, index) => {
                      const isAward = point.startsWith("🏆");
                      return isAward ? (
                        <li key={`experience-point-${index}`} className="list-none -ml-5">
                          <span className="inline-block mt-1 px-3 py-2 rounded-lg bg-[#0055cc]/8 dark:bg-[#3b9eff]/10 border border-[#0055cc]/20 dark:border-[#3b9eff]/25 text-[#0044aa] dark:text-[#7ec8ff] font-medium text-xs leading-snug">
                            {point}
                          </span>
                        </li>
                      ) : (
                        <li className="text-black-500/70 dark:text-slate-400 font-normal text-sm" key={`experience-point-${index}`}>
                          {point}
                        </li>
                      );
                    })}
                  </ul>
                </VerticalTimelineElement>
                );
              })}
            </VerticalTimeline>
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <div className="w-full bg-stone-50/70 dark:bg-[#1a1816]/70">
      <section id="projects" className="max-w-5xl mx-auto px-6 sm:px-16 py-14 sm:py-24">
        <motion.h2
          className="head-text dark:text-white"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          My <span className="blue-gradient_text drop-shadow font-semibold">Projects</span>
        </motion.h2>
        <motion.p
          className="text-slate-500 mt-2 leading-relaxed dark:text-gray-200"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          I have worked on a number of personal projects over the years. A few are open source and
          available on my{" "}
          <a href="https://github.com/unmey08" className="text-[#0055cc] dark:text-[#3b9eff] hover:underline" target="_blank" rel="noopener noreferrer">
            Github
          </a>{" "}
          profile.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 my-12 sm:my-20 gap-10">
          {projects.map((project) => (
            <div className="w-full p-5 rounded-2xl border border-transparent hover:border-stone-200 dark:hover:border-stone-700 hover:shadow-md transition-all duration-300" key={project.name}>
              <motion.div
                className="block-container w-12 h-12"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className={`btn-back ${theme === "dark" ? "dark-mode-btn-back" : ""} rounded-xl ${project.theme}`} />
                <div className="btn-front rounded-xl flex justify-center items-center">
                  <img src={project.iconUrl} alt={project.name} loading="lazy" className="w-1/2 h-1/2 object-contain" />
                </div>
              </motion.div>
              <motion.div
                className="mt-5 flex flex-col"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Link to={project.link} target="_blank" rel="noopener noreferrer">
                  <h4 className="text-2xl font-poppins font-semibold text-[#0055cc] dark:text-[#3b9eff] hover:underline">
                    {project.name}
                  </h4>
                </Link>
                <p className="mt-2 text-slate-500 dark:text-gray-200">{project.description}</p>
                {project.tech && (
                  <p className="mt-2 text-xs text-slate-400 dark:text-slate-500 font-mono">{project.tech}</p>
                )}
                <div className="mt-5 flex justify-between items-center gap-2 font-poppins">
                  {project.link !== project.githubLink ? (
                    <div className="flex items-center gap-2">
                      <Link to={project.link} target="_blank" rel="noopener noreferrer" className="font-semibold text-[#0055cc] dark:text-[#3b9eff]">
                        Live Link
                      </Link>
                      <img src={arrow} alt="" className="w-4 h-4 object-contain" />
                    </div>
                  ) : (
                    <span />
                  )}
                  <div className="flex items-center gap-2">
                    <Link to={project.githubLink} target="_blank" rel="noopener noreferrer" className="font-semibold text-[#0055cc] dark:text-[#3b9eff]">
                      {project.link !== project.githubLink ? "GitHub Link" : "View Code"}
                    </Link>
                    <img src={arrow} alt="" className="w-4 h-4 object-contain" />
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </section>
      </div>

      {/* ── CONTACT ── */}
      <section id="contact" className="max-w-5xl mx-auto px-6 sm:px-16 py-14 sm:py-24 relative flex flex-col items-center">
        {alert.show && <Alert {...alert} />}
        <motion.h2
          className="head-text dark:text-white text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Let's Work <span className="blue-gradient_text font-semibold">Together</span>
        </motion.h2>
        <motion.p
          className="mt-4 text-slate-500 dark:text-gray-400 text-center max-w-md"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Whether it's a role, a collaboration, or just a conversation — I'd love to hear from you.
        </motion.p>
        <motion.a
          href="https://www.linkedin.com/in/unmey"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 flex items-center gap-2 px-5 py-2.5 rounded-full border border-sky-500/40 text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-900/20 hover:bg-sky-100 dark:hover:bg-sky-900/40 transition-colors text-sm font-semibold"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <ion-icon name="logo-linkedin" style={{ fontSize: "1.1rem" }} aria-hidden="true" />
          Connect on LinkedIn
        </motion.a>

        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          className="w-full max-w-xl mx-auto flex flex-col gap-7 mt-14"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <label className="text-black-500 dark:text-slate-400 font-semibold">
            Name <span aria-hidden="true">*</span>
            <input
              type="text"
              name="name"
              className={theme === "dark" ? "dark-input" : "input"}
              placeholder="John"
              required
              value={form.name}
              onChange={handleChange}
            />
          </label>
          <label className="text-black-500 dark:text-slate-400 font-semibold">
            Email <span aria-hidden="true">*</span>
            <input
              type="email"
              name="email"
              className={theme === "dark" ? "dark-input" : "input"}
              placeholder="john@gmail.com"
              required
              value={form.email}
              onChange={handleChange}
            />
          </label>
          <label className="text-black-500 dark:text-slate-400 font-semibold">
            Your Message
            <textarea
              name="message"
              rows="4"
              className={theme === "dark" ? "dark-textarea" : "textarea"}
              placeholder="Write your thoughts here..."
              value={form.message}
              onChange={handleChange}
            />
          </label>
          <button type="submit" disabled={loading} className="btn w-fit self-center">
            {loading ? "Sending..." : "Submit"}
          </button>
        </motion.form>

        <motion.div
          className="text-center text-black-500 dark:text-slate-400 mt-10"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="text-xl font-bold">OR</p>
          <p className="mt-3">
            Reach me at{" "}
            <a href="mailto:unmey08@gmail.com" className="text-[#0055cc] dark:text-[#3b9eff] hover:underline">
              unmey08@gmail.com
            </a>
          </p>
        </motion.div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="max-w-5xl mx-auto px-6 sm:px-16 py-8 pb-20 sm:pb-8 border-t border-sky-200 dark:border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-slate-400 dark:text-slate-500 text-sm">
          © {new Date().getFullYear()} Unmey Mahaddalkar · Built with React & Tailwind
        </p>
        <a
          href="https://github.com/unmey08"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-400 dark:text-slate-500 hover:text-[#0055cc] dark:hover:text-[#3b9eff] transition-colors text-xl"
          aria-label="GitHub profile"
        >
          <ion-icon name="logo-github" aria-hidden="true"></ion-icon>
        </a>
      </footer>
    </div>
  );
};

export default SinglePage;
