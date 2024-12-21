"use client"
import Image from "next/image";
import Link from "next/link";
import { Projects } from "../../lib/Data";
import { useRouter } from "next/navigation";

const Project = () => {
    const { push } = useRouter()
    return (
        <div className="space-y-3 pt-12 overflow-hidden" id="project">
            <div className="sticky z-[20] md:hidden  p-2 top-0 backdrop-blur-md text-xl py-6">
                Project
            </div>
            {Projects.map((site) => {
                return (
                    <div onClick={() => { push(site.live_link) }} className="relative" key={site?.title}>
                        <div


                            className="flex p-4 md:px-6 cursor-pointer hover:bg-[#17274B] rounded-md justify-between gap-8 items-start"
                        >
                            <div className="lg:w-36">
                                <Image
                                    className="object-cover brightness-90 min-w-40 md:h-24 m-0 rounded ring-slate-800 ring-[1.5px]"
                                    src={
                                        site.image ? site?.image : "https://app.netlify.com/06dc8dda360a79a8ec50.webp"}
                                    alt={site?.title}
                                    width={350}
                                    height={350}
                                />
                            </div>
                            <div className="w-[80%] relative flex h-24 flex-col">
                                <h1 className="text-lg align-middle text-slate-400  font-semibold">
                                    {site?.title}
                                </h1>
                                <button onClick={(e) => { e.stopPropagation() }} className="text-sm absolute bottom-0 bg-violet-500/30 rounded-full  p-1 px-3">
                                    <Link
                                        target="_blank"
                                        href={site?.source_code ?? "https:oauife.uk"}
                                        className="text-[0.66rem]"
                                    >
                                        Source code
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </div>
                );
            })}

            <p className="text-cyan-300/80 font-semibold cursor-pointer text-right">View all Projects</p>
        </div>
    );
};

export default Project;
