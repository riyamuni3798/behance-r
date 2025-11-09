import AdvertisementCard from './AdvertisementCard';

// Import images
import cloudImage from '../assets/images/ccicon.png';
import photoshopImage from '../assets/images/psimg.jpg';
import illustratorImage from '../assets/images/aiimg.jpg';
import premiereImage from '../assets/images/primg.jpg';

// Import icons
import cloudIcon from '../assets/images/ccicon.png';
import photoshopIcon from '../assets/images/psicon.png';
import illustratorIcon from '../assets/images/aiicon.png';
import premiereIcon from '../assets/images/pricon.png';

export default function AdvertisementCardGrid() {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-8">
      
      {/* Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        
        <AdvertisementCard 
          image={cloudImage} 
          appIcon={cloudIcon} 
          appName="Creative Cloud All Apps" 
          appType="Creative Tools" 
          description="Easily create stunning social graphics, short videos, and web pages that make you stand out." 
        />

        <AdvertisementCard 
          image={photoshopImage} 
          appIcon={photoshopIcon} 
          appName="Photoshop - Image editing & design" 
          appType="Image Editing" 
          description="Create beautiful images, graphics, paintings, and 3D artwork on your desktop or iPad." 
        />

        <AdvertisementCard 
          image={illustratorImage} 
          appIcon={illustratorIcon} 
          appName="Illustrator - Logos, icons & illustration" 
          appType="Vector Design" 
          description="Create beautiful designs, icons, and more — then use them anyplace at any size." 
        />

        <AdvertisementCard 
          image={premiereImage} 
          appIcon={premiereIcon} 
          appName="Premiere Pro - Video editing" 
          appType="Video Editing" 
          description="Create everything from social clips to feature films with the leading video editor." 
        />

      </div>
    </div>
  );
}
