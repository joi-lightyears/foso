import React, { ReactNode } from 'react';
interface QuoteProps {
    children: string | ReactNode;
  }
function BlockQuote({ children }:
    QuoteProps
) {
    return (
        <div className="w-full pt-[12px] pb-[8px] px-[16px] relative border-l-[3px] border-[#15AA7A]">
            <p className="font-medium italic text-xl leading-7 tracking-normal text-[#33404A]">
                {children}
            </p>
        </div>
    );
}

export default BlockQuote;