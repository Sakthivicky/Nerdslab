"use client";

import { useState } from "react";

const levels = [
  {
    label: "Month 1",
    skill: "Foundations",
    progress: 10,
    desc: "Build strong fundamentals in networking, HTTP, and web application structure. Start identifying simple vulnerabilities like basic XSS and misconfigurations.",
  },
  {
    label: "Month 2",
    skill: "Core Pentesting Skills",
    progress: 30,
    desc: "Strengthen fundamentals and begin structured pentesting. Learn reconnaissance, enumeration, and cover ~35% of real-world attack techniques.",
  },
  {
    label: "Month 3",
    skill: "Vulnerability Mastery",
    progress: 50,
    desc: "Understand and exploit common vulnerabilities like XSS, SQL Injection, and IDOR. Start performing basic VAPT assessments independently.",
  },
  {
    label: "Month 4",
    skill: "Real-World Exposure",
    progress: 65,
    desc: "Work alongside professional pentesters. Observe real testing workflows, methodologies, and industry practices.",
  },
  {
    label: "Month 5",
    skill: "Industry Workflow",
    progress: 75,
    desc: "Understand how companies handle security. Learn documentation, reporting, and client-level communication.",
  },
  {
    label: "Month 6",
    skill: "Independent Pentester",
    progress: 90,
    desc: "Perform complete VAPT engagements independently — from recon to exploitation and professional reporting.",
  },
  {
    label: "Month 7",
    skill: "Industry Ready",
    progress: 100,
    desc: "Refine skills, build portfolio, and prepare for placements or freelance opportunities with real-world confidence.",
  },
];

export default function LearningJourneyGame() {
  const [active, setActive] = useState(0);
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold">Your Hacker Journey</h2>
          <p className="text-gray-400 mt-2">
            See how your skills evolve week by week
          </p>
        </div>

        {/* ASK NAME (only before submit) */}
        {!submitted && (
          <div className="text-center mb-10">
           
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="px-4 py-2 rounded-lg text-black mr-2"
            />

         
          </div>
        )}

        {/* PERSONALIZED MESSAGE */}
        {submitted && (
          <div className="text-center mb-10">
            <p className="text-lg text-gray-300">
              Hi <span className="text-red-500 font-semibold">{name}</span>,  
              you are now{" "}
              <span className="text-red-500 font-bold">
                {levels[active].progress}%
              </span>{" "}
              ready for the industry.
            </p>
          </div>
        )}

        {/* Progress Line */}
        <div className="relative flex items-center justify-between mb-12">
          <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-700 -translate-y-1/2"></div>

          <div
            className="absolute top-1/2 left-0 h-1 bg-red-600 -translate-y-1/2 transition-all duration-500"
            style={{ width: `${(active / (levels.length - 1)) * 100}%` }}
          ></div>

          {levels.map((_, i) => (
            <div
              key={i}
              onMouseEnter={() => setActive(i)}
              className={`relative z-10 cursor-pointer w-6 h-6 rounded-full transition ${
                i <= active ? "bg-red-600 scale-125" : "bg-gray-500"
              }`}
            ></div>
          ))}
        </div>

        {/* Active Content */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-red-500">
            {levels[active].skill}
          </h3>
          <p className="text-gray-300 mt-3 max-w-xl mx-auto">
            {levels[active].desc}
          </p>
        </div>

      </div>
    </section>
  );
}