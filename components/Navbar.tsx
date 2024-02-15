'use client';
import React from 'react';
import { Home, BookOpenText, CircleDollarSign, HelpCircle, Mail, User } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="fixed w-16 left-0 z-10 rounded-r-2xl top-1/2 -translate-y-1/2 h-[50%] lg:top-1/2 md:top-1/2 lg:-translate-y-1/2 md:-translate-y-1/2 lg:h-[50%] md:h-[50%]">
      <div className="flex flex-col h-full divide divide-y-2 divide-gray-600 bg-gray-700 rounded-r-2xl">
        {/* Container for the icons */}
        <div className="flex flex-col flex-grow space-y-2">
          {/* Icons evenly distributed */}
          <Link href="#home">
            <div className="flex items-center justify-center w-full h-12 hover:bg-gray-600 rounded-tr-2xl">
              <Home />
            </div>
          </Link>
          <Link href="#community">
            <div className="flex items-center justify-center w-full h-12 hover:bg-gray-600">
              <BookOpenText />
            </div>
          </Link>
          <Link href="#pricing">
            <div className="flex items-center justify-center w-full h-12 hover:bg-gray-600">
              <CircleDollarSign />
            </div>
          </Link>
          <Link href="#faq">
            <div className="flex items-center justify-center w-full h-12 hover:bg-gray-600">
              <HelpCircle />
            </div>
          </Link>
          <Link href="#contact">
            <div className="flex items-center justify-center w-full h-12 hover:bg-gray-600">
              <Mail />
            </div>
          </Link>
        </div>

        {/* User icon at the bottom. This needs to be fixed still */}
        <Link href="#profile">
          <div className="flex items-center justify-center w-full h-12 mt-auto hover:bg-gray-600 rounded-br-2xl">
            <User />
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
