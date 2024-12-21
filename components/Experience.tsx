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
            className={`${poppins.className} py-[3rem] space-y-5`}
        >
            <div className="sticky lg:hidden p-2 top-0 backdrop-blur-md text-xl py-6">
                Experience
            </div>
            <ExperienceCard title="" content="I have experience leveraging Cloudflare for optimizing web performance, ensuring security, and managing DNS. Additionally, I have a bit of knowledge in Python, utilizing it for backend development,  scalable solutions across various applications." startyear="2024" endyear="Present" technologies={["AstroJs", "Cloudfare", "Python"]} />
            <ExperienceCard title="" content="I have hands-on experience building responsive and dynamic web applications using React, Astro, and Tailwind CSS. Proficient in crafting modern UI/UX designs, optimizing performance, and implementing reusable components to deliver efficient, scalable, and visually appealing user experiences." startyear="2023" endyear="2024" technologies={["React", "Nextjs", "Typescript", "tailwind"]} />
            <ExperienceCard content=" I have a strong foundation in HTML, CSS, and JavaScript, with experience building responsive websites and dynamic user interfaces. I excel in creating semantic HTML structures, implementing custom CSS designs, and using JavaScript for interactivity. My projects showcase proficiency in DOM manipulation, API integration, and cross-browser compatibility." startyear="2022" endyear="2023" technologies={["HTML", "CSS", "Javascript"]} title="Junior Engineer" />
        </div>
    );
};

export default Experience;
