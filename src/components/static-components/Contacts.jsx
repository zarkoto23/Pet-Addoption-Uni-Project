import { useRef } from "react";

export default function Contact() {
  const numberRef = useRef(100); // започваме от реално число 100

  function addFive() {
    numberRef.current = numberRef.current + 5;
    console.log("Текущо число:", numberRef.current);
  }

  return (
    <button className="mt-86" onClick={addFive}>
      Добави 5 (гледай конзолата)
    </button>
  );
}
