import { useNavigate } from "react-router-dom";

export default function CatalogItem({ pet }) {
  const navigate = useNavigate();

  const onDetailsClick = () => {
    navigate(`details/${pet._id}`);
  };
  return (
    <div
      onClick={onDetailsClick}
      className="  flex-shrink-0 w-64 bg-white/30 backdrop-blur-xl rounded-2xl shadow-lg overflow-hidden transform transition-transform duration-500 hover:-translate-y-6 hover:shadow-xl cursor-pointer "
    >
      <div className="transition duration-300 hover:bg-white/80">
        <img
          src={pet.imageUrl}
          alt={pet.name || "pet"}
          className="w-full h-56 object-cover transition-transform duration-300"
        />

        <div className=" text-center text-black/80">
          <h3 className="text-lg font-semibold ">{pet.name}</h3>
          <p className="text-sm opacity-90">Click to learn more...</p>
        </div>
      </div>
    </div>
  );
}
