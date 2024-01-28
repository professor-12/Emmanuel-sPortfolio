import { Projects } from "@/lib/Data";
import Image from "next/image";
import Link from "next/link";

const Project = async () => {
   
    return (
        <div className="space-y-3 pt-12" id="project">
            <div className="sticky md:hidden p-2 top-0 backdrop-blur-md text-xl py-6">
                Project
            </div>
            {Projects.map((site) => {
                return (
                    site.title && (
                        <Link
                            href={site.link}
                            key={site?.link}
                            target="_blank"
                            className="flex p-4 md:px-8 hover:bg-[#17274B] rounded-md justify-between gap-8 items-start"
                        >
                            <div className="">
                                <Image
                                    className="object-cover w-32 m-0 rounded ring-1"
                                    src={site.img}
                                    alt={site.title}
                                    width={350}
                                    height={350}
                                />
                            </div>
                            <div className="w-[80%]">
                                <h1 className="text-lg text-slate-400 capitalize font-semibold">
                                    {site.title}
                                </h1>
                            </div>
                        </Link>
                    )
                );
            })}
        </div>
    );
};

export default Project;
