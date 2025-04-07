"use client"

import { useEffect, useRef, useState } from "react";

const PointerGradient = ({ position }: any) => {
    const [_position, setPosition] = useState({ x: 0, y: 0 })
    const ref = useRef<HTMLDivElement>(null!)
    useEffect(() => {
        const { height, width } = ref?.current.getBoundingClientRect()
        setPosition({ x: width, y: height })
    }, [ref])
    return (
        <div >
            <div
                ref={ref}
                style={{ left: (position.x - (_position.x / 2)), top: (position.y - (_position.x / 2)) }}
                className="h-[30rem] fixed max-md:hidden  w-[30rem] blur-[170px] bg-gradient-to-br from-[#1d4ed826] to-violet-900"
            />
            <div

                className="h-[15rem] md:hidden top-0 left-2 fixed  backdrop:blur-md   w-[30rem] blur-[300px] bg-gradient-to-tr from-[#1d4ed826] to-violet-900"
            />
        </div>
    );
};

export default PointerGradient;
