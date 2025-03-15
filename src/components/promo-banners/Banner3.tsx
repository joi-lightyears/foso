import { ArrowUpRight } from "@/app/IconsSvg";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from 'framer-motion';
function Banner1() {
    return (
        <motion.div
        layout
        className=" w-full  rounded-[24px] bg-promo-banner overflow-hidden text-white py-[37.59px]">
                    <div className="relative flex flex-col items-center w-full justify-between h-[575px] p-[24px]">
                      <div className="relative w-full h-[244.67px]">
                        <Image 
                          src="/assets/images/promo-banner/computer.png" 
                          alt="FMRP Robot" 
                          width={425.76} 
                          height={262.01}
                          className="top-[-8.56px] right-[-24.56px] absolute"
                        />

                      </div>

                      <div className="w-full flex justify-center items-center gap-[12px] ">
                          <Image 
                            src="/assets/images/promo-banner/robot.png" 
                            alt="FMRP Logo" 
                            width={136} 
                            height={136}
                            className=""
                          />
                        <div className="flex flex-col items-end">
                          <h3 className="font-bold text-[20px] leading-[150%] tracking-normal text-white">Miễn phí dùng thử</h3>
                          <Image 
                            src="/assets/images/promo-banner/mrp-logo.png" 
                            alt="FMRP Logo" 
                            width={154.87} 
                            height={45.28}
                            className=""
                          />
                        </div>
                      </div>
                      <Link href="/" className="w-full h-[50px] rounded-[40px] pt-[8px] pr-[24px] pb-[8px] pl-[24px] gap-[32px] border-2 border-white font-bold text-[14px] leading-[150%] tracking-normal capitalize text-white flex justify-between items-center whitespace-nowrap">
                        Trải Nghiệm Ngay
                        <ArrowUpRight className="w-[18px] h-[18px]"/>
                      </Link>
                    </div>
                  </motion.div>
    );
}

export default Banner1;