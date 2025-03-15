"use client"
import Image from "next/image";
import Header from "../components/Header";
import { ArrowUpRight, GradientBg, GradientBg2, SearchIcon } from "./IconsSvg";
import Link from "next/link";
import Blog from "../components/Blog";
import Banner2 from "../components/promo-banners/Banner2";
import Banner1 from "../components/promo-banners/Banner3";
import { useState } from "react";
import Pagination from "../components/ui/Pagination";

export default function Home() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages: number = 10;
  return (
    <div className="pb-[100px] w-full top-[170px] relative">
      <div className="absolute w-[500px] h-[500px] top-[258px] left-[-96px] flex justify-center items-center">
        <GradientBg />
      </div>
      <div className="absolute -z-10 w-[500px] h-[500px] bottom-[108px] right-[-96px] flex justify-center items-center">
        <GradientBg2 />
      </div>
      <Header />

      <section id="why-choose-us" className="w-full h-full px-[240px] flex flex-col gap-[72px] mt-[96px]">
        <div className="w-full ">
          <div className="w-full">
            <section id="blog " className="flex md:flex-row gap-8">

              {/* article */}
                <div className="w-full  flex flex-col gap-8">
                  <h1 className="font-extrabold text-[36px] leading-[200%] tracking-normal align-middle capitalize">Tất Cả Bài Viết</h1>
                  {/* blogs container */}
                  <div className="flex flex-col gap-[48px]">

                    {/* banner */}
                    <div className="w-full h-[318px] bg-banner-gradient rounded-[40px] overflow-hidden relative p-[50px]">
                      <div className="h-full flex justify-start items-center">
                        <div className="h-full flex flex-col justify-between w-[550px]">
                          <div className="font-[700] text-[36px] leading-[100%] tracking-normal text-white w-[376px]">
                            Gia nhập cộng đồng FMRP – Kết nối, chia sẻ, cùng phát triển!
                          </div>
                          <Link href="/" className="w-[216px] h-[50px] rounded-[40px] pt-[8px] pr-[24px] pb-[8px] pl-[24px] gap-[32px] border-2 border-white font-bold text-[14px] leading-[150%] tracking-normal capitalize text-white flex justify-between items-center">
                            Tham Gia Ngay
                            <ArrowUpRight className="w-[14px] h-[14px]"/>
                          </Link>
                        </div>
                        <div className="absolute right-0 bottom-0">
                          <Image 
                            src="/assets/images/banner.png" 
                            alt="FMRP Community" 
                            width={400} 
                            height={300}
                            className="object-contain"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Blog post grid */}
                    <div className="grid md:grid-cols-2 gap-[32px]">
                      {Array.from({ length: 6 }).map((_, index) => <Blog key={index} />)}
                    </div>
                  </div>
                </div>

                {/* side banner */}
                <div className="w-full md:w-1/3 flex flex-col gap-[32px]">

                  {/* search place */}
                  <div className="relative flex flex-col items-start gap-[24px]">
                      <div className="font-extrabold text-[24px] leading-[200%] tracking-normal align-middle capitalize">Tìm Kiếm</div>
                      <div className="relative w-full">
                        <input
                          type="text"
                          placeholder="Tìm kiếm bài viết"
                          className="w-full h-[72px] justify-between rounded-[12px] pt-[12px] pr-[78px] pb-[12px] pl-[24px] placeholder:text-[#ACB3C7] focus-visible:outline-none  focus-visible:ring-[#f3f5f726] search-box-shadow"
                        />
                        <button className="absolute right-[12px] top-1/2 transform -translate-y-1/2 bg-[#15AA7A] text-white p-[12px] rounded-[12px] transition hover:opacity-[.85] cursor-pointer">
                          <SearchIcon />
                        </button>

                      </div>
                  </div>

                  {/* Categories section */}
                  <div className="w-full flex flex-col gap-[24px]">
                    <h3 className="font-extrabold text-[24px] leading-[200%] tracking-normal align-middle capitalize">Danh Mục</h3>

                    {/* menu */}
                    <ul className="flex flex-col gap-[16px]">
                      <li className="w-full h-[35px] flex justify-between pb-[8px] border-b-[1px] border-b-[#F1F5F7]">
                        <Link href="/" className="font-medium text-[18px] leading-[150%] tracking-normal text-[#33404A]">Tất cả</Link>
                        <span className="text-[#667F93]">108</span>
                      </li>
                      <li className="w-full h-[35px] flex justify-between pb-[8px] border-b-[1px] border-b-[#F1F5F7]">
                        <Link href="/" className="font-medium text-[18px] leading-[150%] tracking-normal text-[#33404A]">Thiết kế Website</Link>
                        <span className="text-[#667F93]">36</span>
                      </li>
                      <li className="w-full h-[35px] flex justify-between pb-[8px] border-b-[1px] border-b-[#F1F5F7]">
                        <Link href="/" className="font-medium text-[18px] leading-[150%] tracking-normal text-[#33404A]">Thiết kế App Mobile</Link>
                        <span className="text-[#667F93]">13</span>
                      </li>
                      <li className="w-full h-[35px] flex justify-between pb-[8px] border-b-[1px] border-b-[#F1F5F7]">
                        <Link href="/" className="font-medium text-[18px] leading-[150%] tracking-normal text-[#33404A]">Quản Lý Sản Xuất</Link>
                        <span className="text-[#667F93]">25</span>
                      </li>
                      <li className="w-full h-[35px] flex justify-between pb-[8px] border-b-[1px] border-b-[#F1F5F7]">
                        <Link href="/" className="font-medium text-[18px] leading-[150%] tracking-normal text-[#33404A]">Quản Lý Bán Hàng</Link>
                        <span className="text-[#667F93]">22</span>
                      </li>
                      <li className="w-full h-[35px] flex justify-between pb-[8px] border-b-[1px] border-b-[#F1F5F7]">
                        <Link href="/" className="font-medium text-[18px] leading-[150%] tracking-normal text-[#33404A]">Báo Chí Nói Về FOSO</Link>
                        <span className="text-[#667F93]">7</span>
                      </li>
                      <li className="w-full h-[35px] flex justify-between pb-[8px] border-b-[1px] border-b-[#F1F5F7]">
                        <Link href="/" className="font-medium text-[18px] leading-[150%] tracking-normal text-[#33404A]">Tin Tức Về FOSO</Link>
                        <span className="text-[#667F93]">5</span>
                      </li>
                      
                    </ul>
                  </div>

                  {/* Promo banner */}
                  <Banner1 />
                  <Banner2/>

              
                </div>


            </section>
          </div>
        </div>

        {/* pagnition */}
        <Pagination 
        totalPages={totalPages} 
        currentPage={currentPage} 
        onPageChange={(page: number) => setCurrentPage(page)} 
      />
      </section>
    </div>
  );
}
