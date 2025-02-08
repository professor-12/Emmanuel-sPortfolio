"use client"

import { useEffect, useRef, useState } from "react";

const PointerGradient = ({ position }: any) => {
    const [_position, setPosition] = useState({ x: 0, y: 0 })
    const [browserSize, setBrowser] = useState({ width: 0, height: 0 })
    const ref = useRef<HTMLDivElement>(null!)
    useEffect(() => {
        setBrowser({ width: window.innerWidth, height: window.innerHeight })
        const { height, width } = ref?.current.getBoundingClientRect()
        console.log(
        )

        setPosition({ x: width, y: height })
    }, [ref])

    return (
        <div ref={ref}>
            <div
                style={{ left: position.x - (_position.x / 4), top: position.y - 100 }}
                className="h-[25rem] fixed   max-md:hidden  w-[30rem] blur-[250px] bg-gradient-to-tr from-[#1d4ed826] to-violet-900"
            />
            <div

                className="h-[15rem] md:hidden top-0 left-2 fixed    w-[30rem] blur-[250px] bg-gradient-to-tr from-[#1d4ed826] to-violet-900"
            />
        </div>
    );
};

export default PointerGradient;
