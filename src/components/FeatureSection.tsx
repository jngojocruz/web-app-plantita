import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faLeaf, faTint, faHeart } from '@fortawesome/free-solid-svg-icons';

const features = [
  {
    name: 'Joy',
    description:
      'Every exposure to nature—from caring for plants to just sharing a space with organic elements—promotes a sense of peace and enhances overall wellbeing.',
    ic: faSun,
  },
  {
    name: 'Connection',
    description:
      'Relationships define the quality of your life. We’re here to nurture connections between people and plants and the places they both thrive.',
    ic: faLeaf,
  },
  {
    name: 'Growth',
    description:
      'Cultivating our spaces—both the places we inhabit and our internal realms, allows us to reflect, restore, and transform for the better.',
    ic: faTint,
  },
  {
    name: 'Care',
    description:
      'Being plantitos and plantitas is actually good for our mental health',
    ic: faHeart,
  },
]

const FeatureSection: React.FC = () =>  {
  return (
    <div className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-green-800 font-semibold tracking-wide uppercase">Feature</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            The rise of plantita
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          The stay-sane-at-home movement has found its newest preoccupation: growing plants
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name}>
                <dt>
                  <div className="float-left flex items-center justify-center h-12 w-12 rounded-md bg-green-800 text-white">
                    <FontAwesomeIcon icon={feature.ic} className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

export default FeatureSection;
