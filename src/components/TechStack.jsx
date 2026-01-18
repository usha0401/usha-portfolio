import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt,FaAws ,FaDocker} from "react-icons/fa";
import { SiTailwindcss, SiJavascript,SiFastapi,SiRabbitmq,SiGraphql } from "react-icons/si";

import { TbBrandPython } from "react-icons/tb";


const techStack = [
  { name: "React", icon: FaReact, x: "15%", y: "45%" },
  { name: "Node.js", icon: FaNodeJs, x: "50%", y: "25%" },
  { name: "JavaScript", icon: SiJavascript, x: "40%", y: "55%" },
  { name: "CSS3", icon: FaCss3Alt, x: "55%", y: "65%" },
  { name: "HTML5", icon: FaHtml5, x: "30%", y: "75%" },
  { name: "Tailwind", icon: SiTailwindcss, x: "70%", y: "45%" },
  // Backend & Cloud
  { name: "FastAPI", icon: SiFastapi, x: "20%", y: "25%" },
  { name: "RabbitMQ", icon: SiRabbitmq, x: "65%", y: "20%" },
  { name: "Celery", icon: TbBrandPython, x: "80%", y: "35%" },
  { name: "GraphQL", icon: SiGraphql, x: "45%", y: "80%" },
  { name: "AWS", icon: FaAws, x: "85%", y: "60%" },
  { name: "Docker", icon: FaDocker, x: "75%", y: "10%" },

];

export default function TechStack() {
  return (
    <section className="relative min-h-[600px] overflow-hidden rounded-3xl">
      
      {/* 🔥 BACKGROUND EFFECT */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-20%] left-[-20%] w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-[160px]" />
        <div className="absolute bottom-[-20%] right-[-20%] w-[500px] h-[500px] bg-indigo-500/30 rounded-full blur-[160px]" />
      </div>

      {/* 🔥 CONTENT */}
      <div className="relative z-10 flex flex-col items-center pt-16">
        <h2 className="text-white text-4xl font-bold mb-16">
          Interactive <span className="text-purple-400">Technology Stack</span>
        </h2>

        <div className="relative w-full max-w-5xl h-[400px]">
          {techStack.map((tech, index) => {
            const Icon = tech.icon;

            return (
              <motion.div
                key={index}
                className="absolute flex flex-col items-center text-white"
                style={{ left: tech.x, top: tech.y }}
                whileHover={{ scale: 1.3 }}
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="bg-slate-900/80 backdrop-blur p-5 rounded-full shadow-xl">
                  <Icon size={32} />
                </div>
                <span className="mt-2 text-sm opacity-80">{tech.name}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

