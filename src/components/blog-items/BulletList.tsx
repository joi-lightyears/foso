import React, { ReactNode } from 'react';

interface BulletListProps {
  children: ReactNode;
  className?: string;
}

function BulletList({ children, className = '' }: BulletListProps) {
    return (
        <ul className={`space-y-1 ${className}`}>
            {children}
        </ul>
    );
}

export default BulletList;