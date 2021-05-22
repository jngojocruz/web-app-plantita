import React from 'react';
import SVGIcons from './SVGIcons';

import icon_facebook from '../assets/icon_facebook.svg';
import icon_instagram from '../assets/icon_instagram.svg';
import icon_twitter from '../assets/icon_twitter.svg';
import logo from '../assets/logo_name.png';

const Footer: React.FC = () => {
    return (
        <div>
            <div className="w-screen py-4 border-t-2 border-b-2 border-gray-300">
                <div className="flex flex-row justify-center space-x-4">
                    <div>
                        <span className="text-lg">Find us on:</span>
                    </div>

                    <div className="flex flex-row justify-center space-x-2">
                        <SVGIcons icon={icon_facebook} url="https://www.facebook.com/jigojocruz/"></SVGIcons>
                        <SVGIcons icon={icon_instagram} url="https://www.instagram.com/jamlechiramgc/"></SVGIcons>
                        <SVGIcons icon={icon_twitter} url="https://twitter.com/jamlech_iram"></SVGIcons>
                    </div>
                </div>
            </div>
            
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
                    <span className="text-gray-500">301 Suba, Majayjay, Laguna</span>
                    <span className="text-black underline">+63 9202767689</span>
                    <span className="text-gray-500">(Mon-Fri, 9:00am-6:00pm)</span>
                    <span className="text-gray-500">jngojocruz@up.edu.ph</span>
                    <span className="text-gray-500">CMSC 173 Exercise 3</span>
                </div>

                <div className="flex flex-col space-y-2">
                    <span className="pt-20 pb-4 font-semibold text-2xl">LIKE BEING FIRST?</span>
                    <span className="text-gray-500">Get can't-miss style news, before everybody else.</span>
                    <input
                        type="text"
                        className="focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent block w-full p-2 text-base border-2 border-gray-200 rounded-md"
                        placeholder="Enter your email"
                    />
                    <img src={logo} alt="logo" className="w-72" />
                </div>
            </div>
        </div>
    )
}

export default Footer;