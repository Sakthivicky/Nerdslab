import Image from "next/image";

export default function CoursesSection() {
const courses = [
  {
    title: "Penetration Testing Nerd (C-PTN)",
    desc: "Master real-world web application pentesting with hands-on labs covering XSS, SQL Injection, IDOR, authentication bypass, and business logic flaws. Learn complete VAPT workflow from reconnaissance to professional reporting.",
    price: "₹74,999",
    oldPrice: "₹99,999",
    discount: "25% off",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&auto=format",
    link: "/courses/pentesting-nerd",
  },
  {
    title: "SOC Analyst (Blue Team)",
    desc: "Learn how security teams detect and respond to threats using SIEM tools, log analysis, and incident response techniques. Build practical defensive skills used in real-world SOC environments.",
    price: "₹74,999",
    oldPrice: "₹99,999",
    discount: "25% off",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format",
    link: "/courses/soc-analyst",
  },
  {
    title: "Ethical Hacking (Foundation for Students)",
    desc: "Designed for college students to explore cybersecurity fundamentals — learn basics of web hacking, networking, and vulnerabilities in a beginner-friendly way. Focused on learning, not placement.",
    price: "₹34,999",
    oldPrice: "₹74,999",
    discount: "50% off",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format",
    link: "/courses/ethical-hacking-foundation",
  },
  {
    title: "AI Security & LLM Attacks",
    desc: "Understand how AI systems can be attacked — including prompt injection, data leakage, model manipulation, and securing AI-powered applications in real-world scenarios.",
    price: "₹74,999",
    oldPrice: "₹99,999",
    discount: "25% off",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format",
    link: "/courses/ai-security",
  },
  {
    title: "Blockchain & Smart Contract Security",
    desc: "Learn to identify vulnerabilities in smart contracts such as reentrancy, overflow bugs, and DeFi exploits using practical blockchain security labs.",
    price: "₹74,999",
    oldPrice: "₹99,999",
    discount: "25% off",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&auto=format",
    link: "/courses/blockchain-security",
  },
];

  return (
    <section className="bg-[#0b1f4d] py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-white mb-10">
          Featured Cohorts
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {courses.map((course, i) => (
            <div
              key={i}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition"
            >
              
              {/* Image */}
             

<div className="relative h-[180px]">
<Image
  src={course.image}
  alt={course.title}
  fill
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  className="object-cover rounded-t-xl"
/>
</div>

              {/* Content */}
              <div className="p-5">

                <h3 className="text-lg font-semibold text-gray-900">
                  {course.title}
                </h3>

                <p className="text-sm text-gray-600 mt-2">
                  {course.desc}
                </p>

                {/* Price */}
                <div className="flex items-center gap-3 mt-4">
                  <span className="text-xl font-bold text-gray-900">
                    {course.price}
                  </span>
                  <span className="line-through text-gray-400">
                    {course.oldPrice}
                  </span>
                  <span className="text-green-600 text-sm bg-green-100 px-2 py-1 rounded">
                    {course.discount}
                  </span>
                </div>

          
                {/* CTA */}
                <button className="w-full mt-4 bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition">
                  View Details
                </button>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}