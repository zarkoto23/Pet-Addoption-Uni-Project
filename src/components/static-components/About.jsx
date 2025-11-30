export default function About() {
  return (
    <div className="fixed top-40 left-1/2 transform -translate-x-1/2 flex-col items-center justify-start p-4">
      <div className="text-center mb-6 max-w-3xl">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
          <div className="overflow-hidden mb-3">
            <div
              style={{
                animation: "slideInLeft 0.8s ease-out forwards",
              }}
              className="opacity-0 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
            >
              About Us
            </div>
          </div>

          <div className="overflow-hidden">
            <div
              style={{
                animation: "slideInRight 0.8s ease-out 0.4s forwards",
              }}
              className="opacity-0 text-gray-700 text-2xl"
            >
              – Our mission & vision
            </div>
          </div>
        </h1>

        <p
          style={{ animation: "fadeInUp 0.8s ease-out 0.8s forwards" }}
          className="text-lg text-gray-600 mb-8 opacity-0 max-w-xl mx-auto leading-relaxed"
        >
          At Adopt a Paw, our mission is to connect loving families with pets
          looking for a forever home. We believe that every animal deserves a
          chance to be cared for, understood, and cherished.
        </p>

        <div
          style={{ animation: "fadeInUp 0.8s ease-out 1s forwards" }}
          className="opacity-0 bg-white/60 backdrop-blur-md shadow-lg p-5 rounded-xl max-w-lg mx-auto border border-indigo-100 text-left"
        >
          <h2 className="text-lg font-semibold text-indigo-600 mb-3">
            Who We Are
          </h2>
          <p className="text-base text-gray-700 mb-5">
            We are a dedicated team of volunteers, animal lovers, and rescue
            advocates committed to making adoption accessible, transparent, and
            full of compassion.
          </p>

          <h2 className="text-lg font-semibold text-indigo-600 mb-3">
            Our Promise
          </h2>
          <p className="text-base text-gray-700">
            We promise to always prioritize the well-being of every animal and
            support each adopter with knowledge, guidance, and ongoing care.
          </p>
        </div>
      </div>
    </div>
  );
}
