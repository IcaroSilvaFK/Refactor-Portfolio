import { useRef, useEffect } from "react";

export function ButtonUp() {
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      alert("hey");
    });
  }, []);

  return (
    <button ref={buttonRef}>
      <></>
    </button>
  );
}
