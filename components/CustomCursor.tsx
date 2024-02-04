"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const ref = useRef() as any;
    const onMouseEnter = (e: any) => {
        const event = e.target.value;
        ref.current.classList.remove("hidden");
    };
    const onMouseLeave = () => {
        ref.current.classList.add("hidden");
    };

    const onMouseMove = (event: MouseEvent) => {
        const { clientX, clientY } = event;
        setPosition(({ x, y }) => {
            return { x: clientX / 2 - 394, y: clientY / 2 - 280 };
        });
        console.log(position);
    };
    return (
        <ul
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onMouseMove={onMouseMove as any}
            className="flex w-auto hover:cursor-none relative space-x-[1px]"
        >
            <Image
                ref={ref}
                src={"/Elma.png"}
                style={{ left: position.x, top: position.y }}
                className="absolute hidden"
                width={"35"}
                height={"40"}
                alt="Custom cursor image"
            />
            
                <li>K</li>
                <li>o</li>
                <li>r</li>
                <li>o</li>
                <li>k</li> <li>s</li>
                <li>e</li>
                <li>e</li>
                <li>d</li>
                <li>s</li>
            
        </ul>
    );
};

export default CustomCursor;
