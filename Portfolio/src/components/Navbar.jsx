import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

import "./styles/Navbar.css";

export default function Navbar() {

  const [open, setOpen] = useState(false);

  const navRef = useRef(null);

  useEffect(() => {

    const ctx = gsap.context(() => {

      gsap.fromTo(
        navRef.current,
        {
          y: -80,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
        }
      );

    });

    return () => ctx.revert();

  }, []);

  return (
    <nav className="navbar" ref={navRef}>

      <div className="logo">PORTFOLIO.</div>

      <ul className={open ? "nav-links active" : "nav-links"}>

        <li><a href="#home">Home</a></li>

        <li><a href="#about">About</a></li>

        <li><a href="#skills">Skills</a></li>

        <li><a href="#projects">Projects</a></li>

        <li><a href="#contact">Contact</a></li>

      </ul>

      <div
        className="menu-icon"
        onClick={() => setOpen(!open)}
      >
        ☰
      </div>

    </nav>
  );
}