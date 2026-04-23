import Link from "next/link";
import Image from "next/image";
export default function Navbar() {
  return (
    <nav className="w-full border-b bg-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center">
  <Image
    src="/logo.png"
    alt="NerdsLab Logo"
    width={60}
    height={40}
    className="object-contain"
  />
</div>

        {/* Center Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
          <Link href="/" className="hover:text-black transition">
            Home
          </Link>
          <Link href="https://nerd8.com/" className="hover:text-black transition">
            Store
          </Link>

        </div>

        {/* Right Buttons */}
        <div className="flex items-center gap-3">
          <button className="px-4 py-1.5 text-sm border rounded-lg hover:bg-gray-100 transition">
            Login
          </button>

         <button className="px-4 py-1.5 text-sm bg-red-600 text-white rounded-lg hover:bg-red-700 transition">
  Get Started
</button>
        </div>

      </div>
    </nav>
  );
}