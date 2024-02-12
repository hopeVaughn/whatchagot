'use client';
import React from 'react';
import { Home, BookOpenText, CircleDollarSign, HelpCircle, Mail, User } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 lg:top-1/2 md:top-1/2 lg:-translate-y-1/2 md:-translate-y-1/2 lg:h-[70%] md:h-[70%] sm:h-full w-16 z-10 rounded-r-2xl">
      <div className="flex flex-col justify-between h-full bg-gray-700 rounded-r-2xl">
        {/* All links except the last one will grow to fill the space evenly */}
        <div className="flex flex-col flex-grow">
          <Link href="#home" className="w-full flex-1">
            <div className="flex items-center justify-center w-full h-full rounded-r-2xl hover:bg-gray-600">
              <Home />
            </div>
          </Link>
          <Link href="#community" className="w-full flex-1">
            <div className="flex items-center justify-center w-full h-full hover:bg-gray-600">
              <BookOpenText />
            </div>
          </Link>
          <Link href="#pricing" className="w-full flex-1">
            <div className="flex items-center justify-center w-full h-full hover:bg-gray-600">
              <CircleDollarSign />
            </div>
          </Link>
          <Link href="#faq" className="w-full flex-1">
            <div className="flex items-center justify-center w-full h-full hover:bg-gray-600">
              <HelpCircle />
            </div>
          </Link>
          <Link href="#contact" className="w-full flex-1">
            <div className="flex items-center justify-center w-full h-full hover:bg-gray-600">
              <Mail />
            </div>
          </Link>
        </div>

        {/* This link will be pushed to the bottom */}
        <Link href="#profile" className="w-full flex-1">
          <div className="flex items-center justify-center w-full h-full rounded-r-2xl hover:bg-gray-600">
            <User />
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
