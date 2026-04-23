export default function Hero() {
  return (
    <section className="bg-[#f5f7fb] py-20">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* LEFT CONTENT */}
        <div className="max-w-xl">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 border rounded-full px-4 py-1 text-sm mb-6">
           <div className="inline-flex items-center gap-2 border border-gray-300 bg-white rounded-full px-4 py-1 text-sm mb-6 shadow-sm">
  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
  <p className="text-gray-700 font-medium">
    Join 10,000+ learners mastering cybersecurity
  </p>
</div>
          </div>
          

          {/* Heading */}
          <h1 className="text-5xl font-bold leading-tight text-gray-900">
            Master Cybersecurity & Ethical Hacking
          </h1>

          {/* Description */}
          <p className="mt-6 text-gray-600 text-lg">
            Learn Web App Pentesting, Bug Bounty, and Real-World Exploits 
            with hands-on labs and real attack scenarios.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex gap-4">
     <button className="px-6 py-3 border border-gray-400 text-gray-800 rounded-lg hover:bg-gray-100 transition">
  Learn More
</button>

<button className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition">
  Explore Courses
</button>
          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="hidden md:block">
          <img
            src="c2.avif"
            alt="cybersecurity"
            className="w-[450px] h-[350px] object-cover rounded-xl shadow-lg"
          />
        </div>

      </div>
    </section>
  );
}