

import { useState } from "react"

const FilterBar = () => {
  const [selectedFilters, setSelectedFilters] = useState({
    creative: false,
    tools: false,
    color: false,
    location: false,
    schools: false,
    assets: false,
    subscriptions: false,
  })

  const handleFilterClick = (filterName) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [filterName]: !prev[filterName],
    }))
  }

  const filters = [
    { id: "creative", label: "Creative Fields", icon: "✨" },
    { id: "tools", label: "Tools", icon: "🛠️" },
    { id: "color", label: "Color", icon: "🎨" },
    { id: "location", label: "Location", icon: "📍" },
    { id: "schools", label: "Schools", icon: "🎓" },
    { id: "assets", label: "Assets", icon: "💾" },
    { id: "subscriptions", label: "Subscriptions", icon: "⭐" },
  ]

  return (
    <div className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-6">
        {/* Search Bar */}
        <div className="mb-6 flex items-center gap-4">
          <input
            type="text"
            placeholder="Search the creative world at work"
            className="flex-1 px-4 py-3 bg-gray-100 rounded-lg text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="px-4 py-2 bg-black text-white text-sm rounded hover:bg-gray-800">Projects</button>
        </div>

        {/* Filter Buttons */}
        <div className="flex items-center gap-3 flex-wrap">
          {filters.map((filter) => (
            <FilterButton
              key={filter.id}
              label={filter.label}
              icon={filter.icon}
              isActive={selectedFilters[filter.id]}
              onClick={() => handleFilterClick(filter.id)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

const FilterButton = ({ label, icon, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-2 ${
        isActive ? "bg-black text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
      }`}
    >
      <span>{icon}</span>
      {label}
    </button>
  )
}


export default FilterBar