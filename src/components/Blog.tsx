import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarIcon, ClockIcon } from "../app/IconsSvg";

function Blog() {
    return (
        <div className="">
            <Link
            href="/quan-ly-san-xuat"
            className=" rounded-[24px] overflow-hidden cursor-pointer ">
                <Image 
                    src="/assets/images/blog-thumbnail.png" 
                    alt="BOM Là Gì?" 
                    width={500} 
                    height={300}
                    className="w-full object-cover hover:shadow-xl transition-all rounded-[24px]"
                />
            </Link>
            {/* content */}
            <div className="pt-[24px] flex flex-col gap-2">
                <Link href="/" className="w-fit h-[26px] rounded-[8px] py-[4px] px-[8px] bg-[#E2F0FE] flex justify-center items-center font-medium text-[12px] leading-[150%] tracking-normal text-[#0F4F9E]">
                    Quản Lý Sản Xuất
                </Link>
                <h2 className="font-[800] text-[24px] leading-[150%] tracking-normal align-middle">
                    <Link href="/quan-ly-san-xuat" className="">
                        Tại sao BOM quan trọng trong quản lý sản xuất?
                    </Link>
                </h2>
                {/* info */}
                <div className="flex items-center gap-[12px]">
                    <div className="flex items-center gap-[8px] text-[#667F93]">
                        <CalendarIcon />
                        17/11/2022
                    </div>
                    <div className="w-[1px] h-[20px] bg-[#D9E1E7] "></div>
                    <div className="flex items-center gap-[8px] text-[#667F93]">
                        <ClockIcon />
                        10 phút đọc
                    </div>
                </div>
                {/* cta */}
                <Link href="/quan-ly-san-xuat" className="w-fit flex gap-[16px] items-center font-[400] text-[18px] leading-[150%] tracking-normal text-[#667F93]">
                Khám phá thêm
                <ArrowRight className="w-[24px] h-[24px]"/>
                </Link>
            </div>
        </div>
    );
}

export default Blog;