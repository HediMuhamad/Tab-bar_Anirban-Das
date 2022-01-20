import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TabBarItem = ({onClick, current, icon, children}) => (
    <span onClick={()=>{onClick(icon.iconName)}} className={`px-4 py-2 scale-[0.85] , relative -top-0 , rounded-full border-white border-2 , font-semibold text-md , transition-all ease-out duration-500 ${ current===icon.iconName ? 'bg-[#f7ca2f] -top-6': '' }`}>
            <FontAwesomeIcon icon={icon} className={`pointer-events-none`} />
            <span className={`inline-flex w-0 overflow-hidden text-md pointer-events-none , transition-all ease-out duration-500 , ${ current===icon.iconName ? 'pl-2 w-32': '' }`}>{children}</span>
    </span>
)

export default TabBarItem;
