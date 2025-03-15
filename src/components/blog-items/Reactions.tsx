import React from 'react';
import Image from 'next/image';

type ReactionType = 'Hữu ích' | 'Yêu thích' | 'Thú vị' | 'Bất ngờ' | 'Nhàm chán' | 'Tức giận';
interface ReactionProps {
    type: ReactionType;
    count: number;
    active?: boolean;
    className?: string;
}

function Reactions({ type, count, active = false, className = "" }: ReactionProps) {
    const getImageSrc = (type: ReactionType): string => {
        switch (type) {
            case 'Hữu ích':
                return '/assets/images/thumb.png';
            case 'Yêu thích':
                return '/assets/images/greenHeart.png';
            case 'Thú vị':
                return '/assets/images/starStruck.png';
            case 'Bất ngờ':
                return '/assets/images/hushedFace.png';
            case 'Nhàm chán':
                return '/assets/images/yawning.png';
            case 'Tức giận':
                return '/assets/images/pouting.png';
            default:
                return '/assets/images/thumb.png';
        }
    };
    
    const imageSrc = getImageSrc(type);
    
    
    // Determine text color and border based on active state
    const textColor = active ? "text-[#10805B]" : "text-[#33404A]";
    const borderStyle = active ? "border border-[#10805B]" : "border border-transparent";
    
    return (
        <div className={`flex flex-col justify-center items-center gap-1 p-[4px] w-[90px] cursor-pointer rounded-md ${borderStyle} ${className}`}>
            <div className="w-12 h-12">
                <Image 
                    src={imageSrc}
                    alt={`${type} reaction`}
                    width={500} 
                    height={300}
                    className="object-cover"
                />
            </div>
            <p className={`font-bold text-base leading-6 tracking-normal text-center ${textColor}`}>{count}</p>
            <p className={`font-normal text-sm leading-6 tracking-normal text-center whitespace-nowrap ${textColor}`}>{type}</p>
        </div>
    );
}

export default Reactions;