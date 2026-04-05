import { Poppins } from "next/font/google";
import ExperienceCard from "./ExperienceCard";

const poppins = Poppins({
    subsets: ["latin-ext"],
    weight: ["100", "200", "300", "500"],
});
const Experience = () => {
    return (
        <div
            id="experience"
            className={`${poppins.className} space-y-5  scroll-mt-24`}
        >
            <div className="sticky lg:hidden text-white p-2 top-0 backdrop-blur-md text-xl py-6">
                Experience
            </div>
            <ExperienceCard
                title="Full-Stack Engineer"
                content="I have experience deploying and managing cloud services using Cloudflare, Docker, and CI/CD pipelines. Skilled in C#  and Java Script for backend development, creating scalable and maintainable full-stack solutions across multiple applications."
                startyear="2025"
                endyear="Present"
                technologies={["DevOps", "CI/CD", "Docker", "Google Cloud", "ASP.NET Core","Java"]}
            />

            <ExperienceCard
                title="Full-Stack Engineer"
                content="I leveraged Cloudflare for web performance optimization, security, and DNS management. Built full-stack solutions using Python and modern frontend frameworks, delivering scalable and efficient applications with seamless backend integration."
                startyear="2024"
                endyear="2025"
                technologies={["Astro", "Cloudflare", "Python", "Nest.js","C#"]}
            />

            <ExperienceCard
                title="Full-Stack Developer"
                content="Hands-on experience building responsive and dynamic web applications with React, Astro, Next.js, and Tailwind CSS. Developed both frontend and backend components, optimized performance, and implemented reusable, scalable solutions with modern UI/UX best practices."
                startyear="2023"
                endyear="2024"
                technologies={[
                    "React",
                    "Next.js",
                    "TypeScript",
                    "Tailwind CSS",
                    "Python",
                    "Django",
                ]}
            />

            <ExperienceCard
                title="Junior Full-Stack Engineer"
                content="Strong foundation in HTML, CSS, and JavaScript with full-stack development exposure. Built responsive websites and dynamic user interfaces with backend integration, API connections, and cross-browser compatibility to deliver complete web solutions."
                startyear="2022"
                endyear="2023"
                technologies={[
                    "HTML",
                    "CSS",
                    "JavaScript",
                    "Node.js",
                ]}
            />
        </div>
    );
};

export default Experience;
