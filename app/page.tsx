"use client"
import Experience from "@/components/Experience";
import HomePage from "@/components/HomePage";
import Main from "@/components/Main";
import Header from "@/components/Navigation/Header";
import Project from "@/components/Projects/Project";


const Home = () => {
    return (
        <div>
            <HomePage>
                <div className="w-[80%] z-20 justify-between mx-auto px-12 h-full items-center  flex">
                    <Header/>
                    <main className="overflow-y-auto h-screen  ml-auto w-[47%] mr-12  text-slate-200">
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
