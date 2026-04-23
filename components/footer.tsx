export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between gap-10">

          {/* Logo */}
          <div>
            <h1 className="text-2xl font-bold text-white">
              Nerds<span className="text-red-600">Lab</span>
            </h1>
            <p className="text-sm mt-3 text-gray-400 max-w-xs">
              Learn cybersecurity with real-world labs, bug bounty techniques,
              and industry-level pentesting workflows.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-16">

            <div>
              <h3 className="text-white font-semibold mb-3">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>About</li>
                <li>Courses</li>
                <li>Labs</li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-3">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
                <li>Refund Policy</li>
              </ul>
            </div>

          </div>

          {/* Social */}
          <div>
            <h3 className="text-white font-semibold mb-3">Follow Us</h3>

            <div className="flex gap-4">
              <div className="bg-gray-800 p-3 rounded-lg hover:bg-red-600 transition cursor-pointer">
                ▶
              </div>
              <div className="bg-gray-800 p-3 rounded-lg hover:bg-red-600 transition cursor-pointer">
                🐦
              </div>
              <div className="bg-gray-800 p-3 rounded-lg hover:bg-red-600 transition cursor-pointer">
                📸
              </div>
              <div className="bg-gray-800 p-3 rounded-lg hover:bg-red-600 transition cursor-pointer">
                💼
              </div>
            </div>

          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-10 pt-6 text-sm text-gray-500 flex justify-between">
          <p>© 2026 NerdsLab. All rights reserved.</p>
          <p>Built for Hackers ⚡</p>
        </div>

      </div>

      {/* Background watermark */}
      <h1 className="absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 text-[150px] font-bold text-gray-800 opacity-10">
        NERDSLAB
      </h1>
    </footer>
  );
}