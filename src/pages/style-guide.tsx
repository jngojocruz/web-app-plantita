import React from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';

import ImageBox from '../components/ImageBox';
import FeatureSection from '../components/FeatureSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

import plant_4 from '../assets/plant_4.jpg';
import logo from '../assets/logo_name.png';
import icon_facebook from '../assets/icon_facebook.svg';
import icon_instagram from '../assets/icon_instagram.svg';
import icon_twitter from '../assets/icon_twitter.svg';
import iram from '../assets/iram.png';

import Button from '../components/Button';
import ButtonIcon from '../components/ButtonIcon';
import { faSearch, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import SVGIcons from '../components/SVGIcons';
import SearchBox from '../components/SearchBox';
import PopOver from '../components/PopOver';
import { Link } from 'react-router-dom';
import IconBar from '../components/IconBar';



const StyleGuide: React.FC = () => {
  return (
    <div>
        <div className="sticky top-0 flex w-screen py-4 justify-center bg-white">
            <Navbar />
        </div>

        <div>
            <div className="flex flex-col w-screen py-8 space-y-8 justify-center">
                <span className="text-6xl font-semibold text-center">Style Guide</span>
                <span className="text-3xl font-medium text-center">CMSC 173 Exercise 3 • Gojo Cruz</span>
            </div>
        </div>

        <div className="flex w-screen justify-center">
          <div className="flex flex-col space-y-4 w-2/12">
            <span className="py-2 pl-2 text-xl text-gray-500 font-semibold">FOUNDATIONS</span>
            <a href="#color-section" className="py-2 pl-2 text-base text-gray-500 font-medium hover:bg-gray-100">Color</a>
            <a href="#grid-section" className="py-2 pl-2 text-base text-gray-500 font-medium hover:bg-gray-100">Grid System</a>
            <a href="#typo-section" className="py-2 pl-2 text-base text-gray-500 font-medium hover:bg-gray-100">Typography</a>
            <div className="p-2"><hr className="text-gray-500"></hr></div>
            <span className="py-2 pl-2 text-xl text-gray-500 font-semibold">COMPONENTS</span>
            <a href="#button-section" className="py-2 pl-2 text-base text-gray-500 font-medium hover:bg-gray-100">Button</a>
            <a href="#buttonIcon-section" className="py-2 pl-2 text-base text-gray-500 font-medium hover:bg-gray-100">Button Icon</a>
            <a href="#svgIcons-section" className="py-2 pl-2 text-base text-gray-500 font-medium hover:bg-gray-100">SVG Icons</a>
            <a href="#searchBar-section" className="py-2 pl-2 text-base text-gray-500 font-medium hover:bg-gray-100">Search Bar</a>
            <a href="#popOver-section" className="py-2 pl-2 text-base text-gray-500 font-medium hover:bg-gray-100">Popover</a>
            <a href="#navBar-section" className="py-2 pl-2 text-base text-gray-500 font-medium hover:bg-gray-100">Navbar</a>
            <a href="#footer-section" className="py-2 pl-2 text-base text-gray-500 font-medium hover:bg-gray-100">Footer</a>
            <a href="#imageBox-section" className="py-2 pl-2 text-base text-gray-500 font-medium hover:bg-gray-100">Image Box</a>
            <a href="#banner-section" className="py-2 pl-2 text-base text-gray-500 font-medium hover:bg-gray-100">Banner</a>
            <a href="#cta-section" className="py-2 pl-2 text-base text-gray-500 font-medium hover:bg-gray-100">CTA Section</a>
            <a href="#feature-section" className="py-2 pl-2 text-base text-gray-500 font-medium hover:bg-gray-100">Feature Section</a>
            <a href="#about-section" className="py-2 pl-2 text-base text-gray-500 font-medium hover:bg-gray-100">About</a>
          </div>

          <div className="flex flex-col w-7/12">

            {/** COLOR */}

            <p id="color-section" className="p-2 text-4xl text-black font-semibold">COLOR</p>
            <p className="p-2 pt-10 text-2xl text-black font-semibold">Brand</p>
            <div className="flex flex-row space-x-4">
              <div className="flex flex-col p-6 w-1/2 bg-yellow-600">
                  <span className="pb-1 text-xl text-white font-medium">Orange</span>
                  <span className="pb-6 text-base text-white font-medium">bg-yellow-600</span>
                  <span className="pb-1 text-base text-white font-normal">--tw-bg-opacity: 1;</span>
                  <span className="text-base text-white font-normal">background-color: rgba(217, 119, 6, var(--tw-bg-opacity));</span>
                </div>
                
                <div className="flex flex-col p-6 w-1/2 bg-green-800">
                  <span className="pb-1 text-xl text-white font-medium">Green</span>
                  <span className="pb-6 text-base text-white font-medium">bg-green-800</span>
                  <span className="pb-1 text-base text-white font-normal">--tw-bg-opacity: 1;</span>
                  <span className="text-base text-white font-normal">background-color: rgba(6, 95, 70, var(--tw-bg-opacity));</span>
              </div>
            </div>

            <p className="p-2 pt-10 text-2xl text-black font-semibold">Neutral Colors</p>
            <div className="flex flex-row space-x-4">
              <div className="flex flex-col p-6 w-1/2 bg-gray-500">
                  <span className="pb-1 text-xl text-white font-medium">Gray 1</span>
                  <span className="pb-6 text-base text-white font-medium">bg-gray-500</span>
                  <span className="pb-1 text-base text-white font-normal">--tw-bg-opacity: 1;</span>
                  <span className="text-base text-white font-normal">background-color: rgba(107, 114, 128, var(--tw-bg-opacity));</span>
              </div>

              <div className="flex flex-col p-6 w-1/2 bg-gray-100">
                  <span className="pb-1 text-xl text-black font-medium">Gray 2</span>
                  <span className="pb-6 text-base text-black font-medium">bg-gray-100</span>
                  <span className="pb-1 text-base text-black font-normal">--tw-bg-opacity: 1;</span>
                  <span className="text-base text-black font-normal">background-color: rgba(243, 244, 246, var(--tw-bg-opacity));</span>
              </div>
            </div>
            
            {/** GRID */}
            <div className="py-4 pt-10">
              <hr className="text-gray-500"></hr>
            </div>

            <p id="grid-section" className="p-2 text-4xl text-black font-semibold">GRID SYSTEM</p>
            <p className="p-2 pt-10 text-2xl text-black font-semibold">Grid Combinations</p>
            
            <div className="flex flex-row pt-4+">
              <div className="flex w-32 p-4 bg-green-400">
                <span className="flex w-full p-4 bg-green-300 justify-center font-normal">1/8</span>
              </div>
              <div className="flex w-3/4 p-4 bg-yellow-400">
                <span className="flex w-full p-4 bg-yellow-300 justify-center font-normal">3/4</span>
              </div>
              <div className="flex w-32 p-4 bg-green-400">
                <span className="flex w-full p-4 bg-green-300 justify-center font-normal">1/8</span>
              </div>
            </div>

            <div className="flex flex-row pt-4">
              <div className="flex w-32 p-4 bg-green-400">
                <span className="flex w-full p-4 bg-green-300 justify-center font-normal">1/8</span>
              </div>
              <div className="flex w-2/12 p-4 bg-yellow-400">
                <span className="flex w-full p-4 bg-yellow-300 justify-center font-normal">2/12</span>
              </div>
              <div className="flex w-7/12 p-4 bg-yellow-400">
                <span className="flex w-full p-4 bg-yellow-300 justify-center font-normal">7/12</span>
              </div>
              <div className="flex w-32 p-4 bg-green-400">
                <span className="flex w-full p-4 bg-green-300 justify-center font-normal">1/8</span>
              </div>
            </div>
          
            {/** TYPOGRAPHY */}
            <div className="py-4 pt-10">
              <hr className="text-gray-500"></hr>
            </div>

            <p id="typo-section" className="p-2 text-4xl text-black font-semibold">TYPOGRAPHY</p>
            <p className="p-2 pt-10 text-2xl text-black font-semibold">Intro</p>

            <img src={logo} alt="logo" className="py-4 w-full"></img>
            <span className="pb-6 text-xl text-black font-medium">Font: Nunito Light</span>

            <p className="py-6 text-6xl text-black font-medium">Sans is our supporting font.</p>
            <p className="pb-6 text-base">Use font-sans to apply a web safe sans-serif font family</p>
            <p className="pb-2 text-base font-semibold">Properties:</p>
            <p className="pb-2 text-base">font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";</p>
          
            <div className="py-4 pt-10">
              <hr className="text-gray-500"></hr>
            </div>

            <div className="flex flex-row space-x-80">
              <div>
                {/** BUTTON */}

                <p id="button-section" className="p-2 text-4xl text-black font-semibold">BUTTON</p>
                <p className="p-2 pt-10 text-2xl text-black font-semibold">Types</p>

                <div className="pt-10 pb-4 mt-8 flex lg:mt-0 lg:flex-shrink-0 space-x-8">
                  <Button buttonName="Join Now" type={1} />
                  <Button buttonName="Learn More" type={2} />
                </div>
              </div>
              
              <div>
                 {/** BUTTON ICON */}

                <p id="buttonIcon-section" className="p-2 text-4xl text-black font-semibold">BUTTON ICON</p>
                <p className="p-2 pt-10 text-2xl text-black font-semibold">Used Icons</p>

                <div className="flex items-center pt-4 pb-4">
                  <div className="px-4 text-yellow-600">
                      <ButtonIcon iconType={faSearch}></ButtonIcon>
                  </div>

                  <div className="px-4 text-yellow-600">
                      <ButtonIcon iconType={faUser}></ButtonIcon>
                  </div>

                  <div className="px-4">
                      <ButtonIcon iconType={faShoppingCart}></ButtonIcon>
                  </div>
                </div>
              </div>
             
            </div>

            <div className="py-4 pt-10">
              <hr className="text-gray-500"></hr>
            </div>

            <div className="flex flex-row space-x-96">
              
              <div>
                {/** SVG ICON */}

                <p id="svgIcons-section" className="p-2 text-4xl text-black font-semibold">SVG ICON</p>
                <p className="p-2 pt-10 text-2xl text-black font-semibold">Social Media Icons</p>

                <div className="flex flex-row p-2 space-x-6">
                  <SVGIcons icon={icon_facebook} url="https://www.facebook.com/jigojocruz/"></SVGIcons>
                  <SVGIcons icon={icon_instagram} url="https://www.instagram.com/jamlechiramgc/"></SVGIcons>
                  <SVGIcons icon={icon_twitter} url="https://twitter.com/jamlech_iram"></SVGIcons>
                </div>
              </div>
              
              <div>
                {/** SEARCH BAR */}

                <p id="searchBar-section" className="p-2 text-4xl text-black font-semibold">SEARCH BAR</p>
                <p className="p-2 pt-10 text-2xl text-black font-semibold"></p>

                <SearchBox />
              </div>
            </div>
            



            {/** POPOVER */}
            <div className="py-4 pt-10">
              <hr className="text-gray-500"></hr>
            </div>

            <p id="popOver-section" className="p-2 text-4xl text-black font-semibold">POPOVER</p>
            <p className="p-2 pt-10 text-2xl text-black font-semibold">Click to try!</p>
            <p className="pl-2 text-base">Idea from Headless UI Components</p>
            <a href="https://headlessui.dev/react/popover" target="_blank" rel="noreferrer" className="pl-2 hover:underline">See here</a>
            <div className="flex h-96 w-full justify-center bg-gray-100">
              <PopOver category="pot"></PopOver>
            </div>

            {/** NAVBAR */}
            <div className="py-4 pt-10">
              <hr className="text-gray-500"></hr>
            </div>

            <p id="navBar-section" className="p-2 text-4xl text-black font-semibold">NAVBAR</p>
            <p className="p-2 pt-10 text-2xl text-black font-semibold">Composed of the logo, popovers, and iconbar</p>
            
            <div className="flex pt-10 w-full h-16 items-center space-x-4 bg-white">
                <Link to="/">
                    <img src={logo} alt="logo" className="h-14"></img>
                </Link>

                <PopOver category='pot'></PopOver>
                
                <PopOver category='plant'></PopOver>
                
                <Link to="/style-guide" className="pl-12">
                    <span className="text-green-800 font-medium">Style Guide</span>
                </Link>
                    
                <div className="">
                    <IconBar></IconBar>
                </div>
            </div>

            {/** FOOTER */}
            <div className="py-4 pt-10">
              <hr className="text-gray-500"></hr>
            </div>

            <p id="footer-section" className="p-2 text-4xl text-black font-semibold">FOOTER</p>
            <p className="p-2 pt-10 text-2xl text-black font-semibold"></p>

            <div>
              <div className="flex justify-evenly bg-gray-100 pb-40">
                  <div className="flex flex-col space-y-2">
                      <span className="pt-20 pb-4 font-semibold text-2xl">HELP</span>
                      <a href="##" className="text-gray-500 hover:underline">About Plantita</a>
                      <a href="##" className="text-gray-500 hover:underline">FAQs</a>
                      <a href="##" className="text-gray-500 hover:underline">COVID-19 FAQs</a>
                      <a href="##" className="text-gray-500 hover:underline">Privacy Policy</a>
                      <a href="##" className="text-gray-500 hover:underline">Terms and Conditions</a>
                  </div>

                  <div className="flex flex-col space-y-2">
                      <span className="pt-20 pb-4 font-semibold text-2xl">CONNECT</span>
                      <a href="##" className="text-gray-500">301 Suba, Majayjay, Laguna</a>
                      <a href="##" className="text-black underline">+63 9202767689</a>
                      <a href="##" className="text-gray-500">(Mon-Fri, 9:00am-6:00pm)</a>
                      <a href="##" className="text-gray-500">jngojocruz@up.edu.ph</a>
                      <a href="##" className="text-gray-500">CMSC 173 Exercise 3</a>
                  </div>

                  <div className="flex flex-col space-y-2">
                      <span className="pt-20 pb-4 font-semibold text-2xl">LIKE BEING FIRST?</span>
                      <a href="##" className="text-gray-500">Get can't-miss style news, before everybody else.</a>
                      <input
                          type="text"
                          className="focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent block w-full p-2 text-base border-2 border-gray-200 rounded-md"
                          placeholder="Enter your email"
                      />
                      <img src={logo} alt="logo" className="w-72" />
                  </div>
              </div>
            </div>

            {/** IMAGE BOX */}
            <div className="py-4 pt-10">
              <hr className="text-gray-500"></hr>
            </div>

            <p id="imageBox-section" className="p-2 text-4xl text-black font-semibold">IMAGE BOX</p>
            <p className="p-2 pt-10 text-2xl text-black font-semibold">Composed of an image and texts</p>

            <div className="flex pt-10 justify-center border-2 border-gray-100 bg-gray-50">
              <ImageBox resize={true} imagesrc={plant_4} imagealt="plant 4" product="The Linum Burgundy Bouquet" price={899}></ImageBox>
            </div>

            {/** BANNER */}
            <div className="py-4 pt-10">
              <hr className="text-gray-500"></hr>
            </div>

            <p id="banner-section" className="p-2 text-4xl text-black font-semibold">BANNER</p>
            <p className="p-2 pt-10 text-2xl text-black font-semibold">Used for promotions and updates</p>
            <p className="pl-2 text-base">Idea from Tailwind UI Components</p>
            <a href="https://tailwindui.com/" target="_blank" rel="noreferrer" className="pl-2 hover:underline">See here</a>

            <div>
              <Banner />
            </div>
            
            {/** CTA */}
            <div className="py-4 pt-10">
              <hr className="text-gray-500"></hr>
            </div>

            <p id="cta-section" className="p-2 text-4xl text-black font-semibold">CTA SECTION</p>
            <p className="p-2 pt-10 text-2xl text-black font-semibold">Call To Action</p>
            <p className="p-2 pb-2 text-base font-semibold">A call to action (CTA) is a prompt on a website that tells the user to take some specified action.</p>
            <p className="pl-2 text-base">Idea from Tailwind UI Components</p>
            <a href="https://tailwindui.com/" target="_blank" rel="noreferrer" className="pl-2 hover:underline">See here</a>

            <div>
              <CTASection />
            </div>

            {/** FEATURE */}
            <div className="py-4 pt-10">
              <hr className="text-gray-500"></hr>
            </div>

            <p id="feature-section" className="p-2 text-4xl text-black font-semibold">FEATURE SECTION</p>
            <p className="p-2 pt-10 text-2xl text-black font-semibold">Featuring Plantita Store</p>
            <p className="pl-2 text-base">Idea from Tailwind UI Components</p>
            <a href="https://tailwindui.com/" target="_blank" rel="noreferrer" className="pl-2 hover:underline">See here</a>

            <div>
              <FeatureSection />
            </div>
  
            {/** ABOUT */}
            <div className="py-4 pt-10">
              <hr className="text-gray-500"></hr>
            </div>

           

            <div className="flex flex-row space-x-24 bg-gradient-to-l from-gray-100">
              <div>
                <p id="about-section" className="p-2 pt-4 text-4xl text-black font-semibold">ABOUT</p>
                <p className="p-2 pt-10 text-2xl text-black font-semibold">Jamlech Iram N. Gojo Cruz</p>
                <p className="pl-2 text-base font-medium">University of the Philippines Los Baños</p>
                <p className="pl-2 pt-4 text-base font-medium">CMSC 137 - Human-Computer Interaction</p>
                <p className="pl-2 text-base font-medium">Exercise 03</p>
                <p className="pl-2 text-base font-medium">May 2021</p>
              </div>
              <div>
                <img src={iram} alt="iram" className="w-40"></img>
              </div>
            </div>

          </div>
        </div>

        <div className="flex w-screen justify-center">
          <Footer />
        </div>
    </div>
  );
}

export default StyleGuide;