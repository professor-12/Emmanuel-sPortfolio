import React from "react";
import CustomCursor from "./CustomCursor";
const Main = () => {
    return (
        <div id="about" className="lg:pt-[5rem]  w-full relative font-medium">
            <div className="sticky p-2 md:hidden top-0 backdrop-blur-md w-full text-2xl py-6">
                About
            </div>
            <article className=" space-y-4 text-slate-400 text-lg leading-[1.7rem]">
                <div>

                    I&apos;m a passionate and skilled developer with a focus on creating innovative web applications and SaaS solutions. As a second-year Computer Science student at Obafemi Awolowo University, I’m dedicated to continuously leveling up my skills and building impactful projects.
                    With hands-on experience in modern technologies like <span className="text-slate-100 font-semibold">Next.js, React, Astro, Typescript, and Tailwind CSS</span>.
                    <p className="mt-4">
                        I enjoy solving complex problems and delivering professional solutions. I have a knack for developing collaborative and interactive platforms, such as chat applications, project management tools, and school management systems.
                        Beyond coding, I thrive in exploring cutting-edge tools like Framer Motion and Astro, while also enjoying online games and reading in my downtime. My journey is fueled by curiosity, and I’m always eager to learn, experiment, and grow as a developer.
                    </p>
                </div>
            </article>
        </div>
    );
};

export default Main;
