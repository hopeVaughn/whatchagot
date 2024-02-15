'use client';
import React, { useState } from 'react';
import { ModeToggle } from './ModeToggle';
import { Home, BookOpenText, CircleDollarSign, HelpCircle, Mail, User, Tally2 } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  // handle the opening and closing of the side bar
  const toggleSideBar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed  h-[50%] lg:h-[50%] md:h-[50%] flex top-1/2 -translate-y-1/2 z-10">
      <nav
        className={`flex transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-16'
          }`}
      >
        <div className="flex flex-col border border-solid h-full w-16 divide divide-y-2 divide-gray-600 rounded-r-2xl">
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
            <div className="flex items-center justify-center w-full h-12 hover:bg-gray-600">
              <ModeToggle />
            </div>
          </div>

          {/* User icon at the bottom */}
          <Link href="#profile">
            <div className="flex items-center justify-center w-full h-12 mt-auto hover:bg-gray-600 rounded-br-2xl">
              <User />
            </div>
          </Link>
        </div>
        <div className="flex items-center justify-start w-16 h-ful">
          <Tally2 className="cursor-pointer" onClick={toggleSideBar} />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
