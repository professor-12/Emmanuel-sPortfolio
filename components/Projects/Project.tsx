"use client"
import Image from "next/image";
import Link from "next/link";
import { Projects } from "../../lib/Data";
import { useRouter } from "next/navigation";

const Project = () => {
    const { push } = useRouter()
    return (
        <div className="space-y-3 relative  scroll-mt-20" id="project">
            <div className="sticky lg:hidden text-white z-[20] p-2 top-0 backdrop-blur-md bg-transparent text-xl py-6">
                Project
            </div>
            {Projects.map((site) => {
                return (
                    <div onClick={() => { push(site.live_link) }} className="relative" key={site?.title}>
                        <div
                            className="flex p-4 md:px-6 cursor-pointer hover:bg-[#17274B]/50 rounded-md justify-between gap-8 items-start"
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
                                <h1 className="text-[16px] align-middle text-slate-400  font-medium">
                                    {site?.title}
                                </h1>
                            </div>
                        </div>
                    </div>
                );
            })}
            <Link href="/allprojects">
                <p className="text-cyan-300/80 font-medium cursor-pointer text-right mb-6">View all Projects</p>
            </Link>
        </div>
    );
};

export default Project;
