import React from 'react';

export interface SVGIconsInterface {
    icon: string;
    url: string;
}

const SVGIcons: React.FC<SVGIconsInterface> = ({ icon, url }) => {
    return (
        <a 
            href={url}
            target="_blank"
            rel="noreferrer"
        >
            <img src={icon} alt="soc med logo" className="h-8"></img>
        </a>
    )
}

export default SVGIcons;