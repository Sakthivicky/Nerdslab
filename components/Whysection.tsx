"use client";

import useEmblaCarousel from "embla-carousel-react";

export default function WhySection() {
  const [emblaRef] = useEmblaCarousel({ loop: true });

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">
            Why NerdsLab?
          </h2>
          <p className="text-gray-600 mt-3">
            Learn cybersecurity the way attackers think — practical, real.
          </p>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">

            {/* Card 1 */}
           <div className="min-w-[300px] bg-white p-6 rounded-xl shadow-sm border">
  <h3 className="font-semibold text-lg">Learn from Real Pentesters</h3>
  <p className="text-gray-600 mt-2 text-sm">
    You are trained by active penetration testers working on real projects — not just trainers. Learn practical techniques used in the industry.
  </p>
</div>

            {/* Card 2 */}
          <div className="min-w-[300px] bg-red-600 text-white p-6 rounded-xl shadow-md">
  <h3 className="font-semibold text-lg">Dynamic & Industry-Relevant Syllabus</h3>
  <p className="mt-2 text-sm text-red-100">
    Our syllabus is continuously updated based on real-world vulnerabilities and latest attack trends — not outdated theory.
  </p>
</div>


            {/* Card 3 */}
            <div className="min-w-[300px] bg-white p-6 rounded-xl shadow-sm border">
  <h3 className="font-semibold text-lg">Real Internship Experience</h3>
  <p className="text-gray-600 mt-2 text-sm">
    Work alongside professional pentesters in a shadowing environment and gain hands-on experience with real security testing workflows.
  </p>
</div>

<div className="min-w-[300px] bg-white p-6 rounded-xl shadow-sm border">
  <h3 className="font-semibold text-lg">Built for Industry Readiness</h3>
  <p className="text-gray-600 mt-2 text-sm">
    This program is designed to take you from beginner to industry-ready with structured training, skill tracking, and guided progression.
  </p>
</div>

          </div>
        </div>
      </div>
    </section>
  );
}