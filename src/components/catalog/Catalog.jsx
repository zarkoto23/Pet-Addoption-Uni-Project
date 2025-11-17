import { useState } from "react";
import { usePets } from "../../api/petsApi";
import { useCarousel } from "../../contexts/CarouselContext";
import Loading from "../static-components/Loading";
import CatalogFilters from "./CatalogFilters";
import CatalogItem from "./CatalogItem";
import NoDataToShowYet from "../static-components/NoDataToShow";

export default function Catalog() {
  const [filters, setFilters] = useState({});
  const { pets,loading } = usePets(filters);
  const { startIdx, setStartIdx } = useCarousel();
  const { isReturningFromDetails } = useCarousel();

  const handleFilterChange = (updater) => {
    setFilters((prev) => {
      const updated = updater(prev);
      setStartIdx(0)
      return updated;
    });
  };

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

if (loading) {
  return <Loading />;
}

return (
  <div
    className={
      `fixed backdrop-blur-xs bottom-90 inset-x-0 w-full max-w-6xl mx-auto z-50 ` +
      (!isReturningFromDetails ? "fade-in-up" : "")
    }
  >
    <CatalogFilters onChange={handleFilterChange} filters={filters}/>

    <div className="flex gap-4 overflow-hidden bg-gradient-to-r from-indigo-500/50 via-purple-300/50 to-pink-300/50 p-10 rounded-2xl shadow-2xl">
      {
        visiblePets.length > 0
          ? visiblePets.map((pet) => (
              <CatalogItem key={pet._id} pet={pet} />
            ))
          : <NoDataToShowYet />
      }




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
  )
  
}
