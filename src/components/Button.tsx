import React from 'react';

export interface ButtonInterface {
    buttonName: string;
    type:number;
}

const Button: React.FC<ButtonInterface> = ({ buttonName, type }) => {
    return (
        <button
            className={type === 1 
                        ? "whitespace-nowrap items-center justify-center px-5 py-3 border border-transparent rounded-md shadow-lg text-base font-medium text-white bg-green-800 hover:bg-green-900" 
                        : "whitespace-nowrap items-center justify-center px-5 py-3 border border-transparent rounded-md shadow-lg text-base font-medium text-green-800 bg-white hover:bg-gray-50"
                    }
        >
            {buttonName}
        </button>
    )
}

export default Button;