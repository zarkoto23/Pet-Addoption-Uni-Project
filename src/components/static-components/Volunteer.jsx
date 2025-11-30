export default function Volunteer() {
  return (
    <div className="fixed top-40 left-1/2 transform -translate-x-1/2 flex-col items-center justify-start p-4">
      <div className="text-center mb-6 max-w-3xl">

        {/* Title */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
          <div className="overflow-hidden mb-3">
            <div
              style={{
                animation: "slideInLeft 0.8s ease-out forwards",
              }}
              className="opacity-0 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
            >
              Become a Volunteer
            </div>
          </div>

          <div className="overflow-hidden">
            <div
              style={{
                animation: "slideInRight 0.8s ease-out 0.4s forwards",
              }}
              className="opacity-0 text-gray-700 text-2xl"
            >
              – Make a real difference
            </div>
          </div>
        </h1>

        {/* Description */}
        <p
          style={{ animation: "fadeInUp 0.8s ease-out 0.8s forwards" }}
          className="text-lg text-gray-600 mb-8 opacity-0 max-w-xl mx-auto leading-relaxed"
        >
          Join our amazing team of volunteers who help rescue, care for, and find loving homes for animals in need.
          Your kindness and time can change a life forever.
        </p>

        {/* Info Box */}
        <div
          style={{ animation: "fadeInUp 0.8s ease-out 1s forwards" }}
          className="opacity-0 bg-white/60 backdrop-blur-md shadow-lg p-5 rounded-xl max-w-lg mx-auto border border-indigo-100 text-left"
        >
          <h2 className="text-lg font-semibold text-indigo-600 mb-3">
            Why Volunteer?
          </h2>
          <p className="text-base text-gray-700 mb-5">
            Volunteering is a rewarding way to give back and support animals who need love, care, and attention.
            You'll join a compassionate community working toward the same mission.
          </p>

          <h2 className="text-lg font-semibold text-indigo-600 mb-3">
            What You Can Do
          </h2>
          <p className="text-base text-gray-700 mb-5">
            Volunteers help with daily care, feeding, socializing pets, organizing events, transport, home checks, and more.
            No experience required — just a big heart.
          </p>

          <h2 className="text-lg font-semibold text-indigo-600 mb-3">
            How to Join
          </h2>
          <p className="text-base text-gray-700">
            Simply reach out through our contact page or visit our shelter.
            We’ll guide you through the steps and provide all necessary training.
          </p>
        </div>
      </div>
    </div>
  );
}
