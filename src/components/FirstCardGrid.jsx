
import FirstCard from './FirstCard';

import car from "../assets/images/car.png"
import old from "../assets/images/old.jpg"
import shadwo from "../assets/images/shadow.png"
import art from "../assets/images/art.png"


export default function FirstCardGrid() {



  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-8">
      
      {/* Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
    <FirstCard image={car} title=" 2d Arcade style experiments" author= "ARCADE STUDIO" likes="95" views="616"   />

    <FirstCard image={old} title=" Fashion Illustration Vol.22" author= "SEUNGWON HONG " likes="187" views="2k"   />

    <FirstCard image={shadwo} title=" A search for mother" author= "Bade Fuwa" likes="56" views="547"   />

    <FirstCard image={art} title=" Cow Cow Cow!" author= "Multiple Owners" likes="784" views="3k"   />
      </div>
    </div>
  );
}
