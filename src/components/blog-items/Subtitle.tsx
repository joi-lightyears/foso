import React, { ReactNode } from 'react';

interface SubTitleProps {
    children: ReactNode;
    className?: string;
    id?: string;
    number?: string;
}


function Subtitle({ children, className, id, number }: SubTitleProps) {
    return (
        <h3 
            id={id}
            className={`font-medium text-base leading-6 tracking-normal text-[#15AA7A] ${className}`}
        >
            {number && <span className="mr-1">{number}</span>}
            {children}
        </h3>
    );
}

export default Subtitle;