import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="relative py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        
        {/* Section Title */}
        <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
          About <span className="text-primary">Me</span>
        </h2>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              A Software Engineer
            </h3>

            <p className="text-muted-foreground">
              Building intelligent systems and scalable backends.
            </p>

            <p className="text-muted-foreground">
              I write clean, optimized code that scales in the real world.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href="https://drive.google.com/file/d/1kdEN_Bfrle4FCDuhn4oF5LJhO2butp0C/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                My Resume
              </a>
            </div>
          </div>

          {/* RIGHT SIDE – EDUCATION */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white">
              Education
            </h3>

            <div className="border-l-2 border-primary/60 pl-6 space-y-6">

              {/* B.Tech */}
              <div>
                <h4 className="text-lg font-medium text-white">
                  Bachelor of Technology (B.Tech)
                </h4>
                <p className="text-sm text-muted-foreground">
                  Computer Science & Engineering
                </p>
                <p className="text-sm text-gray-500">
                  IIIT Kottayam • 2021 – 2025
                </p>
              </div>

              {/* Intermediate */}
              <div>
                <h4 className="text-lg font-medium text-white">
                  Higher Secondary Education
                </h4>
                <p className="text-sm text-muted-foreground">
                  MPC (Maths, Physics, Chemistry)
                </p>
                <p className="text-sm text-gray-500">
                  FIITJEE • 2019 – 2021
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
