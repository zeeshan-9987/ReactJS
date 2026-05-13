import "./styles/Projects.css";

export default function Projects() {
  const projects = [
    {
      title: "CRUD App",
      desc: "Perform Create, Read, Update, Delete operations using React.js .",
      tech: "React.js",

      github: "https://github.com/zeeshan-9987/ReactJS/tree/main/CRUD_Application",
    },

    {
      title: "Voting App",
      desc: "A React-based voting application with real-time vote updates and interactive user interface.",
      tech: "React.js",

      github: "https://github.com/zeeshan-9987/ReactJS/tree/main/Voting-App",
    },

    {
      title: "API  Search App",
      desc: "Fetch, search, and display API data dynamically in React. API integration and responsive UI.",
      tech: "React.js | API",

      github: "https://github.com/zeeshan-9987/ReactJS/tree/main/API-Search-App",
    },

    {
      title: "Tic Tac Toe",
      desc: "A Next.js-based Tic Tac Toe game with interactive gameplay and smooth user experience.",
      tech: "Next.js",

      github: "https://github.com/zeeshan-9987/NextJS/tree/main/tic-tac-toe",
    },

    {
      title: "Next Dynamic App",
      desc: "Dynamic Next.js app with responsive modern UI.",
      tech: "Next.js",

      github: "https://github.com/zeeshan-9987/NextJS/tree/main/next-dynamic-app",
    },

    {
      title: "Todo App",
      desc: "Manage daily tasks using React.",
      tech: "React.js",

      github: "https://github.com/zeeshan-9987/ReactJS/tree/main/ToDo_App",
    },
  ];

  return (
    <section className="projects" id="projects">
      <div className="projects-container">

        <div className="projects-top">
          <h2>My Projects</h2>

          <p>
            Some of the projects I have built using modern frontend technologies.
          </p>
        </div>

        <div className="projects-grid">

          {projects.map((project, index) => (
            <div className="project-card" key={index}>

              <div className="project-image">
                Project Preview
              </div>

              <div className="project-content">

                <h3>{project.title}</h3>

                <p>{project.desc}</p>

                <span>{project.tech}</span>

                <div className="project-buttons">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}