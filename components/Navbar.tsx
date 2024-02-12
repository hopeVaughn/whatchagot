'use client';
import React from 'react';
import { Home, BookOpenText, CircleDollarSign, HelpCircle, Mail, User } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
  return (
    // Fixed positioning on the left, with full height on small screens and vertically centered on lg and md screens
    <nav className="fixed top-0 left-0 lg:top-1/2 md:top-1/2 lg:-translate-y-1/2 md:-translate-y-1/2 lg:h-[70%] md:h-[70%] sm:h-full w-16 z-10 rounded-r-2xl">
      {/* // Full height container with flexible box layout, vertically and horizontally centered items */}
      <div className="flex flex-col  h-full bg-gray-700  rounded-r-2xl">
        {/* // Links with border dividers */}
        <Link href="#home" className="w-full flex-grow">
          <div className="flex items-center justify-center w-full h-16  hover:bg-gray-600">
            <Home />
          </div>
        </Link>
        <Link href="#community" className="w-full flex-grow">
          <div className="flex items-center justify-center w-full h-16 hover:bg-gray-600">
            <BookOpenText />
          </div>
        </Link>
        <Link href="#pricing" className="w-full flex-grow">
          <div className="flex items-center justify-center w-full h-16 hover:bg-gray-600">
            <CircleDollarSign />
          </div>
        </Link>
        <Link href="#faq" className="w-full flex-grow">
          <div className="flex items-center justify-center w-full h-16 hover:bg-gray-600">
            <HelpCircle />
          </div>
        </Link>
        <Link href="#contact" className="w-full flex-grow">
          <div className="flex items-center justify-center w-full h-16  hover:bg-gray-600">
            <Mail />
          </div>
        </Link>
        <Link href="#contact" className="w-full flex-grow">
          <div className="flex items-center justify-center w-full h-16 border-t border-gray-600 hover:bg-gray-600">
            <User />
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
