
import React, { ReactNode } from 'react';

interface BulletProps {
  children: ReactNode;
  className?: string;
}
function Bullet({ children, className = '' }: BulletProps) {
    return (
        <li className={`flex items-start ${className}`}>
            <span className="text-[#231F20] font-medium mr-2 mt-1 flex-shrink-0">•</span>
            <span className="text-[#231F20]">{children}</span>
        </li>
    );
}

export default Bullet;