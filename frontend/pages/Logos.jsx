import book from "../src/assets/book.png";
import vyapaar from "../src/assets/vyapaar.jpg";
import power from "../src/assets/power.jpg";
import tower from "../src/assets/tower.png";

const LogoContent = () => {
  const logos = [
    {
      id: 1,
      image: book,
      title: "Beyond the Page",
      description:
        "Beyond the Page is a book logo that captures the transformative power of reading. The design features a stylized book with pages that appear to be taking flight, morphing into a flock of birds..",
      category: "Reading",
      year: "2024",
    },
    {
      id: 2,
      image: vyapaar,
      title: "Vyapaar Setu",
      description:
        "Vyapaar setu is a logo that embodies the wisdom, strategy, and growth inherent in business and trade. The design features an innovation, but instead of ideas, the works are stylized to represent a rising graph or a flowing river of commerce. ",
      category: "Business",
      year: "2024",
    },
    {
      id: 3,
      image: power,
      title: "The Dynamo Tome",
      description:
        "The Dynamo Tome is a logo that visualizes the incredible power and energy contained within knowledge. The design features a closed circuit, but from its spine, bolts of electricity or glowing arcs of energy are bursting forth.",
      category: "Finance",
      year: "2024",
    },
    {
      id: 4,
      image: tower,
      title: "The Pinnacle Herald",
      description:
        "The Pinnacle Herald is a logo that symbolizes strength, ambition, and reaching for new heights. The design features a stylized tower, its silhouette not just a solid structure, but one that is formed by overlapping, upward-pointing arrows or books, each representing a step in a journey of growth.",
      category: "Business",
      year: "2024",
    },
  ];

  return (
    <section className="min-h-screen p-6 lg:p-12 flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-black to-purple-900 overflow-hidden">
      <div className="max-w-7xl w-full animate-fade-in">
        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 tracking-tight">
          Logo Portfolio
        </h1>
        <p className="text-center text-gray-400 text-base sm:text-lg mb-12 max-w-2xl mx-auto">
          A collection of professional brand identities crafted with precision,
          creativity, and a focus on long-lasting impact.
        </p>

        {/* Logo Cards */}
        <div className="space-y-10">
          {logos.map((logo, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={logo.id}
                className="group relative rounded-2xl overflow-hidden border border-gray-800 bg-gray-900/60 backdrop-blur-lg p-6 shadow-lg hover:shadow-purple-500/30 transition-all duration-500"
              >
                <div
                  className={`flex flex-col md:flex-row ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  } gap-8 items-center`}
                >
                  {/* Logo Image */}
                  <div className="flex-shrink-0">
                    <img
                      src={logo.image}
                      alt={logo.title}
                      className="w-70 h-50  rounded-2xl p-2 shadow-xl group-hover:scale-105 transform transition duration-500"
                    />
                  </div>

                  {/* Logo Details */}
                  <div
                    className={`flex-1 ${
                      isEven ? "text-left" : "text-right"
                    } space-y-3`}
                  >
                    <div className="flex items-center gap-3 flex-wrap justify-center md:justify-start">
                      <h3 className="text-2xl font-bold text-white">
                        {logo.title}
                      </h3>
                      <span className="px-3 py-1 bg-purple-900/40 text-purple-300 text-xs rounded-full border border-purple-600">
                        {logo.category}
                      </span>
                      <span className="px-3 py-1 bg-gray-800 text-gray-400 text-xs rounded-full">
                        {logo.year}
                      </span>
                    </div>
                    <p className="text-gray-400 leading-relaxed text-sm sm:text-base max-w-xl mx-auto md:mx-0">
                      {logo.description}
                    </p>
                  </div>
                </div>
                {/* Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-r from-purple-500 to-pink-500 transition duration-700"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LogoContent;
