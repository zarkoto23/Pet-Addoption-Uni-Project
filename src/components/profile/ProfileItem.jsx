import { useNavigate } from "react-router-dom";

export default function ProfileItem({ pet }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/catalog/details/${pet._id}`)}
      className="
        w-full 
        h-full
        bg-white/30 
        backdrop-blur-xl 
        rounded-2xl 
        shadow-lg 
        overflow-hidden 
        cursor-pointer
        fade-in-up

        /* ЕФЕКТ СЕГА Е ТУК (както искаш) */
        transition-all
        duration-500
        hover:-translate-y-6 
        hover:shadow-xl
        hover:bg-white/80     /* <— ТУК Е hover ефекта */
      "
    >

      {/* Снимка */}
      <img
        src={pet.imageUrl}
        alt={pet.name}
        className="
          w-full 
          h-[220px] 
          object-cover
          transition-transform 
          duration-300 
        "
      />

      {/* Текст */}
      <div className="text-center text-black/80 p-4">
        <h4 className="text-lg font-semibold">{pet.name}</h4>
        <p className="text-sm opacity-90">
          {pet.years} years • {pet.months} months
        </p>
      </div>

    </div>
  );
}
