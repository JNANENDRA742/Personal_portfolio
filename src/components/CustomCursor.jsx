import { useEffect } from "react";

const CursorCursor = () => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const star = document.createElement("span");
      
      const circleSymbols = [
  "•",   // bullet
  "●",   // black circle
  "○",   // white circle
  "◉",   // fisheye
  "◍",   // dotted circle
  "◎",   // double circle
  "◯",   // large hollow circle
  "⬤"    // heavy black circle
];
      star.innerHTML = "✦";

      star.style.position = "fixed";
      star.style.left = `${e.clientX}px`;
      star.style.top = `${e.clientY}px`;
      star.style.pointerEvents = "none";
      star.style.color = "cyan"; 
      star.style.fontSize = `${Math.random() * 12 + 8}px`;
      star.style.opacity = "1";
      star.style.transform = "translate(-50%, -50%)";
      star.style.transition = "opacity 0.8s ease, transform 0.8s ease";

      document.body.appendChild(star);

      requestAnimationFrame(() => {
        star.style.opacity = "0";
        star.style.transform = "translate(-50%, -80%) scale(0.5)";
      });

      setTimeout(() => {
        star.remove();
      }, 800);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return null;
};

export default CursorCursor;
