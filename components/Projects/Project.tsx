// import { Projects } from "@/lib/Data";
import { getProject } from "@/lib/getProjects";
import Image from "next/image";
import Link from "next/link";

const Project = async () => {
    const project = await getProject();
    return (
        <div className="space-y-3 pt-12 overflow-hidden" id="project">
            <div className="sticky z-[20]  p-2 top-0 backdrop-blur-md text-xl py-6">
                Project
            </div>
            {project.map((site?: any) => {
                return (
                    <div className="relative" key={site.id}>
                        <Link
                            href={site?.url}
                            key={site?.url}
                            target="_blank"
                            className="flex p-4 md:px-8 hover:bg-[#17274B] rounded-md justify-between gap-8 items-start"
                        >
                            <div className="lg:w-36">
                                <Image
                                    className="object-cover min-w-32 m-0 rounded ring-slate-800 ring-[1.5px]"
                                    src={
                                        site?.screenshot_url ??
                                        "https://app.netlify.com/06dc8dda360a79a8ec50.webp"
                                    }
                                    alt={site?.name}
                                    width={350}
                                    height={350}
                                />
                            </div>
                            <div className="w-[80%]">
                                <h1 className="text-lg text-slate-400 capitalize font-semibold">
                                    {site?.name}
                                </h1>
                            </div>
                        </Link>
                        <button className="text-sm absolute right-12 bottom-0 bg-violet-500/50 rounded-full my-3 p-1 px-3">
                            <a
                                target="_blank"
                                href={site?.build_settings.repo_url ?? ""}
                                className="text-xs"
                            >
                                Source code
                            </a>
                        </button>
                    </div>
                );
            })}
        </div>
    );
};

export default Project;
