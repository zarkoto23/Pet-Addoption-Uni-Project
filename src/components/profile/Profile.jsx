export default function Profile() {
  return (
    <div className="fixed left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-start pt-42 space-y-10">

      {/* 🧑 Профилна секция */}
      <div className="bg-gradient  backdrop-blur-sm border border-white/50 rounded-2xl shadow-xl p-8 w-full max-w-2xl text-center">

        <h2 className="text-3xl font-bold text-gray-800 mt-4">John Doe</h2>
        <p className="text-gray-600 text-lg mt-1">Pet Lover 🐾</p>

        <div className="mt-6">
          <h3 className="text-xl font-semibold text-indigo-700 mb-2">Email:</h3>
          <p className="text-gray-700 bg-white/80 inline-block px-4 py-2 rounded-lg shadow-md">
            johndoe@email.com
          </p>
        </div>
      </div>

      {/* 💖 Харесани обяви */}
      <div className="bg-gradient backdrop-blur-sm border border-white/50 rounded-2xl shadow-xl p-8 w-full max-w-4xl">
        <h3 className="text-2xl font-semibold text-indigo-700 mb-6 text-center">
         Liked Pets:
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Елемент 1 */}
          <div className="bg-white/80 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-transform transform hover:-translate-y-1 cursor-pointer">
            <img
              src="https://placedog.net/400/250"
              alt="Pet"
              className="w-full h-40 object-cover"
            />
            <div className="p-4 text-center">
              <h4 className="text-lg font-semibold text-gray-800">Buddy</h4>
              <p className="text-sm text-gray-600">2 years • Male</p>
            </div>
          </div>

          {/* Елемент 2 */}
          <div className="bg-white/80 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-transform transform hover:-translate-y-1 cursor-pointer">
            <img
              src="https://placekitten.com/400/250"
              alt="Pet"
              className="w-full h-40 object-cover"
            />
            <div className="p-4 text-center">
              <h4 className="text-lg font-semibold text-gray-800">Luna</h4>
              <p className="text-sm text-gray-600">1 year • Female</p>
            </div>
          </div>

          {/* Елемент 3 */}
          <div className="bg-white/80 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-transform transform hover:-translate-y-1 cursor-pointer">
            <img
              src="https://placebear.com/400/250"
              alt="Pet"
              className="w-full h-40 object-cover"
            />
            <div className="p-4 text-center">
              <h4 className="text-lg font-semibold text-gray-800">Max</h4>
              <p className="text-sm text-gray-600">3 years • Male</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
