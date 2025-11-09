import AdvertisementCardGrid from './AdvertisementCardGrid';

export default function AdvertisementSection() {
  return (
    <div className="w-full bg-gray-50">
      
      <div className="px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        
        {/* Main Container */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          
          {/* Left Content */}
          <div className="lg:w-1/4 flex flex-col justify-center">
            
            {/* Title */}
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Create with Creative Cloud
            </h2>

            {/* Description */}
            <p className="text-base lg:text-lg text-gray-700 mb-8">
              Whatever you want to create, Adobe Creative Cloud has what you need to make it amazing.
            </p>

            {/* CTA Button */}
            <button className="w-fit px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors text-sm lg:text-base">
              See all plans
            </button>
          </div>

          {/* Right Grid */}
          <div className="lg:w-3/4">
            <AdvertisementCardGrid />
          </div>
        </div>
      </div>
    </div>
  );
}
