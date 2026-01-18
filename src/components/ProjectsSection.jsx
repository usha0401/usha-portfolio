import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "innovative e-commerce website designed for a seamless shopping experience. Discover a curated selection of products, effortlessly browse through categories, and enjoy a smooth checkout process.",
    image: "/projects/ecom.png",
    tags: ["React", "TailwindCSS", "Javascript","HTML"],
    demoUrl: "https://github.com/usha0401/E-com",
    githubUrl: "https://github.com/usha0401/E-com",
  },
  {
    id: 2,
    title: "Predictive Maintenance",
    description:
      "Full-featured e-commerce platform with user authentication and payment processing.",
    image: "/projects/machine.png",
    tags: ["Machine Learning","python"],
    demoUrl: "https://github.com/usha0401/ML_project_hub",
    githubUrl: "https://github.com/usha0401/ML_project_hub",
  },
  
  {
    id: 3,
    title: "Tourist",
    description:
      "Its a user-friendly and responsive tour booking website using cutting-edge technologies such as React, JavaScript, and Node.js.",
    image: "/projects/travel.png",
    tags: ["React", "Node.js", "HTML","MongoDB"],
    demoUrl: "https://github.com/usha0401/Tourist",
    githubUrl: "https://github.com/usha0401/Tourist",
  },
  {
    id: 4,
    title: "Handloom Stores – Digitizing a Traditional Family Handloom Business",
    description:
      "Handloom Stores is a web application showcasing a curated range of traditional handloom textiles and branded fashion products with intuitive navigation and rich product displays.",
    image: "/projects/hls.png",
    tags: ["React", "Node.js", "HTML","CSS"],
    demoUrl: "https://handloomstores.onrender.com/",
    githubUrl: "https://github.com/usha0401/HandloomStores/tree/main",
  },
  {
    id: 5,
    title: "IoT Data Visualization Dashboard",
    description:
      "This project is a React.js-based frontend application that dynamically displays IoT sensor data (temperature,humidity and pressure) from a JSON file.",
    image: "/projects/IoT Dashboard.png",
    tags: ["React", "Axios", "CSS"],
    demoUrl: "https://usha0401.github.io/iot-dashboard/",
    githubUrl: "https://github.com/usha0401/iot-dashboard?tab=readme-ov-file",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/usha0401"
          >
            Check My Github 
          </a>
        </div>
      </div>
    </section>
  );
};
