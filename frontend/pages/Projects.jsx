import { useState, useEffect, useRef } from "react";
import {
  ExternalLink,
  Github,
  ChevronRight,
  X,
  Calendar,
  Users,
  Star,
} from "lucide-react";

// Import project images
import portfolio from "../src/assets/portfolio.png";
import chitchat from "../src/assets/chitchat.png";
import mealbridge from "../src/assets/mealbridge.png";
import taskhandler from "../src/assets/taskhandler.png";

// Inline styles for standalone usage
const projectStyles = `
  :root {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    --card: 222.2 84% 4.9%;
    --card-foreground: 210 40% 98%;
    --popover: 222.2 84% 4.9%;
    --popover-foreground: 210 40% 98%;
    --primary: 262 83% 58%;
    --primary-foreground: 210 40% 98%;
    --secondary: 217.2 32.6% 17.5%;
    --secondary-foreground: 210 40% 98%;
    --muted: 217.2 32.6% 17.5%;
    --muted-foreground: 215 20.2% 65.1%;
    --accent: 262 83% 58%;
    --accent-foreground: 210 40% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 210 40% 98%;
    --border: 217.2 32.6% 17.5%;
    --input: 217.2 32.6% 17.5%;
    --ring: 262 83% 58%;
    --glass: 222.2 84% 4.9% / 0.7;
    --glass-border: 217.2 32.6% 17.5% / 0.5;
    --gradient-primary: linear-gradient(135deg, hsl(262 83% 58%), hsl(262 83% 68%));
    --gradient-dark: linear-gradient(135deg, hsl(222.2 84% 4.9%), hsl(217.2 32.6% 17.5%));
    --gradient-glow: linear-gradient(135deg, hsl(262 83% 58% / 0.3), hsl(262 83% 68% / 0.1));
    --shadow-card: 0 10px 30px -10px hsl(262 83% 58% / 0.3);
    --shadow-glow: 0 0 40px hsl(262 83% 58% / 0.4);
  }

  .bg-background { background-color: hsl(var(--background)); }
  .bg-foreground { background-color: hsl(var(--foreground)); }
  .bg-card { background-color: hsl(var(--card)); }
  .bg-primary { background-color: hsl(var(--primary)); }
  .bg-secondary { background-color: hsl(var(--secondary)); }
  .bg-muted { background-color: hsl(var(--muted)); }
  .bg-accent { background-color: hsl(var(--accent)); }
  .bg-glass { background-color: hsl(var(--glass)); }
  .bg-primary\\/20 { background-color: hsl(var(--primary) / 0.2); }
  .bg-primary\\/90 { background-color: hsl(var(--primary) / 0.9); }
  .bg-background\\/80 { background-color: hsl(var(--background) / 0.8); }
  .bg-background\\/90 { background-color: hsl(var(--background) / 0.9); }

  .text-foreground { color: hsl(var(--foreground)); }
  .text-primary { color: hsl(var(--primary)); }
  .text-primary-foreground { color: hsl(var(--primary-foreground)); }
  .text-muted-foreground { color: hsl(var(--muted-foreground)); }
  .text-card-foreground { color: hsl(var(--card-foreground)); }

  .border { border-width: 1px; }
  .border-border { border-color: hsl(var(--border)); }
  .border-glass-border { border-color: hsl(var(--glass-border)); }
  .border-primary\\/50 { border-color: hsl(var(--primary) / 0.5); }

  .bg-gradient-primary { background-image: var(--gradient-primary); }
  .bg-gradient-dark { background-image: var(--gradient-dark); }
  .bg-gradient-glow { background-image: var(--gradient-glow); }
  .bg-gradient-to-t { background-image: linear-gradient(to top, var(--tw-gradient-stops)); }
  .bg-gradient-to-b { background-image: linear-gradient(to bottom, var(--tw-gradient-stops)); }
  
  .from-transparent { --tw-gradient-from: transparent var(--tw-gradient-from-position); --tw-gradient-to: transparent var(--tw-gradient-to-position); --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to); }
  .from-background\\/90 { --tw-gradient-from: hsl(var(--background) / 0.9) var(--tw-gradient-from-position); --tw-gradient-to: hsl(var(--background) / 0) var(--tw-gradient-to-position); --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to); }
  .via-transparent { --tw-gradient-to: transparent var(--tw-gradient-to-position); --tw-gradient-stops: var(--tw-gradient-from), transparent var(--tw-gradient-via-position), var(--tw-gradient-to); }
  .via-primary\\/50 { --tw-gradient-to: hsl(var(--primary) / 0) var(--tw-gradient-to-position); --tw-gradient-stops: var(--tw-gradient-from), hsl(var(--primary) / 0.5) var(--tw-gradient-via-position), var(--tw-gradient-to); }
  .to-transparent { --tw-gradient-to: transparent var(--tw-gradient-to-position); }
  .to-primary\\/20 { --tw-gradient-to: hsl(var(--primary) / 0.2) var(--tw-gradient-to-position); }

  .bg-clip-text { background-clip: text; }
  .text-transparent { color: transparent; }

  .shadow-card { box-shadow: var(--shadow-card); }
  .shadow-glow { box-shadow: var(--shadow-glow); }

  .backdrop-blur-sm { backdrop-filter: blur(4px); }

  @keyframes fade-in {
    0% { opacity: 0; transform: translateY(20px); }
    100% { opacity: 1; transform: translateY(0); }
  }

  @keyframes slide-right {
    0% { opacity: 0; transform: translateX(-100px); }
    100% { opacity: 1; transform: translateX(0); }
  }

  @keyframes slide-left {
    0% { opacity: 0; transform: translateX(100px); }
    100% { opacity: 1; transform: translateX(0); }
  }

  @keyframes glow-pulse {
    0%, 100% { opacity: 0.5; }
    50% { opacity: 0.8; }
  }

  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-5px); }
  }

  @keyframes scale-in {
    0% { transform: scale(0.95); opacity: 0; }
    100% { transform: scale(1); opacity: 1; }
  }

  .animate-fade-in { animation: fade-in 0.6s ease-out; }
  .animate-slide-right { animation: slide-right 0.8s ease-out; }
  .animate-slide-left { animation: slide-left 0.8s ease-out; }
  .animate-glow-pulse { animation: glow-pulse 3s ease-in-out infinite; }
  .animate-float { animation: float 3s ease-in-out infinite; }
  .animate-scale-in { animation: scale-in 0.3s ease-out; }

  .hover\\:scale-105:hover { transform: scale(1.05); }
  .hover\\:scale-110:hover { transform: scale(1.1); }
  .hover\\:bg-primary\\/20:hover { background-color: hsl(var(--primary) / 0.2); }
  .hover\\:border-primary\\/50:hover { border-color: hsl(var(--primary) / 0.5); }
  .hover\\:shadow-glow:hover { box-shadow: var(--shadow-glow); }
  .group-hover\\:scale-110:hover { transform: scale(1.1); }
  .group-hover\\:opacity-20:hover { opacity: 0.2; }
  .group-hover\\:translate-x-1:hover { transform: translateX(0.25rem); }

  .transition-all { transition-property: all; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms; }
  .transition-transform { transition-property: transform; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms; }
  .transition-opacity { transition-property: opacity; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms; }
  .duration-150 { transition-duration: 150ms; }
  .duration-300 { transition-duration: 300ms; }
  .duration-500 { transition-duration: 500ms; }
  .duration-700 { transition-duration: 700ms; }
  .duration-1000 { transition-duration: 1000ms; }

  .fixed { position: fixed; }
  .absolute { position: absolute; }
  .relative { position: relative; }
  .inset-0 { inset: 0px; }
  .top-4 { top: 1rem; }
  .right-4 { right: 1rem; }
  .left-1\\/2 { left: 50%; }
  .top-20 { top: 5rem; }
  .left-10 { left: 2.5rem; }
  .bottom-20 { bottom: 5rem; }
  .right-10 { right: 2.5rem; }
  .-top-16 { top: -4rem; }
  .-z-10 { z-index: -10; }
  .z-10 { z-index: 10; }
  .z-50 { z-index: 50; }

  .flex { display: flex; }
  .inline-block { display: inline-block; }
  .w-full { width: 100%; }
  .w-px { width: 1px; }
  .w-4 { width: 1rem; }
  .w-5 { width: 1.25rem; }
  .w-20 { width: 5rem; }
  .w-32 { width: 8rem; }
  .w-72 { width: 18rem; }
  .w-96 { width: 24rem; }
  .h-1 { height: 0.25rem; }
  .h-4 { height: 1rem; }
  .h-5 { height: 1.25rem; }
  .h-16 { height: 4rem; }
  .h-20 { height: 5rem; }
  .h-64 { height: 16rem; }
  .h-72 { height: 18rem; }
  .h-96 { height: 24rem; }
  .max-w-2xl { max-width: 42rem; }
  .max-w-4xl { max-width: 56rem; }
  .max-w-6xl { max-width: 72rem; }
  .max-h-\\[90vh\\] { max-height: 90vh; }
  .min-h-screen { min-height: 100vh; }

  .transform { transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)); }
  .-translate-x-1\\/2 { --tw-translate-x: -50%; }
  .cursor-pointer { cursor: pointer; }

  .items-center { align-items: center; }
  .items-start { align-items: flex-start; }
  .justify-center { justify-content: center; }
  .justify-between { justify-content: space-between; }
  .justify-end { justify-content: flex-end; }

  .gap-2 { gap: 0.5rem; }
  .gap-3 { gap: 0.75rem; }
  .gap-4 { gap: 1rem; }
  .gap-6 { gap: 1.5rem; }
  .gap-8 { gap: 2rem; }
  .gap-12 { gap: 3rem; }

  .overflow-hidden { overflow: hidden; }
  .overflow-y-auto { overflow-y: auto; }

  .rounded-full { border-radius: 9999px; }
  .rounded-lg { border-radius: 0.5rem; }
  .rounded-2xl { border-radius: 1rem; }
  .rounded-t-2xl { border-top-left-radius: 1rem; border-top-right-radius: 1rem; }

  .border-t { border-top-width: 1px; }

  .bg-white\\/10 { background-color: rgb(255 255 255 / 0.1); }
  .text-white { color: rgb(255 255 255); }
  .border-white\\/20 { border-color: rgb(255 255 255 / 0.2); }
  .hover\\:bg-white\\/20:hover { background-color: rgb(255 255 255 / 0.2); }

  .p-2 { padding: 0.5rem; }
  .p-3 { padding: 0.75rem; }
  .p-4 { padding: 1rem; }
  .p-8 { padding: 2rem; }
  .px-2 { padding-left: 0.5rem; padding-right: 0.5rem; }
  .px-4 { padding-left: 1rem; padding-right: 1rem; }
  .px-6 { padding-left: 1.5rem; padding-right: 1.5rem; }
  .py-1 { padding-top: 0.25rem; padding-bottom: 0.25rem; }
  .py-2 { padding-top: 0.5rem; padding-bottom: 0.5rem; }
  .py-3 { padding-top: 0.75rem; padding-bottom: 0.75rem; }
  .py-20 { padding-top: 5rem; padding-bottom: 5rem; }
  .pt-4 { padding-top: 1rem; }
  .mb-2 { margin-bottom: 0.5rem; }
  .mb-3 { margin-bottom: 0.75rem; }
  .mb-6 { margin-bottom: 1.5rem; }
  .mb-8 { margin-bottom: 2rem; }
  .mb-20 { margin-bottom: 5rem; }
  .mb-32 { margin-bottom: 8rem; }
  .mt-8 { margin-top: 2rem; }
  .mt-20 { margin-top: 5rem; }
  .mx-auto { margin-left: auto; margin-right: auto; }

  .space-y-3 > :not([hidden]) ~ :not([hidden]) { margin-top: 0.75rem; }
  .space-y-6 > :not([hidden]) ~ :not([hidden]) { margin-top: 1.5rem; }
  .space-y-8 > :not([hidden]) ~ :not([hidden]) { margin-top: 2rem; }

  .text-sm { font-size: 0.875rem; line-height: 1.25rem; }
  .text-lg { font-size: 1.125rem; line-height: 1.75rem; }
  .text-xl { font-size: 1.25rem; line-height: 1.75rem; }
  .text-2xl { font-size: 1.5rem; line-height: 2rem; }
  .text-4xl { font-size: 2.25rem; line-height: 2.5rem; }
  .text-5xl { font-size: 3rem; line-height: 1; }
  .text-7xl { font-size: 4.5rem; line-height: 1; }

  .font-medium { font-weight: 500; }
  .font-semibold { font-weight: 600; }
  .font-bold { font-weight: 700; }

  .leading-relaxed { line-height: 1.625; }

  .text-center { text-align: center; }

  .opacity-0 { opacity: 0; }
  .opacity-10 { opacity: 0.1; }
  .opacity-30 { opacity: 0.3; }
  .opacity-100 { opacity: 1; }

  .blur-3xl { filter: blur(64px); }

  .object-cover { object-fit: cover; }

  .container { width: 100%; }

  .flex-col { flex-direction: column; }
  .flex-wrap { flex-wrap: wrap; }

  .grid { display: grid; }
  .grid-cols-1 { grid-template-columns: repeat(1, minmax(0, 1fr)); }

  @media (min-width: 768px) {
    .md\\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  }

  @media (min-width: 1024px) {
    .lg\\:w-1\\/2 { width: 50%; }
    .lg\\:h-\\[400px\\] { height: 400px; }
    .lg\\:text-5xl { font-size: 3rem; line-height: 1; }
    .lg\\:text-7xl { font-size: 4.5rem; line-height: 1; }
    .lg\\:text-right { text-align: right; }
    .lg\\:flex-row { flex-direction: row; }
    .lg\\:flex-row-reverse { flex-direction: row-reverse; }
    .lg\\:justify-end { justify-content: flex-end; }
    .lg\\:gap-12 { gap: 3rem; }
  }

  .h-\\[300px\\] { height: 300px; }

  .group:hover .group-hover\\:scale-110 { transform: scale(1.1); }
  .group:hover .group-hover\\:opacity-20 { opacity: 0.2; }
  .group:hover .group-hover\\:translate-x-1 { transform: translateX(0.25rem); }
`;

// Scroll observer hook integrated directly
function useScrollObserver(options) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
        ...options,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [options]);

  return { ref, isVisible };
}

// Project details modal component
const ProjectDetailsModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "auto";
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-card border border-border rounded-2xl shadow-glow animate-scale-in">
        {/* Header */}
        <div className="relative">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-64 object-cover rounded-t-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />

          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-glass backdrop-blur-sm border border-glass-border rounded-full hover:bg-primary/20 transition-all duration-300"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-8 space-y-8">
          {/* Title and Status */}
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                {project.name}
              </h2>
              <div className="flex items-center gap-4 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{project.timeline}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>{project.team}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4" />
                  <span className="px-2 py-1 bg-primary/20 text-primary rounded-full text-sm">
                    {project.status}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-xl font-semibold mb-3">About this project</h3>
            <p className="text-muted-foreground leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Key Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {project.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 bg-glass backdrop-blur-sm border border-glass-border rounded-lg"
                >
                  <div className="w-2 h-2 bg-primary rounded-full animate-glow-pulse" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Technology Stack</h3>
            <div className="flex flex-wrap gap-3">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-glass backdrop-blur-sm border border-glass-border text-foreground rounded-full text-sm font-medium hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-105"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Live demo */}
          <div className="flex flex-wrap gap-4 pt-4 border-t border-border">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gradient-primary text-primary-foreground rounded-full font-semibold hover:shadow-glow transition-all duration-300 hover:scale-105"
            >
              <ExternalLink className="w-4 h-4" />
              View Live Demo
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-glass backdrop-blur-sm border border-glass-border rounded-full hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-105"
            >
              <Github className="w-4 h-4" />
              View Source Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

// Project card component
const ProjectCard = ({ project, index, onClick }) => {
  const { ref, isVisible } = useScrollObserver();
  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`
        relative mb-32 transition-all duration-1000
        ${isVisible ? "opacity-100" : "opacity-0"}
        ${
          isVisible
            ? isEven
              ? "animate-slide-right"
              : "animate-slide-left"
            : ""
        }
      `}
    >
      {/* Connection Line */}
      {index !== 0 && (
        <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent via-primary/50 to-primary/20" />
      )}

      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-glow blur-3xl -z-10 animate-glow-pulse" />

      <div
        className={`
          flex flex-col lg:flex-row items-center gap-8 lg:gap-12
          ${isEven ? "lg:flex-row-reverse" : ""}
        `}
      >
        {/* Image Section */}
        <div className="w-full lg:w-1/2 group cursor-pointer" onClick={onClick}>
          <div className="relative overflow-hidden rounded-2xl border border-glass-border bg-glass backdrop-blur-sm shadow-card">
            <div className="absolute inset-0 bg-gradient-primary opacity-10 group-hover:opacity-20 transition-opacity duration-500" />
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-[300px] lg:h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Floating Badge */}
            <div className="absolute top-4 right-4 px-4 py-2 bg-primary/90 backdrop-blur-sm rounded-full text-primary-foreground text-sm font-semibold animate-float">
              Project #{index + 1}
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className={`w-full lg:w-1/2 ${isEven ? "lg:text-right" : ""}`}>
          <div className="space-y-6">
            {/* Title */}
            <h3
              className="text-4xl lg:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent cursor-pointer hover:scale-105 transition-transform inline-block"
              onClick={onClick}
            >
              {project.name}
            </h3>

            {/* Description */}
            <p className="text-muted-foreground text-lg leading-relaxed">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div
              className={`flex flex-wrap gap-3 ${
                isEven ? "lg:justify-end" : ""
              }`}
            >
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-glass backdrop-blur-sm border border-glass-border text-foreground rounded-full text-sm font-medium hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-105"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Actions */}
            <div
              className={`flex items-center gap-4 ${
                isEven ? "lg:justify-end" : ""
              }`}
            >
              <button
                onClick={onClick}
                className="group flex items-center gap-2 px-6 py-3 bg-gradient-primary text-primary-foreground rounded-full font-semibold hover:shadow-glow transition-all duration-300 hover:scale-105"
              >
                View Details
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-glass backdrop-blur-sm border border-glass-border rounded-full hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-110"
                onClick={(e) => e.stopPropagation()}
              >
                <Github className="w-5 h-5" />
              </a>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-glass backdrop-blur-sm border border-glass-border rounded-full hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-110"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main projects component
const ProjectsContent = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      name: "Quick-gpt",
      description:
        "Quick-gpt is a powerful AI assistant designed to be your all-in-one creative and problem-solving partner. It combines advanced language processing with a robust image generation engine, allowing you to seamlessly move from text-based queries to high-quality visual creations.",
      fullDescription:
        "Quick-gpt's core mission is to democratize access to powerful AI tools. By integrating language and image generation into a single platform, we aim to eliminate the need for multiple subscriptions and fragmented workflows. The credit-based model is designed to be fair and transparent, rewarding users who engage with the platform and generate content. We are constantly improving our models based on user feedback to ensure the output is not only accurate but also highly creative and ethically sound.",
      link: "https://chit-chat-frontend-zh5l.onrender.com",
      github: "https://github.com/Rahulisnice/Chit-Chat",
      image: chitchat,
      techStack: [
        "React",
        "Node.js",
        "Tailwind CSS",
        "Express",
        "Mongodb",
        "openai",
        "imagekit",
      ],
      features: [
        "Versatile Image Generation",
        "Community Image Gallery",
        "Advanced Coding Assistance",
        "Credit-Based System for Image Generation",
        "High-Definition Downloads",
        "Comprehensive Q&A",
      ],
      timeline: "1 months",
      team: "Solo Developer",
      status: "Live",
    },
    {
      name: "Meal-Bridge",
      description:
        "Meal-Bridge is a web-based platform designed to simplify and streamline the food donation process. By creating a direct link between generous donors and verified charitable organizations, it ensures that surplus food and groceries reach those in need quickly and efficiently.",
      fullDescription:
        "This was built to combat food waste and food insecurity by creating a transparent and effective donation ecosystem. It addresses common pain points like logistical miscommunication and the difficulty of finding local charities that need specific types of donations. By providing separate interfaces and real-time communication, we aim to build trust and encourage repeat engagement from both donors and organizations. Our goal is to expand the network to include a wider variety of organizations, from small local shelters to large-scale food banks, making it the go-to platform for anyone who wants to make a difference in their community by donating food.",
      link: "https://github.com/Rahulisnice/Food-donations",
      github: "https://github.com/Rahulisnice/Food-donations",
      image: mealbridge,
      techStack: ["Firebase", "Node.js", "EJS", "Express"],
      features: [
        "Dual-Phase User Interface",
        "Real-Time Status Updates",
        "City-Based Donation Requests",
        "Accept/Reject Functionality",
        "Separate Donation Sections",
        "Donor Impact Tracking",
      ],
      timeline: "1.5 months",
      team: "Solo Developer",
      status: "On Deployment",
    },
    {
      name: "Task Management Tool",
      description:
        "Task-Handler is a streamlined to-do list application designed to help you organize and manage your daily tasks with ease. It provides a simple yet powerful interface where you can quickly add, edit, and track your tasks, ensuring you stay on top of your responsibilities.",
      fullDescription:
        "Task-Handler was built with the understanding that a to-do list should be a tool that simplifies your life, not complicates it. We focused on a clean, minimal design that puts the user in control. The core functionality is designed to be as fast and intuitive as possible, reducing the friction of managing tasks. Looking ahead, we plan to add features like reminders, due dates, and task prioritization to make Task-Handler an even more robust and indispensable part of your daily routine.",
      link: "https://github.com/Rahulisnice/Task-Handler",
      github: "https://github.com/Rahulisnice/Task-Handler",
      image: taskhandler,
      techStack: ["Express", "React", "Tailwindcss", "MongoDB", "toastify"],
      features: [
        "Intuitive Task Creation",
        "Edit and Update Tasks",
        "One-Click Deletion",
        "ACompletion Tracking",
        "Smart Filtering",
        "Atlas Storage",
      ],
      timeline: "1 months",
      team: "Solo Developers",
      status: "On Deployment",
    },
    {
      name: "Portfolio",
      description:
        "It is a cutting-edge, modern portfolio that goes beyond static design to create an immersive and dynamic user experience. It blends professional achievements with creative flair, featuring stunning animations and a unique, responsive layout that captivates visitors.",
      fullDescription:
        "It was created to challenge the conventional idea of a portfolio. It's built on the principle that your online presence should be as unique as your work. By integrating complex animations and a dynamic layout, the project demonstrates a high level of technical skill and an eye for creative design. The combination of professional elements like certifications and personal touches like the Shayari section offers a comprehensive and authentic view of the creator. This portfolio is a statement that you are not just a developer or a designer, but a visionary who understands how to captivate an audience and leave a lasting impression.",
      link: "https://portfolio-roan-one-21.vercel.app/",
      github: "https://github.com/Rahulisnice/designing",
      image: portfolio,
      techStack: ["toastify", "lucide", "framer-motion", "React", "Animation"],
      features: [
        "Dynamic Dragon Animations",
        "Interactive Micro-Animations",
        "Dedicated Shayari Section",
        "Logo Showcase",
        "Achievements and Certifications",
        "Fully Responsive and Dynamic Design",
      ],
      timeline: "2 Weeks",
      team: "Solo Developers",
      status: "Live",
    },
  ];

  return (
    <>
      <style>{projectStyles}</style>
      <section className="relative min-h-screen bg-gradient-dark overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-glow opacity-30" />
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 container mx-auto px-6 py-20">
          {/* Header */}
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-5xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore my journey through code, design, and innovation
            </p>

            {/* Decorative Line */}
            <div className="mt-8 w-32 h-1 bg-gradient-primary mx-auto rounded-full" />
          </div>

          {/* Projects List */}
          <div className="max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.name}
                project={project}
                index={index}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>

          {/* End Section */}
          <div className="text-center mt-20 animate-fade-in">
            <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-gradient-primary animate-glow-pulse" />
            <p className="text-2xl text-muted-foreground">
              More projects coming soon...
            </p>
          </div>
        </div>

        {/* Modal */}
        {selectedProject && (
          <ProjectDetailsModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </section>
    </>
  );
};

export default ProjectsContent;
