import { ChevronDown } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-gray-200">
      
      <div className="px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
        
        {/* Footer Container */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-6">
          
          {/* Left Section - Dropdowns */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
            
            {/* More Behance Dropdown */}
            <button className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors text-sm lg:text-base whitespace-nowrap">
              <span>More Behance</span>
              <ChevronDown size={16} />
            </button>

            {/* Divider */}
            <div className="hidden sm:block w-px h-6 bg-gray-300"></div>

            {/* Language Dropdown */}
            <button className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors text-sm lg:text-base whitespace-nowrap">
              <span>English</span>
              <ChevronDown size={16} />
            </button>
          </div>

          {/* Center Section - Links */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6 lg:gap-8">
            
            <a 
              href="#" 
              className="text-gray-700 hover:text-gray-900 transition-colors text-sm lg:text-base whitespace-nowrap"
            >
              TOU
            </a>

            <a 
              href="#" 
              className="text-gray-700 hover:text-gray-900 transition-colors text-sm lg:text-base whitespace-nowrap"
            >
              Privacy
            </a>

            <a 
              href="#" 
              className="text-gray-700 hover:text-gray-900 transition-colors text-sm lg:text-base whitespace-nowrap"
            >
              Community
            </a>

            <a 
              href="#" 
              className="text-gray-700 hover:text-gray-900 transition-colors text-sm lg:text-base whitespace-nowrap"
            >
              Help
            </a>

            <a 
              href="#" 
              className="text-gray-700 hover:text-gray-900 transition-colors text-sm lg:text-base whitespace-nowrap"
            >
              Cookie preferences
            </a>
          </div>

          {/* Right Section - Legal Text & Logo */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 lg:gap-8 mt-4 md:mt-0">
            
            <a 
              href="#" 
              className="text-gray-700 hover:text-gray-900 transition-colors text-sm lg:text-base whitespace-nowrap"
            >
              Do not sell or share my personal information
            </a>

            {/* Adobe Logo */}
            <a 
              href="#" 
              className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors flex-shrink-0"
            >
              
              <span className="hidden sm:inline text-gray-700 text-sm lg:text-base">  <img src="/adobelogo.png" alt="logo" /> </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
