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
      <MetaTagComponent content="Unmey Mahaddalkar — Full-Stack Engineer based in Vancouver, BC. React, TypeScript, Next.js, Node.js. Canadian PR, available July 1st." />

      {/* ── HERO ── */}
      <section
        id="hero"
        className="relative flex w-full min-h-screen items-center justify-center px-8 sm:px-16"
      >
        <div className="hero-glyphs" aria-hidden="true">
          <span className="hero-glyph text-3xl" style={{ top: "16%", left: "12%", "--rot": "-8deg", "--dur": "6.5s", animationDelay: "0s" }}>&lt;/&gt;</span>
          <span className="hero-glyph text-4xl" style={{ top: "24%", right: "14%", "--rot": "6deg", "--dur": "8s", animationDelay: "1.2s" }}>{"{ }"}</span>
          <span className="hero-glyph text-2xl" style={{ top: "62%", left: "18%", "--rot": "5deg", "--dur": "7s", animationDelay: "2.1s" }}>( )</span>
          <span className="hero-glyph text-3xl" style={{ bottom: "18%", right: "18%", "--rot": "-6deg", "--dur": "9s", animationDelay: "0.6s" }}>=&gt;</span>
          <span className="hero-glyph text-xl" style={{ top: "40%", left: "7%", "--rot": "10deg", "--dur": "5.5s", animationDelay: "3s" }}>;</span>
          <span className="hero-glyph text-2xl" style={{ bottom: "28%", left: "40%", "--rot": "-10deg", "--dur": "8.5s", animationDelay: "1.8s" }}>[ ]</span>
          <span className="hero-glyph text-xl" style={{ top: "20%", left: "44%", "--rot": "8deg", "--dur": "6s", animationDelay: "2.6s" }}>//</span>
          <span className="hero-glyph text-2xl" style={{ top: "70%", right: "10%", "--rot": "7deg", "--dur": "7.5s", animationDelay: "0.9s" }}>&lt;/&gt;</span>
        </div>
        <div className="flex flex-col text-center items-center max-w-2xl w-full relative z-10">
          <motion.h1
            className="head-text dark:text-white"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.5, ease: "easeOut" } }}
          >
            Hello, I'm{" "}
            <span className="blue-gradient_text font-semibold">Unmey</span>
          </motion.h1>

          <motion.div
            className="mt-5 flex flex-col gap-3 text-slate-700 dark:text-gray-200"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1, transition: { delay: 0.4, duration: 0.5, ease: "easeOut" } }}
          >
            <p className="text-3xl blue-gradient_text font-bold min-h-[2.5rem]">
              <Typewriter
                phrases={[
                  "Full-Stack Engineer",
                  "React Developer",
                  "UI Engineer",
                ]}
              />
            </p>
            <p className="text-lg text-gray-600 dark:text-white/80 md:font-semibold sm:font-normal">
              React · TypeScript · Next.js · Node.js · Vancouver, BC
            </p>
            <p className="text-sm text-green-700 dark:text-green-400 font-semibold">
              🟢 Available July 1st · Canadian PR — no sponsorship needed
            </p>
          </motion.div>

          <motion.div
            className="flex mt-8 flex-row justify-center gap-4 flex-wrap"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.6, duration: 0.5, ease: "easeOut" } }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Link to={pdfFile} target="_blank" className="btn" download aria-label="Download CV">
                Download CV
              </Link>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <a href="#contact" className="btn-no-bg dark:btn-dark-bg">
                Contact
              </a>
            </motion.button>
          </motion.div>

          {/* Social links — mobile only (sidebar handles desktop) */}
          <motion.div
            className="flex flex-row text-4xl mt-8 space-x-6 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 1, duration: 0.4 } }}
          >
            {socialLinks.map((item) => (
              <Link
                key={item.name}
                className={`${theme === "dark" ? "text-white/80" : "text-slate-700"} ${item.className} transition ease-in`}
                target="_blank"
                to={item.link}
                aria-label={item.name}
              >
                <motion.div whileHover={{ scale: 1.2 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                  <ion-icon name={item.iconUrl}></ion-icon>
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </div>

        <motion.a
          href="#about"
          onClick={handleScrollToAbout}
          aria-label="Scroll to About"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 dark:text-slate-500 hover:text-[#0055cc] dark:hover:text-[#3b9eff] transition-colors"
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
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="max-w-5xl mx-auto px-6 sm:px-16 py-24">
        <motion.h2
          className="head-text dark:text-white"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <span className="blue-gradient_text drop-shadow font-semibold">About</span> Me
        </motion.h2>
        <p className="text-slate-500 dark:text-gray-400 mt-1 text-sm">Full-Stack Engineer · Vancouver, BC</p>

        <motion.div
          className="mt-5 flex flex-col gap-3 text-slate-700 dark:text-gray-200"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p>
            I'm a Full-Stack Engineer based in Vancouver, BC with ~6 years of experience shipping
            production-grade web applications in Agile teams across the US and India. I specialise in
            React, TypeScript, Next.js, Node.js and Redux — building everything from AI-powered chatbots
            to PDF annotation tools used by thousands of ADP customers.
          </p>
          <p className="mt-2 text-green-700 dark:text-green-400 font-semibold text-sm">
            🟢 Available July 1st · Canadian PR — no visa sponsorship needed
          </p>
        </motion.div>

        {/* Skills */}
        <div className="py-10 flex flex-col">
          <motion.h3
            className="subhead-text dark:text-white"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            My Skills
          </motion.h3>
          <div className="mt-10 flex flex-wrap gap-6 sm:gap-10 justify-center md:justify-start">
            {skills.map((skill, index) => (
              <Tooltip
                content={skill.name}
                animate={{ mount: { scale: 1, y: 0 }, unmount: { scale: 0, y: 25 } }}
                key={skill.name}
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
                    <img src={skill.imageUrl} alt={skill.name} className="w-1/2 h-1/2 object-contain" key={index} />
                  </div>
                </motion.div>
              </Tooltip>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div className="py-16">
          <motion.h3
            className="subhead-text dark:text-white"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Work Experience
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
                    background: cardBg,
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
                    <h3 className="text-black dark:text-white text-xl font-poppins font-semibold">
                      {experience.title}
                    </h3>
                    <p className="text-black-500 font-medium font-base m-0 dark:text-slate-400">
                      {experience.company_name}
                    </p>
                  </div>
                  <ul className="my-5 list-disc ml-5 space-y-2">
                    {experience.points.map((point, index) => (
                      <li className="text-black-500/70 dark:text-slate-400 font-normal" key={`experience-point-${index}`}>
                        {point}
                      </li>
                    ))}
                  </ul>
                </VerticalTimelineElement>
                );
              })}
            </VerticalTimeline>
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects" className="max-w-5xl mx-auto px-6 sm:px-16 py-24">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 my-20 gap-10">
          {projects.map((project) => (
            <div className="w-full" key={project.name}>
              <motion.div
                className="block-container w-12 h-12"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className={`btn-back ${theme === "dark" ? "dark-mode-btn-back" : ""} rounded-xl ${project.theme}`} />
                <div className="btn-front rounded-xl flex justify-center items-center">
                  <img src={project.iconUrl} alt={project.name} className="w-1/2 h-1/2 object-contain" />
                </div>
              </motion.div>
              <motion.div
                className="mt-5 flex flex-col"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Link to={project.link} target="_blank">
                  <h4 className="text-2xl font-poppins font-semibold text-[#0055cc] dark:text-[#3b9eff] hover:underline">
                    {project.name}
                  </h4>
                </Link>
                <p className="mt-2 text-slate-500 dark:text-gray-200">{project.description}</p>
                <div className="mt-5 flex justify-between items-center gap-2 font-poppins">
                  <div className="flex items-center gap-2">
                    <Link to={project.link} target="_blank" rel="noopener noreferrer" className="font-semibold text-[#0055cc] dark:text-[#3b9eff]">
                      Live Link
                    </Link>
                    <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
                  </div>
                  <div className="flex items-center gap-2">
                    <Link to={project.githubLink} target="_blank" rel="noopener noreferrer" className="font-semibold text-[#0055cc] dark:text-[#3b9eff]">
                      GitHub Link
                    </Link>
                    <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="max-w-5xl mx-auto px-6 sm:px-16 py-24 relative flex flex-col items-center">
        {alert.show && <Alert {...alert} />}
        <motion.h2
          className="head-text dark:text-white text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Get in <span className="blue-gradient_text font-semibold">Touch</span>
        </motion.h2>

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
            Name <span>*</span>
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
            Email <span>*</span>
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
      <footer className="max-w-5xl mx-auto px-6 sm:px-16 py-8 border-t border-sky-200 dark:border-slate-700">
        <p className="text-center text-slate-400 dark:text-slate-500 text-sm">
          © {new Date().getFullYear()} Unmey Mahaddalkar · Built with React & Tailwind
        </p>
      </footer>
    </div>
  );
};

export default SinglePage;
