// import { useState } from "react";

// const experiences = [
//   {
//     company: "Novoterra AI (Stealth AI Startup)",
//     role: "Software Engineer",
//     points: [
//       "Built an AI-driven PDF quality control pipeline for scanned and digital documents, detecting visual, text, layout, and signature defects with severity-based reporting.",
//       "Implemented a GPU-accelerated multi-OCR framework using Tesseract, EasyOCR, and docTR with intelligent fallback logic and computer vision techniques to improve detection accuracy.",
//       "Designed a hybrid signature verification system with conditional AWS Textract integration, reducing processing downtime by 20% while maintaining high-confidence, low false-positive detection.",
//     ],
//   },
//   {
//     company: "Ernst & Young (EY)",
//     role: "SAP S/4HANA Cloud Intern",
//     points: [
//       "Configured and evaluated SAP HANA Cloud infrastructure using RAP via the SAP BTP Cockpit.",
//       "Contributed to architectural decision-making across scalability, cost optimization, security, and enterprise compliance.",
//     ],
//   },
// ];


// export default function Experience() {
//   const [active, setActive] = useState(0);

//   return (
//     <section
//   id="experience"
//   className="relative py-28 px-6 md:px-20 overflow-hidden text-white">


//       {/* 🔥 BACKGROUND EFFECT */}
//       <div className="absolute inset-0 -z-10">
//         {/* Purple glow */}
//         <div className="absolute -top-40 -left-40 w-[650px] h-[650px] 
//           bg-purple-600/30 rounded-full blur-[220px]" />

//         {/* Indigo glow */}
//         <div className="absolute top-40 -right-40 w-[650px] h-[650px] 
//           bg-indigo-600/30 rounded-full blur-[220px]" />

//         {/* Dark overlay */}
//         <div className="absolute inset-0 bg-black/80" />
//       </div>

//       {/* Heading */}
//       <p className="text-sm tracking-widest text-gray-400">WORK</p>
//       <h2 className="text-5xl font-bold mt-2">
//         <span className="text-purple-500">Experience</span>
//       </h2>
//       <p className="mt-4 text-gray-400">
//         A quick recap of where I've worked.
//       </p>

//       {/* Company Tabs */}
//       <div className="flex flex-wrap gap-4 mt-12">
//         {experiences.map((exp, index) => (
//           <button
//             key={index}
//             onClick={() => setActive(index)}
//             className={`px-6 py-2 rounded-full text-sm transition-all
//               ${
//                 active === index
//                   ? "bg-gray-800 text-white"
//                   : "text-gray-400 hover:text-white"
//               }`}
//           >
//             {exp.company}
//           </button>
//         ))}
//       </div>

//       {/* Experience Card */}
//       <div className="relative mt-16 rounded-2xl p-10 overflow-hidden 
//                       border border-white/10 bg-black/50 backdrop-blur">

//         {/* dotted background */}
//         <div
//           className="absolute inset-0 opacity-20 
//           bg-[radial-gradient(#ffffff_1px,transparent_1px)] 
//           [background-size:18px_18px]"
//         />

//         <div className="relative grid md:grid-cols-2 gap-10 items-center">
          
//           {/* Left Content */}
//           <div>
//             <h3 className="text-2xl font-semibold">
//               {experiences[active].title}
//             </h3>
//             <p className="mt-5 text-gray-300 leading-relaxed">
//               {experiences[active].description}
//             </p>
//           </div>

//           {/* Right Role Card */}
//           <div className="flex justify-center md:justify-end">
//             <div className="bg-gradient-to-br from-purple-600 to-indigo-500 
//                             rounded-xl px-10 py-12 text-center shadow-2xl">
//               <p className="text-xl font-semibold">
//                 {experiences[active].role}
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


import { useState } from "react";

const experiences = [
  {
    company: "Novoterra AI (Stealth AI Startup)",
    role: "Software Engineer",
    points: [
      "Built an AI-driven PDF quality control pipeline for scanned and digital documents, detecting  blurr text, faint printing, blank pages,and signature defects with severity-based reporting.",
      "Implemented a GPU-accelerated multi-OCR framework using Tesseract, EasyOCR, and docTR with intelligent fallback logic and computer vision techniques to improve detection accuracy.",
      "Designed a hybrid signature verification system with conditional AWS Textract integration, reducing processing downtime by 20% while maintaining high-confidence, low false-positive detection.",
    ],
  },
  {
    company: "Ernst & Young (EY)",
    role: "SAP S/4HANA Cloud Intern",
    points: [
      "Configured and evaluated SAP HANA Cloud infrastructure using RAP via the SAP BTP Cockpit.",
      "Contributed to architectural decision-making across scalability, cost optimization, security, and enterprise compliance.",
    ],
  },
];

export default function Experience() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="experience"
      className="relative py-28 px-6 md:px-20 overflow-hidden text-white"
    >
      {/* 🔥 BACKGROUND EFFECT */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-40 w-[650px] h-[650px] bg-purple-600/30 rounded-full blur-[220px]" />
        <div className="absolute top-40 -right-40 w-[650px] h-[650px] bg-indigo-600/30 rounded-full blur-[220px]" />
        <div className="absolute inset-0 bg-black/80" />
      </div>

      {/* Heading */}
      <p className="text-sm tracking-widest text-gray-400">WORK</p>
      <h2 className="text-5xl font-bold mt-2">
        <span className="text-purple-500">Experience</span>
      </h2>
      <p className="mt-4 text-gray-400">
        A quick recap of where I've worked.
      </p>

      {/* Company Tabs */}
      <div className="flex flex-wrap gap-4 mt-12">
        {experiences.map((exp, index) => (
          <button
            key={index}
            onClick={() => setActive(index)}
            className={`px-6 py-2 rounded-full text-sm transition-all
              ${
                active === index
                  ? "bg-gray-800 text-white"
                  : "text-gray-400 hover:text-white"
              }`}
          >
            {exp.company}
          </button>
        ))}
      </div>

      {/* Experience Card */}
      <div className="relative mt-16 rounded-2xl p-10 overflow-hidden border border-white/10 bg-black/50 backdrop-blur">
        {/* Dotted background */}
        <div
          className="absolute inset-0 opacity-20 
          bg-[radial-gradient(#ffffff_1px,transparent_1px)] 
          [background-size:18px_18px]"
        />

        <div className="relative flex gap-10 items-start">
          
          {/* Left Content */}
          <div className="flex-1 min-w-0">
            <h3 className="text-2xl font-semibold mb-6">
              {experiences[active].company}
            </h3>

            <ul className="space-y-4">
              {experiences[active].points.map((point, idx) => (
                <li
                  key={idx}
                  className="flex gap-3 text-gray-300 leading-relaxed text-sm"
                >
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-purple-500 shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Role Card */}
          <div className="shrink-0 flex justify-center">
            <div className="bg-gradient-to-br from-purple-600 to-indigo-500 rounded-xl px-10 py-12 text-center shadow-2xl">
              <p className="text-xl font-semibold whitespace-nowrap">
                {experiences[active].role}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
