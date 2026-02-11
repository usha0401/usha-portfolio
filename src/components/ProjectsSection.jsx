import { ArrowRight, ExternalLink, Github } from "lucide-react";
import ecomImg from "@/assets/projects/ecom.png";
import machineImg from "@/assets/projects/machine.png";
import travelImg from "@/assets/projects/travel.png";
import iotImg from "@/assets/projects/iot-dashboard.png";
import hlsImg from "@/assets/projects/hls.png";
import Story from "@/assets/projects/story.png"
import User from "@/assets/projects/user.png"


const projects = [
  {
    id: 1,
    title: "Full-Stack UserQL",
    description:
      "A full-stack application built with React (Vite) and Apollo GraphQL, enabling real-time user creation and data retrieval. It showcases end-to-end GraphQL integration and deployment of both frontend and backend using Render.",
    image: User,
    tags: ["React", "Javascript", "Apollo Client","CSS"],
    demoUrl: "https://graphql-frontend-l850.onrender.com/",
    githubUrl: "https://github.com/usha0401/FullStack_GraphQL",
  },
  {
    id: 2,
    title: "Interactive Story Generator",
    description:
      "Interactive Story Generator is a full-stack application that generates and suggests story paths in real time using OpenAI and LangChain.",
    image: Story,
    tags: ["FastAPI","LangChain","OpenAI API","SQLAlchemy,Pydantic","Uvicorn","React"],
    demoUrl: "https://fastapi-pro-rq1d.onrender.com/",
    githubUrl: "https://github.com/usha0401/fastapi_pro?tab=readme-ov-file",
  },
  {
    id: 3,
    title: "E-commerce Platform",
    description:
      "innovative e-commerce website designed for a seamless shopping experience. Discover a curated selection of products, effortlessly browse through categories, and enjoy a smooth checkout process.",
    image: ecomImg,
    tags: ["React", "TailwindCSS", "Javascript", "HTML"],
    demoUrl: "https://github.com/usha0401/E-com",
    githubUrl: "https://github.com/usha0401/E-com",
  },
  {
    id: 4,
    title: "Predictive Maintenance",
    description:
      "Developed a predictive maintenance model using machine learning on sensor data to predict failures and schedule maintenance proactively.",
    image: machineImg,
    tags: ["Machine Learning", "python"],
    demoUrl: "https://github.com/usha0401/ML_project_hub",
    githubUrl: "https://github.com/usha0401/ML_project_hub",
  },
  {
    id: 5,
    title: "Tourist",
    description:
      "Its a user-friendly and responsive tour booking website using cutting-edge technologies such as React, JavaScript, and Node.js.",
    image: travelImg,
    tags: ["React", "Node.js", "HTML", "MongoDB"],
    demoUrl: "https://github.com/usha0401/Tourist",
    githubUrl: "https://github.com/usha0401/Tourist",
  },
  {
    id: 6,
    title: "Handloom Stores – Digitizing a Traditional Family Handloom Business",
    description:
      "Handloom Stores is a web application showcasing a curated range of traditional handloom textiles and branded fashion products with intuitive navigation and rich product displays.",
    image: hlsImg,
    tags: ["React", "Node.js", "HTML", "CSS"],
    demoUrl: "https://handloomstores.onrender.com/",
    githubUrl: "https://github.com/usha0401/HandloomStores/tree/main",
  },
  {
    id: 7,
    title: "IoT Data Visualization Dashboard",
    description:
      "This project is a React.js-based frontend application that dynamically displays IoT sensor data (temperature, humidity and pressure) from a JSON file.",
    image: iotImg,
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
