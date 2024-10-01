import React from "react";
import CustomCursor from "./CustomCursor";
const Main = () => {
    return (
        <div id="about" className="lg:pt-[6rem] w-full relative font-medium">
            <div className="sticky p-2 top-0 backdrop-blur-md w-full text-2xl py-6">
                About
            </div>
            <article className=" space-y-4 text-slate-500 text-lg">
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
                    around Hyrule searching
                    <span className="flex space-x-3">
                        {" "}
                        <span>for</span> <CustomCursor />
                    </span>
                </div>
            </article>
        </div>
    );
};

export default Main;
