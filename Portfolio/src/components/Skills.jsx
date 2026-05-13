import { useRef } from "react";
import gsap from "gsap";

import "./styles/Skills.css";

export default function Skills() {

  const skills = [
    {
      name: "HTML",
    },

    {
      name: "CSS",
    },

    {
      name: "JavaScript",
    },

    {
      name: "React.js",
    },

    {
      name: "Next.js",
    },

    {
      name: "Git & GitHub",
    },
  ];

  const cardRefs = useRef([]);

  const handleFly = (index) => {

    gsap.to(cardRefs.current[index], {

      y: -400,

      x: Math.random() * 200 - 100,

      rotation: Math.random() * 60 - 30,

      scaleX: 0.8,
      scaleY: 1.3,

      opacity: 0,

      duration: 1.5,

      ease: "power2.out",

      onComplete: () => {

        gsap.set(cardRefs.current[index], {

          y: 0,
          x: 0,

          rotation: 0,

          scaleX: 1,
          scaleY: 1,

          opacity: 1,
        });

      },
    });

  };

  return (
    <section className="skills" id="skills">

      <div className="skills-container">

        <div className="skills-top">
          <h2>My Skills</h2>
        </div>

        <div className="skills-grid">

          {skills.map((skill, index) => (

            <div
              className="skill-card"
              key={index}

              ref={(el) => (cardRefs.current[index] = el)}

              onClick={() => handleFly(index)}
            >

              <div className="skill-inner">

                <div className="skill-info">

                  <h3>{skill.name}</h3>

                  <span>{skill.level}</span>

                </div>

                <div className="progress-bar">

                  <div
                    className="progress"
                    style={{ width: skill.level }}
                  ></div>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}