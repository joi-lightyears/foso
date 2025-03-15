"use client"

import { useEffect, useState } from "react";

function ScrollProgress() {
    const [scrollPercentage, setScrollPercentage] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
        const scrollTop = window.scrollY;
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (scrollTop / scrollHeight) * 100;
        setScrollPercentage(progress);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full h-[7px] bg-gray-200">
        <div
            className="h-full bg-green-600 transition-all duration-100"
            style={{ width: `${scrollPercentage}%` }}
        ></div>
        </div>
    );
}

export default ScrollProgress;