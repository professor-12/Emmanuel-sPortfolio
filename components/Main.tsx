import Link from "next/link";
import React from "react";
const Main = () => {
    return (
        <div
            id="about"
            className="w-full pb-12 relative font-medium scroll-mt-24"
        >
            <div className="sticky  p-2 md:hidden text-white top-0 backdrop-blur-md w-full text-2xl py-6">
                About
            </div>
            <article className="space-y-4 text-left text-slate-400 text-[16px] leading-[1.7rem]">
                <div>
                    I am a full-stack engineer with a passion for building
                    innovative web applications and SaaS solutions. As a
                    third-year Computer Science student at Obafemi Awolowo
                    University, I focus on developing scalable, maintainable,
                    and high-performance products that solve real-world
                    problems. I have hands-on experience with modern
                    technologies such as{" "}
                    <span className="text-slate-300 font-semibold">
                        Next.js, React, Astro, Node.js, and Python
                    </span>
                    , and I enjoy designing both frontend interfaces and backend
                    systems that work seamlessly together.
                    <p className="mt-4">
                        I thrive on tackling complex challenges, whether it’s
                        building collaborative platforms like chat applications
                        and project management tools or creating full-featured
                        school management systems. Beyond coding, I enjoy
                        exploring cutting-edge tools like Framer Motion and
                        Tailwind CSS to enhance user experiences, while also
                        spending time gaming and reading to recharge. My work is
                        driven by curiosity, continuous learning, and a
                        commitment to delivering impactful software solutions.
                    </p>
                </div>
            </article>
        </div>
    );
};

export default Main;
