import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useMyLikedPets, useMyPets } from "../../api/petsApi";
import Loading from "../static-components/Loading";

import ProfileItem from "./ProfileItem";
import NoDataToShowYet from "../static-components/NoDataToShow";

export default function Profile() {
  const { email} = useContext(UserContext);
  const { likedPets, loading } = useMyLikedPets();
  const [likedOrYour, setLikedOrYour] = useState(true);
  const { myPets } = useMyPets();

  if (loading) {
    return <Loading />;
  }
return (
  <div className="pt-[120px] pb-10 flex flex-col items-center fade-in-up">
    <div className="bg-gradient backdrop-blur-xs border border-white/50 rounded-2xl shadow-xl p-4 w-full max-w-2xl text-center mb-6">
      <h2 className="text-3xl font-bold text-gray-800 mt-4">{email}</h2>
    </div>

    <div className="bg-gradient border backdrop-blur-xs border-white/50 rounded-2xl shadow-xl p-6 w-full max-w-4xl flex gap-6 justify-center mb-6">
      <button
        onClick={() => {
          setLikedOrYour(true);
        }}
        className={`w-48 px-6 py-2 rounded-full border border-black font-semibold ${
          likedOrYour
            ? "bg-indigo-600 text-white"
            : "bg-transparent text-gray-700"
        }`}
      >
        ❤️ Liked pets
      </button>

      <button
        onClick={() => {
          setLikedOrYour(false);
        }}
        className={`w-48 px-6 py-2 rounded-full border border-black font-semibold ${
          !likedOrYour
            ? "bg-indigo-600 text-white"
            : "bg-transparent text-gray-700"
        }`}
      >
        🐾 Your pets
      </button>
    </div>

    <div
      className="
        backdrop-blur-sm bg-gray-300/60 px-6 py-6 rounded-2xl shadow-md
        border border-indigo-400 w-full max-w-5xl
        h-[400px]
        overflow-y-auto
      "
    >
      <h3 className="text-2xl font-semibold text-indigo-700 mb-6 text-center">
        {likedOrYour ? "Your Liked Pets:" : "Your Pets:"}
      </h3>

      <div
        className="
          grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
          gap-10
          auto-rows-[280px]
        "
      >
        {(likedOrYour ? likedPets : myPets).length > 0 ? (
          (likedOrYour ? likedPets : myPets).map((pet) => (
            <ProfileItem key={pet._id} pet={pet} />
          ))
        ) : (
          <NoDataToShowYet />
        )}
      </div>
    </div>
  </div>
);



}
