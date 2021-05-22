import React from 'react';
import Button from './Button';

const CTASection: React.FC = () => {
    return (
      <div className="bg-gray-100">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">15% Off Your Purchase</span>
            <span className="block text-green-800">The more you shop the more you unlock.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0 space-x-8">
            <Button buttonName="Join Now" type={1} />
            <Button buttonName="Learn More" type={2} />
          </div>
        </div>
      </div>
    )
  }

  export default CTASection;
  