import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./styles/Hero.css";
import myPhoto from "../assets/Resume Img.jpeg"
import resume from "../assets/Resume 2.pdf";

export default function Hero() {

  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const buttonRef = useRef(null);

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
        duration: 1.2,
        ease: "power3.out",
      }
    );

    gsap.fromTo(
      rightRef.current,
      {
        x: 100,
        opacity: 0,
        scale: 0.8,
      },
      {
        x: 0,
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
      }
    );

    gsap.fromTo(
      buttonRef.current,
      {
        y: 30,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        delay: 0.6,
        duration: 0.8,
        ease: "power3.out",
      }
    );

  });

  return () => ctx.revert();

}, []);

  return (
    <section className="hero" id="home">
      <div className="hero-left" ref={leftRef}>
        <h1>Hi, I'm <span>Zeeshan</span></h1>
         <p>
          Frontend Developer | React.js
        </p>
        <p>
          I build modern, responsive and interactive web applications using React.
        </p>

        <a
          href={resume}
          target="_blank"
          rel="noreferrer"
          className="btn-primary"
          ref={buttonRef}>View Resume</a>
      </div>

      <div className="hero-right" ref={rightRef}>
        <img
          src={myPhoto}
          alt="person"
        />
      </div>
    </section>
  );
}