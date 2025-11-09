
import { ThumbsUp, Eye } from 'lucide-react';

export default function FirstCard({ image, title, author, likes, views}) {
  return (
    <div className="group cursor-pointer">
      
      {/* Image Container */}
      <div className="relative overflow-hidden rounded-lg aspect-[4/3] bg-gray-200">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
      </div>

      {/* Content Section */}
      <div className="mt-3   ">
        
<div className=' flex justify-between px-4 '>

 <div>
           {/* Title */}
        <h3 className="font-semibold text-sm lg:text-base text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>

        {/* Author */}
        <p className="text-xs lg:text-sm text-gray-600 mt-1">
          {author}
        </p>
 </div>

        {/* Stats */}
        <div className="flex items-center gap-4 -mt-4 text-xs lg:text-sm text-gray-700">
          
          {/* Likes */}
          <div className="flex items-center gap-1 hover:text-blue-600 transition-colors">
            <ThumbsUp size={14} />
            <span>{likes}</span>
          </div>

          {/* Views */}
          <div className="flex items-center gap-1 hover:text-blue-600 transition-colors">
            <Eye size={14} />
            <span>{views}</span>
          </div>

         
        
        </div>

</div>
      </div>
    </div>
  );
}
