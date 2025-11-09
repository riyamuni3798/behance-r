import PostCard from './PostCard';

// Import all images
import onga from '../assets/images/onca.png';
import varne from '../assets/images/varne.png';
import sunday from '../assets/images/beetl.png';
import coolfish from '../assets/images/coolfish.png';

import nantes from '../assets/images/nantesmural.png';
import vogue from '../assets/images/vogue.png';
import never from '../assets/images/neverseattle.png';
import arab from '../assets/images/arab-c.png';

import bally from '../assets/images/bally.png';
import digital from '../assets/images/perfume.png';
import nestor from '../assets/images/nestor.png';
import increment from '../assets/images/magazine.png';

import bagel from '../assets/images/bagel.png';
import domo from '../assets/images/domo.png';
import tv from '../assets/images/tvshow.png';
import abcd from '../assets/images/abcd.png';

export default function PostGrid() {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-8">
      
      {/* Grid Container */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
        
        {/* Row 1 */}
        <PostCard 
          image={onga} 
          title="Onga Aguaíbo Gaaucho" 
          author="Onga" 
          likes="95" 
          views="616" 
          ownership={null}
        />

        <PostCard 
          image={varne} 
          title="VARNE Mahround Mosafy" 
          author="VARNE" 
          likes="95" 
          views="233" 
          ownership={null}
        />

        <PostCard 
          image={sunday} 
          title="Sunday Best & Someday Studio for HUETL" 
          author="Studio" 
          likes="144" 
          views="1k" 
          ownership="Multiple Owners"
        />

        <PostCard 
          image={coolfish} 
          title="cool fish" 
          author="Johann Kossa" 
          likes="345" 
          views="796" 
          ownership={null}
        />

        {/* Row 2 */}
        <PostCard 
          image={nantes} 
          title="NANTES MURAL" 
          author="OCU" 
          likes="164" 
          views="520" 
          ownership={null}
        />

        <PostCard 
          image={vogue} 
          title="VOGUE ARABIA 2025" 
          author="Agnieszka Hoertig" 
          likes="195" 
          views="616" 
          ownership={null}
        />

        <PostCard 
          image={never} 
          title="NEVER SETTLE - FREELETICS AD 2021" 
          author="Project" 
          likes="617" 
          views="5.3k" 
          ownership="Multiple Owners"
        />

        <PostCard 
          image={arab} 
          title="Arab Character Design" 
          author="string basel" 
          likes="336" 
          views="1.4k" 
          ownership={null}
        />

        {/* Row 3 */}
        <PostCard 
          image={bally} 
          title="Bally Sports | MLB 2022" 
          author="Birtnel Studio" 
          likes="317" 
          views="3.1k" 
          ownership={null}
        />

        <PostCard 
          image={digital} 
          title="A digital heaven for perfume enthusiasts" 
          author="Vsiana Studio" 
          likes="202" 
          views="1.6k" 
          ownership={null}
        />

        <PostCard 
          image={nestor} 
          title="Nestor Salinas" 
          author="Project" 
          likes="2.4k" 
          views="29.1k" 
          ownership="Multiple Owners"
        />

        <PostCard 
          image={increment} 
          title="Increment Magazine" 
          author="Myriam Warns" 
          likes="341" 
          views="3.1k" 
          ownership={null}
        />

        {/* Row 4 */}
        <PostCard 
          image={bagel} 
          title="Bagel - Metascale" 
          author="Project" 
          likes="95" 
          views="616" 
          ownership="Multiple Owners"
        />

        <PostCard 
          image={domo} 
          title="Domo - Brand Identity" 
          author="Project" 
          likes="62" 
          views="1.9k" 
          ownership="Multiple Owners"
        />

        <PostCard 
          image={tv} 
          title="TV Show Duos" 
          author="Joanna Randjelovic" 
          likes="1k" 
          views="13k" 
          ownership={null}
        />

        <PostCard 
          image={abcd} 
          title="ABCD Consulting" 
          author="Lisa Krause" 
          likes="332" 
          views="622" 
          ownership={null}
        />

      </div>
    </div>
  );
}
