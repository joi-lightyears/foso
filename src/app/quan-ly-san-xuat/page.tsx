"use client"
import { motion, AnimatePresence } from 'framer-motion';
import Image from "next/image";
import Link from "next/link";
import { CalendarIcon, CaretUp, ClockIcon } from "../IconsSvg";
import PictureSection from "@/components/blog-items/PictureSection";
import Quote from "@/components/blog-items/Quote";
import SectionTitle from "@/components/blog-items/SectionTitle";
import Parag from "@/components/blog-items/Parag";
import Subtitle from "@/components/blog-items/Subtitle";
import Subsection from "@/components/blog-items/Subsection";
import BlockQuote from "@/components/blog-items/BlockQuote";
import BulletList from "@/components/blog-items/BulletList";
import Bullet from "@/components/blog-items/Bullet";
import RateBlog from "@/components/blog-items/RateBlog";
import Blog from "@/components/Blog";
import { useState } from "react";
import Banner1 from "@/components/promo-banners/Banner3";
import Banner2 from "@/components/promo-banners/Banner2";
import Social from '@/components/Social';
import ScrollProgress from '@/components/ScrollProgress';

function BlogPage() {

    const [isOpen, setIsOpen] = useState(true); // Default to open

    const toggleOpen = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        e.preventDefault(); // Prevent default to manually control <details>
        setIsOpen((prev) => !prev);
    };
    return (
        <section className="w-full top-[120px] relative">
            <ScrollProgress />
            <section id="blog-page" className="w-full h-full px-[240px]">
                
                {/* Breadcrumb navigation */}
                <nav className="flex text-sm mb-6">
                    <Link href="/" className="hover:text-green-600">Trang chủ</Link>
                    <span className="mx-2">{'>'}</span>
                    <Link href="/" className="hover:text-green-600">Tài nguyên</Link>
                    <span className="mx-2">{'>'}</span>
                    <Link href="/" className="hover:text-green-600">Blog</Link>
                    <span className="mx-2">{'>'}</span>
                    <span className="font-bold">Quản Lý Sản Xuất</span>
                </nav>

                {/* content */}
                <div className="w-full flex gap-[24px]">

                    {/* blog content */}
                    <div className="flex flex-col w-2/3 gap-[24px]">

                        {/* head */}
                        <div className="w-full flex flex-col gap-[16px]">
                            {/* tag */}
                            <div className="w-fit px-[8px] py-[4px] rounded-[8px] bg-[#E2F0FE]">
                                <p className="capitalize font-medium text-xs leading-6 tracking-normal text-[#0F4F9E]">Quản lý sản xuất</p>
                            </div>

                            <h1 className="font-extrabold text-4xl leading-none tracking-normal align-middle capitalize">
                                Quy trình 5S là gì? Cách ứng dụng hiệu quả nên biết
                            </h1>
                            {/* info */}
                            <div className="flex justify-between items-center gap-[8px]">
                                {/* author */}
                                <div className="flex gap-[24px] items-center">
                                    <div className="w-[64px] h-[64px] py-[6px] px-[5px] rounded-full bg-white border-1 border-[#F1F5F7] flex items-center justify-center">
                                        <Image 
                                            src="/assets/images/avatar.png" 
                                            alt="avatar" 
                                            width={33.69} 
                                            height={32}
                                            className="object-contain"
                                        />
                                    </div>
                                    <div>
                                        <p className="font-medium text-sm leading-6 tracking-normal text-[#667F93]">Tác giả</p>
                                        <p className="font-bold text-base leading-6 tracking-normal text-[#33404A]">FOSO Creator</p>
                                    </div>
                                </div>
                                {/* date time */}
                                <div className="flex gap-[24px] justify-between items-center">
                                    {/* date released */}
                                    <div className="flex gap-[8px] items-center text-[#667F93]">
                                        <CalendarIcon className="w-4 h-4"/>
                                        <p className="font-medium text-sm leading-6 tracking-normal text-[#667F93]">Cập nhật vào: 17/11/2002</p>
                                        </div>
                                        {/* read time */}
                                        <div className="w-[1px] h-[20px] bg-[#D9E1E7] "></div>
                                        <div className="flex items-center gap-[8px] text-[#667F93]">
                                            <ClockIcon />
                                            10 phút đọc
                                        </div>
                                    <div>

                                    </div>
                                </div>
                            </div>
                        </div>


                        <PictureSection src="/assets/images/5s.png" alt="Quy trinh 5s" description="Quy trình 5s là gì?"  />
                        <Quote
                            content="Chắc hẳn bạn đã từng nghe qua khái niệm về quy trình 5S là gì? Xây dựng 5S cần yếu tố gì? Bài viết dưới đây của FOSO sẽ trả lời cho bạn thông tin chi tiết về mô hình này cũng như yếu tố tạo nên thành công của quy trình bạn nhé."
                        />
                        
                        {/* Section 1 */}
                        <SectionTitle id="section-1">1. Quy trình 5S là gì?</SectionTitle>
                        <Parag>
                            Quy trình 5S được biết đến là mô hình quản trị tinh gọn trong sản xuất. Nguồn gốc của quy trình 5S là đến từ xứ sở hoa anh đào Nhật Bản.
                        </Parag>
                        <Parag>
                        Quy trình 5S hiện nay đang được rất nhiều nước trên thế giới vận dụng bởi tính hiệu quả mà 5S mang lại. Quy trình này bao gồm 5 chữ S đầu trong tiếng Nhật:
                        </Parag>
                    
                        <ul className="space-y-3">
                            <li className="flex items-start">
                            <span className="text-[#15AA7A] font-medium mr-2">•</span>
                            <div>
                                <span className="text-[#15AA7A] font-medium">Seiri</span>
                                <span className="text-gray-800"> (Ngăn nắp)</span>
                            </div>
                            </li>
                            <li className="flex items-start">
                            <span className="text-[#15AA7A] font-medium mr-2">•</span>
                            <div>
                                <span className="text-[#15AA7A] font-medium">Seiso</span>
                                <span className="text-gray-800"> (Sạch sẽ)</span>
                            </div>
                            </li>
                            <li className="flex items-start">
                            <span className="text-[#15AA7A] font-medium mr-2">•</span>
                            <div>
                                <span className="text-[#15AA7A] font-medium">Seiton</span>
                                <span className="text-gray-800"> (Trật tự)</span>
                            </div>
                            </li>
                            <li className="flex items-start">
                            <span className="text-[#15AA7A] font-medium mr-2">•</span>
                            <div>
                                <span className="text-[#15AA7A] font-medium">Shitsuke</span>
                                <span className="text-gray-800"> (Kỷ luật)</span>
                            </div>
                            </li>
                            <li className="flex items-start">
                            <span className="text-[#15AA7A] font-medium mr-2">•</span>
                            <div>
                                <span className="text-[#15AA7A] font-medium">Seiketsu</span>
                                <span className="text-gray-800"> (Tiêu chuẩn hóa)</span>
                            </div>
                            </li>
                        </ul>
                        {/* section 2 */}
                        <SectionTitle id="section-2">2. Lợi ích quy trình 5S đem lại</SectionTitle>
                        <Parag>
                            Quy trình 5S được kết hợp từ 5 chữ S và mỗi chữ S thể hiện cho mỗi bước của quy trình với mục đích cải tiến môi trường làm việc của doanh nghiệp.
                        </Parag>
                        <Parag>
                            Khi doanh nghiệp áp dụng quy trình vào trong tổ chức, doanh nghiệp sẽ tạo nên một môi trường được sắp xếp theo nguyên tắc logic. Nơi làm việc sẽ trở nên sạch sẽ hơn, các công cụ, đồ dùng sẽ được đặt theo vị trí quy định và dễ dàng tìm kiếm khi cần thiết
                        </Parag>
                        <Parag>
                            Và khi doanh nghiệp áp dụng như vậy cũng hình thành tạo ra thói quen tốt cho mỗi nhân viên. Và từ đó, cũng góp phần vào tạo nên một văn hóa doanh nghiệp tích cực.
                        </Parag>

                        <PictureSection src="/assets/images/why.png" alt="Tại sao doanh nghiệp cần quy trình 5S?" description="Tại sao doanh nghiệp cần quy trình 5S?"  />
                        {/* section 3 */}
                        <SectionTitle id="section-3">3. Tại sao doanh nghiệp nên áp dụng quy trình 5S?</SectionTitle>
                        <Parag>
                            Có thể nói quy trình được áp dụng rộng rãi tại các doanh nghiệp trên toàn thế giới, bao gồm cả Việt Nam. Điều này càng chứng minh rõ nét tính hiệu quả của quy trình đem lại. Sau đây là các lý do vì sao bạn nên lựa chọn quy trình:
                        </Parag>
                        
                        <Subsection id="section-3.1" title="3.1 Cải thiện rõ nét môi trường làm việc">
                            Môi trường làm việc tại doanh nghiệp sẽ trở nên sạch sẽ hơn, gọn gàng hơn và có tổ chức hơn. Điều này tạo ra một không gian làm việc hiệu quả cho từng cá nhân trong doanh nghiệp
                        </Subsection>
                        <Subsection id="section-3.2" title="3.2 Tiết kiệm thời gian đáng kể">
                            Khi doanh nghiệp áp dụng quy trình này, doanh nghiệp giảm được thời gian đáng kể khi không còn mất nhiều thời gian tìm kiếm đồ dùng, máy móc cần sử dụng trong quá trình làm việc. Khi mọi thứ đều có trật tự, mọi sự tìm kiếm đều trở nên dễ dàng.
                        </Subsection>
                        <Subsection id="section-3.3" title="3.3 Tăng năng suất làm việc">
                            Nhờ vào quy tắc 5S, bằng cách loại bỏ những thứ không cần thiết, tăng cường sắp xếp và vệ sinh, nhân viên có thể dễ dàng tìm kiếm và sử dụng các dụng cụ, thiết bị và tài liệu, giúp tiết kiệm thời gian và tăng năng suất làm việc.
                        </Subsection>
                        <Subsection id="section-3.4" title="3.4 Tiết kiệm chi phí">
                            Bằng cách tối ưu hóa không gian làm việc, giảm thiểu lãng phí và sử dụng tài nguyên hiệu quả hơn, doanh nghiệp có thể giảm thiểu chi phí vận hành đáng kể cho doanh nghiệp của mình.
                        </Subsection>
                        <Subsection id="section-3.5" title="3.5 Tăng chất lượng sản phẩm">
                            5S giúp giữ cho môi trường làm việc luôn sạch sẽ và gọn gàng. Từ đó, giúp tăng cường chất lượng sản phẩm và giảm thiểu lỗi sản xuất không mong muốn.
                        </Subsection>
                        {/* section 4 */}
                        <PictureSection src="/assets/images/quyTrinh.png" alt="Quy trình 5s gồm các bước" description="Quy trình 5s gồm các bước"  />
                        <SectionTitle id="section-4">4. Quy trình 5S gồm các bước</SectionTitle>
                        <Parag>
                            5S là một phương pháp quản lý tổ chức, sắp xếp và tăng cường hiệu quả làm việc trong một tổ chức hoặc doanh nghiệp. 5S bao gồm năm bước cơ bản sau:
                        </Parag>
                        <Subsection id="section-4.1" title="4.1 Seiri (Ngăn nắp)">
                            Bước đầu tiên trong quy trình là Seiri, mang nghĩa là ngăn nắp, nhằm tổ chức và loại bỏ những thứ dư thừa, không cần thiết để tạo ra một không gian làm việc sạch sẽ, gọn gàng và tiết kiệm thời gian.
                        </Subsection>
                        <Subsection id="section-4.2" title="4.2 Seiton (Sắp xếp)">
                            Chữ S thứ 2 là Seiton, có nghĩa là sắp xếp các dụng cụ, thiết bị, tài liệu trong doanh nghiệp một cách gọn gàng để giúp tìm kiếm và sử dụng chúng một cách dễ dàng.
                        </Subsection>
                        <Subsection id="section-4.3" title="4.3 Seiso (Vệ sinh)">
                            Bước tiếp theo trong quy tắc 5S đó là Seiso, trong đó cá nhân trong doanh nghiệp sẽ giữ cho môi trường làm việc luôn sạch sẽ. Và việc vệ sinh thường xuyên như vậy sẽ giúp giảm thiểu sự lây nhiễm bệnh tật và tăng cường sức khỏe cho mỗi nhân viên.
                        </Subsection>
                        <Subsection id="section-4.4" title="4.4 Seiketsu (Tiêu chuẩn hóa)">
                            Bước kế tiếp đó là Seiketsu, có nghĩa là Tiêu chuẩn hóa. Bước này giúp đặt ra các tiêu chuẩn về sự sạch sẽ, gọn gàng và cách thức sử dụng các dụng cụ, thiết bị, tài liệu. 
                        </Subsection>
                        <Subsection id="section-4.5" title="4.5 Shitsuke (Kỷ luật)">
                            Đây được xem là bước cuối cùng trong quy trình. Và bước này đóng vai trò quan trọng trong duy trì tính hiệu quả của quy tắc 5S trong dài hạn. Bước này đòi hỏi việc tạo ra một hệ thống kỷ luật và giám sát chặt chẽ để đảm bảo mọi người trong tổ chức duy trì và tuân thủ theo quy trình.
                        </Subsection>

                        {/* section 5 */}
                        <PictureSection src="/assets/images/steps.png" alt="Các bước thực hiện quy trình 5s" description="Các bước thực hiện quy trình 5s"  />
                        <SectionTitle id="section-5">5. Quy trình được thực hiện như sau:</SectionTitle>
                        <Parag>
                            Có thể nói quy trình được áp dụng rộng rãi tại các doanh nghiệp trên toàn thế giới, bao gồm cả Việt Nam. Điều này càng chứng minh rõ nét tính hiệu quả của quy trình đem lại. Sau đây là các lý do vì sao bạn nên lựa chọn quy trình:
                        </Parag>
                        <Subsection id="section-5.1" title="5.1 Giai đoạn chuẩn bị">
                            Trong giai đoạn chuẩn bị, doanh nghiệp cần bố trí nhân lực đứng ra điều hành và quản lý quá trình thực hiện quy trình 5S. Việc phân bổ cụ thể như vậy sẽ giúp quá trình áp dụng quy tắc 5S sẽ hiệu quả hơn.
                        </Subsection>
                        <Subsection id="section-5.2" title="5.2 Triển khai rộng rãi">
                            Đầu tiên doanh nghiệp cần chuẩn bị tài liệu, kiến thức về quy trình 5S cho tất cả mọi người trong doanh nghiệp nắm rõ kiến thức cũng như cách áp dụng như thế nào vào doanh nghiệp của bạn.
                        </Subsection>
                        <Subsection id="section-5.3" title="5.3 Thực hiện vệ sinh toàn bộ doanh nghiệp">
                            Đây là bước có thể khiến mọi người không hào hứng trong các bước của quy trình. Doanh nghiệp nên tuyên truyền tích cực và tạo không khí hào hứng cho từng cá nhân.
                        </Subsection>
                        <Subsection id="section-5.4" title="5.4 Sàng lọc, sắp xếp và đánh giá">
                            Đây là bước tiếp theo sau khi đã hoàn thành bước vệ sinh toàn bộ doanh nghiệp. Doanh nghiệp cần đưa ra tiêu chuẩn rõ ràng để việc thực hiện sàng lọc và sắp xếp trở nên khoa học hơn, hiệu quả hơn và dễ dàng tìm kiếm sau này.
                        </Subsection>
                        <Subsection id="section-5.5" title="5.5 Đánh giá">
                            Sau khi đã hoàn tất các bước, doanh nghiệp nên tổng kết lại quá trình cải tiến và xem xét cần cải tiến phương diện nào hay không trong quá trình thực hiện quy trình 5S.
                        </Subsection>

                        {/* section 6 */}
                        <SectionTitle id="section-6">6. Quy trình 5S có giống với Kaizen?</SectionTitle>
                        <Parag>
                            Vậy câu hỏi đặt ra ở đây là quy trình 5S có giống với Kaizen hay không? Quy trình 5S với Kaizen là 2 khái niệm khác nhau nhưng giữa chúng có mối quan hệ chặt chẽ với nhau.
                        </Parag>
                        <BlockQuote>
                            Về Kaizen, thì đây được xem là một triết lý cải tiến liên tục trong doanh nghiệp. Phương pháp này nhằm tạo ra sự thay đổi tích cực, mang tính liên tục và bền vững. 
                        </BlockQuote>
                        <BlockQuote>
                            Còn đối với quy tắc 5S, đây là một phương pháp quản lý và cải tiến trong sản xuất. 5S tập trung vào việc sắp xếp, sạch sẽ, sắp đặt, tiêu chuẩn hóa và kỷ luật trong môi trường làm việc. 
                        </BlockQuote>
                        <Parag>
                            Tuy nhiên, quy trình 5S được xem là một phần của Kaizen. Và quy tắc này đóng vai trò quan trọng trong việc tạo ra môi trường làm việc sạch sẽ, an toàn. Quy tắc 5S thường được sử dụng làm bước đầu tiên trong quá trình cải tiến liên tục của phương pháp Kaizen để tạo ra một nền tảng vững chắc cho các hoạt động cải tiến tiếp theo.
                        </Parag>

                        {/* section 7 */}
                        <SectionTitle id="section-7">7. Đối tượng nào nên áp dụng 5S?</SectionTitle>
                        <Parag>
                            Quy trình 5S được xem là phương pháp quản lý được áp dụng rộng rãi ở nhiều ngành công nghiệp và các loại doanh nghiệp khác nhau. Tuy nhiên, 5S phù hợp đặc biệt cho các doanh nghiệp sản xuất, các cơ quan hành chính, các tổ chức phi lợi nhuận và các doanh nghiệp nhỏ.
                        </Parag>
                        <Parag>
                            Các tổ chức có sự xuất hiện của nhiều nhân viên, hoạt động phức tạp, các trang thiết bị và vật dụng phải được quản lý và sử dụng hiệu quả.
                        </Parag>
                        <PictureSection src="/assets/images/cacYeuTo.png" alt="Các yếu tố tạo nên thành công cho quy trình 5S" description="Các yếu tố tạo nên thành công cho quy trình 5S"  />
                        {/* section 8 */}
                        <SectionTitle id="section-8">8. Các yếu tố tạo nên thành công cho quy trình 5S</SectionTitle>
                        <Parag>
                            Và những nhân tố quyết định đến quá trình thành công của quy trình nhằm cải tiến môi trường làm việc của doanh nghiệp đó là từ phía:
                        </Parag>
                        <BulletList>
                            <Bullet>
                            Lãnh đạo cởi mở và ủng hộ áp dụng quy trình vào doanh nghiệp. Bởi đây yếu tố quan trọng nhất để quyết định doanh nghiệp có áp dụng quy tắc này hay không.
                            </Bullet>
                            
                            <Bullet>
                            Chương trình, kế hoạch thực hiện quy trình: Sau khi phía lãnh đạo đồng ý, doanh nghiệp cần bộ phận đưa lên ý tưởng, kế hoạch thực hiện triển khai 5S.
                            </Bullet>
                            
                            <Bullet>
                            Sự tự nguyện tham gia của toàn thể nhân viên: Doanh nghiệp cần huy động và khuyến khích nhân viên tự nguyện thực hiện vì lợi ích chung của tổ chức, của doanh nghiệp.
                            </Bullet>
                        </BulletList>
                        <Parag>
                            Đồng thời, trên đây là các yếu tố tạo nên sự thành công nhưng cũng là các lưu ý cho mỗi doanh nghiệp cần nắm bắt trước khi bắt tay vào triển khai quy trình 5S vào doanh nghiệp của mình. Và với những thông tin bổ ích như trên, FOSO mong rằng phần nào giúp được doanh nghiệp của bạn phát triển, cải tiến vượt bậc trong tương lai.
                        </Parag>

                        <RateBlog/>
                    </div>

                    {/* in this article summary */}
                    <div className="w-1/3 flex flex-col gap-[24px]">
                    {/* <AnimatePresence> */}

                    <details open={isOpen} className="w-full ">
                        <summary onClick={toggleOpen} className="flex select-none  justify-between items-center font-extrabold text-2xl leading-loose tracking-normal align-middle capitalize cursor-pointer">
                            Nội Dung Bài Viết
                            <CaretUp className = {`w-6 h-6 transform transition-transform duration-300 ${!isOpen ? '-rotate-180' : ''}`} />
                        </summary>
                        <ul className="mt-3 space-y-2 text-gray-700 text-[18px]">
                            <li><a href="#section-1" className="hover:text-green-600">1. Quy trình 5S là gì?</a></li>
                            <li><a href="#section-2" className="hover:text-green-600">2. Lợi ích quy trình 5S đem lại</a></li>
                            <li>
                            <a href="#section-3" className="hover:text-green-600">
                                3. Tại sao doanh nghiệp nên áp dụng quy trình 5S?
                            </a>
                            <ul className="ml-4 mt-1 space-y-1">
                                <li><a href="#section-3.1" className="hover:text-green-600">3.1 Cải thiện rõ nét môi trường làm việc</a></li>
                                <li><a href="#section-3.2" className="hover:text-green-600">3.2 Tiết kiệm thời gian đáng kể</a></li>
                                <li><a href="#section-3.3" className="hover:text-green-600">3.3 Tăng năng suất làm việc</a></li>
                                <li><a href="#section-3.4" className="hover:text-green-600">3.4 Tiết kiệm chi phí</a></li>
                                <li><a href="#section-3.5" className="hover:text-green-600">3.5 Tăng chất lượng sản phẩm</a></li>
                            </ul>
                            </li>
                            <li>
                            <a href="#section-4" className="hover:text-green-600">
                                4. Quy trình 5S gồm các bước:
                            </a>
                            <ul className="ml-4 mt-1 space-y-1">
                                <li><a href="#section-4.1" className="hover:text-green-600">4.1 Seiri (Ngăn nắp)</a></li>
                                <li><a href="#section-4.2" className="hover:text-green-600">4.2 Seiton (Sắp xếp)</a></li>
                                <li><a href="#section-4.3" className="hover:text-green-600">4.3 Seiso (Vệ sinh)</a></li>
                                <li><a href="#section-4.4" className="hover:text-green-600">4.4 Seiketsu (Tiêu chuẩn hóa)</a></li>
                                <li><a href="#section-4.5" className="hover:text-green-600">4.5 Shitsuke (Kỷ luật)</a></li>
                            </ul>
                            </li>
                            <li>
                            <a href="#section-5" className="hover:text-green-600">
                                5. Quy trình được thực hiện như sau:
                            </a>
                            <ul className="ml-4 mt-1 space-y-1">
                                <li><a href="#section-5.1" className="hover:text-green-600">5.1 Giai đoạn chuẩn bị</a></li>
                                <li><a href="#section-5.2" className="hover:text-green-600">5.2 Triển khai rộng rãi</a></li>
                                <li><a href="#section-5.3" className="hover:text-green-600">5.3 Thực hiện vệ sinh toàn bộ doanh nghiệp</a></li>
                                <li><a href="#section-5.4" className="hover:text-green-600">5.4 Sàng lọc, sắp xếp và đánh giá</a></li>
                                <li><a href="#section-5.5" className="hover:text-green-600">5.5 Đánh giá</a></li>
                            </ul>
                            </li>
                            <li><a href="#section-6" className="hover:text-green-600">6. Quy trình 5S có giống với Kaizen?</a></li>
                            <li><a href="#section-7" className="hover:text-green-600">7. Đối tượng nào nên áp dụng 5S?</a></li>
                            <li><a href="#section-8" className="hover:text-green-600">8. Các yếu tố tạo nên thành công cho quy trình 5S</a></li>
                        </ul>
                        </details>

                        <Banner1/>
                        <Banner2/>
                    {/* </AnimatePresence> */}
                    </div>
                </div>


                {/* related articles */}
                <div className="w-full pb-[96px] flex flex-col gap-[24px]">
                    <h1 className="font-extrabold text-4xl leading-loose tracking-normal align-middle capitalize">Bài Viết Liên Quan</h1>

                    <div className="w-full grid md:grid-cols-3 gap-[32px]">
                      {Array.from({ length: 3 }).map((_, index) => <Blog key={index} />)}

                    </div>
                </div>
                {/* share sticky */}
                <div className='fixed top-[320px] left-[60px] flex flex-col gap-[8px] justify-center items-center'>
                    <h1 className='font-extrabold text-base leading-6 tracking-normal text-center text-[#33404A]'>Chia sẻ</h1>
                    <Social src='/assets/images/zalo.png' alt="zalo" />
                    <Social src='/assets/images/facebook.png' alt="facebook" />
                    <Social src='/assets/images/x.png' alt="x" />
                    <Social src='/assets/images/linkedin.png' alt="linkedin" />
                    <Social src='/assets/images/reddit.png' alt="reddit" />
                    
                </div>
            </section>
        </section>
    );
}

export default BlogPage;