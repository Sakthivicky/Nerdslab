"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const phoneNumber = "918939531337";
  const message = encodeURIComponent(
    "Hi, I'm interested in NerdsLab cybersecurity courses. Can you share more details?"
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
     <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
    >
      <div className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition hover:scale-110">
        <FaWhatsapp size={26} />
      </div>
    </a>
  );
}