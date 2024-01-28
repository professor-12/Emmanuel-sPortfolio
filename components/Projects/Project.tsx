import Image from "next/image";
import Link from "next/link";

const Project = async () => {
    const site = [{}] as any
    return (
        <div className="space-y-3 pt-12" id="project">
            <Link
                href={site.deploy_url}
                key={site?.id}
                target="_blank"
                className="flex p-4 px-8 hover:bg-[#17274B] rounded-md justify-between gap-8 items-start"
            >
                {/*  */}
                <div className="">
                    <Image
                        className="object-cover w-32 m-0 rounded ring-2"
                        src={site.screenshot_url}
                        alt={site.name}
                        width={350}
                        height={350}
                    />
                </div>
                <div className="w-[80%]">
                    <h1 className="text-lg text-slate-400 capitalize font-semibold">
                        {site.name}
                    </h1>
                </div>
            </Link>
        </div>
    );
};

export default Project;
