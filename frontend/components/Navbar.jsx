import { Home, Folder, User, Mail, BookText } from "lucide-react";
import { useState } from "react";
import ContactContent from "../pages/Contact";
import LogoContent from "../pages/Logos";
import ShayariContent from "../pages/Shyari";
import ProjectsContent from "../pages/Projects";
import HomeContent from "../pages/Home";
import Footer from "../components/Footer";

export default function Navbar() {
  const [activePage, setActivePage] = useState("Home");

  const icons = {
    Home,
    Projects: Folder,
    Shayari: BookText,
    Logos: User,
    Contact: Mail,
  };

  const navItems = [
    { name: "Home", icon: "Home" },
    { name: "Projects", icon: "Projects" },
    { name: "Shayari", icon: "Shayari" },
    { name: "Logos", icon: "Logos" },
    { name: "Contact", icon: "Contact" },
  ];

  const pageComponents = {
    Home: HomeContent,
    Projects: ProjectsContent,
    Shayari: ShayariContent,
    Logos: LogoContent,
    Contact: ContactContent,
  };

  const PageComponent = pageComponents[activePage];

  return (
    <div>
      <div className="font-sans">
        <style>{`
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out;
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
        <header className="sticky top-0 z-50 bg-gray-900 bg-opacity-80 backdrop-filter backdrop-blur-lg shadow-lg border-b border-gray-800">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 cursor-pointer">
              My Portfolio
            </div>
            <ul className="flex space-x-2 sm:space-x-4">
              {navItems.map((item) => {
                const IconComponent = icons[item.icon];
                return (
                  <li key={item.name}>
                    <button
                      onClick={() => setActivePage(item.name)}
                      className={`
                      flex items-center space-x-1 sm:space-x-2 px-3 py-2 rounded-full font-medium transition-all duration-300
                      ${
                        activePage === item.name
                          ? "bg-purple-600 text-white shadow-lg"
                          : "text-gray-300 hover:bg-gray-800 hover:text-white"
                      }
                    `}
                    >
                      <IconComponent className="w-5 h-5" />
                      <span className="hidden sm:inline">{item.name}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>
        </header>

        <main className="w-full">
          <PageComponent />
        </main>
      </div>
      <Footer />
    </div>
  );
}
