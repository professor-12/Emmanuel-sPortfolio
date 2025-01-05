"use client";
import React, { useState, MouseEvent } from "react";
import PointerGradient from "./PointerGradient";

const HomePage = ({ children }: any) => {
    const [position, setPosition] = useState({ x: 100, y: 100 });
    const handleChange = (e: MouseEvent) => {
        setPosition({ x: e.clientX, y: e.clientY });
    };
    return (
        <>
            <PointerGradient position={position} />
            <div
                className="pt-12 lg:pt-24"
                onMouseMove={handleChange}
            >
                {children}

            </div >
        </>
    );
};

export default HomePage;


// @font-face{font-family:__inter_20b187;src:url(/_next/static/media/730e8169368baf37-s.p.woff2)
//     format("woff2");font-display:swap}
// @font-face{font-family:__inter_20b187;src:url(/_next/static/media/f1f0c35b32161446-s.p.woff2) 
//     format("woff2");font-display:swap;font-weight:400;font-style:normal}
// @font-face{font-family:__inter_20b187;src:url(/_next/static/media/d593a8df799d4ab1-s.p.woff2)
//     format("woff2");font-display:swap;font-weight:400;font-style:italic}
// @font-face{font-family:__inter_20b187;src:url(/_next/static/media/dc792b508e6f91c7-s.p.woff2) 
//     format("woff2");font-display:swap;font-weight:500;font-style:normal}
// @font-face{font-family:__inter_20b187;src:url(/_next/static/media/84d3493a9fd22f1c-s.p.woff2) 
//     format("woff2");font-display:swap;font-weight:500;font-style:italic}
// @font-face{font-family:__inter_20b187;src:url(/_next/static/media/fcb100c7607696fd-s.p.woff2) 
//     format("woff2");font-display:swap;font-weight:600;font-style:normal}
// @font-face{font-family:__inter_20b187;src:url(/_next/static/media/d90f295d0c348006-s.p.woff2)
//     format("woff2");font-display:swap;font-weight:600;font-style:italic}
// @font-face{font-family:__inter_20b187;src:url(/_next/static/media/579e0f95cacfae57-s.p.woff2) 
//     format("woff2");font-display:swap;font-weight:700;font-style:normal}
// @font-face{font-family:__inter_20b187;src:url(/_next/static/media/828a494e04a45cbd-s.p.woff2)
//     format("woff2");font-display:swap;font-weight:700;font-style:italic}
// @font-face{font-family:__inter_Fallback_20b187;src:local("Arial");
//            ascent-override:90.00%;descent-override:22.43%;
//            line-gap-override:0.00%;size-adjust:107.64%}.__className_20b187
// {font-family:__inter_20b187,__inter_Fallback_20b187}.__variable_20b187
// {--font-inter:"__inter_20b187","__inter_Fallback_20b187";}