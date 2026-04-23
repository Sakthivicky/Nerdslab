"use client";

import { useState } from "react";

export default function FAQSection() {
 const faqs = [
{
  question: "Is this cohort online or offline?",
  answer:
    "Both options are available. You can join offline at our center for direct interaction, or attend online sessions from anywhere. The same curriculum and hands-on training are provided in both modes.",
},
  {
    question: "I’m not sure about investing money. Can I verify first?",
    answer:
      "Yes. We encourage you to visit our center, understand the curriculum, and speak with mentors before making a decision. Transparency is important to us.",
  },
  {
    question: "Do you provide job placement?",
    answer:
      "We focus on making you industry-ready through structured training, weekly skill tracking, and real-world practice. Placement support and guidance are provided based on your performance and consistency.",
    // ⚠️ safer than “guarantee”
  },
  {
    question: "What languages are used for teaching?",
    answer:
      "Training is conducted in both English and Tamil to ensure clarity and comfort for all learners.",
  },
  {
    question: "Do I need coding knowledge?",
    answer:
      "No prior coding experience is required. Basic scripting may be introduced during the course, and we guide you step by step using practical tools and modern techniques.",
  },
];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-900">FAQs</h2>
          <p className="text-gray-600 mt-2">
            Get your questions answered
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">

          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border rounded-lg p-4 cursor-pointer hover:shadow-sm transition"
              onClick={() =>
                setOpenIndex(openIndex === i ? null : i)
              }
            >
              <div className="flex justify-between items-center">
                <h3 className="font-medium text-gray-900">
                  {faq.question}
                </h3>
                <span className="text-xl">
                  {openIndex === i ? "-" : "+"}
                </span>
              </div>

              {openIndex === i && (
                <p className="mt-3 text-gray-600 text-sm">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}