export default function Contact() {
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
              Contact Us
            </div>
          </div>

          <div className="overflow-hidden">
            <div
              style={{
                animation: "slideInRight 0.8s ease-out 0.4s forwards",
              }}
              className="opacity-0 text-gray-700 text-2xl"
            >
              – We're here to help!
            </div>
          </div>
        </h1>

        {/* Description */}
        <p
          style={{ animation: "fadeInUp 0.8s ease-out 0.8s forwards" }}
          className="text-lg text-gray-600 mb-8 opacity-0 max-w-xl mx-auto leading-relaxed"
        >
          Get in touch with us for questions about adoption, pet care, or help
          finding your perfect furry companion.
        </p>

        {/* Contact Info Box */}
        <div
          style={{ animation: "fadeInUp 0.8s ease-out 1s forwards" }}
          className="opacity-0 bg-white/60 backdrop-blur-md shadow-lg p-5 rounded-xl max-w-lg mx-auto border border-indigo-100"
        >
          <p className="text-base text-gray-700 mb-4">
            <span className="font-semibold text-indigo-600">📍 Address:</span>
            &nbsp; Sofia, Friendship Street 12
          </p>

          <p className="text-base text-gray-700 mb-4">
            <span className="font-semibold text-indigo-600">📞 Phone:</span>
            &nbsp; +359 888 123 456
          </p>

          <p className="text-base text-gray-700 mb-4">
            <span className="font-semibold text-indigo-600">📧 Email:</span>
            &nbsp; contact@adoptapaw.com
          </p>

          <p className="text-base text-gray-700">
            <span className="font-semibold text-indigo-600">🕒 Working Hours:</span>
            &nbsp; Mon–Fri: 09:00 – 18:00
          </p>
        </div>
      </div>
    </div>
  );
}
