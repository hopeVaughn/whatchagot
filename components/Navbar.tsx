'use client';
import React, { useState } from 'react';
import { ModeToggle } from './ModeToggle';
import { useTheme } from 'next-themes';
import { Home, BookOpenText, CircleDollarSign, HelpCircle, Mail, User, Tally2 } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const { theme, systemTheme } = useTheme();

  // handle the opening and closing of the side bar
  const toggleSideBar = () => {
    setIsOpen(!isOpen);
  };
  // Determine the effective theme by checking if the theme is set to 'system', and if so, use the systemTheme
  const effectiveTheme = theme === 'system' ? systemTheme : theme;

  // Determine border color based on the effective theme
  const borderColor = effectiveTheme === 'dark' ? 'border-gray-600' : 'border-black';
  const hoverColor = effectiveTheme === 'light' ? 'hover:bg-gray-200' : 'hover:bg-gray-600';

  return (
    <div className="fixed  h-[50%] lg:h-[50%] md:h-[50%] flex top-1/2 -translate-y-1/2 z-10">
      <nav
        className={`flex transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-16'
          }`}
      >
        <div className={`flex flex-col border border-solid ${borderColor} h-full w-16 divide divide-y-2 divide-gray-600 rounded-r-2xl`}>
          {/* Container for the icons */}
          <div className="flex flex-col flex-grow space-y-2">
            {/* Icons evenly distributed */}
            <Link href="#home">
              <div className={`flex items-center justify-center w-full h-12 ${hoverColor} rounded-tr-2xl`}>
                <Home />
              </div>
            </Link>
            <Link href="#community">
              <div className={`flex items-center justify-center w-full h-12 ${hoverColor}`}>
                <BookOpenText />
              </div>
            </Link>
            <Link href="#pricing">
              <div className={`flex items-center justify-center w-full h-12 ${hoverColor}`}>
                <CircleDollarSign />
              </div>
            </Link>
            <Link href="#faq">
              <div className={`flex items-center justify-center w-full h-12 ${hoverColor}`}>
                <HelpCircle />
              </div>
            </Link>
            <Link href="#contact">
              <div className={`flex items-center justify-center w-full h-12 ${hoverColor}`}>
                <Mail />
              </div>
            </Link>
            <div className={`flex items-center justify-center w-full h-12 ${hoverColor}`}>
              <ModeToggle />
            </div>
          </div>

          {/* User icon at the bottom */}
          <Link href="#profile">
            <div className={`flex items-center justify-center w-full h-12 mt-auto ${hoverColor} rounded-br-2xl`}>
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
