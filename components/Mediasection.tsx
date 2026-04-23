export default function MediaSection() {
  const videos = [
    {
      title: "How I Earned ₹2L from Bug Bounty",
      thumbnail: "https://img.youtube.com/vi/ysz5S6PUM-U/hqdefault.jpg",
    },
    {
      title: "Finding Critical IDOR in Real App",
      thumbnail: "https://img.youtube.com/vi/jNQXAC9IVRw/hqdefault.jpg",
    },
    {
      title: "From Beginner to Pentester in 6 Months",
      thumbnail: "https://img.youtube.com/vi/tgbNymZ7vqY/hqdefault.jpg",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-[#0f766e] to-[#0b1f4d] rounded-2xl mx-6">
      <div className="max-w-9xl mx-auto px-7">

        {/* Heading */}
        <div className="mb-10">
          <h2 className="text-4xl font-bold text-white">
            Watch Real Hacker Stories
          </h2>
          <p className="text-gray-200 mt-3">
            Learn from real-world bug bounty hunters and security researchers.
          </p>
        </div>

        {/* Videos */}
        <div className="grid md:grid-cols-3 gap-6">

          {videos.map((video, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-3 shadow-md hover:shadow-xl transition"
            >
              
              {/* Thumbnail */}
              <div className="relative">
                <img
                  src={video.thumbnail}
                  className="rounded-lg w-full"
                />

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-red-600 p-4 rounded-full text-white text-xl">
                    ▶
                  </div>
                </div>
              </div>

              {/* Title */}
              <p className="mt-3 text-sm text-gray-800 font-medium">
                {video.title}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}