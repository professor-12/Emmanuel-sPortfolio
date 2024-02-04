import React from "react";
import CustomCursor from "./CustomCursor";
const Main = () => {
   

    return (
        <div id="about" className="lg:pt-[6rem] w-full relative font-medium">
            <div className="sticky p-2 top-0 backdrop-blur-md w-full text-2xl py-6">
                About
            </div>
            <article className=" space-y-4 text-slate-500 text-lg">
                Back in 2012, I decided to try my hand at creating custom Tumblr
                themes and tumbled head first into the rabbit hole of coding and
                web development. Fast-forward to today, and I&apos;ve had the
                privilege of building software for an{" "}
                <span className="text-white">advertising agency</span>, a{" "}
                <span className="text-white ">start-up</span>,{" "}
                <span className="text-white">a student-led design studio</span>,
                and a huge corporation.
                <div>
                    My main focus these days is building products and leading
                    projects for our clients at Upstatement. In my free time
                    I&apos;ve also released an online video course that covers
                    everything you need to know to build a web app with the
                    Spotify API.
                </div>
                <div className="">
                    When I&apos;m not at the computer, I&apos;m usually rock
                    climbing, hanging out with my wife and two cats, or running
                    around Hyrule searching for <CustomCursor/>
                    
                </div>
            </article>
        </div>
    );
};

export default Main;
