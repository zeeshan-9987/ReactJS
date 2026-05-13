import { useEffect, useRef } from "react";
import "./styles/ButterflyCursor.css";

export default function ButterflyCursor() {
  const ref = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    window.addEventListener("mousemove", move);

    const animate = () => {
      pos.current.x += (mouse.current.x - pos.current.x) * 0.18;
      pos.current.y += (mouse.current.y - pos.current.y) * 0.18;

      if (ref.current) {
        ref.current.style.transform =
          `translate(${pos.current.x}px, ${pos.current.y}px)`;
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div className="butterfly" ref={ref}>
      <div className="wing left"></div>
      <div className="wing right"></div>
      <div className="body"></div>
    </div>
  );
}