import Link from "next/link";
import React from "react";
const Main = () => {
    return (
        <div id="about" className="w-full pb-12 relative font-medium scroll-mt-24">
            <div className="sticky  p-2 md:hidden text-white top-0 backdrop-blur-md w-full text-2xl py-6">
                About
            </div>
            <article className=" space-y-4 text-slate-400 text-[16px] leading-[1.7rem]">
                <div>

                    I&apos;m a passionate and skilled developer with a focus on creating innovative web applications and SaaS solutions. As a second-year Computer Science student at Obafemi Awolowo University, I’m dedicated to continuously leveling up my skills and building impactful projects.
                    With hands-on experience in modern technologies like <span className="text-slate-300 font-semibold">Next.js, React, Astro, Typescript, and Tailwind CSS</span>.
                    <p className="mt-4">
                        I enjoy solving complex problems and delivering professional solutions. I have a knack for developing collaborative and interactive platforms, such as chat applications, project management tools, and school management systems.
                        Beyond coding, I thrive in exploring cutting-edge tools like Framer Motion and Astro, while also enjoying online games and reading in my downtime. My journey is fueled by curiosity, and I’m always eager to learn, experiment, and grow as a developer.
                    </p>
                    <Link href={"/resume.pdf"} target='_blank' className="text-center inline-flex mt-5 text-cyan-600/80 items-center text-lg text-nowrap group hover:text-cyan-500 text-slate-400">
                        Resume <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="mr-1 h-4 w-4 rotate-[-45deg] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" aria-hidden="true"><path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clip-rule="evenodd"></path></svg>
                    </Link>
                </div>
            </article>
        </div>
    );
};

export default Main;
