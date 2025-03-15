import React from 'react';
import { Racing_Sans_One } from 'next/font/google';

const racingSansOne = Racing_Sans_One({
  variable: '--font-racing-sans-one',
  weight: "400",
  subsets: ['latin', 'latin-ext']
});

interface QuoteProps {
  content: string;
}

function Quote({ content }: QuoteProps) {
    return (
        <div className="w-full pt-[12px] pb-[8px] px-[16px] relative">
            <div className={`
            absolute top-0 left-0 font-normal text-[96px] leading-6 tracking-normal text-center text-[#15AA7A]
            ${racingSansOne.className}`}>
            “
            </div>
            <p className="font-[500] italic text-[20px] leading-6 tracking-normal text-center text-[#33404A]">
                {content}
            </p>
        </div>
    );
}

export default Quote;