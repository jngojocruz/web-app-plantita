import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

export interface ButtonIconInterface {
    iconType: IconDefinition;
}

const ButtonIcon: React.FC<ButtonIconInterface> = ({ iconType }) => {
    return (
        <a href="##" className="text-yellow-600 hover:text-yellow-700">
            <FontAwesomeIcon size="lg" icon={iconType}></FontAwesomeIcon>
        </a>
    )
}

export default ButtonIcon;