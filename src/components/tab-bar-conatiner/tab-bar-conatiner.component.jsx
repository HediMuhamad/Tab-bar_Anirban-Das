import React from 'react';

const TabBar = ({children}) => (
  <div
    className='w-full h-12 , flex items-center justify-evenly mt-auto , relative , rounded-lg bg-white shadow-sm shadow-gray-700/30'>
      {children}
  </div>
);

export default TabBar;
