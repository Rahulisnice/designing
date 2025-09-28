import {
  Github,
  Linkedin,
  Mail,
  Rocket,
  Award,
  Briefcase,
  Code2,
  Download,
  Calendar,
  Star,
  ExternalLink,
  Heart,
  Coffee,
  Zap,
} from "lucide-react";
import { useEffect, useState, useRef } from "react";
import phoyo from "../src/assets/phoyo.jpeg";
import bootcamp from "../src/assets/bootcamp.jpg";
import webitup from "../src/assets/webitup.jpg";
import react from "../src/assets/react.jpg";
import Rahul from "../src/assets/Rahul.jpg";
import resume from "../src/assets/resume.jpg";
import Generatedgreenunscreen from "../src/assets/Generatedgreenunscreen.gif";
import anotherdragon from "../src/assets/anotherdragon.gif";

const HomeContent = () => {
  const skills = [
    "MongoDB",
    "Firebase",
    "React",
    "Node.js",
    "Javascript",
    "Express",
    "Cloudinary",
    "Multer",
    "Tailwind CSS",
    "HTML",
    "Bcrypt",
    "CSS",
    "Git",
    "EJS",
    "OpenAI",
    "Image Kit",
    "GitHub",
    "Stripe",
    "Bootstrap",
  ];

  const achievements = [
    "🏆 Runner up at WebItUp 2024 (Web Development Competition) ",
    "🌟 Top 15 Selection at Dotslash Hackathon among 565 teams, Mohali, Chandigarh",
    "🚀 Selected in IDE-Bootcamp among 5000 teams, Mathura (organized by MoE)",
    "🎯 Mentored juniors in full-stack development.",
  ];

  const projectsTimeline = [
    {
      year: "2025",
      title: "Bheema",
      description:
        "Bheem is an AI-powered virtual Agent that listens, understands, and responds to your voice commands in real time.",
      status: "Practice",
      tech: ["React", "Node.js", "MongoDB", "Cloudinary", "OpenAI"],
    },
    {
      year: "2025",
      title: "Quick-gpt",
      description:
        "An AI assistant that generate Images, solve problem, and maintain community ",
      status: "Practice",
      tech: ["React", "Node.js", "MongoDB", "Stripe", "OpenAI"],
    },
    {
      year: "2025",
      title: "Portfolio",
      description:
        "Modern designed Portfolio with various animations and responsive designs",
      status: "Professional",
      tech: ["toastify", "lucide", "framer-motion", "React", "Animation"],
    },
    {
      year: "2024",
      title: "Food Donation",
      description:
        "Real-time updating donation platform that bridges gap between society",
      status: "Hackathon",
      tech: ["EJS", "Firebase", "Node.js", "Express"],
    },
    {
      year: "2024",
      title: "Task Handler",
      description:
        "Store and Manage the task that will be no longer remembered due to your age",
      status: "Practice",
      tech: ["Express", "React", "Tailwindcss", "MongoDB"],
    },
  ];

  // State for animations
  const [activeSkill, setActiveSkill] = useState(0);
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [animatedAchievements, setAnimatedAchievements] = useState([]);
  const [animatedCerts, setAnimatedCerts] = useState([]);
  const [animatedExperience, setAnimatedExperience] = useState([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Refs for sections
  const aboutRef = useRef();
  const skillsRef = useRef();
  const certificatesRef = useRef();
  const achievementsRef = useRef();
  const experienceRef = useRef();
  const projectsRef = useRef();

  // Mouse tracking for parallax effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionName = entry.target.dataset.section;
            setVisibleSections((prev) => new Set([...prev, sectionName]));

            // Trigger specific animations based on section
            switch (sectionName) {
              case "certificates":
                setTimeout(() => setAnimatedCerts([0]), 200);
                setTimeout(() => setAnimatedCerts([0, 1]), 600);
                setTimeout(() => setAnimatedCerts([0, 1, 2]), 1000);
                setTimeout(() => setAnimatedCerts([0, 1, 2, 3]), 1400);
                break;
              case "achievements":
                achievements.forEach((_, index) => {
                  setTimeout(() => {
                    setAnimatedAchievements((prev) => [...prev, index]);
                  }, index * 300);
                });
                break;
              case "experience":
                setTimeout(() => setAnimatedExperience([0]), 300);
                setTimeout(() => setAnimatedExperience([0, 1]), 700);
                break;
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    const refs = [
      aboutRef,
      skillsRef,
      certificatesRef,
      achievementsRef,
      experienceRef,
      projectsRef,
    ];
    refs.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, [achievements.length]);

  // Skills animation
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSkill((prev) => (prev + 1) % skills.length);
    }, 800);
    return () => clearInterval(interval);
  }, [skills.length]);

  return (
    <>
      <style>
        {`
          @keyframes slideInLeft {
            from {
              opacity: 0;
              transform: translateX(-100px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          
          @keyframes slideInRight {
            from {
              opacity: 0;
              transform: translateX(100px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          
          @keyframes slideInUp {
            from {
              opacity: 0;
              transform: translateY(80px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes popIn {
            0% {
              opacity: 0;
              transform: scale(0.5) rotate(-10deg);
            }
            70% {
              transform: scale(1.1) rotate(2deg);
            }
            100% {
              opacity: 1;
              transform: scale(1) rotate(0deg);
            }
          }
          
          @keyframes bounceIn {
            0% {
              opacity: 0;
              transform: scale(0.3);
            }
            50% {
              opacity: 1;
              transform: scale(1.05);
            }
            70% {
              transform: scale(0.9);
            }
            100% {
              opacity: 1;
              transform: scale(1);
            }
          }
          
          @keyframes fadeInRotate {
            from {
              opacity: 0;
              transform: rotate(-180deg) scale(0.5);
            }
            to {
              opacity: 1;
              transform: rotate(0deg) scale(1);
            }
          }

          @keyframes float {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-20px);
            }
          }

          @keyframes floatReverse {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(20px);
            }
          }

          @keyframes glowPulse {
            0%, 100% {
              box-shadow: 0 0 20px rgba(168, 85, 247, 0.3);
            }
            50% {
              box-shadow: 0 0 40px rgba(168, 85, 247, 0.8), 0 0 60px rgba(168, 85, 247, 0.4);
            }
          }
            
          @keyframes textGlow {
            0%, 100% {
              text-shadow: 0 0 10px rgba(168, 85, 247, 0.5);
            }
            50% {
              text-shadow: 0 0 20px rgba(168, 85, 247, 0.8), 0 0 30px rgba(219, 39, 119, 0.6);
            }
          }

          @keyframes morphBackground {
            0%, 100% {
              border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
            }
            50% {
              border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
            }
          }

          @keyframes slideInUpStagger {
            from {
              opacity: 0;
              transform: translateY(50px) scale(0.9);
            }
            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }

          @keyframes rotateIn {
            from {
              opacity: 0;
              transform: rotate(-45deg) scale(0.8);
            }
            to {
              opacity: 1;
              transform: rotate(0deg) scale(1);
            }
          }

          @keyframes heartbeat {
            0%, 100% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.1);
            }
          }

          @keyframes shimmer {
            0% {
              background-position: -1000px 0;
            }
            100% {
              background-position: 1000px 0;
            }
          }

          /* Animation Classes */
          .slide-in-left {
            animation: slideInLeft 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          }

          .slide-in-right {
            animation: slideInRight 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          }

          .slide-in-up {
            animation: slideInUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          }

          .pop-in {
            animation: popIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
          }

          .bounce-in {
            animation: bounceIn 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
          }

          .fade-in-rotate {
            animation: fadeInRotate 1s ease-out forwards;
          }

          .float-animation {
            animation: float 6s ease-in-out infinite;
          }

          .float-reverse {
            animation: floatReverse 4s ease-in-out infinite;
          }

          .glow-pulse {
            animation: glowPulse 2s ease-in-out infinite;
          }

          .text-glow {
            animation: textGlow 3s ease-in-out infinite;
          }

          .morph-bg {
            animation: morphBackground 8s ease-in-out infinite;
          }

          .slide-up-stagger {
            animation: slideInUpStagger 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          }

          .rotate-in {
            animation: rotateIn 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          }

          .heartbeat {
            animation: heartbeat 2s ease-in-out infinite;
          }

          .shimmer {
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
            background-size: 1000px 100%;
            animation: shimmer 3s infinite;
          }

          /* Parallax and 3D effects */
          .parallax-light {
            transform: translateZ(0);
            will-change: transform;
          }

          .hover-3d {
            transition: transform 0.3s ease;
          }

          .hover-3d:hover {
            transform: perspective(1000px) rotateX(10deg) rotateY(10deg) scale(1.05);
          }

          /* Scroll-triggered animations with delays */
          .slide-in-left[style*="animation-delay"] {
            animation-fill-mode: both;
          }

          .slide-in-right[style*="animation-delay"] {
            animation-fill-mode: both;
          }

          .slide-in-up[style*="animation-delay"] {
            animation-fill-mode: both;
          }

          .bounce-in[style*="animation-delay"] {
            animation-fill-mode: both;
          }

          .pop-in[style*="animation-delay"] {
            animation-fill-mode: both;
          }

          /* Custom gradient animations */
          .gradient-animation {
            background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
            background-size: 400% 400%;
            animation: gradientShift 4s ease infinite;
          }

          @keyframes gradientShift {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }

          /* Mobile responsiveness for animations */
          @media (prefers-reduced-motion: reduce) {
            * {
              animation-duration: 0.01ms !important;
              animation-iteration-count: 1 !important;
              transition-duration: 0.01ms !important;
            }
          }
        `}
      </style>

      <div className="bg-gradient-to-br from-gray-950 via-black to-purple-950 text-white w-full relative overflow-hidden">
        {/* Enhanced Floating Background Effects with parallax */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute w-96 h-96 bg-purple-600/20 rounded-full blur-3xl -top-20 -left-20 float-animation morph-bg"
            style={{
              transform: `translate(${mousePosition.x * 0.02}px, ${
                mousePosition.y * 0.02
              }px)`,
            }}
          ></div>
          <div
            className="absolute w-80 h-80 bg-pink-600/20 rounded-full blur-3xl top-1/2 -right-20 float-reverse"
            style={{
              transform: `translate(${mousePosition.x * -0.01}px, ${
                mousePosition.y * 0.03
              }px)`,
            }}
          ></div>
          <div
            className="absolute w-64 h-64 bg-blue-600/20 rounded-full blur-3xl bottom-20 left-1/3 float-animation"
            style={{
              transform: `translate(${mousePosition.x * 0.015}px, ${
                mousePosition.y * -0.02
              }px)`,
            }}
          ></div>
        </div>
        {/* 🐉 Floating Dragon in Background */}{" "}
        <img
          src={Generatedgreenunscreen}
          alt="Green Dragon"
          className="absolute w-150 h-150 top-0 left-0 z-0 pointer-events-none animate-dragon"
        />{" "}
        <img
          src={anotherdragon}
          alt="Green Dragon"
          className="absolute w-150 h-150 top-4 left-4 z-4 pointer-events-none animate-dragoni"
        />
        {/* Enhanced Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative z-10">
          <h1 className="text-6xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 text-glow slide-in-up">
            Rahul Yadav
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-2xl">
            🚀 Full Stack Developer | Building scalable apps with MERN, Firebase
            & React | Exploring AI integrations
          </p>
          <div className="mt-8 flex gap-6">
            <a
              href="https://www.linkedin.com/in/rahul-yadav-564199260/"
              className="hover:text-purple-400 transition-all duration-300 hover:scale-125 hover-3d"
            >
              <Github size={32} className="heartbeat" />
            </a>
            <a
              href="https://github.com/Rahulisnice"
              className="hover:text-purple-400 transition-all duration-300 hover:scale-125 hover-3d"
            >
              <Linkedin size={32} className="heartbeat" />
            </a>
            <a
              href="mailto:rahul271435@email.com"
              className="hover:text-purple-400 transition-all duration-300 hover:scale-125 hover-3d"
            >
              <Mail size={32} className="heartbeat" />
            </a>
          </div>
          <div className="absolute bottom-8 text-gray-400 float-animation">
            <Rocket
              size={36}
              className="rotate-in"
              style={{ animationDelay: "1s" }}
            />
          </div>
        </section>
        {/* Enhanced About Section */}
        <section
          ref={aboutRef}
          data-section="about"
          className="px-4 sm:px-6 md:px-10 py-12 sm:py-16 md:py-20 relative z-10"
        >
          <div className="mx-auto flex flex-col lg:flex-row items-center gap-8 sm:gap-10 lg:gap-12 max-w-7xl">
            {/* Left - Enhanced Profile Image */}
            <div
              className={`relative order-1 lg:order-1 flex-shrink-0 ${
                visibleSections.has("about") ? "slide-in-left" : "opacity-0"
              }`}
            >
              <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-full flex items-center justify-center border-4 border-purple-500/30 backdrop-blur-sm mx-auto hover-3d">
                <img
                  className="w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 rounded-full object-cover"
                  src={phoyo}
                  alt="Profile"
                />
              </div>
            </div>

            {/* Center - Enhanced About Details */}
            <div
              className={`flex-1 space-y-4 sm:space-y-6 order-2 lg:order-2 text-center lg:text-left ${
                visibleSections.has("about") ? "slide-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: "0.3s" }}
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                About Me
              </h2>

              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Hey there! 👋 I'm a passionate{" "}
                <span className="text-purple-400 font-semibold">
                  Full Stack Developer
                </span>{" "}
                who loves turning ideas into reality through code.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-2xl mx-auto lg:mx-0">
                {[
                  {
                    icon: Code2,
                    title: "MERN Stack Expert",
                    subtitle: "Full-Stack Development",
                  },
                  {
                    icon: Coffee,
                    title: "Coffee Powered",
                    subtitle: "24/7 Coding Energy",
                  },
                  {
                    icon: Zap,
                    title: "Innovative Ideas",
                    subtitle: "Tech Ideas Enthusiast",
                  },
                  {
                    icon: Heart,
                    title: "Impact Focused",
                    subtitle: "Building for Tomorrow",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-3 group justify-center lg:justify-start hover-3d ${
                      visibleSections.has("about") ? "bounce-in" : "opacity-0"
                    }`}
                    style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-600/20 rounded-full flex items-center justify-center group-hover:bg-purple-600/30 transition-all duration-300 backdrop-blur-sm flex-shrink-0 glow-pulse">
                      <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400 float-animation" />
                    </div>
                    <div className="text-left">
                      <p className="text-purple-300 font-medium text-sm sm:text-base">
                        {item.title}
                      </p>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
                I thrive on building scalable, user-friendly applications that
                make a difference. Always ready for the next challenge! 🚀
              </p>
            </div>

            {/* Right - Enhanced Resume Download */}
            <div
              className={`text-center order-3 lg:order-3 flex-shrink-0 lg:pr-10 ${
                visibleSections.has("about") ? "slide-in-right" : "opacity-0"
              }`}
              style={{ animationDelay: "0.5s" }}
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                My Resume
              </h3>
              <p className="text-muted-foreground mb-4 sm:mb-6 max-w-xs mx-auto text-sm sm:text-base">
                Get a comprehensive overview of my skills and experience.
              </p>
              <button
                className="relative overflow-hidden  px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold flex items-center gap-2 sm:gap-3 mx-auto transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30 group text-sm sm:text-base text-white hover-3d shimmer"
                onClick={() => window.open(`${resume}`, "_blank")}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out"></div>
                <Download
                  size={18}
                  className="relative z-10 sm:w-5 sm:h-5 heartbeat"
                />
                <span className="relative z-10">Download Resume</span>
              </button>
            </div>
          </div>
        </section>
        {/* Enhanced Skills with better sequential glow */}
        <section
          ref={skillsRef}
          data-section="skills"
          className="px-10 py-20 text-center relative z-10"
        >
          <h2
            className={`text-3xl font-bold mb-10 border-b border-purple-600 pb-2 inline-block bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent ${
              visibleSections.has("skills") ? "slide-in-up" : "opacity-0"
            }`}
          >
            Skills & Tech Stack
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, idx) => (
              <span
                key={skill}
                className={`px-5 py-3 rounded-full border text-sm font-medium transition-all duration-500 hover-3d ${
                  activeSkill === idx
                    ? "bg-purple-600 border-purple-400 text-white shadow-[0_0_20px_rgba(168,85,247,0.9)] scale-110 gradient-animation"
                    : "bg-gray-900/70 border-purple-500 text-gray-300 hover:border-purple-400 hover:text-purple-300 hover:scale-105"
                } ${visibleSections.has("skills") ? "bounce-in" : "opacity-0"}`}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
        {/* Enhanced Projects Timeline */}
        <section
          ref={projectsRef}
          data-section="projects"
          className="px-10 py-20 bg-black/30 relative z-10"
        >
          <h2
            className={`text-3xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent ${
              visibleSections.has("projects") ? "slide-in-up" : "opacity-0"
            }`}
          >
            Projects Journey & Timeline
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500 "></div>

              {projectsTimeline.map((project, index) => (
                <div
                  key={index}
                  className={`relative flex gap-8 mb-12 group hover-3d ${
                    visibleSections.has("projects")
                      ? "slide-in-left"
                      : "opacity-0"
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-purple-500/50 transition-all duration-300 group-hover:scale-110 glow-pulse morph-bg">
                      <Calendar className="w-6 h-6 text-white " />
                    </div>
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-purple-900/80 px-3 py-1 rounded-full text-sm font-bold text-purple-200 border border-purple-500/50 shimmer">
                      {project.year}
                    </div>
                  </div>

                  <div className="flex-1 bg-gradient-to-br from-gray-900/80 to-gray-800/80 p-6 rounded-2xl border border-purple-500/30 backdrop-blur-sm hover:border-purple-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 hover:-translate-y-2 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 shimmer"></div>

                    <div className="flex justify-between items-start mb-4 relative z-10">
                      <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex gap-2">
                        <span className="px-3 py-1 bg-purple-600/30 text-purple-300 rounded-full text-xs font-medium border border-purple-500/50 ">
                          {project.status}
                        </span>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-4 leading-relaxed relative z-10">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 relative z-10">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-800/60 text-gray-300 rounded-full text-xs border border-gray-600 hover:border-purple-500 hover:text-purple-300 transition-all duration-300 hover:scale-105 hover-3d"
                          style={{ animationDelay: `${techIndex * 0.1}s` }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Enhanced Certificates Gallery */}
        <section
          ref={certificatesRef}
          data-section="certificates"
          className="px-10 py-20 relative z-10"
        >
          <h2
            className={`text-3xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent ${
              visibleSections.has("certificates") ? "slide-in-up" : "opacity-0"
            }`}
          >
            Certifications & Achievements
          </h2>
          <div className="max-w-8xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {[
                { image: bootcamp },
                { image: Rahul },
                { image: react },
                { image: webitup },
              ].map((cert, idx) => (
                <div
                  key={idx}
                  className={`group relative bg-gradient-to-br from-gray-900/60 to-gray-800/60 p-2 rounded-2xl border border-purple-500/30 backdrop-blur-sm hover:border-purple-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/30 hover:-translate-y-2 hover-3d overflow-hidden ${
                    animatedCerts.includes(idx) ? "pop-in" : "opacity-0"
                  }`}
                >
                  <img
                    src={cert.image}
                    alt={`Certificate ${idx}`}
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Enhanced Experience */}
        <section
          ref={experienceRef}
          data-section="experience"
          className="px-10 py-20 bg-black/30 relative z-10"
        >
          <h2
            className={`text-3xl font-bold mb-10 text-center bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent ${
              visibleSections.has("experience") ? "slide-in-up" : "opacity-0"
            }`}
          >
            Professional Experience
          </h2>
          <ol className="relative border-l border-purple-500 pl-6 space-y-8 max-w-3xl mx-auto glow-pulse">
            {[
              {
                title: "Internship at Maruti Suzuki India Limited",
                position: "App Developer • 2024",
                description:
                  "Worked with the Professional development team. Exposure to many tools and improved system performance by 40%.",
                icon: Briefcase,
              },
              {
                title: "Project Development",
                position: "Full Stack Developer • 2023 - Present",
                description:
                  "Created custom websites and web applications. Delivered 5+ projects with 100% audience satisfaction rate.",
                icon: Code2,
              },
            ].map((exp, index) => (
              <li key={index} className="relative hover-3d">
                <span
                  className={`absolute -left-4 w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center shadow-lg glow-pulse morph-bg ${
                    animatedExperience.includes(index)
                      ? "bounce-in"
                      : "opacity-0"
                  }`}
                >
                  <exp.icon className="w-4 h-4 text-white float-animation" />
                </span>
                <div
                  className={`bg-gradient-to-br from-gray-900/60 to-gray-800/60 p-6 rounded-xl border border-purple-500/30 backdrop-blur-sm hover:border-purple-400/50 transition-all duration-300 relative overflow-hidden ${
                    animatedExperience.includes(index)
                      ? "slide-in-right"
                      : "opacity-0"
                  }`}
                  style={{ animationDelay: `${index * 0.3}s` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 shimmer"></div>

                  <h3 className="text-xl font-bold text-white mb-2 relative z-10">
                    {exp.title}
                  </h3>
                  <p className="text-purple-300 mb-3 relative z-10">
                    {exp.position}
                  </p>
                  <p className="text-gray-300 leading-relaxed relative z-10">
                    {exp.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>
        {/* Enhanced Achievements */}
        <section
          ref={achievementsRef}
          data-section="achievements"
          className="px-10 py-20 text-center relative z-10"
        >
          <h2
            className={`text-3xl font-bold mb-10 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent ${
              visibleSections.has("achievements") ? "slide-in-up" : "opacity-0"
            }`}
          >
            Key Achievements
          </h2>
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {achievements.map((item, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br from-gray-900/70 to-gray-800/70 p-6 rounded-xl border border-purple-600/30 shadow-md hover:shadow-lg hover:shadow-purple-500/20 hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm hover-3d relative overflow-hidden ${
                  animatedAchievements.includes(index) ? "pop-in" : "opacity-0"
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 shimmer"></div>

                <Award className="w-8 h-8 text-purple-400 mb-3 mx-auto fade-in-rotate float-animation relative z-10" />
                <p className="text-gray-300 leading-relaxed relative z-10">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default HomeContent;
