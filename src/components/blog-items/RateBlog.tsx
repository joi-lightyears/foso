import Image from "next/image";
import Reactions from "./Reactions";

function RateBlog() {
    return (
        <div className="w-full py-[48px]">
            <div className="bg-white py-[24px] flex flex-col gap-[24px] w-full rate-blog-shadow rounded-[24px]">
                <div className="w-full flex flex-col gap-[4px]">
                    <h1 className="font-extrabold text-xl leading-6 tracking-normal text-center">Bạn thấy bài viết như thế nào?</h1>
                    <p className="font-normal text-base leading-6 tracking-normal text-center">4 phản hồi</p>
                </div>


                {/* reactions */}
                <div className="w-full flex gap-[32px] justify-center items-center">
                    <Reactions type="Hữu ích" count={12} active={true}/>
                    <Reactions type="Yêu thích" count={5} />
                    <Reactions type="Thú vị" count={3} />
                    <Reactions type="Bất ngờ" count={2} />
                    <Reactions type="Nhàm chán" count={1} />
                    <Reactions type="Tức giận" count={0} />
                    
                </div>
            </div>
        </div>
    );
}

export default RateBlog;