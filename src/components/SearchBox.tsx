import React from 'react';

import ButtonIcon from '../components/ButtonIcon';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBox: React.FC = () => {
    return (
        <div className="flex items-center">
            <div className="relative rounded-md shadow-sm">
                <input
                    type="text"
                    className="focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent block w-full p-2 text-base border-2 border-gray-200 rounded-md"
                    placeholder="Search"
                />
            </div>
            <div className="px-4 text-yellow-600">
                <ButtonIcon iconType={faSearch}></ButtonIcon>
            </div>
        </div>
    )
}

export default SearchBox;