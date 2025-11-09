export default function AdvertisementCard({ 
  image, 
  title, 
  description, 
  appIcon, 
  appName, 
  appType 
}) {
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
      <div className="mt-4">
        
        <div className="flex gap-3 px-0">
          
          {/* App Icon */}
          <div className="flex-shrink-0 w-10 h-10 lg:w-12 lg:h-12 rounded-lg overflow-hidden bg-gray-300">
            <img
              src={appIcon}
              alt={appName}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text Content */}
          <div className="flex-1 min-w-0">
            
            {/* App Name */}
            <h3 className="font-semibold text-sm lg:text-base text-gray-900 line-clamp-1">
              {appName}
            </h3>

            {/* App Type */}
            <p className="text-xs lg:text-sm text-gray-600 mt-0.5">
              {appType}
            </p>

            {/* Description */}
            <p className="text-xs lg:text-sm text-gray-700 mt-2 line-clamp-2">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
