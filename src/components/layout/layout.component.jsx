import React from 'react';

const Layout = ({children, className}) => (
    <div className={`h-[44rem] aspect-[9/18] p-3 mx-auto , flex flex-col items-center , rounded-xl shadow-[0_5px_15px_3px_rgb(0_0_0/0.15)] ${className}`}>{children}</div>
)

export default Layout
