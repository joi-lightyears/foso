import { ArrowUpRight } from "@/app/IconsSvg";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from 'framer-motion';
function Banner2() {
    return (
        <motion.div
        layout
        className=" w-full  rounded-[24px] bg-promo-banner overflow-hidden text-white py-[37.59px]">
                    
                    <Image 
                          src="/assets/images/promo-banner/clouds.png" 
                          alt="FMRP Robot" 
                          width={472.09} 
                          height={399.4}
                          className="w-full"
                        />
                    <div className="relative flex flex-col items-center w-full justify-between p-[24px] gap-[32px]">
                        
                      <h3 className="font-bold text-[20px] leading-[150%] tracking-normal text-white">Gia nhập cộng đồng FMRP Việt – 
                      Kết nối, chia sẻ, cùng phát triển!</h3>

                        
                        <Link href="/" className="w-full h-[50px] rounded-[40px] pt-[8px] pr-[24px] pb-[8px] pl-[24px] gap-[32px] border-2 border-white font-bold text-[14px] leading-[150%] tracking-normal capitalize text-white flex justify-between items-center whitespace-nowrap">
                          Tham Gia Ngay
                          <ArrowUpRight className="w-[18px] h-[18px]"/>
                        </Link>
                    </div>
                  </motion.div>
    );
}

export default Banner2;