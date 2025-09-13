const ShayariContent = () => {
  // Array of beautiful shayaris
  const shayaris = [
    {
      text: ` chooti si zindagi hai armaan bohot hai, hamdard nhi koi insaan bohot hai , dil ka dard sunaye to kisko, jo dil kai kareeb hai vo anjaan bohot hai`,
    },
    {
      text: `yha sab kuch bikta dosto, rehna zara sambhaal kai, bechne wala hawa bhi bechta hai, gubaaro mai daal kai`,
    },
    {
      text: `thodi masti thoda sa imaan bacha paya hu, yeh kya kam hai apni pehchaan bacha paya hu`,
    },
    {
      text: `zindagi mai jeet aur haar hamari soch banati hai, jo maan leta hai vo haar jata hai, jab thhan leta hai vo jeet jata hai`,
    },
    {
      text: `chooti se hai zindagi has kai jeeyo, bhula kai saare gum dil se jeeyo, udaasi mai kya rakha hai muskura kai jeeyo, apne liye na sahi apno kai liye jeeyo`,
    },
    {
      text: `kal na hum honge na koi gilla hoga, sirf simpti hue yaado ka silsila hoga, lamhe hai chalo haskr bita le, jaane kal zindagi ka kya faisla hoga`,
    },
  ];

  return (
    <div className="min-h-screen gradient-poetry overflow-hidden relative">
      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Elegant Header */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-4 relative">
              <span className="bg-gradient-to-r from-white via-purple-500 to-white bg-clip-text text-transparent">
                Shyari
              </span>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-white to-transparent"></div>
            </h1>
            <p className="text-purple-200 text-lg md:text-xl font-elegant italic mt-6">
              "जहाँ दिल की बात हो, वहाँ शब्दों का जादू है"
            </p>
          </div>
        </div>

        {/* Poetry Grid */}
        <div className="grid gap-8 md:gap-10 lg:gap-12 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {shayaris.map((shayari, index) => (
              <div
                key={index}
                className="group relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Card */}
                <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 md:p-10 shadow-poetry hover:shadow-glow transition-elegant hover:-translate-y-2 group-hover:bg-white/15">
                  {/* Decorative Corner Elements */}
                  <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-white/30 rounded-tl-lg"></div>
                  <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-white/30 rounded-tr-lg"></div>
                  <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-white/30 rounded-bl-lg"></div>
                  <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-white/30 rounded-br-lg"></div>

                  {/* Quote Mark */}
                  <div className="absolute -top-3 left-8 text-4xl text-white/50 font-serif">
                    "
                  </div>

                  {/* Poetry Text */}
                  <div className="relative z-10 pt-4">
                    <p className="whitespace-pre-line text-lg md:text-xl text-white font-elegant leading-relaxed text-center mb-6 group-hover:text-purple-100 transition-elegant">
                      {shayari.text}
                    </p>

                    {/* Author */}
                    <div className="text-center">
                      <div className="w-12 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent mx-auto mb-3"></div>
                      <p className="text-purple-200 text-sm font-elegant italic"></p>
                    </div>
                  </div>

                  {/* Subtle Shimmer Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-elegant rounded-3xl animate-shimmer bg-[length:200%_100%]"></div>
                </div>

                {/* Floating Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-50 transition-elegant -z-10 scale-110"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Decorative Text */}
        <div className="text-center mt-20">
          <p className="text-white/60 font-elegant italic text-lg">
            "Every shyari starts and ends with a story"
          </p>
          <div className="flex items-center justify-center mt-4 space-x-2">
            <div className="w-2 h-2 bg-white/30 rounded-full animate-pulse"></div>
            <div
              className="w-1 h-1 bg-white/40 rounded-full animate-pulse"
              style={{ animationDelay: "0.5s" }}
            ></div>
            <div
              className="w-2 h-2 bg-white/30 rounded-full animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShayariContent;
