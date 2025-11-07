import { usePets } from "../../api/petsApi";
import CatalogItem from "./CatalogItem";

// src/components/CarouselGlassDesign.jsx
export default function Catalog() {
  const { pets } = usePets();
  return (
    <div className="fixed backdrop-blur-xs bottom-90 inset-x-0 w-full max-w-6xl mx-auto z-50 fade-in-up">
      <div className="flex gap-6 overflow-hidden bg-gradient-to-r from-indigo-500/50 via-purple-300/50 to-pink-300/50 p-10 rounded-2xl shadow-2xl">
        {pets.map((pet) => {
          return <CatalogItem key={pet._id} pet={pet} />;
        })}
      </div>

      <button className="absolute -left-6 top-1/2 -translate-y-1/2 bg-white text-indigo font-bold text-xl h-16 w-10 rounded-full shadow-xl flex items-center justify-center hover:scale-110 transition">
        ‹
      </button>
      <button className="absolute -right-6 top-1/2 -translate-y-1/2 bg-white text-indigo font-bold text-xl h-16 w-10 rounded-full shadow-xl flex items-center justify-center hover:scale-110 transition">
        ›
      </button>
    </div>
  );
}
