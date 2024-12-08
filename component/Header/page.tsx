"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, ShoppingCart, User } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      {/* Top Header (Only for large screens) */}
      <div className="hidden lg:block w-full max-w-[1440px] mx-auto h-[132px] relative">
        <div className="w-[1386px] mx-auto flex justify-between items-center h-full">
          {/* Left Side - Search Icon */}
          <div className="absolute left-7 flex items-center">
            <button className="text-gray-800 hover:text-blue-600 transition-colors">
              <Search size={24} />
            </button>
          </div>

          {/* Centered Logo - Text Logo with Clash Display Font */}
          <div className="absolute left-1/2 transform -translate-x-1/2 font-clash text-3xl font-bold text-gray-800">
            Avion
          </div>

          {/* Right Side - Cart and User Icons */}
          <div className="absolute right-7 flex items-center space-x-7">
            <button className="text-gray-800 hover:text-blue-600 transition-colors">
              <ShoppingCart size={24} />
            </button>
            <button className="text-gray-800 hover:text-blue-600 transition-colors">
              <User size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Simplified Header for Mobile/Small Screens */}
      <div className="lg:hidden w-full max-w-[1440px] mx-auto h-[80px] flex justify-between items-center px-4">
        {/* Avion Text on the Left */}
        <div className="font-clash text-3xl font-[400px] text-gray-800">
          Avion
        </div>

        {/* Right Side - Search Icon and Hamburger Toggle */}
        <div className="flex items-center space-x-5">
          {/* Search Icon */}
          <button className="text-gray-800 hover:text-blue-600 transition-colors">
            <Search size={24} />
          </button>

          {/* Hamburger Menu Toggle */}
          <button 
            onClick={toggleMenu} 
            className="text-gray-800 focus:outline-none"
          >
            {isMenuOpen ? (
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" 
                />
              </svg>
            ) : (
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16" 
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Navbar - Under the Top Header for Desktop (Visible only above 1023px) */}
      <nav className="hidden lg:block bg-white w-full shadow-sm">
        <div className="container mx-auto px-4 py-2 flex justify-center">
          {/* Desktop Navigation */}
          <div className="flex space-x-6">
            <Link href="/plant-pots" className="text-gray-800 hover:text-blue-600 transition-colors">Plant Pots</Link>
            <Link href="/ceramics" className="text-gray-800 hover:text-blue-600 transition-colors">Ceramics</Link>
            <Link href="/tables" className="text-gray-800 hover:text-blue-600 transition-colors">Tables</Link>
            <Link href="/chairs" className="text-gray-800 hover:text-blue-600 transition-colors">Chairs</Link>
            <Link href="/crockery" className="text-gray-800 hover:text-blue-600 transition-colors">Crockery</Link>
            <Link href="/tableware" className="text-gray-800 hover:text-blue-600 transition-colors">Tableware</Link>
            <Link href="/cutlery" className="text-gray-800 hover:text-blue-600 transition-colors">Cutlery</Link>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Dropdown (visible when isMenuOpen is true) */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg lg:hidden">
          <div className="flex flex-col">
            <Link 
              href="/plant-pot" 
              className="px-4 py-3 text-gray-800 hover:bg-gray-100 border-b"
              onClick={toggleMenu}
            >
              Plant Pots
            </Link>
            <Link 
              href="/ceramics" 
              className="px-4 py-3 text-gray-800 hover:bg-gray-100 border-b"
              onClick={toggleMenu}
            >
              Ceramics
            </Link>
            <Link 
              href="/table-chair" 
              className="px-4 py-3 text-gray-800 hover:bg-gray-100 border-b"
              onClick={toggleMenu}
            >
              Tables
            </Link>
            <Link 
              href="/crockery" 
              className="px-4 py-3 text-gray-800 hover:bg-gray-100 border-b"
              onClick={toggleMenu}
            >
              Chairs
            </Link>
            <Link 
              href="/tableware" 
              className="px-4 py-3 text-gray-800 hover:bg-gray-100 border-b"
              onClick={toggleMenu}
            >
              Crockery
            </Link>
            <Link 
              href="/cutlery" 
              className="px-4 py-3 text-gray-800 hover:bg-gray-100"
              onClick={toggleMenu}
            >
             Tablewares
            </Link>
            <Link 
              href="/accessories" 
              className="px-4 py-3 text-gray-800 hover:bg-gray-100"
              onClick={toggleMenu}
            >
             Crockery
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;





