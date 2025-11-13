import { useNavigate, useParams } from "react-router-dom";
import { usePet, useDelete } from "../../api/petsApi";
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";

export default function Details() {
  const { accessToken, _id } = useContext(UserContext);
  const [showAll, setShowAll] = useState(false);
  const navigate = useNavigate();
  const { del } = useDelete();

  const { petId } = useParams();

  const pet = usePet(petId);

  const isOwner = _id === pet._ownerId;

  const onCloseHandler = () => {
    navigate("/catalog");
  };

  const onEditHandled = () => {
    navigate("/edit", { state: { pet } });
  };

  const onDeleteHandler = () => {
    const conf = confirm("Sure you want to delete this?");
    if (!conf) {
      return;
    }
    del(petId);
  };

  return Object.keys(pet).length > 0 ? (
    <div
      onClick={onCloseHandler}
      className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 "
    >
      {/* Карта с детайлите */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative flex flex-col md:flex-row max-w-5xl w-full h-[600px] bg-gradient-to-br from-indigo-300/60 via-purple-200/60 to-pink-200/60 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden transition-transform"
      >
        {/* ❌ X бутон (горе вдясно) */}
        <button
          onClick={onCloseHandler}
          className="absolute top-4 right-4 bg-white/30 backdrop-blur-md text-black font-bold text-xl w-10 h-10 rounded-full shadow-md hover:bg-indigo-100/60 hover:text-indigo-700 transition-all duration-300 flex items-center justify-center z-10"
          aria-label="Close details"
        >
          ✕
        </button>

        {/* 📸 Снимката вляво */}
        <div className="md:w-1/2 w-full h-full overflow-hidden flex items-center justify-center bg-white/20">
          <img
            src={pet.imageUrl}
            alt={pet.name}
            className="object-cover w-full h-full transition-transform duration-700 hover:scale-110"
          />
        </div>

        {/* 📝 Информация вдясно */}
        <div
          className="bg-gradient-to-r from-indigo-300/90 via-purple-300/90 to-pink-200/90
 flex-1 p-8 flex flex-col justify-start h-full overflow-y-auto"
        >
          <div>
            {/* 🐾 Name */}
            <h2 className="text-4xl text-gray-800 mt-0 mb-6">
              <span>Name:</span>{" "}
              <span className="text-indigo-600 font-bold">{pet.name}</span>
            </h2>

            {/* 📋 Останалите детайли */}
            <div className="grid grid-cols-2 gap-8 text-gray-700 ">
              <p>
                <span className="font-semibold text-gray-800">Category:</span>{" "}
                <span className="text-indigo-600">{pet.category}</span>
              </p>
              <p>
                <span className="font-semibold text-gray-800">Gender:</span>{" "}
                <span className="text-indigo-600">{pet.gender}</span>
              </p>
              <p>
                <span className="font-semibold text-gray-800">Castrated:</span>{" "}
                <span className="text-indigo-600">{pet.castrated}</span>
              </p>
              <p>
                <span className="font-semibold text-gray-800">Age:</span>{" "}
                <span className="text-indigo-600">
                  {pet.years}y {pet.months}m
                </span>
              </p>
            </div>

            {/* 📝 Description */}
            {/* 📝 Description — пълна ширина, без скрол */}
            <div className="leading-relaxed w-full mt-8">
              <p className="font-semibold text-gray-800 mb-2">Description:</p>

              <p
                className={`text-indigo-600 whitespace-pre-line break-words overflow-x-hidden ${
                  showAll ? "line-clamp-none" : "line-clamp-1"
                }`}
              >
                {pet.description}
              </p>
            </div>

            {pet.description.length > 20 && (
              <button
                onClick={() => setShowAll((prev) => !prev)}
                className="text-gray-800 text-sm mt-2 underline hover:cursor-pointer"
              >
                {showAll ? "show less..." : "...show more"}
              </button>
            )}

            {/* ❤️ Likes — остава в дясната колона */}
            <div className="grid grid-cols-2  gap-8 text-gray-700 mt-8">
              <div>
                <p className="font-semibold text-gray-800 mb-2">Likes:</p>
                <p className="text-indigo-600">{pet.likes?.length || 0}</p>
              </div>
            </div>
          </div>

          {!isOwner ? (
            <div className="mt-6 ml-5 flex flex-col items-center text-center ml-2 bg-gray-300 rounded-2xl shadow-lg h-18 w-100">
              <h3 className="text-xl font-semibold text-gray-800 mb-0">
                Interested in adopting?
              </h3>

              <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-1 px-12 mt-1 rounded-md transition-all shadow-lg hover:shadow-xl">
                Contact Us
              </button>

              {accessToken ? (
                <div className="mt-8  flex flex-col items-center text-center bg-gray-300 rounded-2xl shadow-lg h-18 w-100">
                  <div className="flex items-center mr-28 ">
                    <button className=" mr-18 bg-transparent border-none">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="w-18 h-18 cursor-pointer transition-all hover:scale-110 hover:stroke-indigo-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 21s-6.5-4.3-9-7.9C-1.5 7.7 3.1 2 7.5 4.5 9.3 5.5 12 8 12 8s2.7-2.5 4.5-3.5C20.9 2 25.5 7.7 21 13.1c-2.5 3.6-9 7.9-9 7.9z"
                        />
                      </svg>
                    </button>

                    <span className="text-gray-700 text-xl font-semibold">
                      Like!
                    </span>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          ) : (
            <div>
              <div className="mt-6 flex flex-col items-center text-center ml-5 bg-gray-300 rounded-2xl shadow-lg h-16 w-100">
                <button
                  onClick={onEditHandled}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2  mt-3 rounded-md w-40 transition-all shadow-lg hover:shadow-xl"
                >
                  Edit
                </button>
              </div>
              <div className="mt-4 flex flex-col items-center text-center ml-4 bg-gray-300 rounded-2xl shadow-lg h-16 w-100">
                <button
                  onClick={onDeleteHandler}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2  mt-3 mb-48 rounded-md w-40 transition-all shadow-lg hover:shadow-xl"
                >
                  Delete
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  ) : (
    <div className="flex justify-center items-center h-screen">
      <div className="spinner-border text-indigo-500/80" role="status">
        <span className="visually-hidden text-4xl">Loading...</span>
      </div>
    </div>
  );
}
