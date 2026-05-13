import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./styles/About.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function About() {

  const leftRef = useRef(null);
  const cardsRef = useRef([]);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {

  const ctx = gsap.context(() => {

    gsap.fromTo(
      leftRef.current,
      {
        x: -100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",

        scrollTrigger: {
  trigger: leftRef.current,
  start: "top 80%",

  toggleActions: "play none none reset",
},
      }
    );

    gsap.fromTo(
      cardsRef.current,
      {
        y: 60,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",

        scrollTrigger: {
  trigger: cardsRef.current,
  start: "top 85%",

  toggleActions: "play none none reset",
},
      }
    );

  });

  return () => ctx.revert();

}, []);

  return (
    <section className="about" id="about">
      <div className="about-container">

        <div className="about-left" ref={leftRef}>
          <h2>About Me</h2>

          <p>
            I'm a passionate Frontend Developer who loves building modern,
            responsive and interactive web applications using React.js | Next.js
          </p>

          <p>
            I enjoy creating clean UI designs, smooth user experiences and
            writing optimized code for high-performance websites.
          </p>

          <p>
            Currently, I'm focused on improving my frontend development skills
            and building real-world projects.
          </p>
        </div>

        <div className="about-right">
          <div
  className="about-card"
  ref={(el) => (cardsRef.current[0] = el)}
>
            <h3>Frontend Developer</h3>
            <p>
              Specialized in React.js, Next.js and  responsive design.
            </p>
          </div>

          <div
  className="about-card"
  ref={(el) => (cardsRef.current[1] = el)}
>
            <h3>Clean Code</h3>
            <p>
              Writing optimized, scalable and maintainable code structure.
            </p>
          </div>

          <div
  className="about-card"
  ref={(el) => (cardsRef.current[2] = el)}
>
            <h3>Creative UI</h3>
            <p>
              Building attractive interfaces with smooth animations and effects.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}