import React, { ReactNode } from 'react';

interface ParagraphProps {
  children: ReactNode;
  className?: string;
}

function Parag({ children, className }: ParagraphProps
) {
    return (
        <p className={`text-[#231F20] ${className}`}>
            {children}
        </p>
    );
}

export default Parag;