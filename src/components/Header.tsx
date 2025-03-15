import Image from "next/image";
import Link from "next/link";

function Header() {
    return (
        <div className="w-[100vw] h-[392px] relative flex justify-between items-center gap-[48px]">
            {/* Left calendar icon */}
            <div className="w-[282px] h-[268px]  flex justify-center items-center">
            <Image 
                src="/assets/images/saly-42.png" 
                alt="Calendar" 
                width={195} 
                height={188.19}
                className="object-contain"
            />
            </div>
            
            {/* Center content */}
            <div className="w-[70%] h-full text-center">
                {/* Breadcrumb navigation */}
                <div className="container mx-auto px-4 py-2 text-sm text-[#050505] font-normal text-[14px] leading-[150%] tracking-normal text-center align-middle">
                    <div className="flex justify-center items-center pb-[64px] space-x-2">
                        <Link href="/" className="hover:text-green-600 transition-colors duration-300 ease-in-out
                        ">Trang chủ</Link>
                        <span>{'>'}</span>
                        <Link href="/" className="hover:text-green-600 transition-colors duration-300 ease-in-out
                        ">Tài nguyên</Link>
                        <span>{'>'}</span>
                        <span className="font-medium">Blog</span>
                    </div>
                </div>
                
                <div className="w-full h-[200px] font-normal text-[64px] leading-[100px] tracking-normal text-center align-middle capitalize relative z-20">
                        Blog <span className="foso-logo">FOSO</span> <span className="">-</span>
                        <br />
                        Cập Nhật Tin Tức <span className="font-[800] relative z-20 after:-z-10 after:content-[''] after:absolute after:w-full after:h-[28px] after:bg-[#A3EED6] after:mt-1 after:rounded-[40px] after:left-0 after:bottom-0">Mới Nhất</span>
                </div>
          
                <p className="text-[#33404A] font-[500] text-[18px] leading-[150%] tracking-normal text-center align-middle">
                    Cùng FOSO khám phá kiến thức, xu hướng công nghệ và sản xuất ngay!
                </p>
            </div>
        
            {/* Right hand icon */}
            <div className="w-[282px] h-[268px]  flex justify-center items-center">
            <Image 
                src="/assets/images/saly-25.png" 
                alt="Hand with pen" 
                width={195} 
                height={188.19}
                className="object-contain"
            />
            </div>
        </div>
    );
}

export default Header;