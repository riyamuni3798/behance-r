import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { label: 'For You', href: '#' },
    { label: 'Discover', href: '#' },
    { label: 'Livestreams', href: '#' },
    { label: 'Hire', href: '#' },
    { label: 'Jobs', href: '#' }
  ];

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <div className="text-xl sm:text-2xl font-bold text-black flex-shrink-0">
            Béhance
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 lg:gap-12">
            
            {/* Menu Links */}
            <div className="flex items-center gap-6 lg:gap-8">
              {navigationItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-gray-700 font-medium text-sm lg:text-base hover:text-black transition-colors whitespace-nowrap"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Right Section - Desktop */}
            <div className="flex items-center gap-3 lg:gap-6">
              
              {/* Log In */}
              <a
                href="#"
                className="text-gray-700 font-medium text-sm lg:text-base hover:text-black transition-colors whitespace-nowrap"
              >
                Log In
              </a>

              {/* Sign Up Button */}
              <button className="px-4 lg:px-4 py-1 bg-blue-600 text-white font-medium text-sm lg:text-base rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap">
                Sign Up
              </button>

              {/* Free Trial */}
              <a
                href="#"
                className="hidden lg:flex items-center gap-2 text-gray-700 font-medium text-sm hover:text-black transition-colors whitespace-nowrap inline-block pl-4 "
              >
               
                <img src="/cclogo.png" alt="cclogo" />Free Trial
              </a>

              {/* Adobe */}
              <a
                href="#"
                className="hidden lg:flex items-center gap-1 text-gray-700 font-medium text-sm hover:text-black transition-colors whitespace-nowrap inline-block pl-4"
              >
              
              <img src="/adobelogo.png" alt="logo" />  
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-black transition-colors"
          >
            {isMenuOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            
            {/* Mobile Navigation Links */}
            <div className="flex flex-col gap-3 pt-4">
              {navigationItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-gray-700 font-medium text-base hover:text-black transition-colors px-2 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Mobile Buttons */}
            <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-gray-200">
              
              {/* Log In */}
              <a
                href="#"
                className="text-gray-700 font-medium text-base hover:text-black transition-colors px-2 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Log In
              </a>

              {/* Sign Up */}
              <button className="w-full px-4 py-2 bg-blue-600 text-white font-medium text-base rounded-lg hover:bg-blue-700 transition-colors">
                Sign Up
              </button>

              {/* Free Trial */}
              <a
                href="#"
                className="flex items-center gap-2 text-gray-700 font-medium text-base hover:text-black transition-colors px-2 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="w-4 h-4 bg-gradient-to-br from-red-400 to-purple-500 rounded-sm"></span>
                Free Trial
              </a>

              {/* Adobe */}
              <a
                href="#"
                className="flex items-center gap-1 text-gray-700 font-medium text-base hover:text-black transition-colors px-2 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="text-red-600 text-lg">🅰️</span>
                Adobe
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
