import React, { ReactNode } from 'react';
interface SectionTitleProps {
    children: ReactNode;
    className?: string;
    id?: string;
  }
function SectionTitle({ children, className, id }: SectionTitleProps) {
    return (
        <h2 id={id} className={`text-2xl font-bold text-[#15AA7A] ${className}`}>
            {children}
        </h2>
    );
}

export default SectionTitle;