import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useMyPets } from "../../api/petsApi";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const { email } = useContext(UserContext);
  const [toggle, setToggle] = useState(true);
  const navigate = useNavigate();

  const { myPets } = useMyPets();

  const onLikedHandler = () => {
    setToggle(true);
  };

  const onMyPostHandler = () => {
    setToggle(false);
  };

  return (
    <div className="fixed left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-start pt-36 space-y-6 fade-in-up">
      <div className="bg-gradient backdrop-blur-xs border border-white/50 rounded-2xl shadow-xl p-4 w-full max-w-2xl text-center">
        <h2 className="text-3xl font-bold text-gray-800 mt-4">{email}</h2>
      </div>

      <div className="flex backdrop-blur-xs items-center justify-center space-x-8 bg-gray-300/60 px-4 py-4 rounded-full shadow-md border border-indigo-400">
        <button
          onClick={onLikedHandler}
          className={`w-48 px-6 py-2 rounded-full border border-black font-semibold transition-all duration-300 ${
            toggle
              ? "bg-indigo-600 text-white shadow-lg"
              : "bg-transparent text-gray-700 hover:bg-white/80"
          }`}
        >
          ❤️ Liked pets
        </button>

        <button
          onClick={onMyPostHandler}
          className={`w-48 px-6 py-2 rounded-full border border-black font-semibold transition-all duration-300 ${
            toggle
              ? "bg-transparent text-gray-700 hover:bg-white/80"
              : "bg-indigo-600 text-white shadow-lg"
          }`}
        >
          🐾 Your pets
        </button>
      </div>

      <div className="bg-gradient border backdrop-blur-xs border-white/50 rounded-2xl shadow-xl p-8 w-full max-w-4xl">
        {toggle ? (
          <>
            <h3 className="text-2xl font-semibold text-indigo-700 mb-6 text-center">
              Your Liked Pets:
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-h-[38vh] overflow-y-auto pr-2">
              {myPets.map((pet) => (
                <div
                  key={pet._id}
                  onClick={() => navigate(`/catalog/details/${pet._id}`)}
                  className="bg-white/80 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-transform transform hover:-translate-y-4 mt-4 duration-500 cursor-pointer"
                >
                  <img
                    src={pet.imageUrl}
                    alt={pet.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-0 text-center">
                    <h4 className="text-lg font-semibold text-gray-800">
                      {pet.name}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {pet.years} years and {pet.months} months
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            <h3 className="text-2xl font-semibold text-indigo-700 mb-6 text-center">
              Your Pets:
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-h-[38vh] overflow-y-auto pr-2">
              {myPets.map((pet) => (
                <div
                  key={pet._id}
                  className="bg-white/80 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-transform transform hover:-translate-y-4 mt-4 duration-500 cursor-pointer"
                >
                  <img
                    src={pet.imageUrl}
                    alt={pet.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-0 text-center">
                    <h4 className="text-lg font-semibold text-gray-800">
                      {pet.name}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {pet.years} years and {pet.months} months
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
