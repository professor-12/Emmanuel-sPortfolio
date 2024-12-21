"use client";
import React, { useState, MouseEvent } from "react";
import PointerGradient from "./PointerGradient";

const HomePage = ({ children }: any) => {
    const [position, setPosition] = useState({ x: 100, y: 100 });
    const handleChange = (e: MouseEvent) => {
        setPosition({ x: e.clientX, y: e.clientY });
    };
    return (
        <div style={{ cursor: "url('/Elima.png')" }}>
            <PointerGradient position={position} />

            <div
                className="w-full  relative z-30 lg:h-screen lg:overflow-hidden"
                onMouseMove={handleChange}
            >
                {children}
            </div>
        </div>
    );
};

export default HomePage;
