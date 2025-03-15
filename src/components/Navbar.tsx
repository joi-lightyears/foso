import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CaretDown, Icon_Country } from "../app/IconsSvg";

function Navbar() {
    return (
            <div className="fixed flex justify-center items-center left-[50%] transform translate-x-[-50%] top-[20px]
            w-[calc(100%-500px)] max-w-[1160px]
            h-[79.41px]  gap-[64px] py-[12px] px-[36px] rounded-[40px] bg-[#FFFFFFA6] backdrop-blur-[24.9971px] shadow-custom
            z-50
            ">
                
                {/* Logo */}
                <Link
                href="/"
                className="w-[134px] h-[55.41px] select-none cursor-pointer flex items-center">
                    <Image src="/assets/images/logo.png" alt="logo" width={134} height={55.41} />
                </Link>

                {/* Main nav */}
                <div className="flex gap-[24px] items-center">
                    <Link href="/" className="font-raleway text-[14px] leading-[150%] tracking-normal align-middle whitespace-nowrap ">
                        Về Chúng tôi
                    </Link>
                    <div className="relative group">
                        <Link href="/" className="flex gap-[10px] font-raleway text-[14px]  items-center text-gray-800  transition-colors whitespace-nowrap">
                            Giải pháp
                            <CaretDown className="ml-1 w-4 h-4" />
                        </Link>
                    </div>
                    <div className="relative group">
                        <Link href="/" className="font-medium gap-[10px] flex font-raleway items-center text-gray-800 hover:font-medium transition-colors whitespace-nowrap">
                            <div className="relative">
                            Tài nguyên
                            <span className="absolute bottom-[-10px] left-[50%] transform translate-x-[-50%] w-[6px] h-[6px] bg-[#1AD598] rounded-full"></span>
                            </div>
                            <CaretDown className="ml-1 w-4 h-4" />
                        </Link>
                    </div>
                    <Link href="/" className="font-raleway text-gray-800 transition-colors whitespace-nowrap">
                        Liên hệ
                    </Link>
                </div>

                {/* Actions */}
                <div className="flex gap-[24px] items-center">
                    <button className="flex items-center gap-2 px-3 py-2 bg-gradient-button border-button rounded-full cursor-pointer transition-colors whitespace-nowrap hover:opacity-[.85]">
                        <Icon_Country className="w-4 h-4" />
                        <div className="flex items-center gap-1">
                        <span className="font-medium">VI</span>
                        <CaretDown className="w-4 h-4" />
                        </div>
                        {/* <ChevronDown className="w-4 h-4" /> */}
                    </button>

                    <button className="flex items-center gap-2 px-[12px] py-[8px] bg-green-gradient border-button-green text-white rounded-full transition-colors whitespace-nowrap cursor-pointer hover:opacity-[.85]">
                        <span className="font-bold text-[14px] leading-[150%] align-middle capitalize text-[#052B1E]">Trở Thành Khách Hàng</span>
                        <div className="flex items-center justify-center bg-black rounded-[40px] w-[22px] h-[22px] p-[4px]">
                            <ArrowUpRight />
                        </div>
                    </button>
                </div>
            </div>
    );
}

export default Navbar;