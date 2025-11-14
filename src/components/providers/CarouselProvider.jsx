import { useState } from "react";
import { CarouselContext } from "../../contexts/CarouselContext";
import { Outlet } from "react-router-dom";

export default function CarouselProvider() {
  const [startIdx, setStartIdx] = useState(0);
  const [isReturningFromDetails, setIsReturningFromDetails] = useState(false);

  return (
    <CarouselContext.Provider
      value={{
        startIdx,
        setStartIdx,
        isReturningFromDetails,
        setIsReturningFromDetails,
      }}
    >
      <Outlet />
    </CarouselContext.Provider>
  );
}
