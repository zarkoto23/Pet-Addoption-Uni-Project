import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function CatalogItem({ pet }) {
  const navigate = useNavigate();

  const onDetailsClick = () => {
    navigate(`details/${pet._id}`, { state: { from: "catalog" } });
  };

  return (
<motion.div
  onClick={onDetailsClick}
  className="flex-shrink-0 w-64 bg-white/30 backdrop-blur-xl rounded-2xl shadow-lg overflow-hidden cursor-pointer"

  // --- CAROUSEL ANIMATION (500ms) ---
  initial={{ opacity: 0, scale: 0.85, y: 20 }}
  animate={{ opacity: 1, scale: 1, y: 0 }}
  exit={{ opacity: 0, scale: 0.9, y: -10 }}
  transition={{
    duration: 0.5,
    ease: "easeOut"
  }}

  // --- HOVER EFFECT (scale по-малък + lift) ---
  whileHover={{
    y: -15,            // леко вдигане нагоре (много приятно)
    transition: { duration: 0.3, fade: "fade-in-up" }
  }}
>

      <div className="transition duration-100 hover:bg-white/80">
        <img
          src={pet.imageUrl}
          alt={pet.name}
          className="w-full h-56 object-cover transition-transform duration-100"
        />
        <div className="text-center text-black/80">
          <h3 className="text-lg font-semibold">{pet.name}</h3>
          <p className="text-sm opacity-90">Click to learn more...</p>
        </div>
      </div>
    </motion.div>
  );
}
