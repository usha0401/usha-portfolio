import { useEffect, useRef, useState } from "react";

const COMMANDS = {
  help: [
    "help - Show a list of available commands.",
    "clear - Empty the terminal window.",
    "whoami - Prints my name and current role",
    "about - Displays a brief summary about me",
    "education - Shows my educational background",
    "socials - Lists my social media profiles",
    "skills - Presents my technical skills and expertise",
    "experience - Lists my work experience",
    "email - Reveals my email address for contact",
  ],
  whoami: ["Usha Sree Vasi"],
  about: [
    "I build modern, interactive web experiences using React, Javascript and good in backend technologies FastAPI,RabbitMQ.",
  ],
  education: [
    "B.Tech in Computer Science graduated from IIIT KOTTAYAM.",
    
  ],
  socials: [
    "GitHub: https://github.com/usha0401",
    "LinkedIn: https://www.linkedin.com/in/vasi-usha-sree-a1b5b0233/",
  ],
  skills: ["React, Tailwind CSS, JavaScript, FastAPI, RabbitMQ, GraphQL, MySQL"],
  experience: [
    "Software Engineer @ Novoterra AI",
  ],
  email: ["vasiushasree@email.com"],
};

export const Terminal = () => {
  const [history, setHistory] = useState([
    "Welcome! For a list of available commands, type `help`",
  ]);
  const [input, setInput] = useState("");
  const bottomRef = useRef(null);

  const runCommand = (command) => {
    if (command === "clear") {
      setHistory([]);
      return;
    }

    const output = COMMANDS[command] || [
      `Command not found: ${command}`,
    ];

    setHistory((prev) => [
      ...prev,
      `~$ ${command}`,
      ...output,
    ]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    runCommand(input.trim().toLowerCase());
    setInput("");
  };

  // auto-scroll to bottom
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  return (
    <section
      id="terminal"
      className="relative z-10 min-h-screen flex items-center justify-center px-4"
    >
      <div className="w-full max-w-3xl rounded-xl bg-[#111] text-orange-400 shadow-xl p-6 font-mono">
        <h2 className="text-2xl text-gray-200 mb-2">~ terminal</h2>
        <p className="text-gray-400 mb-4">
          Welcome! For a list of available commands, type <code>help</code>
        </p>

        <div className="space-y-1 text-sm mb-3 max-h-96 overflow-y-auto">
          {history.map((line, i) => (
            <div key={i}>{line}</div>
          ))}
          <div ref={bottomRef} />
        </div>

        <form onSubmit={handleSubmit} className="flex items-center gap-2">
          <span className="text-gray-300">~$</span>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-transparent outline-none text-gray-100"
            autoFocus
          />
        </form>
      </div>
    </section>
  );
};
