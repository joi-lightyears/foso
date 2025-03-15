import React from 'react';
import Image from 'next/image';

interface PictureProps {
  src: string;
  alt: string;
  description?: string;
  width?: number;
  height?: number;
}

function PictureSection({ src, alt, description, width, height }: PictureProps) {
    return (
        <div className="w-full h-auto flex flex-col justify-center items-center gap-2">
            <Image 
                src={src} 
                alt={alt} 
                width={width? width : 500} 
                height={height? height : 300}
                className="w-full object-cover"
            />
            {description && (
                <p className="font-normal text-base leading-6 tracking-normal text-[#667F93]">
                {description}
                </p>
            )}
        </div>
    );
}

export default PictureSection;