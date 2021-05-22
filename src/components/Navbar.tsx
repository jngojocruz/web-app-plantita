import React from 'react';
import { Link } from 'react-router-dom';
import PopOver from '../components/PopOver';

import logo_name from '../assets/logo_name.png';
import IconBar from './IconBar';

const Navbar: React.FC = () => {
    return (
        <div className="flex w-3/4 h-16 items-center space-x-4 bg-white">
            <Link to="/">
                <img src={logo_name} alt="logo" className="h-14"></img>
            </Link>

            <PopOver category='pot'></PopOver>
            
            <PopOver category='plant'></PopOver>
            
            <Link to="/style-guide" className="pl-12">
                <span className="text-green-800 font-medium">Style Guide</span>
            </Link>
                
            <div className="pl-64">
                <IconBar></IconBar>
            </div>
        </div>
    )
}

export default Navbar;