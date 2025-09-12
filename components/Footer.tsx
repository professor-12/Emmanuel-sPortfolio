import { BsInstagram } from "react-icons/bs";
import { FaGithub } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import Link from "next/link"
const Footer = () => {
    return (
        <div className="flex space-x-5 lg:pt-28 p-4">
            <Link target="_blank" href={"http://www.github.com/professor-12"}>
                <FaGithub className="text-2xl text-slate-500 cursor-pointer hover:text-white" />
            </Link>
            <Link
                target="_blank"
                href={
                    "https://www.linkedin.com/in/badejo-emmanuel-890414293/"
                }
            >
                <FaTwitter className="text-2xl text-slate-500 cursor-pointer hover:text-white" />
            </Link>
            <Link
                target="_blank"
                href={
                    "https://www.linkedin.com/in/badejo-emmanuel-890414293?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                }
            >
                <IoLogoLinkedin className="text-2xl text-slate-500 cursor-pointer hover:text-white" />
            </Link>
        </div>
    );
};

export default Footer;
