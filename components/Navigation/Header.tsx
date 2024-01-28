import Footer from "../Footer";
import NavLinks from "./NavLinks";


const Header = () => {
    return (
        <div className="lg:fixed py-5">
            <div className="space-y-4 text-slate-300">
                <h1 className="md:text-5xl text-4xl font-bold ">Emmanuel Badejo</h1>
                <p className="text-xl font-semibold">
                    Lead Engineer at Upstatement
                </p>
                <p className="text-slate-500 mt-12 text-lg font-medium">
                    I build pixel-perfect, accessible products <br /> for the
                    web and beyond.
                </p>
            </div>
            <div className="md:mt-[6rem] hidden lg:flex">
                <NavLinks />
                </div>
                <div className="md:mt-[5rem]">
                     <Footer></Footer> 
                </div>
        </div>
    );
};

export default Header;
