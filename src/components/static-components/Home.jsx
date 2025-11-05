import React from "react";

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start pt-42 p-4">
      <div className="text-center mb-8 max-w-4xl">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-800 mb-10">
          <div className="overflow-hidden mb-5">
            <div
              style={{
                animation: "slideInLeft 0.8s ease-out forwards",
              }}
              className="opacity-0 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
            >
              Adopt a Paw
            </div>
          </div>
          <div className="overflow-hidden">
            <div
              style={{
                animation: "slideInRight 0.8s ease-out 0.4s forwards",
              }}
              className="opacity-0 text-gray-700 text-5xl"
            >
              - Find your new friend!
            </div>
          </div>
        </h1>

        {/* Подзаглавие с по-интересен стил */}
        <p
          style={{
            animation: "fadeInUp 0.8s ease-out 0.8s forwards",
          }}
          className="text-xl text-gray-600 mb-6 opacity-0 max-w-2xl mx-auto leading-relaxed"
        >
          Discover your perfect furry companion and give them the loving forever
          home they deserve
        </p>

        {/* Бутон "Научете повече" със стила от формуляра */}
        <button
          style={{
            animation: "fadeInUp 0.8s ease-out 1s forwards",
          }}
          className="group relative bg-indigo-500/80 hover:bg-indigo-600 transition-all text-white w-full max-w-xs py-2 rounded-md cursor-pointer overflow-hidden opacity-0"
        >
          Meet Our Pets
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
        </button>
      </div>

      <style>
        {`
          @keyframes slideInLeft {
            from {
              transform: translateX(-100px);
              opacity: 0;
            }
            to {
              transform: translateX(0);
              opacity: 1;
            }
          }
          
          @keyframes slideInRight {
            from {
              transform: translateX(100px);
              opacity: 0;
            }
            to {
              transform: translateX(0);
              opacity: 1;
            }
          }
          
          @keyframes fadeInUp {
            from {
              transform: translateY(30px);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }

          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
        `}
      </style>
    </div>
  );
};

export default LandingPage;
