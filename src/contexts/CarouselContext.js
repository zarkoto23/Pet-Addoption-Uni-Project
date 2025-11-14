import { createContext, useContext } from "react";

export const CarouselContext = createContext({
  startIdx: 0,
  setStartIdx: () => {},
  isReturningFromDetails: false,
  setIsReturningFromDetails: () => {},
});

export function useCarousel() {
  return useContext(CarouselContext);
}
