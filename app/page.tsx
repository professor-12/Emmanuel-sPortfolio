import Experience from "@/components/Experience";
import HomePage from "@/components/HomePage";
import Main from "@/components/Main";
import Header from "@/components/Navigation/Header";
import Project from "@/components/Projects/Project";
const Home = () => {
    return (
        <div>
            <HomePage>
                <div className="md:w-[85%] mr-20 pt-12 md:pt-0 container p-3 z-20 justify-between mx-auto lg:px-12 lg:h-full items-center  lg:flex">
                    <Header />
                    <main className="md:overflow-y-auto lg:h-screen w-full lg:ml-auto lg:w-[47%] lg:mr-12  text-slate-200">
                        <Main />
                        <Experience />
                        <Project />
                    </main>
                </div>
            </HomePage>
        </div>
    );
};

export default Home;
