import React from 'react';

import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import ImageBox from '../components/ImageBox';
import FeatureSection from '../components/FeatureSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

import plant_1 from '../assets/plant_1.jpg';
import plant_2 from '../assets/plant_2.jpg';
import plant_3 from '../assets/plant_3.jpg';
import plant_4 from '../assets/plant_4.jpg';
import plant_5 from '../assets/plant_5.jpg';
import plant_6 from '../assets/plant_6.jpg';
import plant_7 from '../assets/plant_7.jpg';
import cover from '../assets/cover.png';



const Homepage: React.FC = () => {
  return (
    <div>
      
      <div>
        <Banner />
      </div>
      
      <div className="sticky top-0 flex w-screen py-4 justify-center bg-white">
        <Navbar />
      </div>
      
      <div className="flex flex-col w-screen py-8 justify-center">
        <span className="text-3xl font-medium text-center">So you want to be a Plantita?</span>
        <span className="text-6xl font-semibold text-center">Get your starter pack now!</span>
      </div>

      <div className="flex w-screen py-8 justify-center">
        <ImageBox resize={false} imagesrc={plant_1} imagealt="plant 1" product="ZZ Plant" price={199}></ImageBox>
        <ImageBox resize={false} imagesrc={plant_2} imagealt="plant 2" product="Succulent Assortment" price={175}></ImageBox>
        <ImageBox resize={false} imagesrc={plant_3} imagealt="plant 3" product="Philodendron Green" price={189}></ImageBox>
      </div>

      <div>
        <FeatureSection />
      </div>

      <div className="flex w-screen py-8 justify-center">
        <ImageBox resize={true} imagesrc={plant_4} imagealt="plant 4" product="The Linum Burgundy Bouquet" price={899}></ImageBox>
        <ImageBox resize={true} imagesrc={plant_5} imagealt="plant 5" product="Dried Pampas Stems" price={649}></ImageBox>
        <ImageBox resize={true} imagesrc={plant_6} imagealt="plant 6" product="Dried Pink Pampas Stems" price={699}></ImageBox>
        <ImageBox resize={true} imagesrc={plant_7} imagealt="plant 7" product="Dried Linum Bunch" price={785}></ImageBox>
      </div>
      
      <div>
        <CTASection />
      </div>

      <div className="flex w-screen justify-center">
        <img src={cover} alt="cover plant"></img>
      </div>

      <div className="flex w-screen justify-center">
        <Footer />
      </div>
    
    </div>
  );
}

export default Homepage;
