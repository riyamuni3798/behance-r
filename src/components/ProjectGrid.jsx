

import { useState } from "react"
import ProjectCard from "./ProjectCard" 

const ProjectGrid = () => {
  const [projects] = useState([
    {
      id: 1,
      imageUrl: "/2d-arcade-style-car-illustration-red-orange-blue.jpg",
      title: "2d Arcade style experiments",
      creatorName: "ARCADE STUDIO",
      likes: 99,
      views: 1800,
      saves: 89,
    },
    {
      id: 2,
      imageUrl: "/fashion-illustration-woman-with-flowers.jpg",
      title: "Fashion Illustration Vol.22",
      creatorName: "SUKIYOVICH HONG",
      likes: 187,
      views: 2900,
      saves: 112,
    },
    {
      id: 3,
      imageUrl: "/minimalist-bw-portrait.png",
      title: "A search for mother",
      creatorName: "Bishi Kova",
      likes: 98,
      views: 947,
      saves: 78,
    },
    {
      id: 4,
      imageUrl: "/colorful-cow-illustration-children-art.jpg",
      title: "Cow Cow Cow!",
      creatorName: "Multiple Owners",
      likes: 784,
      views: 3000,
      saves: 234,
    },
    {
      id: 5,
      imageUrl: "/vibrant-abstract-colorful-gradient-art.jpg",
      title: "Creative Cloud All Apps",
      creatorName: "Adobe Creative",
      likes: 456,
      views: 5400,
      saves: 345,
    },
    {
      id: 6,
      imageUrl: "/modern-photoshop-design-tool-interface.jpg",
      title: "Photoshop - Image editing & design",
      creatorName: "Adobe Design Team",
      likes: 623,
      views: 7200,
      saves: 412,
    },
    {
      id: 7,
      imageUrl: "/geometric-abstract-blue-pink-shapes.jpg",
      title: "Illustrator - Logos, icons & illustration",
      creatorName: "Adobe Labs",
      likes: 534,
      views: 6100,
      saves: 389,
    },
    {
      id: 8,
      imageUrl: "/dark-video-editing-interface-premiere-pro.jpg",
      title: "Premiere Pro - Video editing",
      creatorName: "Adobe Video Studio",
      likes: 712,
      views: 8500,
      saves: 521,
    },
  ])

  const handleCardClick = (projectId) => {
    console.log("[v0] Project clicked:", projectId)
  }

  return (
    <main className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Section Title */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Create with Creative Cloud</h2>
          <p className="text-gray-600 text-sm max-w-md">
            Whatever you want to create, Adobe Creative Cloud has what you need to make it amazing.
          </p>
          <button className="mt-4 px-6 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700">
            See all plans
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              imageUrl={project.imageUrl}
              title={project.title}
              creatorName={project.creatorName}
              likes={project.likes}
              views={project.views}
              saves={project.saves}
              onClick={() => handleCardClick(project.id)}
            />
          ))}
        </div>
      </div>
    </main>
  )
}


export default ProjectGrid