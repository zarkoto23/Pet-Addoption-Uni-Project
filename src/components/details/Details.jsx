import { useParams } from "react-router-dom";
import { usePet } from "../../api/petsApi";

export default function Details() {
  const {petId}=useParams()
  

  const pet=usePet(petId)
  console.log(pet.name);
  
  
  



  return (
    Object.keys(pet).length > 0?

    (<div className="min-h-screen flex items-center justify-center bg-white py-10 px-6">

  {/* Карта с детайлите */}
  <div className="relative flex flex-col md:flex-row max-w-5xl w-full h-[600px] bg-gradient-to-br from-indigo-300/60 via-purple-200/60 to-pink-200/60 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden transition-transform">

    {/* ❌ X бутон (горе вдясно) */}
    <button
      className="absolute top-4 right-4 bg-white/30 backdrop-blur-md text-indigo-600 font-bold text-xl w-10 h-10 rounded-full shadow-md hover:bg-indigo-100/60 hover:text-indigo-700 transition-all duration-300 flex items-center justify-center z-10"
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
    <div className="flex-1 p-12 flex flex-col justify-between h-full overflow-y-auto">
      
      <div>
        {/* 🐾 Name */}
        <h2 className="text-4xl text-gray-800 mb-6">
          <span>Name:</span>{" "}
          <span className="text-indigo-600 font-bold">{pet.name}</span>
        </h2>

        {/* 📋 Останалите детайли */}
        <div className="grid grid-cols-2 gap-8 text-gray-700 mb-8">
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
        <div className="leading-relaxed text-gray-700">
          <p className="font-semibold text-gray-800 mb-2">Description:</p>
          <p className="text-indigo-600">{pet.description}</p>
        </div>
      </div>

      {/* 💬 Долен панел */}
      <div className="mt-10 flex flex-col items-center text-center bg-yellow-200/50 rounded-2xl shadow-lg p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-8">
          Interested in adopting?
        </h3>

        <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-4 px-6 rounded-md transition-all shadow-lg hover:shadow-xl">
          Contact Us
        </button>
      </div>
    </div>
  </div>
</div>


)
    :
        (<div className="flex justify-center items-center h-screen">
  <div className="spinner-border text-indigo-500/80" role="status" >
    <span className="visually-hidden text-4xl">Loading...</span>
  </div>
</div>
)
    
  );
}
