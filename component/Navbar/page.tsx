// components/Navbar.tsx
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="flex font-Poppins justify-center lg:justify-evenly items-center space-x-4 lg:space-x-8">
        <Link href="/" className="hover:border-b border-gray-500">
          Home
        </Link>
        <Link href="/contact" className="hover:border-b border-gray-500">
          Contact
        </Link>
        <Link href="/about" className="hover:border-b border-gray-500">
          About
        </Link>
        <Link href="/sign-up" className="hover:border-b border-gray-500">
          Sign Up
        </Link>
      </nav>

    );
}