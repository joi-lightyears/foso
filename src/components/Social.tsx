import Image from "next/image";
interface SocialProps {
    src: string;
    alt: string;
}
function Social({ src, alt }: SocialProps) {
    return (
        <div className='p-[12px] w-[48px] h-[48px] border-[1px] border-[#15AA7A] rounded-[16px] flex justify-center items-center cursor-pointer'>
            <Image 
                src={src}
                alt={alt}
                width={24} 
                height={24}
                className=""
            />
        </div>
    );
}

export default Social;