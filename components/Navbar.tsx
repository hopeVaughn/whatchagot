'use client';
import React from 'react';
import { Home, BookOpenText, CircleDollarSign, HelpCircle, Mail, User } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 lg:top-1/2 md:top-1/2 lg:-translate-y-1/2 md:-translate-y-1/2 lg:h-[70%] md:h-[70%] sm:h-full w-16 z-10 rounded-r-2xl">
      <div className="flex flex-col h-full bg-gray-700 rounded-r-2xl">
        {/* Container for the icons */}
        <div className="flex flex-col flex-grow space-y-2 py-3">
          {/* Icons evenly distributed */}
          <Link href="#home">
            <div className="flex items-center justify-center w-full h-12 hover:bg-gray-600 rounded-r-2xl">
              <Home />
            </div>
          </Link>
          <Link href="#community">
            <div className="flex items-center justify-center w-full h-12 hover:bg-gray-600 rounded-r-2xl">
              <BookOpenText />
            </div>
          </Link>
          <Link href="#pricing">
            <div className="flex items-center justify-center w-full h-12 hover:bg-gray-600 rounded-r-2xl">
              <CircleDollarSign />
            </div>
          </Link>
          <Link href="#faq">
            <div className="flex items-center justify-center w-full h-12 hover:bg-gray-600 rounded-r-2xl">
              <HelpCircle />
            </div>
          </Link>
          <Link href="#contact">
            <div className="flex items-center justify-center w-full h-12 hover:bg-gray-600 rounded-r-2xl">
              <Mail />
            </div>
          </Link>
        </div>

        {/* User icon at the bottom. This needs to be fixed still */}
        <Link href="#profile">
          <div className="flex items-center justify-center w-full h-12 mt-auto hover:bg-gray-600 rounded-r-2xl">
            <User />
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
