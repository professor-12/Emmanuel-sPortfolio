import React from "react";
import  Link  from "next/link"
const NavLinks = () => {
    return (
        <ul className="space-y-4  text-slate-300 text-sm font-bold">
            <Link
                href="#about"
                className="flex group cursor-pointer space-x-3  items-center"
            >
                <span className="flex items-end">
                    <span className="bg-slate-700 h-[.1px] group-hover:bg-slate-400 group-hover:w-[80px] transition-all duration-500 cursor-pointer   w-[40px] p-[.1px]" />
                </span>{" "}
                <span className="text-slate-600 group-hover:text-slate-300 transition-all duration-500">
                    ABOUT
                </span>
            </Link>
            <Link
                href="#experience"
                className="flex group cursor-pointer space-x-3  items-center"
            >
                <span className="flex items-end">
                    <span className="bg-slate-700 h-[.1px] group-hover:bg-slate-400 group-hover:w-[80px] transition-all duration-500 cursor-pointer   w-[40px] p-[.1px]" />
                </span>{" "}
                <span className="text-slate-600 group-hover:text-slate-300 transition-all duration-500">
                    EXPERIENCE
                </span>
            </Link>
            <Link
                href="#project"
                className="flex group cursor-pointer space-x-3  items-center"
            >
                <span className="flex items-end">
                    <span className="bg-slate-700 h-[.1px] group-hover:bg-slate-400 group-hover:w-[80px] transition-all duration-500 cursor-pointer   w-[40px] p-[.1px]" />
                </span>{" "}
                <span className="text-slate-600 group-hover:text-slate-300 transition-all duration-500">
                    Project
                </span>
            </Link>
        </ul>
    );
};

export default NavLinks;
