import React from 'react';

import ButtonIcon from '../components/ButtonIcon';
import { faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import SearchBox from './SearchBox';

const IconBar: React.FC = () => {
    return (
        <div className="flex items-center">
            <SearchBox></SearchBox>

            <div className="px-4 text-yellow-600">
                <ButtonIcon iconType={faUser}></ButtonIcon>
            </div>

            <div className="px-4">
                <ButtonIcon iconType={faShoppingCart}></ButtonIcon>
            </div>
        </div>
    )
}

export default IconBar;