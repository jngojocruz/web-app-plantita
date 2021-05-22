import React from 'react';

export interface ImageBoxInterface {
    resize: boolean;
    imagesrc: string;
    imagealt: string;
    product: string;
    price: number;
}

const ImageBox: React.FC<ImageBoxInterface> = ({ resize, imagesrc, imagealt, product, price }) => {
    return (
        <div className={resize === true ? "flex flex-col w-64 px-4 space-y-2" : "flex flex-col w-auto px-4 space-y-2"}>
            <img src={imagesrc} alt={imagealt} className={resize === true ? "w-60" : "w-96"}/>
            <span className="text-2xl font-semibold">{product}</span>
            <span className="text-lg font-medium">P{price}.00</span>
        </div>
    )
}

export default ImageBox;