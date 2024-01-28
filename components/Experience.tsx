import { Poppins } from "next/font/google";

const poppins = Poppins({
    subsets: ["latin-ext"],
    weight: ["100", "200", "300", "500"],
});
const Experience = () => {
    return (
        <div
            id="experience"
            className={`${poppins.className} py-[8rem] space-y-5`}
        >
            <div className="card cursor-pointer p-6 flex justify-between gap-12 border hover:bg-teal-700/10  border-transparent hover:border-slate-800/40   rounded-lg">
                <p className="text-sm flex-auto flex font-semibold text-slate-400">
                    <span>2022</span>
                    <span className="mx-1"> - </span>
                    <span>2023</span>
                </p>
                <div>
                    <h1 className="hover:text-[#5EEAD4]  font-medium">
                        Lead Engineer . Upstatement
                    </h1>
                    <p className="text-slate-500 font-medium">
                        Junior Engineer
                    </p>
                    <p className="text-slate-500 font-semibold">Engineer</p>
                    <p className="text-[.899rem] leading-5 mt-3 text-slate-400 font-medium">
                        Deliver high-quality, robust production code for a
                        diverse array of projects for clients including Harvard
                        Business School, Everytown for Gun Safety, Pratt
                        Institute, Koala Health, Vanderbilt University, The 19th
                        News, and more. Provide leadership within engineering
                        department through close collaboration, knowledge
                        shares, and mentorship.
                    </p>
                    <div className="flex flex-wrap py-3 space-x-3">
                        <button className="bg-[#122B39] text-[#5EEAD4] p-1 px-3 rounded-full">
                            HTML
                        </button>
                        <button className="bg-[#122B39] text-[#5EEAD4] p-1 px-3 rounded-full">
                            CSS
                        </button>
                        <button className="bg-[#122B39] text-[#5EEAD4] p-1 px-3 rounded-full">
                            JS
                        </button>
                    </div>
                </div>
            </div>
            <div className="card cursor-pointer p-6 flex justify-between gap-12  border-transparent border hover:bg-teal-700/10  hover:border-slate-800/40   rounded-lg">
                <p className="text-sm flex-auto flex font-semibold text-slate-400">
                    <span>2023</span>
                    <span className="mx-1"> - </span>
                    <span>Present</span>
                </p>
                <div>
                    <h1 className="hover:text-[#5EEAD4]  font-medium">
                        Lead Engineer . Upstatement
                    </h1>
                    <p className="text-slate-500 font-medium">
                        Junior Engineer
                    </p>
                    <p className="text-slate-500 font-semibold">Engineer</p>
                    <p className="text-sm mt-3 text-slate-400 font-medium">
                        Deliver high-quality, robust production code for a
                        diverse array of projects for clients including Harvard
                        Business School, Everytown for Gun Safety, Pratt
                        Institute, Koala Health, Vanderbilt University, The 19th
                        News, and more. Provide leadership within engineering
                        department through close collaboration, knowledge
                        shares, and mentorship.
                    </p>
                    <div className="flex flex-wrap py-3 space-x-3">
                        <button className="bg-[#122B39] text-[#5EEAD4] p-1 px-3 rounded-full">
                            React
                        </button>
                        <button className="bg-[#122B39] text-[#5EEAD4] p-1 px-3 rounded-full">
                            NexJS
                        </button>
                        <button className="bg-[#122B39] text-[#5EEAD4] p-1 px-3 rounded-full">
                            Angular
                        </button>
                        <button className="bg-[#122B39] text-[#5EEAD4] p-1 px-3 rounded-full">
                            Django
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;
