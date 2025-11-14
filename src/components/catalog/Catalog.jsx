import { useEffect } from "react";
import { usePets } from "../../api/petsApi";
import { useCarousel } from "../../contexts/CarouselContext";
import CatalogItem from "./CatalogItem";

export default function Catalog() {
  const { pets } = usePets();
  const { startIdx, setStartIdx } = useCarousel();
  const { isReturningFromDetails, setIsReturningFromDetails } = useCarousel();

  useEffect(() => {
    if (isReturningFromDetails) {
      setTimeout(() => setIsReturningFromDetails(true), 0);
    }
  }, [isReturningFromDetails, setIsReturningFromDetails]);

  const visibleCount = 4;

  const handleNext = () => {
    if (startIdx < pets.length - visibleCount) {
      setStartIdx((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (startIdx > 0) {
      setStartIdx((prev) => prev - 1);
    }
  };
  const visiblePets = pets.slice(startIdx, startIdx + visibleCount);
  return pets && pets.length > 0 ? (
    <div
      className={
        `fixed backdrop-blur-xs bottom-90 inset-x-0 w-full max-w-6xl mx-auto z-50 ` +
        (!isReturningFromDetails ? "fade-in-up" : "")
      }
    >
      <div className=" flex gap-4 overflow-hidden bg-gradient-to-r from-indigo-500/50 via-purple-300/50 to-pink-300/50 p-10 rounded-2xl shadow-2xl">
        {visiblePets.map((pet) => {
          return <CatalogItem key={pet._id} pet={pet} />;
        })}
      </div>

      <button
        onClick={handlePrev}
        className="absolute -left-6 top-1/2 -translate-y-1/2 bg-white text-indigo font-bold text-xl h-16 w-10 rounded-full shadow-xl flex items-center justify-center hover:scale-110 transition"
      >
        ‹
      </button>
      <button
        onClick={handleNext}
        className="absolute -right-6 top-1/2 -translate-y-1/2 bg-white text-indigo font-bold text-xl h-16 w-10 rounded-full shadow-xl flex items-center justify-center hover:scale-110 transition"
      >
        ›
      </button>
    </div>
  ) : (
    <div className="flex justify-center items-center h-screen">
      <div className="spinner-border text-indigo-500/80" role="status">
        <span className="visually-hidden text-4xl">Loading...</span>
      </div>
    </div>
  );
}
