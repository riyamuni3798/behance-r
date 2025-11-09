import React, { useState } from 'react';
import { Search, ChevronDown, Menu, X } from 'lucide-react';

export default function Header() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Projects');

  const tabs = ['Projects', 'Images', 'Prototypes', 'Streams', 'People', 'Moodboards'];
  
  const filters = [
    { icon: '🎨', label: 'Creative Fields', hasDropdown: true },
    { icon: '⚙️', label: 'Tools', hasDropdown: true },
    { icon: '🎨', label: 'Color', hasDropdown: true },
    { icon: '📍', label: 'Location', hasDropdown: true },
    { icon: '🎓', label: 'Schools', hasDropdown: true },
    { icon: '💎', label: 'Assets', hasDropdown: true },
    { icon: '⭐', label: 'Subscriptions', hasDropdown: true }
  ];

  return (
    <div className="w-full bg-gray-50 border-b border-gray-200">
      
      {/* Search & Tabs Section */}
      <div className="px-4 sm:px-6 lg:px-8 py-4">
        
        {/* Search Bar & Tabs Container */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-6">
          
          {/* Search Input */}
          <div className="w-full lg:flex-1 relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search the creative world at work"
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-full bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm lg:text-base"
            />
          </div>

          {/* Tabs - Hidden on mobile, visible on lg */}
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 font-medium text-sm rounded-full transition-colors whitespace-nowrap ${
                  activeTab === tab
                    ? 'bg-black text-white'
                    : 'bg-white text-gray-700 border border-gray-300 hover:border-gray-400'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Mobile Tabs Dropdown */}
          <div className="lg:hidden flex-shrink-0">
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="px-4 py-2 bg-black text-white font-medium text-sm rounded-full hover:bg-gray-800 transition-colors flex items-center gap-2"
            >
              {activeTab}
              <ChevronDown size={16} />
            </button>
            
            {isFilterOpen && (
              <div className="absolute top-full right-4 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                {tabs.map((tab, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setActiveTab(tab);
                      setIsFilterOpen(false);
                    }}
                    className={`block w-full text-left px-4 py-2 text-sm transition-colors ${
                      activeTab === tab
                        ? 'bg-black text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Filters & Sort Section */}
      <div className="px-4 sm:px-6 lg:px-8 py-4 border-t border-gray-200">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          
          {/* Filters */}
          <div className="w-full md:flex-1 overflow-x-auto">
            <div className="flex items-center gap-2 lg:gap-3 pb-2 md:pb-0">
              {filters.map((filter, index) => (
                <button
                  key={index}
                  className="flex items-center gap-2 px-3 lg:px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-700 hover:border-gray-400 hover:bg-gray-50 transition-colors text-sm whitespace-nowrap flex-shrink-0"
                >
                  <span>{filter.icon}</span>
                  <span className="hidden sm:inline">{filter.label}</span>
                  {filter.hasDropdown && (
                    <ChevronDown size={16} className="hidden sm:block" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Sort Dropdown */}
          <div className="w-full md:w-auto flex items-center gap-2">
            <span className="text-gray-700 font-medium text-sm hidden sm:inline">Sort</span>
            <button className="w-full md:w-auto px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-700 hover:border-gray-400 hover:bg-gray-50 transition-colors text-sm flex items-center justify-between gap-2">
              <span>Recommended</span>
              <ChevronDown size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
